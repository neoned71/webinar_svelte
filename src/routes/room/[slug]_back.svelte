<script context="module">
	console.log("hello");
	// export var user;
	var roomId;

	export async function preload(p,session) {
		let params = p.params;
		roomId = params.slug;
		console.log("slug:"+roomId);
		return {roomId};

		
	}


	
</script>

<script>
	import ImageUpload from '../_utils/imageUpload.svelte';
	import DataUpload from '../_utils/dataUpload.svelte';
	import FaceScreen from './_face_screen.svelte';
	import {onMount} from 'svelte';
	import {Token} from '../_utils/dynamic_store.js';
	import {ApiUrl} from '../_utils/static_store.js';
	import { get } from 'svelte/store';
	import { io } from "socket.io-client";
	// import * as socketFunctions from "./socketFunctions";
	// import Peer from 'peerjs';

	var loginPath=get(ApiUrl);
	var socket = null;
	var user=null;
	var myPeer;
	const peers = {};
	export var roomId;
	var room;
	console.log(roomId);
	var isMaster = false;
	
	
	
	onMount(async ()=>{
		
		console.log("mounted");
		// localStorage.setItem("token","some value");
		
		var token = localStorage.getItem("token");
		if(!token)
		{
			console.log("yes");
			// location.href="/login";
		}
		Token.set(token);


		// console.log(loginPath+'/auth/whoami');
		const res = await fetch(loginPath+'/auth/whoami',{mode:'cors',method:'get',headers:{'Authorization':'Bearer '+token}});
		if(res.status==200){
			try{
					let data= await res.text();
					data= await JSON.parse(data);
					user = data.user;

					
			}
			catch(e){
				console.log("caught");
				//this.redirect(300,"/login");
				// this.error(e,data.message);
				console.log(e);
			}
			
		}
		else{
					console.log(await res.text());
					// user.email="no logged";
					// return {user};
					// this.redirect(300,"/login");
				}
		// 

		if(user)
		{
		// console.log(loginPath+'/auth/whoami');
		const res = await fetch(loginPath+'/rooms/status/'+roomId,{mode:'cors',method:'get',headers:{'Authorization':'Bearer '+token}});
			if(res.status==200){
				try{
						let data= await res.text();
						data= await JSON.parse(data);
						room = data.data;
						
				}
				catch(e){
					console.log("caught");
					console.log(e);
				}	
			}
		}
	
	});
	

	

	async function connectSocket(){

		var token = localStorage.getItem("token");
		var uId="uId";
		
		var queryString ="room_id="+roomId;
		console.log("query: "+queryString);
		console.log("checkpoint 0");
		socket = io("", {path:"/socket.io",query:queryString,extraHeaders: {"Authorization": "Bearer "+token},transports: ['polling']});

		socket.on("connect",()=>{
			initializeSocket(socket);
		});
		
		// socket.emit('join_room', roomId, user.id);

		// console.log("user id:"+userId);
		
		try{
			var stream = await navigator.mediaDevices.getUserMedia({video: {},audio: {}});
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

	function initializePeer(stream){
		myPeer = new Peer(user.id, {
			host: 'drawpad.neoned71.com',
			port: '11001',
			secure:true,
			config: {'iceServers': [
			{ url: 'stun:stun.l.google.com:19302' },
			{ url: 'turn:drawpad.neoned71.com:3478', credential: 'neon',username:'neoned71' }
			]}
		});
		console.log(myPeer);

		myPeer.on('open', id => {
			console.log("id recieved: "+id+" userId:"+user.id);
			socket.emit('join_room', roomId, user.id);
		});

		var video = document.querySelector("#mainvideo");
		
		video.srcObject = stream;
		video.play();
		alert("stream set");


		myPeer.on('call', call => {
    // console.log("inside on call,answering with stream object... ");
    console.log("call received");
    // const video = document.createElement('video');
    var aVideo = document.createElement('video');
    call.video=aVideo;
    call.on('stream', userVideoStream => {
      console.log("stream received")
      setStreamToVideoElement(aVideo, userVideoStream);
    });

    call.on('close', () => {
      call.video.remove();
      console.log("call closed, video element removed")
    });
    call.answer(stream);
  });

 


	myPeer.on('connection',()=>{
	console.log("connection peer");
	});
}

function initializeSocket(socket)
{
	//register for all the socket events here!
	socket.on('user-connected', userId => {
		alert("inside user connected 1");
		callNewUser(userId, stream);
	});

	socket.on('user-disconnected', userId => {
		console.log("inside user disconnected 1"+userId);

	});


}


function callNewUser(userId, stream) {
  var call = myPeer.call(userId, stream);
  var mvideo = document.createElement('video');
  call.video=mvideo;
  console.log("creating a call");

  call.on('stream', userVideoStream => {
    console.log("stream recieved: "+userVideoStream);
    setStreamToVideoElement(call.video, userVideoStream);
  });
  call.on('close', () => {
    console.log("stream closed");
    call.video.remove();
  });

  peers[userId] = call;
}


function setStreamToVideoElement(video, stream) {
  console.log("adding video from stream");
  video.srcObject = stream;
  video.addEventListener('loadedmetadata', () => {
    video.play();
  });
  var videoGrid = document.getElementById('video-grid');
  videoGrid.append(video);
}

function signal(sig,args)//args => array
{
	if(socket)
	{
		socket.emit(sig,...args);
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
	video{
		height:100px;
		width: 100px;
		background: blue;
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>



	<div style="display:flex;width:100%">
		{#if user}
		USername:{user.email}

		<button class="w3-button w3-round w3-border" on:click={connectSocket}>Connect Socket</button>
			
		{/if}
		<video id="mainvideo">

		</video>
		<!-- <DataUpload class="flex" organization={user.organization} post={user.post} name={user.username} />
		<ImageUpload class="flex" avatar={user.logo} name={"logo"}/>
		<ImageUpload class="flex" avatar={user.signature} name={"signature"}/> -->
	</div>

	<div id="video-grid"></div>
<hr>