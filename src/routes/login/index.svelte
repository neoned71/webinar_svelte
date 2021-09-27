<script context="module">
	// var user={};
	 import {ApiUrl} from '../_utils/static_store.js';
	 import {Token} from '../_utils/dynamic_store.js';
	 console.log("hello");
	 import { get } from 'svelte/store';

	 var loginPath=get(ApiUrl);
	 
	 
	// import { Preload } from "@sapper/common";

	export const preload = async function( page, session) {
		// const res = await this.fetch(loginPath+'/auth/whoami',{mode:'cors',method:'get'});
		// if(res.status==200){
		// 	try{
		// 		var data = await res.json();
		// 		console.log(data);
		// 		if(data.status == "success")
		// 		{
		// 			this.redirect(301,"/dashboard");
					
		// 		}
				
		// 	}
		// 	catch(e){
		// 		// this.error(e,data.message);
		// 		console.log(e);
		// 	}
			
			// let data = JSON.parse(text);
			
		// }
	}


	
</script>

<script>
	export let email,password;
	import {onMount} from 'svelte';

	onMount(async ()=>{
		var token = localStorage.getItem("token");
		if(token && token!= 'null')
		{
			location.href="/dashboard";
		}
	});



export async function handleSubmit(){
	if(email && password)
	{
		// const res= await fetch('login.json',{method:'get'});
		const res = await fetch(loginPath+'/auth/login',{mode:'cors',method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});
		if(res.status==200)
		{
			console.log(res.headers);
			var token=res.headers.get('xtoken');
			// alert(token);
			if(token)
			{
				localStorage.setItem("token",token);
			
				var text = await res.text();
				text = await JSON.parse(text);
				// user = text.user;
				location.href = "/dashboard";
			}
			else
			{
				console.log("no token present");
			}
			
		}
		else{
			alert("Login Failed");
			console.log(res.text());
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
		margin: 0em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
	
</style>

<svelte:head>
	<title>Seminar</title>
</svelte:head>

<h1>Seminar</h1>
<h2>Login</h2>

<form on:submit|preventDefault={handleSubmit} >

	<input type="text" bind:value={email} name="email" placeholder="email" />
	<input type="password" bind:value={password} name="password" placeholder="password" />

	<input type="submit" value="Login" >

</form>

<a href="/register">Register new user</a>

<!-- <p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.{username} {password}</strong></p> -->
<!-- <p>saasdad</p> -->


<p>created by: <a href="https://neoned71.com">neoned71</a></p>