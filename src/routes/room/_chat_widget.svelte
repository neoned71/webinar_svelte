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
    var chatText ="";
	var chats= [];

	onMount(async ()=>{	
		console.log("chat widget mounted");
        if(socket)
        {
            initializeSocket();
        }
	});

    function initializeSocket()
    {
        socket.on('chat', data => {
            console.log(data);
			if(data.action=="new"){
				chats.push = data.data;
			}
		});
    }

    function sendChat(){
        if(chatText!="")
        {
            var data = {action:"insert"};
            console.log("sending chat");
            console.log(user);
            data.data = {name:user.name,chat:chatText}
            socket.emit('chat',data);
        } 
    }

</script>
<style>
	.chat-input{
		position:absolute;
        z-index: 1;
        bottom:0;
        width:100%;


	}
    .flex{
        display: flex;
        flex-direction: row;
    }
</style>

{#if chats }
<div>
    <ul>
        <li>
            <div class="name">
                chat.name
            </div>
            <div class="chat">chat.chat</div>
            <hr>
        </li>
        {#each chats as chat}
        <li>
            <div class="name">
                {chat.name}
            </div>
            <div class="chat">{chat.chat}</div>
            <hr>
        </li>
        {/each}
        
    </ul>
</div>
<div class="chat-input">
    <div class="flex">
        <input bind:value={chatText} type="text" />
        <button on:click={sendChat}>Send</button>
    </div>
</div>
{/if}		
	
