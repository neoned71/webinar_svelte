<script context="module">
	
	// import { Preload } from "@sapper/common";

	export const preload = async function( page, session) {
	}


	
</script>

<script>
	import {ApiUrl} from '../_utils/static_store.js';
	import { get } from 'svelte/store';

	var registerPath=get(ApiUrl);

	export let email,password;
	import {onMount} from 'svelte';

	onMount(async ()=>{
		var token = localStorage.getItem("token");
		if(token)
		{
			location.href="/dashboard";
		}
	});



export async function handleSubmit(){
	if(email && password)
	{
		// const res= await fetch('login.json',{method:'get'});
		const res = await fetch(registerPath+'/auth/register',{mode:'cors',method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});
		if(res.status==200)
		{
			console.log(res.headers);
			var token=res.headers.get('xtoken');
			localStorage.setItem("token",token);
			
			var text = await res.text();
			text = JSON.parse(text);
			// user = text.user;
			location.href = "/dashboard";
		}
		else{
			alert("Register Failed");
			console.log(res.text());
		}
		
	}
}
</script>

<style>
	h1, figure, p {
		text-align: center;
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
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>
<h3>Register for Webinar</h3>

<form on:submit|preventDefault={handleSubmit} >

	<input class="w3-input" type="text" bind:value={email} name="email" placeholder="Email Address"/>
	<input class="w3-input" type="password" bind:value={password} name="password" placeholder="Password" />

	<input class="w3-button w3-round w3-border" type="submit" value="Register now">

</form>
<hr>

Created by: <a href="https://neoned71.com">neoned71</a>
