<script context="module">
	export const preload = async function( page, session) {
		// var { user } = session;
		// console.log(user);
		return { user };
	}
</script>


<script>
	// export let user;
	export let segment;
	import {ApiUrl} from '../routes/_utils/static_store.js';
	import {Token} from '../routes/_utils/dynamic_store.js';
	import { get } from 'svelte/store';

	var token=null;
	Token.subscribe(a => token=a);

	 var logoutPath=get(ApiUrl);

	async function logout(){
		console.log(token);
		const res = await fetch(logoutPath+'/auth/logout',{mode:'cors',method:'get',headers:{"Authorization":"Bearer "+token}});
		if(res.status==200)
		{
			localStorage.setItem("token","");
			location.href='/login';
		}
		
	}
	// console.log(user);
	// console.log("user");

	// async function fun(){
	// 	console.log("function");const res = await fetch('auth.json',{mode:'cors',method:'get'});
	// }
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 10px 0 0 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(28, 129, 196);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}


	.rgt{
		flex:1;
		display: flex;
		justify-content: center;
		/* justify-self: right; */
	}
	.lft{
		flex:1;
		display: flex;
		justify-content: center;

		
	}

	.nav{
		width:100%;
		display:flex;

	}

	p:hover{
		cursor: pointer;
	}
</style>

<nav class="nav">
	<div class="lft">
		
		<ul>
			<li><a aria-current="{segment === "dashboard" ? 'page' : undefined}" href=".">Dashboard</a></li>
		</ul>
	</div>
	<h2>Neoned71 Seminar</h2>

	<!-- {#if (user === undefined || user === null)} -->
	
	<div class="rgt">
		<ul>
			<li>
				<p on:click={logout}>Logout</p>
			</li>


		</ul>
	</div>
	<!-- {:else} -->
	<!-- <div class="rgt">
		<ul>
			<li>
				<a href="/login">Login</a>
			</li>
			<li>
				<a href="/register">Register</a>
			</li>


		</ul>
	</div> -->

	<!-- {/if} -->
</nav>
