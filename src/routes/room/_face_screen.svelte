<script>
	import {onMount} from 'svelte';
	import {Token} from '../_utils/dynamic_store.js';
	import {ApiUrl} from '../_utils/static_store.js';
	import { get } from 'svelte/store';
	import { io } from "socket.io-client";
	// import * as socketFunctions from "./socketFunctions";
	// import Peer from 'peerjs';

	var loginPath=get(ApiUrl);
	export var socket = null;
	export var user=null;
	var myPeer;
	const peers = {};
    var stream;

	let ended = false;

	let selectedVideoDeviceId="-";
	let selectedAudioDeviceId="-";
	let selectedMediaDeviceId="camera";

	var showMasters = false;
	var showUsers = false;

	var myMic = false;
	var myVideo = false;
	// export var roomId;
	export var room;
	// console.log(roomId);
	var isMaster,isPrimary;

	var enumeratedDevices = [];
	var enumeratedAudioDevices = [];
	var enumeratedMediaDevices = ['application' , 'browser' , 'monitor' , 'window'];


	//Map of UserId=>{screen+video}
	var userScreenVideoMap = new Map();

	
	
	
	onMount(async ()=>{	
		console.log("face screen mounted");
		if(!user || !room || !socket)
		{
			alert("something is wrong and cannot proceed");
		}
		else{
			isMaster = user.id in room.masters;
			isPrimary = (user.id == room.primary);
			connectSocket();
		}
        
		// console.log("enumeratedDevices-:");
		// console.log(enumeratedDevices);

	});

	function setVideo(userId,stream)
	{

		
		if(userId == room.primary)
		{
			var primaryDiv = document.querySelector("#primary");
			let video = createVideo(userId,stream);
			primaryDiv.append(video);

		}
		else if(userId in room.masters)
		{
			var videoGroup = document.querySelector("#masters");
			var video = document.createElement("video");
			// video.addEventListener('contextmenu', function(e) {
			// 	e.preventDefault();
			// }, false);
			video.srcObject = stream;
			video.id = userId;
			videoGroup.append(video);
			video.addEventListener('loadedmetadata', () => {
				video.play();
			});
			// video.play();
			console.log("master video set");
			userScreenVideoMap.set(userId,{stream:stream,video:userId});
		}

		else{
			var videoGroup = document.querySelector("#users");
			var video = document.createElement("video");
			// video.addEventListener('contextmenu', function(e) {
			// 	e.preventDefault();
			// }, false);
			video.srcObject = stream;
			video.id = userId;
			videoGroup.append(video);
			video.addEventListener('loadedmetadata', () => {
				video.play();
			});
			video.muted=true;
			console.log("user video set");
			userScreenVideoMap.set(userId,{stream:stream,video:userId});
		}


	}

	function createVideo(userId,stream){
		var video = document.createElement("video");
		video.srcObject = stream;
		video.id = userId;
		video.addEventListener('loadedmetadata', () => {
			video.play();
		});
		
		userScreenVideoMap.set(userId,{stream:stream,video:userId});
		return video;
	}

	function removeVideo(userId)
	{
		if(userScreenVideoMap.has(userId))
		{
			// let v = userScreenVideoMap.get(userId).video;
			if(userId != room.primary)
			{
				var video = document.querySelector("#"+userId);
				video.remove();
			}
		}
				

	}
	
	async function connectSocket(){
		try{
			stream = await navigator.mediaDevices.getUserMedia({video: {},audio: {}});
			enumeratedDevices = await enumerateVideoDevices();
			enumeratedAudioDevices = await enumerateAudioDevices();
			// enumeratedMediaDevices
			console.log(enumeratedDevices);
			selectedVideoDeviceId = enumeratedDevices[0].deviceId;
			selectedAudioDeviceId = enumeratedAudioDevices[0].deviceId;
			// stream = await navigator.mediaDevices.getUserMedia({video:{deviceId:enumeratedDevices[0].deviceId},audio:{deviceId:enumeratedAudioDevices[0].deviceId}})
			// stream = await getFullStream()
			console.log("selected video device Id:"+selectedVideoDeviceId);
			console.log("selected audio device Id:"+selectedAudioDeviceId);

			if(selectedAudioDeviceId && selectedVideoDeviceId)
			{
				// selectedVideoDeviceId = enumeratedDevices[0].deviceId;
				// await deviceChanged(null,0);
			
				console.log(stream);
				
				myMic=true;
				myVideo=true;
				initializePeer(stream);
			}
			else if(selectedAudioDeviceId)
			{
				// selectedVideoDeviceId = enumeratedDevices[0].deviceId;
				// await deviceChanged(null,1);
			
				console.log(stream);
				
				myMic=true;
				// myVideo=true;
				initializePeer(stream);
			}
			else if(selectedVideoDeviceId)
			{
				// selectedVideoDeviceId = enumeratedDevices[0].deviceId;
				await deviceChanged(null,2);
			
				// console.log(stream);
				
				// myMic=true;
				myVideo=true;
				initializePeer(stream);
			}
			else{
				console.log("empty stream, no video tracks");
			}
		}
		catch(e){
			console.log(e);
			alert(e.message);
		}
	} 

    function initializeSocket(socket)
	{
		//register for all the socket events here!
		socket.on('user-connected', userId => {
			console.log("inside user connected 1");
			
			callNewUser(userId, stream);
		});
		socket.on('master-connected', userId => {
			console.log("inside master connected 1");
			callNewUser(userId, stream);
		});
		socket.on('user-disconnected', userId => {
			document.getElementById(userScreenVideoMap.get(userId).video).remove();
			userScreenVideoMap.delete(userId);
			console.log("inside user disconnected 1"+userId);
		});

		socket.on('mute', () => {
			console.log("mute");
			muteControl(true);
			
			
		});
		socket.on('unmute', () => {
			console.log("unmute");
			muteControl(false);
			
		});
		socket.on('mute-user', data => {
			console.log("mute-user: "+data.user);
			if(userScreenVideoMap.has(data.user))
			{
				var vidElement = document.getElementById(userScreenVideoMap.get(data.user).video);
				vidElement.muted = true;
			}
		});

		socket.on('unmute-user', data => {
			if(userScreenVideoMap.has(data.user))
			{
				var vidElement = document.getElementById(userScreenVideoMap.get(data.user).video);
				vidElement.muted = false;
			}
			
			console.log("unmute user: "+data.user);
		});

		socket.on('upgrade-to-master', data => {
			console.log("upgrade to master: "+data.user);
			
			if(userScreenVideoMap.has(data.user))
			{
				var userParent = document.getElementById("users");
				var masterParent = document.getElementById("masters");
				room.masters.push(data.user);
				let v = userParent.getElementById(data.user);

				masterParent.append(v);

			}
		});

		socket.on('degrade-from-master', data => {
			console.log("degrade from master: "+data.user);

			if(userScreenVideoMap.has(data.user))
			{
				var userParent = document.getElementById("users");
				var masterParent = document.getElementById("masters");

				room.masters.splice(room.masters.indexOf(data.user),1);

				let v = masterParent.getElementById(data.user);

				userParent.append(v);

			}

		});

		socket.on('set-primary', data => {
			console.log("set primary: "+data.user);
			if(room.primary != data.user && room.masters.includes(data.user))
			{
				let oldPrimary = room.primary;//id of the previous primary
				var primaryParent = document.getElementById("primary");
				var masterParent = document.getElementById("masters");

				let oldPrimaryVideo = primaryParent.getElementById(oldPrimary);
				let newPrimaryVideo = masterParent.getElementById(newPrimary);

				primaryParent.append(newPrimaryVideo);

				masterParent.append(oldPrimaryVideo);

				if(user.id == data.user)
				{
					isPrimary =true;
				}
				else{
					false;
				}

				room.primary = data.user;
			}
			// 

			// room.primary = data.user;
		});

		//manage everything here!
		//muting and controlling videos, swap master and primary and so on...

	}

	function initializePeer(stream){
		myPeer = new Peer(user.id, {
			host: 'neoned71.com',
			port: '11001',
			secure:true,
			config: {'iceServers': [
			{ url: 'stun:stun.l.google.com:19302' },
			{ url: 'turn:drawpad.neoned71.com:3478' , credential: 'neon' , username:'neoned71' }
			]}
		});
		console.log(myPeer);

		myPeer.on('open', id => {
			console.log("id recieved: "+id+" userId:"+user.id);
			socket.emit('join_room', room.id, user.id);
		});

		//set my video element
		setVideo(user.id,stream);


		myPeer.on('call', call => {
            // console.log("inside on call,answering with stream object... ");
            console.log("call received");
            // const video = document.createElement('video');
            // var aVideo = document.createElement('video');
            // call.video=aVideo;
            call.on('stream', userVideoStream => {
                let callerId = call.peer;
                console.log("stream received by"+callerId);
				if(userScreenVideoMap.has(callerId))
				{
					var vId = userScreenVideoMap.get(callerId).video;
					document.getElementById(vId).srcObject = userVideoStream;

					console.log("already on a call so switched stream");
					return;
				}
				else{
					setVideo(callerId,userVideoStream);
				}
				

            });

            call.on('close', () => {
				removeVideo(call.peer);
            	console.log("call closed, video element removed")
            });
            call.answer(stream);
			peers[call.peer] = call;
        });

		initializeSocket(socket);

        myPeer.on('connection',()=>{
            console.log("connection peer");
            
        });
}


