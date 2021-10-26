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
	var initializedSocket=false;
	
	
	
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
		var res = await fetch(loginPath+'/auth/whoami',{mode:'cors',method:'get',headers:{'Authorization':'Bearer '+token}});
		if(res.status==200){
			try{
					let data= await res.text();
					data= await JSON.parse(data);
					user = data.user;
					if(user)
					{
					// console.log(loginPath+'/auth/whoami');
					res = await fetch(loginPath+'/rooms/status/'+roomId,{mode:'cors',method:'get',headers:{'Authorization':'Bearer '+token}});
						if(res.status==200){
							try{
									data= await res.text();
									// alert(data);
									data= await JSON.parse(data);
									if(data.status=="success")
									{
										room = data.data;
										connectSocket();
									}
									else{
										alert("Sorry no room found");
									}
									
							}
							catch(e){
								console.log("caught");
								console.log(e);
							}	
						}
					}
					
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
	});
	

	

	async function connectSocket(){
		var token = localStorage.getItem("token");
		var uId="uId";

		var queryString ="room_id="+roomId+"&token="+token;
		console.log("query: "+queryString);
		console.log("checkpoint 0");
		// socket = io("wss://127.0.0.1:12002", {path:"/socket.io",query:queryString,extraHeaders: {"Authorization": "Bearer "+token},transports: ['websocket'],upgrade:true});
		socket = io("wss://webinar.neoned71.com:12002", {path:"/socket.io",query:queryString,extraHeaders: {"Authorization": "Bearer "+token},transports: ['websocket'],upgrade:true});

		socket.on("connect",()=>{
			console.log("connected")
			//initializeSocket(socket);
			initializeScreens();
		});
	}


	function initializeScreens()
	{
		console.log(user);
		console.log(room);
		console.log(socket);
		initializedSocket = true;
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
		
		<!-- <button class="w3-button w3-round w3-border" on:click={connectSocket}>Connect Socket</button> -->
		{#if initializedSocket}
			<FaceScreen socket={socket} user={user} room={room} roomId={roomId} />
		{/if}
		
		<!-- <DataUpload class="flex" organization={user.organization} post={user.post} name={user.username} />
		<ImageUpload class="flex" avatar={user.logo} name={"logo"}/>
		<ImageUpload class="flex" avatar={user.signature} name={"signature"}/> -->
		
	</div>

	<div id="video-grid"></div>
<hr>
