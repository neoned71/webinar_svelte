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
	// export var roomId;
	export var room;
	// console.log(roomId);
	var isMaster,isPrimary;


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
			console.log(stream.getTracks());
			if(stream.getTracks().length>0)
			{
				initializePeer(stream);
			}
			else{
				console.log("empty stream, no tracks");
			}
		}
		catch(e){
			alert("failed to start stream")
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
			host: 'drawpad.neoned71.com',
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
	let tracks = stream.getAudioTracks();
	tracks.forEach(element => {
		element.enabled = !element.enabled;
	});
}

function toggleVideo(){
	let tracks = stream.getVideoTracks();
	tracks.forEach(element => {
		element.enabled = !element.enabled;
	});
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
	/* video{
		height:100%;
		width: 100%;
		background: white;
	} */

	


	.users{
		display: flex;
		flex-wrap: wrap;
		
	}


	.users, video{
		flex:1;
		width: 300px;
		height: 200px;
		object-fit: contain;
	}

	.masters{
		display: flex;
		flex-wrap: wrap;
		
	}
	.control{
		display:flex;
		flex-wrap: wrap;
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>
		<button on:click={toggleMic}>Mic</button>
		<button on:click={toggleVideo}>Video</button>	
		<div onContextMenu={(e) => e.preventDefault()} >
			{#if isPrimary}
				<div class="control">
					<button on:click={controlMuteAll}>Mute All</button>
					<button on:click={controlUnmuteAll}>Unmute All</button>
					<!-- <button></button> -->
				</div>
			{/if}
			{#if user}
			<div id="primary" >

			</div>
	
			<hr>
			<h2>Masters</h2>
			<div id="masters"></div>
			<hr>
			<h2>Users</h2>
			<div id="users"></div>
	
			<!-- <button class="w3-button w3-round w3-border" on:click={connectSocket}>Connect Socket</button> -->
				
			{/if}

		</div>
		
	

	<!-- <div id="video-grid"></div> -->
<hr>