function callNewUser(userId, stream) {
  if(myPeer)
  {
	
    var call = myPeer.call(userId, stream);
    // var mvideo = document.createElement('video');
    // call.video=mvideo;
    console.log("creating a call");

    call.on('stream', userVideoStream => {
        let callerId = call.peer;
                console.log("stream received by"+callerId);
				if(userScreenVideoMap.has(callerId))
				{
					var vId = userScreenVideoMap.get(callerId).video;
					document.getElementById(vId).srcObject = userVideoStream;

					console.log("already on a call so switched stream");
					return;
				}
				else{
					setVideo(callerId,userVideoStream);
				}
		
    });
    call.on('close', () => {
        console.log("stream closed");
        removeVideo(call.peer);
		delete peers[userId];
    });

    peers[userId] = call;
  }
  else{
      console.log("peer not connected, sorry...");
  }
}

function controlMuteAll()//args => array
{
	if(socket)
	{
		console.log("inside controlMuteAll")
		socket.emit("control",{action:"mute-all"});
	}
	muteControl(true);
}

function controlUnmuteAll()//args => array
{
	if(socket)
	{
		socket.emit("control",{action:"unmute-all"});
	}
	muteControl(false);
}


function muteControl(mute)
{
	var container = document.getElementById("users");
			var videos = container.getElementsByTagName("video");

			for(var t of videos)
			{
				t.muted = mute;
			}

			 var container1 = document.getElementById("masters");
			 var videos1 = container1.getElementsByTagName("video");

			for(var t of videos1)
			{
				t.muted = mute;
			}
}


