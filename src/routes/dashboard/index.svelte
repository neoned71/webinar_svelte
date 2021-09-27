<script context="module">
	 console.log("hello");
	 

	var user =null;
	export const preload = async function( page, session) {	
	}


	
</script>

<script>
	import ImageUpload from '../_utils/imageUpload.svelte';
	import DataUpload from '../_utils/dataUpload.svelte';
	import {onMount} from 'svelte';
	import {Token} from '../_utils/dynamic_store.js';
	import {ApiUrl} from '../_utils/static_store.js';
	import { get } from 'svelte/store';
// import { roomId } from '../room/[slug].svelte';
	// export var roomId;
	 var loginPath=get(ApiUrl);
	
	
	export var user;
	onMount(async ()=>{
		
		console.log("mounted");
		// localStorage.setItem("token","some value");
		
		var token = localStorage.getItem("token");
		if(!token)
		{
			console.log("yes");
			location.href="/login";
		}
		Token.set(token);


		// console.log(loginPath+'/auth/whoami');
		const res = await fetch(loginPath+'/auth/whoami',{mode:'cors',method:'get',headers:{'Authorization':'Bearer '+token}});
		if(res.status==200){
			try{
					let data= await res.text();
					// console.log(data);
					data= await JSON.parse(data);
					user = data.user;
					// alert(JSON.stringify(user));
					// console.log(user);
					
			}
			catch(e){
				console.log("caught");
				//this.redirect(300,"/login");
				// this.error(e,data.message);
				console.log(e);
			}
			finally{
				// return { user };
			}
			
			// let data = JSON.parse(text);
			
		}
		else{
					console.log(await res.text());
					user.email="no logged";
					// return {user};
					// this.redirect(300,"/login");
				}
		// 
	})
	

	async function createRoom(){

		var token = localStorage.getItem("token");
		// alert(token);
		const res = await fetch(loginPath+'/rooms/create/',{mode:'cors',method:'get',headers:{'Authorization':'Bearer '+token}});
		if(res.status==200){
			try{
					let data= await res.text();
					console.log(data);
					data= await JSON.parse(data);
					var roomId = data.room_id;
					alert(roomId);
					location.href="./room/"+roomId;
					// console.log(user);
					
			}
			catch(e){
				console.log("caught");
				//this.redirect(300,"/login");
				// this.error(e,data.message);
				console.log(e);
			}
			finally{
				// return { user };
			}
			
			// let data = JSON.parse(text);
			
		}
		else{
					console.log(await res.text());
					// user.email="failed";
					// return {user};
					// this.redirect(300,"/login");
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
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>



	<div style="display:flex;width:100%">
		{#if user}
		USername:{user.email}

		<button class="w3-button w3-round w3-border" on:click={createRoom}>Create room</button>
			
		{/if}
		<!-- <DataUpload class="flex" organization={user.organization} post={user.post} name={user.username} />
		<ImageUpload class="flex" avatar={user.logo} name={"logo"}/>
		<ImageUpload class="flex" avatar={user.signature} name={"signature"}/> -->
	</div>
<hr>