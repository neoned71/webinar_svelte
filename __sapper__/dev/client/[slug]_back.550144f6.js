import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as globals, v as validate_slots, I as get_store_value, J as onMount, T as Token, K as ApiUrl, t as text, a as space, e as element, h as claim_text, c as claim_space, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_hydration_dev, m as append_hydration_dev, A as listen_dev, u as set_data_dev, q as query_selector_all, F as set_style, n as noop } from './client.ef9cec48.js';
import { I as ImageUpload, D as DataUpload } from './dataUpload.38ca7997.js';
import { F as Face_screen, b as build } from './_face_screen.766490aa.js';

/* src/routes/room/[slug]_back.svelte generated by Svelte v3.42.4 */

const { console: console_1, document: document_1 } = globals;
const file = "src/routes/room/[slug]_back.svelte";

// (296:2) {#if user}
function create_if_block(ctx) {
	let t0;
	let t1_value = /*user*/ ctx[0].email + "";
	let t1;
	let t2;
	let button;
	let t3;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			t0 = text("USername:");
			t1 = text(t1_value);
			t2 = space();
			button = element("button");
			t3 = text("Connect Socket");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "USername:");
			t1 = claim_text(nodes, t1_value);
			t2 = claim_space(nodes);
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t3 = claim_text(button_nodes, "Connect Socket");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "w3-button w3-round w3-border");
			add_location(button, file, 298, 2, 5945);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, t1, anchor);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, button, anchor);
			append_hydration_dev(button, t3);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*connectSocket*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*user*/ 1 && t1_value !== (t1_value = /*user*/ ctx[0].email + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(296:2) {#if user}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div0;
	let t1;
	let video;
	let t2;
	let div1;
	let t3;
	let hr;
	let if_block = /*user*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			div0 = element("div");
			if (if_block) if_block.c();
			t1 = space();
			video = element("video");
			t2 = space();
			div1 = element("div");
			t3 = space();
			hr = element("hr");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-oh6yg0\"]', document_1.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div0 = claim_element(nodes, "DIV", { style: true });
			var div0_nodes = children(div0);
			if (if_block) if_block.l(div0_nodes);
			t1 = claim_space(div0_nodes);
			video = claim_element(div0_nodes, "VIDEO", { id: true, class: true });
			var video_nodes = children(video);
			video_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { id: true });
			children(div1).forEach(detach_dev);
			t3 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			this.h();
		},
		h: function hydrate() {
			document_1.title = "Sapper project template";
			attr_dev(video, "id", "mainvideo");
			attr_dev(video, "class", "svelte-icjt7");
			add_location(video, file, 301, 2, 6053);
			set_style(div0, "display", "flex");
			set_style(div0, "width", "100%");
			add_location(div0, file, 294, 1, 5867);
			attr_dev(div1, "id", "video-grid");
			add_location(div1, file, 309, 1, 6344);
			add_location(hr, file, 310, 0, 6372);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div0, anchor);
			if (if_block) if_block.m(div0, null);
			append_hydration_dev(div0, t1);
			append_hydration_dev(div0, video);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, div1, anchor);
			insert_hydration_dev(target, t3, anchor);
			insert_hydration_dev(target, hr, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (/*user*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div0, t1);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div0);
			if (if_block) if_block.d();
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(hr);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

console.log("hello");

// export var user;
var roomId;

async function preload(p, session) {
	let params = p.params;
	roomId = params.slug;
	console.log("slug:" + roomId);
	return { roomId };
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('U5Bslugu5D_back', slots, []);
	var loginPath = get_store_value(ApiUrl);
	var socket = null;
	var user = null;
	var myPeer;
	const peers = {};
	let { roomId } = $$props;
	var room;
	console.log(roomId);
	var isMaster = false;

	onMount(async () => {
		console.log("mounted");

		// localStorage.setItem("token","some value");
		var token = localStorage.getItem("token");

		if (!token) {
			console.log("yes");
		} // location.href="/login";

		Token.set(token);

		// console.log(loginPath+'/auth/whoami');
		const res = await fetch(loginPath + '/auth/whoami', {
			mode: 'cors',
			method: 'get',
			headers: { 'Authorization': 'Bearer ' + token }
		});

		if (res.status == 200) {
			try {
				let data = await res.text();
				data = await JSON.parse(data);
				$$invalidate(0, user = data.user);
			} catch(e) {
				console.log("caught");

				//this.redirect(300,"/login");
				// this.error(e,data.message);
				console.log(e);
			}
		} else {
			console.log(await res.text());
		} // user.email="no logged";
		// return {user};

		// this.redirect(300,"/login");
		// 
		if (user) {
			// console.log(loginPath+'/auth/whoami');
			const res = await fetch(loginPath + '/rooms/status/' + roomId, {
				mode: 'cors',
				method: 'get',
				headers: { 'Authorization': 'Bearer ' + token }
			});

			if (res.status == 200) {
				try {
					let data = await res.text();
					data = await JSON.parse(data);
					room = data.data;
				} catch(e) {
					console.log("caught");
					console.log(e);
				}
			}
		}
	});

	async function connectSocket() {
		var token = localStorage.getItem("token");
		var queryString = "room_id=" + roomId;
		console.log("query: " + queryString);
		console.log("checkpoint 0");

		socket = build.io("", {
			path: "/socket.io",
			query: queryString,
			extraHeaders: { "Authorization": "Bearer " + token },
			transports: ['polling']
		});

		socket.on("connect", () => {
			initializeSocket(socket);
		});

		// socket.emit('join_room', roomId, user.id);
		// console.log("user id:"+userId);
		try {
			var stream = await navigator.mediaDevices.getUserMedia({ video: {}, audio: {} });
			console.log(stream.getTracks());

			if (stream.getTracks().length > 0) {
				initializePeer(stream);
			} else {
				console.log("empty stream, no tracks");
			}
		} catch(e) {
			alert("failed to start stream");
		}
	}

	function initializePeer(stream) {
		myPeer = new Peer(user.id,
		{
				host: 'drawpad.neoned71.com',
				port: '11001',
				secure: true,
				config: {
					'iceServers': [
						{ url: 'stun:stun.l.google.com:19302' },
						{
							url: 'turn:drawpad.neoned71.com:3478',
							credential: 'neon',
							username: 'neoned71'
						}
					]
				}
			});

		console.log(myPeer);

		myPeer.on('open', id => {
			console.log("id recieved: " + id + " userId:" + user.id);
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

			call.video = aVideo;

			call.on('stream', userVideoStream => {
				console.log("stream received");
				setStreamToVideoElement(aVideo, userVideoStream);
			});

			call.on('close', () => {
				call.video.remove();
				console.log("call closed, video element removed");
			});

			call.answer(stream);
		});

		myPeer.on('connection', () => {
			console.log("connection peer");
		});
	}

	function initializeSocket(socket) {
		//register for all the socket events here!
		socket.on('user-connected', userId => {
			alert("inside user connected 1");
			callNewUser(userId, stream);
		});

		socket.on('user-disconnected', userId => {
			console.log("inside user disconnected 1" + userId);
		});
	}

	function callNewUser(userId, stream) {
		var call = myPeer.call(userId, stream);
		var mvideo = document.createElement('video');
		call.video = mvideo;
		console.log("creating a call");

		call.on('stream', userVideoStream => {
			console.log("stream recieved: " + userVideoStream);
			setStreamToVideoElement(call.video, userVideoStream);
		});

		call.on('close', () => {
			console.log("stream closed");
			call.video.remove();
		});

		peers[userId] = call;
	}

	function signal(sig, args) {
		if (socket) {
			socket.emit(sig, ...args); //args => array
		}
	}

	const writable_props = ['roomId'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<U5Bslugu5D_back> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('roomId' in $$props) $$invalidate(2, roomId = $$props.roomId);
	};

	$$self.$capture_state = () => ({
		roomId,
		preload,
		ImageUpload,
		DataUpload,
		FaceScreen: Face_screen,
		onMount,
		Token,
		ApiUrl,
		get: get_store_value,
		io: build.io,
		loginPath,
		socket,
		user,
		myPeer,
		peers,
		roomId,
		room,
		isMaster,
		connectSocket,
		initializePeer,
		initializeSocket,
		callNewUser,
		setStreamToVideoElement,
		signal
	});

	$$self.$inject_state = $$props => {
		if ('loginPath' in $$props) loginPath = $$props.loginPath;
		if ('socket' in $$props) socket = $$props.socket;
		if ('user' in $$props) $$invalidate(0, user = $$props.user);
		if ('myPeer' in $$props) myPeer = $$props.myPeer;
		if ('roomId' in $$props) $$invalidate(2, roomId = $$props.roomId);
		if ('room' in $$props) room = $$props.room;
		if ('isMaster' in $$props) isMaster = $$props.isMaster;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [user, connectSocket, roomId];
}

class U5Bslugu5D_back extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { roomId: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D_back",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*roomId*/ ctx[2] === undefined && !('roomId' in props)) {
			console_1.warn("<U5Bslugu5D_back> was created without expected prop 'roomId'");
		}
	}

	get roomId() {
		throw new Error("<U5Bslugu5D_back>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set roomId(value) {
		throw new Error("<U5Bslugu5D_back>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { U5Bslugu5D_back as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddX2JhY2suNTUwMTQ0ZjYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcm9vbS9bc2x1Z11fYmFjay5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG5cdC8vIGV4cG9ydCB2YXIgdXNlcjtcblx0dmFyIHJvb21JZDtcblxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwLHNlc3Npb24pIHtcblx0XHRsZXQgcGFyYW1zID0gcC5wYXJhbXM7XG5cdFx0cm9vbUlkID0gcGFyYW1zLnNsdWc7XG5cdFx0Y29uc29sZS5sb2coXCJzbHVnOlwiK3Jvb21JZCk7XG5cdFx0cmV0dXJuIHtyb29tSWR9O1xuXG5cdFx0XG5cdH1cblxuXG5cdFxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICcuLi9fdXRpbHMvaW1hZ2VVcGxvYWQuc3ZlbHRlJztcblx0aW1wb3J0IERhdGFVcGxvYWQgZnJvbSAnLi4vX3V0aWxzL2RhdGFVcGxvYWQuc3ZlbHRlJztcblx0aW1wb3J0IEZhY2VTY3JlZW4gZnJvbSAnLi9fZmFjZV9zY3JlZW4uc3ZlbHRlJztcblx0aW1wb3J0IHtvbk1vdW50fSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQge1Rva2VufSBmcm9tICcuLi9fdXRpbHMvZHluYW1pY19zdG9yZS5qcyc7XG5cdGltcG9ydCB7QXBpVXJsfSBmcm9tICcuLi9fdXRpbHMvc3RhdGljX3N0b3JlLmpzJztcblx0aW1wb3J0IHsgZ2V0IH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblx0aW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXHQvLyBpbXBvcnQgKiBhcyBzb2NrZXRGdW5jdGlvbnMgZnJvbSBcIi4vc29ja2V0RnVuY3Rpb25zXCI7XG5cdC8vIGltcG9ydCBQZWVyIGZyb20gJ3BlZXJqcyc7XG5cblx0dmFyIGxvZ2luUGF0aD1nZXQoQXBpVXJsKTtcblx0dmFyIHNvY2tldCA9IG51bGw7XG5cdHZhciB1c2VyPW51bGw7XG5cdHZhciBteVBlZXI7XG5cdGNvbnN0IHBlZXJzID0ge307XG5cdGV4cG9ydCB2YXIgcm9vbUlkO1xuXHR2YXIgcm9vbTtcblx0Y29uc29sZS5sb2cocm9vbUlkKTtcblx0dmFyIGlzTWFzdGVyID0gZmFsc2U7XG5cdFxuXHRcblx0XG5cdG9uTW91bnQoYXN5bmMgKCk9Pntcblx0XHRcblx0XHRjb25zb2xlLmxvZyhcIm1vdW50ZWRcIik7XG5cdFx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLFwic29tZSB2YWx1ZVwiKTtcblx0XHRcblx0XHR2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuXHRcdGlmKCF0b2tlbilcblx0XHR7XG5cdFx0XHRjb25zb2xlLmxvZyhcInllc1wiKTtcblx0XHRcdC8vIGxvY2F0aW9uLmhyZWY9XCIvbG9naW5cIjtcblx0XHR9XG5cdFx0VG9rZW4uc2V0KHRva2VuKTtcblxuXG5cdFx0Ly8gY29uc29sZS5sb2cobG9naW5QYXRoKycvYXV0aC93aG9hbWknKTtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChsb2dpblBhdGgrJy9hdXRoL3dob2FtaScse21vZGU6J2NvcnMnLG1ldGhvZDonZ2V0JyxoZWFkZXJzOnsnQXV0aG9yaXphdGlvbic6J0JlYXJlciAnK3Rva2VufX0pO1xuXHRcdGlmKHJlcy5zdGF0dXM9PTIwMCl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdFx0bGV0IGRhdGE9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0XHRcdFx0ZGF0YT0gYXdhaXQgSlNPTi5wYXJzZShkYXRhKTtcblx0XHRcdFx0XHR1c2VyID0gZGF0YS51c2VyO1xuXG5cdFx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRjYXRjaChlKXtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJjYXVnaHRcIik7XG5cdFx0XHRcdC8vdGhpcy5yZWRpcmVjdCgzMDAsXCIvbG9naW5cIik7XG5cdFx0XHRcdC8vIHRoaXMuZXJyb3IoZSxkYXRhLm1lc3NhZ2UpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGF3YWl0IHJlcy50ZXh0KCkpO1xuXHRcdFx0XHRcdC8vIHVzZXIuZW1haWw9XCJubyBsb2dnZWRcIjtcblx0XHRcdFx0XHQvLyByZXR1cm4ge3VzZXJ9O1xuXHRcdFx0XHRcdC8vIHRoaXMucmVkaXJlY3QoMzAwLFwiL2xvZ2luXCIpO1xuXHRcdFx0XHR9XG5cdFx0Ly8gXG5cblx0XHRpZih1c2VyKVxuXHRcdHtcblx0XHQvLyBjb25zb2xlLmxvZyhsb2dpblBhdGgrJy9hdXRoL3dob2FtaScpO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGxvZ2luUGF0aCsnL3Jvb21zL3N0YXR1cy8nK3Jvb21JZCx7bW9kZTonY29ycycsbWV0aG9kOidnZXQnLGhlYWRlcnM6eydBdXRob3JpemF0aW9uJzonQmVhcmVyICcrdG9rZW59fSk7XG5cdFx0XHRpZihyZXMuc3RhdHVzPT0yMDApe1xuXHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRsZXQgZGF0YT0gYXdhaXQgcmVzLnRleHQoKTtcblx0XHRcdFx0XHRcdGRhdGE9IGF3YWl0IEpTT04ucGFyc2UoZGF0YSk7XG5cdFx0XHRcdFx0XHRyb29tID0gZGF0YS5kYXRhO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2F0Y2goZSl7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJjYXVnaHRcIik7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0XHRcdH1cdFxuXHRcdFx0fVxuXHRcdH1cblx0XG5cdH0pO1xuXHRcblxuXHRcblxuXHRhc3luYyBmdW5jdGlvbiBjb25uZWN0U29ja2V0KCl7XG5cblx0XHR2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuXHRcdHZhciB1SWQ9XCJ1SWRcIjtcblx0XHRcblx0XHR2YXIgcXVlcnlTdHJpbmcgPVwicm9vbV9pZD1cIityb29tSWQ7XG5cdFx0Y29uc29sZS5sb2coXCJxdWVyeTogXCIrcXVlcnlTdHJpbmcpO1xuXHRcdGNvbnNvbGUubG9nKFwiY2hlY2twb2ludCAwXCIpO1xuXHRcdHNvY2tldCA9IGlvKFwiXCIsIHtwYXRoOlwiL3NvY2tldC5pb1wiLHF1ZXJ5OnF1ZXJ5U3RyaW5nLGV4dHJhSGVhZGVyczoge1wiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIit0b2tlbn0sdHJhbnNwb3J0czogWydwb2xsaW5nJ119KTtcblxuXHRcdHNvY2tldC5vbihcImNvbm5lY3RcIiwoKT0+e1xuXHRcdFx0aW5pdGlhbGl6ZVNvY2tldChzb2NrZXQpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdC8vIHNvY2tldC5lbWl0KCdqb2luX3Jvb20nLCByb29tSWQsIHVzZXIuaWQpO1xuXG5cdFx0Ly8gY29uc29sZS5sb2coXCJ1c2VyIGlkOlwiK3VzZXJJZCk7XG5cdFx0XG5cdFx0dHJ5e1xuXHRcdFx0dmFyIHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHt2aWRlbzoge30sYXVkaW86IHt9fSk7XG5cdFx0XHRjb25zb2xlLmxvZyhzdHJlYW0uZ2V0VHJhY2tzKCkpO1xuXHRcdFx0aWYoc3RyZWFtLmdldFRyYWNrcygpLmxlbmd0aD4wKVxuXHRcdFx0e1xuXHRcdFx0XHRpbml0aWFsaXplUGVlcihzdHJlYW0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJlbXB0eSBzdHJlYW0sIG5vIHRyYWNrc1wiKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2goZSl7XG5cdFx0XHRhbGVydChcImZhaWxlZCB0byBzdGFydCBzdHJlYW1cIilcblx0XHR9XG5cdH0gXG5cblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZVBlZXIoc3RyZWFtKXtcblx0XHRteVBlZXIgPSBuZXcgUGVlcih1c2VyLmlkLCB7XG5cdFx0XHRob3N0OiAnZHJhd3BhZC5uZW9uZWQ3MS5jb20nLFxuXHRcdFx0cG9ydDogJzExMDAxJyxcblx0XHRcdHNlY3VyZTp0cnVlLFxuXHRcdFx0Y29uZmlnOiB7J2ljZVNlcnZlcnMnOiBbXG5cdFx0XHR7IHVybDogJ3N0dW46c3R1bi5sLmdvb2dsZS5jb206MTkzMDInIH0sXG5cdFx0XHR7IHVybDogJ3R1cm46ZHJhd3BhZC5uZW9uZWQ3MS5jb206MzQ3OCcsIGNyZWRlbnRpYWw6ICduZW9uJyx1c2VybmFtZTonbmVvbmVkNzEnIH1cblx0XHRcdF19XG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2cobXlQZWVyKTtcblxuXHRcdG15UGVlci5vbignb3BlbicsIGlkID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwiaWQgcmVjaWV2ZWQ6IFwiK2lkK1wiIHVzZXJJZDpcIit1c2VyLmlkKTtcblx0XHRcdHNvY2tldC5lbWl0KCdqb2luX3Jvb20nLCByb29tSWQsIHVzZXIuaWQpO1xuXHRcdH0pO1xuXG5cdFx0dmFyIHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWludmlkZW9cIik7XG5cdFx0XG5cdFx0dmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuXHRcdHZpZGVvLnBsYXkoKTtcblx0XHRhbGVydChcInN0cmVhbSBzZXRcIik7XG5cblxuXHRcdG15UGVlci5vbignY2FsbCcsIGNhbGwgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zaWRlIG9uIGNhbGwsYW5zd2VyaW5nIHdpdGggc3RyZWFtIG9iamVjdC4uLiBcIik7XG4gICAgY29uc29sZS5sb2coXCJjYWxsIHJlY2VpdmVkXCIpO1xuICAgIC8vIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICB2YXIgYVZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICBjYWxsLnZpZGVvPWFWaWRlbztcbiAgICBjYWxsLm9uKCdzdHJlYW0nLCB1c2VyVmlkZW9TdHJlYW0gPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJzdHJlYW0gcmVjZWl2ZWRcIilcbiAgICAgIHNldFN0cmVhbVRvVmlkZW9FbGVtZW50KGFWaWRlbywgdXNlclZpZGVvU3RyZWFtKTtcbiAgICB9KTtcblxuICAgIGNhbGwub24oJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgY2FsbC52aWRlby5yZW1vdmUoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FsbCBjbG9zZWQsIHZpZGVvIGVsZW1lbnQgcmVtb3ZlZFwiKVxuICAgIH0pO1xuICAgIGNhbGwuYW5zd2VyKHN0cmVhbSk7XG4gIH0pO1xuXG4gXG5cblxuXHRteVBlZXIub24oJ2Nvbm5lY3Rpb24nLCgpPT57XG5cdGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbiBwZWVyXCIpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNvY2tldChzb2NrZXQpXG57XG5cdC8vcmVnaXN0ZXIgZm9yIGFsbCB0aGUgc29ja2V0IGV2ZW50cyBoZXJlIVxuXHRzb2NrZXQub24oJ3VzZXItY29ubmVjdGVkJywgdXNlcklkID0+IHtcblx0XHRhbGVydChcImluc2lkZSB1c2VyIGNvbm5lY3RlZCAxXCIpO1xuXHRcdGNhbGxOZXdVc2VyKHVzZXJJZCwgc3RyZWFtKTtcblx0fSk7XG5cblx0c29ja2V0Lm9uKCd1c2VyLWRpc2Nvbm5lY3RlZCcsIHVzZXJJZCA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJpbnNpZGUgdXNlciBkaXNjb25uZWN0ZWQgMVwiK3VzZXJJZCk7XG5cblx0fSk7XG5cblxufVxuXG5cbmZ1bmN0aW9uIGNhbGxOZXdVc2VyKHVzZXJJZCwgc3RyZWFtKSB7XG4gIHZhciBjYWxsID0gbXlQZWVyLmNhbGwodXNlcklkLCBzdHJlYW0pO1xuICB2YXIgbXZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgY2FsbC52aWRlbz1tdmlkZW87XG4gIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgYSBjYWxsXCIpO1xuXG4gIGNhbGwub24oJ3N0cmVhbScsIHVzZXJWaWRlb1N0cmVhbSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzdHJlYW0gcmVjaWV2ZWQ6IFwiK3VzZXJWaWRlb1N0cmVhbSk7XG4gICAgc2V0U3RyZWFtVG9WaWRlb0VsZW1lbnQoY2FsbC52aWRlbywgdXNlclZpZGVvU3RyZWFtKTtcbiAgfSk7XG4gIGNhbGwub24oJ2Nsb3NlJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic3RyZWFtIGNsb3NlZFwiKTtcbiAgICBjYWxsLnZpZGVvLnJlbW92ZSgpO1xuICB9KTtcblxuICBwZWVyc1t1c2VySWRdID0gY2FsbDtcbn1cblxuXG5mdW5jdGlvbiBzZXRTdHJlYW1Ub1ZpZGVvRWxlbWVudCh2aWRlbywgc3RyZWFtKSB7XG4gIGNvbnNvbGUubG9nKFwiYWRkaW5nIHZpZGVvIGZyb20gc3RyZWFtXCIpO1xuICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgIHZpZGVvLnBsYXkoKTtcbiAgfSk7XG4gIHZhciB2aWRlb0dyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8tZ3JpZCcpO1xuICB2aWRlb0dyaWQuYXBwZW5kKHZpZGVvKTtcbn1cblxuZnVuY3Rpb24gc2lnbmFsKHNpZyxhcmdzKS8vYXJncyA9PiBhcnJheVxue1xuXHRpZihzb2NrZXQpXG5cdHtcblx0XHRzb2NrZXQuZW1pdChzaWcsLi4uYXJncyk7XG5cdH1cbn1cblxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRoMSwgZmlndXJlLCBwIHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cblx0aDEge1xuXHRcdGZvbnQtc2l6ZTogMi44ZW07XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XG5cdH1cblxuXHRmaWd1cmUge1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0cCB7XG5cdFx0bWFyZ2luOiAxZW0gYXV0bztcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogNGVtO1xuXHRcdH1cblx0fVxuXHQuZmxleHtcblx0XHRmbGV4OjE7XG5cdH1cblx0dmlkZW97XG5cdFx0aGVpZ2h0OjEwMHB4O1xuXHRcdHdpZHRoOiAxMDBweDtcblx0XHRiYWNrZ3JvdW5kOiBibHVlO1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5TYXBwZXIgcHJvamVjdCB0ZW1wbGF0ZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG5cblxuXHQ8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4O3dpZHRoOjEwMCVcIj5cblx0XHR7I2lmIHVzZXJ9XG5cdFx0VVNlcm5hbWU6e3VzZXIuZW1haWx9XG5cblx0XHQ8YnV0dG9uIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWJvcmRlclwiIG9uOmNsaWNrPXtjb25uZWN0U29ja2V0fT5Db25uZWN0IFNvY2tldDwvYnV0dG9uPlxuXHRcdFx0XG5cdFx0ey9pZn1cblx0XHQ8dmlkZW8gaWQ9XCJtYWludmlkZW9cIj5cblxuXHRcdDwvdmlkZW8+XG5cdFx0PCEtLSA8RGF0YVVwbG9hZCBjbGFzcz1cImZsZXhcIiBvcmdhbml6YXRpb249e3VzZXIub3JnYW5pemF0aW9ufSBwb3N0PXt1c2VyLnBvc3R9IG5hbWU9e3VzZXIudXNlcm5hbWV9IC8+XG5cdFx0PEltYWdlVXBsb2FkIGNsYXNzPVwiZmxleFwiIGF2YXRhcj17dXNlci5sb2dvfSBuYW1lPXtcImxvZ29cIn0vPlxuXHRcdDxJbWFnZVVwbG9hZCBjbGFzcz1cImZsZXhcIiBhdmF0YXI9e3VzZXIuc2lnbmF0dXJlfSBuYW1lPXtcInNpZ25hdHVyZVwifS8+IC0tPlxuXHQ8L2Rpdj5cblxuXHQ8ZGl2IGlkPVwidmlkZW8tZ3JpZFwiPjwvZGl2PlxuPGhyPiJdLCJuYW1lcyI6WyJnZXQiLCJpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3lCQXdTWSxHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7OzthQURWLFdBQ0Q7Ozs7YUFFNkQsZ0JBQWM7Ozs7MEJBSDFFLFdBQ0Q7Ozs7O2lDQUU2RCxnQkFBYzs7Ozs7Ozs7Ozs7O0dBQXBGLG9CQUE2Rjs7Ozs0REFBdEMsR0FBYTs7Ozs7K0RBRjFELEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFEZixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FEVixvQkFhTTs7O0dBTkwsb0JBRVE7O0dBTVQsb0JBQTJCOztHQUM1QixvQkFBSTs7O2dCQWZHLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF0U1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPOzs7SUFFZixNQUFNOztlQUVZLE9BQU8sQ0FBQyxDQUFDLEVBQUMsT0FBTztLQUNsQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU07Q0FDckIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJO0NBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFDLE1BQU07VUFDbEIsTUFBTTs7O1NBd05QLHVCQUF1QixDQUFDLEtBQUssRUFBRSxNQUFNO0NBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCO0NBQ3RDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTTs7Q0FDeEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtFQUNyQyxLQUFLLENBQUMsSUFBSTs7O0tBRVIsU0FBUyxH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