function toggleMic(){
	if(myMic){
		myMic = false;
		let tracks = stream.getAudioTracks();
		tracks.forEach(element => {
			element.enabled =false;
			console.log("mic false");
		});
	}
	else
	{
		myMic = true;
		let tracks = stream.getAudioTracks();
		tracks.forEach(element => {
			element.enabled =true;
			console.log("mic true");
		});
	}
	
}

function toggleVideo(){
	if(myVideo){
		myVideo = false;
		let tracks = stream.getVideoTracks();
		tracks.forEach(element => {
			element.enabled =false;
			console.log("video false");
		});
	}
	else
	{
		myVideo = true;
		let tracks = stream.getVideoTracks();
		tracks.forEach(element => {
			element.enabled =true;
			console.log("video true");
		});
	}
}

function toggleUsers(){
	showUsers = !showUsers;
}

function toggleMasters(){
	showMasters = !showMasters;
}

function toggleChat(){
	return 0;
}

async function endClass(){
	var token = localStorage.getItem("token");
	var res = await fetch(loginPath+'/rooms/end_room',{mode:'cors',method:'get',headers:{'Authorization':'Bearer '+token}});
		if(res.status==200){
			try{
					let data= await res.text();
					data= await JSON.parse(data);
					if(data.status == "success")
					{
						ended = true;
						alert("Room ended!");
						location.href= "/dashboard";
					}
					else
					{
						alert("Failed to end the room!");
					}
			}
			catch(e){
				console.log("caught");
				console.log(e.message);
			}
			
		}
		else{
					console.log(await res.text());
				}
}


async function startCaptureDisplay(displayMediaOptions) {
  let captureStream = null;

  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch(err) {
    console.error("Error: " + err);
  }
  return captureStream;
}



/////////Devices operations and screen sharing setup


// Listen for changes to media devices and update the list accordingly
navigator.mediaDevices.addEventListener('devicechange', async event => {
	console.log("device changed");
    enumeratedDevices = await getConnectedDevices('video');
	console.log(enumeratedDevices);
    // updateCameraList(newCameraList);
});

// Fetch an array of devices of a certain type
async function getConnectedDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
}


function enumerateVideoDevices(){
	return getConnectedDevices('videoinput');
}

function enumerateAudioDevices(){
	return getConnectedDevices('audioinput');
}

// async function videoDeviceChanged(e){
// 	console.log(e);
	
// 	console.log("switching devices");
// 	let str = await getFullStream(selectedAudioDeviceId,selectedVideoDeviceId);
// 	let peerIds = Object.keys(peers);
// 	for(let peer of peerIds)
// 	{
// 		console.log("looping switching devices");
// 		replaceStream(peers[peer].peerConnection,str);
// 	}

// 	if(userScreenVideoMap.has(user.id)){
// 		console.log("switching self device stream");
// 		var video = document.getElementById(user.id);
// 		video.srcObject = str;
// 	}

// 	stream = str;
// }

async function deviceChanged(e,type=0){
	console.log(e);
	// let deviceId = selectedAudioDeviceId;
	try{
		console.log("switching device");
		stream.getAudioTracks().forEach(element =>{
			element.stop();
			console.log(element);
			console.log("stopping audio tracks");
		});
		if(type==0)
		{
			stream = await getFullStream(selectedAudioDeviceId,selectedVideoDeviceId);
		}
		else if(type==1)
		{
			stream = await getAudioStream(selectedAudioDeviceId);
		}
		else if(type==2)
		{
			stream = await getVideoStream(selectedVideoDeviceId);
		}
		else
		{
			console.log(
				"called wihout a type!! blunder"
			);
		}
		let peerIds = Object.keys(peers);
		for(let peer of peerIds)
		{
			console.log("looping peer audio devices");
			replaceAudioStream(peers[peer].peerConnection,stream);
		}
		if(userScreenVideoMap.has(user.id)){
			console.log("switching self device stream");
			var video = document.getElementById(user.id);
			video.srcObject = stream;
		}
		
		// stream = str;
	}
	catch(e){
		console.log(e.message);
	}
}


async function deviceChangeToAndFromMedia(e){
	console.log(e);
	// let deviceId = selectedAudioDeviceId;
	if(selectedMediaDeviceId == "camera")
	{
		deviceChanged(null,0);
	}
	else{
		try{
		console.log("switching to Media device");
		
		stream = await getDisplayMediaStream(selectedMediaDeviceId);
		let peerIds = Object.keys(peers);
		for(let peer of peerIds)
		{
			console.log("looping peer video tracks");
			replaceVideoStream(peers[peer].peerConnection,stream);
		}
		if(userScreenVideoMap.has(user.id)){
			console.log("switching self device stream");
			var video = document.getElementById(user.id);
			video.srcObject = stream;
		}
		
		// stream = str;
		}
		catch(e){
			console.log(e.message);
		}
	}
	
}

async function deviceChangefromMedia(e){
	console.log(e);
	// let deviceId = selectedAudioDeviceId;
	
	try{
		console.log("switching to Media device");
		
		stream = await getDisplayMediaStream(selectedMediaDeviceId);
		let peerIds = Object.keys(peers);
		for(let peer of peerIds)
		{
			console.log("looping peer video tracks");
			replaceVideoStream(peers[peer].peerConnection,stream);
		}
		if(userScreenVideoMap.has(user.id)){
			console.log("switching self device stream");
			var video = document.getElementById(user.id);
			video.srcObject = stream;
		}
		
		// stream = str;
	}
	catch(e){
		console.log(e.message);
	}
}


// get new media stream
async function getDisplayMediaStream(display) {
    const constraints = {
    video: {
        cursor: 'always',
        displaySurface: display
    }
}

    return await navigator.mediaDevices.getDisplayMedia(constraints);
}

// get new audio stream
async function getFullStream(audioId,videoId) {
	// if()
    const constraints = {
        'audio': {'echoCancellation': true,'deviceId':audioId},
        'video': {'deviceId':videoId}
        }
    return await navigator.mediaDevices.getUserMedia(constraints);
}

// get new audio stream
async function getAudioStream(audioId) {
    const constraints = {
        'audio': {'echoCancellation': true,'deviceId':audioId},
        'video': false
        }
    return await navigator.mediaDevices.getUserMedia(constraints);
}

// get new video stream
async function getVideoStream(videoId) {
    const constraints = {
        'audio': false,
        'video': {'deviceId':videoId}
        }
    return await navigator.mediaDevices.getUserMedia(constraints);
}

function replaceAllStream(peerConnection, mediaStream) {
	console.log("replacing stream devices");
	for(sender of peerConnection.getSenders()){
		if(sender.track.kind == "audio") {
			if(mediaStream.getAudioTracks().length > 0){
				sender.replaceTrack(mediaStream.getAudioTracks()[0]);
			}
		}
		if(sender.track.kind == "video") {
			if(mediaStream.getVideoTracks().length > 0){
				sender.replaceTrack(mediaStream.getVideoTracks()[0]);
			}
		}
	}
}

function replaceVideoStream(peerConnection, mediaStream) {
	console.log("replacing stream devices");
	for(sender of peerConnection.getSenders()){
		if(sender.track.kind == "video") {
			if(mediaStream.getVideoTracks().length > 0){
				sender.replaceTrack(mediaStream.getVideoTracks()[0]);
			}
		}
	}
}

function replaceAudioStream(peerConnection, mediaStream) {
	console.log("replacing stream devices");
	for(sender of peerConnection.getSenders()){
		if(sender.track.kind == "audio") {
			if(mediaStream.getAudioTracks().length > 0){
				sender.replaceTrack(mediaStream.getAudioTracks()[0]);
			}
		}
	}
}


</script>
<style>
	h1, figure, p {
		text-align: left;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	.flex{
		flex:1;
	}
	
	

	

	

	.control{
		display:flex;
		flex-wrap: wrap;
	}

	.topbar{
		display:flex;
		flex-direction:row;
		justify-content:center;
		width:100%;
		/* height:200px; */
		position:fixed;
		top:0px;
		left:0px;
		background:black;
		opacity:0.7;
		z-index:10;

	}

	@media (max-width:800px){
		.topbar{
			flex-direction:column
		}

		.primary_controls{
			margin-left:0;
		}
	}

	.main{
		margin:0;
		padding:2%;
		background:black;
		width:100%;
		height:100vh;

	}

	.primary_controls{
		display:flex;
		/* margin-top:auto; */
		/* margin-bottom:auto; */
		margin-left:auto;
	}

	.normal_controls{
		display:flex;
		/* margin-left:auto; */
	}

	#primary video{
		height: 100%;
		width: 100%;
	
	}
	
	#primary {
		height: 80vh;
		width: 100%;
		display:flex;
		align-content: center;
		justify-content: center;
		/* background:red; */
	}
	button{
		color:white
	}
	
	#masters_container {
		position:fixed;
		height:100%;
		width:auto;
		right:0;
		top:0;

	}
	#users_container{
		position:fixed;
		width:100%;
		height:auto;
		bottom:0;
		left:0;
	}

	#masters{
		display: flex;
		overflow-y:scroll;
		/* flex-wrap: wrap; */
		flex-direction:column;
		
	}
	.users_video{
		height:100px;
		width:auto;
		object-fit:fill;
	}
	.masters_video{
		height:150px;
		width:auto;
		object-fit:fill;
	}
	#users{
		display: flex;
		overflow-x:scroll;
		/* flex-wrap: wrap; */
		flex-direction:row;
		
	}
	button{
		font-size: small;
	}
	select{
		width:100px;
		height:50px;
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>
<div class="topbar w3-card">
	<p>Webinar</p>
	<div class="normal_controls">
		{#if myMic}
			<button class="w3-button" on:click={toggleMic}><i class="fas fa-microphone"></i></button>
		{:else}
			<button class="w3-button" on:click={toggleMic}><i class="fas fa-microphone-slash"></i></button>
		{/if}

		{#if myVideo}
			<button class="w3-button" on:click={toggleVideo}><i class="fas fa-video"></i></button>
		{:else}
			<button class="w3-button" on:click={toggleVideo}><i class="fas fa-video-slash"></i></button>
		{/if}

		{#if !showUsers}
			<button class="w3-button" on:click={toggleUsers}>Show Users</button>
		{:else}
			<button class="w3-button" on:click={toggleUsers}>Hide Users</button>
		{/if}
		<!-- <button class="w3-button" on:click={}></button> -->

		{#if !showMasters}
			<button class="w3-button" on:click={toggleMasters}>Show Masters</button>
		{:else}
			<button class="w3-button" on:click={toggleMasters}>Hide Masters</button>
		{/if}
		<!-- <button class="w3-button" on:click={toggleMasters}>Show Masters</button> -->

		<button class="w3-button" on:click={toggleChat}>Toggle Chat</button>

		
	</div>
	
	{#if enumeratedDevices}
		<select class="w3-black w3-round w3-select w3-input w3-padding w3-opacity" bind:value={selectedVideoDeviceId}>
			<option value="-">Select Camera</option>
			{#each enumeratedDevices as device, i}
				<option value={device.deviceId}>{device.label || "camera "+(i+1)}</option>
			{/each}
		</select>
	{/if}

	{#if enumeratedAudioDevices}
		<select class="w3-black w3-round w3-select w3-input w3-padding w3-opacity" bind:value={selectedAudioDeviceId} >
			<option value="-">Select Audio Device</option>
			{#each enumeratedAudioDevices as device, i}
				<option value={device.deviceId}>{device.label || "audio "+(i+1)}</option>
			{/each}
		</select>
	{/if}
	{#if enumeratedAudioDevices || enumeratedDevices}
		<button class="w3-button w3-green w3-margin" on:click={deviceChanged}>Apply!</button>
	{/if}
	
	
	{#if isPrimary}

	
					<div class="primary_controls">
						<p>Master controls</p>
						{#if enumeratedMediaDevices}
							<select class="w3-black w3-round w3-select w3-input w3-padding w3-opacity" bind:value={selectedMediaDeviceId} on:change={deviceChangeToAndFromMedia} >
								<option value="camera">Camera</option>
								{#each enumeratedMediaDevices as device, i}
									<option value={device}>{device}</option>
								{/each}
							</select>
						{/if}
						<button class="w3-button" on:click={controlMuteAll}>Mute All</button>
						<button class="w3-button" on:click={controlUnmuteAll}>Unmute All</button>
						<!-- <button></button> -->
						<button class="w3-button w3-red" on:click={endClass}>End class</button>

					</div>
					
			{/if}
</div>
			
		<div class="main">
			
			{#if user}
			<div id="primary" class="w3-center" >

			</div>
	
			<!-- <hr> -->
			<div id="masters_container" style="display:{showMasters?"block":"none"}">
				<h2>Masters</h2>
				<div id="masters" class="masters_video"></div>
			</div>
			
			<!-- <hr> -->

			<div id="users_container" style="display:{showUsers?"block":"none"}">
				<h2>Users</h2>
				<div id="users" class="users_video"></div>
			</div>
			
	
			<!-- <button class="w3-button w3-round w3-border" on:click={connectSocket}>Connect Socket</button> -->
				
			{/if}

		</div>
	
