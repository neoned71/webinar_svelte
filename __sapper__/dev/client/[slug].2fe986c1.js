import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as globals, v as validate_slots, I as get_store_value, J as onMount, T as Token, K as ApiUrl, N as create_component, O as claim_component, P as mount_component, Q as transition_in, R as transition_out, U as destroy_component, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, F as set_style, k as add_location, j as attr_dev, l as insert_hydration_dev, V as check_outros, W as group_outros } from './client.bcb52a45.js';
import { F as Face_screen, b as build } from './_face_screen.c7905b57.js';

/* src/routes/room/[slug].svelte generated by Svelte v3.42.4 */

const { console: console_1 } = globals;
const file = "src/routes/room/[slug].svelte";

// (188:2) {#if initializedSocket}
function create_if_block(ctx) {
	let facescreen;
	let current;

	facescreen = new Face_screen({
			props: {
				socket: /*socket*/ ctx[1],
				user: /*user*/ ctx[2],
				room: /*room*/ ctx[3],
				roomId: /*roomId*/ ctx[0]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(facescreen.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(facescreen.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(facescreen, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const facescreen_changes = {};
			if (dirty & /*socket*/ 2) facescreen_changes.socket = /*socket*/ ctx[1];
			if (dirty & /*user*/ 4) facescreen_changes.user = /*user*/ ctx[2];
			if (dirty & /*room*/ 8) facescreen_changes.room = /*room*/ ctx[3];
			if (dirty & /*roomId*/ 1) facescreen_changes.roomId = /*roomId*/ ctx[0];
			facescreen.$set(facescreen_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(facescreen.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(facescreen.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(facescreen, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(188:2) {#if initializedSocket}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div0;
	let t1;
	let div1;
	let t2;
	let hr;
	let current;
	let if_block = /*initializedSocket*/ ctx[4] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			div0 = element("div");
			if (if_block) if_block.c();
			t1 = space();
			div1 = element("div");
			t2 = space();
			hr = element("hr");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-oh6yg0\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div0 = claim_element(nodes, "DIV", { style: true });
			var div0_nodes = children(div0);
			if (if_block) if_block.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { id: true });
			children(div1).forEach(detach_dev);
			t2 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			set_style(div0, "display", "flex");
			set_style(div0, "width", "100%");
			add_location(div0, file, 184, 1, 3473);
			attr_dev(div1, "id", "video-grid");
			add_location(div1, file, 197, 1, 3989);
			add_location(hr, file, 198, 0, 4017);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div0, anchor);
			if (if_block) if_block.m(div0, null);
			insert_hydration_dev(target, t1, anchor);
			insert_hydration_dev(target, div1, anchor);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, hr, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*initializedSocket*/ ctx[4]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*initializedSocket*/ 16) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div0, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div0);
			if (if_block) if_block.d();
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t2);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('U5Bslugu5D', slots, []);
	var loginPath = get_store_value(ApiUrl);
	var socket = null;
	var user = null;
	var myPeer;
	const peers = {};
	let { roomId } = $$props;
	var room;
	console.log(roomId);
	var isMaster = false;
	var initializedSocket = false;

	onMount(async () => {
		console.log("mounted");

		// localStorage.setItem("token","some value");
		var token = localStorage.getItem("token");

		if (!token) {
			console.log("yes");
		} // location.href="/login";

		Token.set(token);

		// console.log(loginPath+'/auth/whoami');
		var res = await fetch(loginPath + '/auth/whoami', {
			mode: 'cors',
			method: 'get',
			headers: { 'Authorization': 'Bearer ' + token }
		});

		if (res.status == 200) {
			try {
				let data = await res.text();
				data = await JSON.parse(data);
				$$invalidate(2, user = data.user);

				if (user) {
					// console.log(loginPath+'/auth/whoami');
					res = await fetch(loginPath + '/rooms/status/' + roomId, {
						mode: 'cors',
						method: 'get',
						headers: { 'Authorization': 'Bearer ' + token }
					});

					if (res.status == 200) {
						try {
							data = await res.text();

							// alert(data);
							data = await JSON.parse(data);

							if (data.status == "success") {
								$$invalidate(3, room = data.data);
								connectSocket();
							} else {
								alert("Sorry no room found");
							}
						} catch(e) {
							console.log("caught");
							console.log(e);
						}
					}
				}
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
	}); // this.redirect(300,"/login");
	//

	async function connectSocket() {
		var token = localStorage.getItem("token");
		var queryString = "room_id=" + roomId + "&token=" + token;
		console.log("query: " + queryString);
		console.log("checkpoint 0");

		$$invalidate(1, socket = build.io("wss://webinar.neoned71.com:12002", {
			path: "/socket.io",
			query: queryString,
			extraHeaders: { "Authorization": "Bearer " + token },
			transports: ['websocket'],
			upgrade: true
		}));

		socket.on("connect", () => {
			console.log("connected");

			//initializeSocket(socket);
			initializeScreens();
		});
	}

	function initializeScreens() {
		console.log(user);
		console.log(room);
		console.log(socket);
		$$invalidate(4, initializedSocket = true);
	}

	const writable_props = ['roomId'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('roomId' in $$props) $$invalidate(0, roomId = $$props.roomId);
	};

	$$self.$capture_state = () => ({
		roomId,
		preload,
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
		initializedSocket,
		connectSocket,
		initializeScreens
	});

	$$self.$inject_state = $$props => {
		if ('loginPath' in $$props) loginPath = $$props.loginPath;
		if ('socket' in $$props) $$invalidate(1, socket = $$props.socket);
		if ('user' in $$props) $$invalidate(2, user = $$props.user);
		if ('myPeer' in $$props) myPeer = $$props.myPeer;
		if ('roomId' in $$props) $$invalidate(0, roomId = $$props.roomId);
		if ('room' in $$props) $$invalidate(3, room = $$props.room);
		if ('isMaster' in $$props) isMaster = $$props.isMaster;
		if ('initializedSocket' in $$props) $$invalidate(4, initializedSocket = $$props.initializedSocket);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [roomId, socket, user, room, initializedSocket];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { roomId: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*roomId*/ ctx[0] === undefined && !('roomId' in props)) {
			console_1.warn("<U5Bslugu5D> was created without expected prop 'roomId'");
		}
	}

	get roomId() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set roomId(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { U5Bslugu5D as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLjJmZTk4NmMxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Jvb20vW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0Y29uc29sZS5sb2coXCJoZWxsb1wiKTtcblx0Ly8gZXhwb3J0IHZhciB1c2VyO1xuXHR2YXIgcm9vbUlkO1xuXG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHAsc2Vzc2lvbikge1xuXHRcdGxldCBwYXJhbXMgPSBwLnBhcmFtcztcblx0XHRyb29tSWQgPSBwYXJhbXMuc2x1Zztcblx0XHRjb25zb2xlLmxvZyhcInNsdWc6XCIrcm9vbUlkKTtcblx0XHRyZXR1cm4ge3Jvb21JZH07XG5cdH1cblxuXG5cdFxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cblx0aW1wb3J0IEZhY2VTY3JlZW4gZnJvbSAnLi9fZmFjZV9zY3JlZW4uc3ZlbHRlJztcblx0aW1wb3J0IHtvbk1vdW50fSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQge1Rva2VufSBmcm9tICcuLi9fdXRpbHMvZHluYW1pY19zdG9yZS5qcyc7XG5cdGltcG9ydCB7QXBpVXJsfSBmcm9tICcuLi9fdXRpbHMvc3RhdGljX3N0b3JlLmpzJztcblx0aW1wb3J0IHsgZ2V0IH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblx0aW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXHQvLyBpbXBvcnQgKiBhcyBzb2NrZXRGdW5jdGlvbnMgZnJvbSBcIi4vc29ja2V0RnVuY3Rpb25zXCI7XG5cdC8vIGltcG9ydCBQZWVyIGZyb20gJ3BlZXJqcyc7XG5cblx0dmFyIGxvZ2luUGF0aD1nZXQoQXBpVXJsKTtcblx0dmFyIHNvY2tldCA9IG51bGw7XG5cdHZhciB1c2VyPW51bGw7XG5cdHZhciBteVBlZXI7XG5cdGNvbnN0IHBlZXJzID0ge307XG5cdGV4cG9ydCB2YXIgcm9vbUlkO1xuXHR2YXIgcm9vbTtcblx0Y29uc29sZS5sb2cocm9vbUlkKTtcblx0dmFyIGlzTWFzdGVyID0gZmFsc2U7XG5cdHZhciBpbml0aWFsaXplZFNvY2tldD1mYWxzZTtcblx0XG5cdFxuXHRcblx0b25Nb3VudChhc3luYyAoKT0+e1xuXHRcdFxuXHRcdGNvbnNvbGUubG9nKFwibW91bnRlZFwiKTtcblx0XHQvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsXCJzb21lIHZhbHVlXCIpO1xuXHRcdFxuXHRcdHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG5cdFx0aWYoIXRva2VuKVxuXHRcdHtcblx0XHRcdGNvbnNvbGUubG9nKFwieWVzXCIpO1xuXHRcdFx0Ly8gbG9jYXRpb24uaHJlZj1cIi9sb2dpblwiO1xuXHRcdH1cblx0XHRUb2tlbi5zZXQodG9rZW4pO1xuXG5cblx0XHQvLyBjb25zb2xlLmxvZyhsb2dpblBhdGgrJy9hdXRoL3dob2FtaScpO1xuXHRcdHZhciByZXMgPSBhd2FpdCBmZXRjaChsb2dpblBhdGgrJy9hdXRoL3dob2FtaScse21vZGU6J2NvcnMnLG1ldGhvZDonZ2V0JyxoZWFkZXJzOnsnQXV0aG9yaXphdGlvbic6J0JlYXJlciAnK3Rva2VufX0pO1xuXHRcdGlmKHJlcy5zdGF0dXM9PTIwMCl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdFx0bGV0IGRhdGE9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0XHRcdFx0ZGF0YT0gYXdhaXQgSlNPTi5wYXJzZShkYXRhKTtcblx0XHRcdFx0XHR1c2VyID0gZGF0YS51c2VyO1xuXHRcdFx0XHRcdGlmKHVzZXIpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGxvZ2luUGF0aCsnL2F1dGgvd2hvYW1pJyk7XG5cdFx0XHRcdFx0cmVzID0gYXdhaXQgZmV0Y2gobG9naW5QYXRoKycvcm9vbXMvc3RhdHVzLycrcm9vbUlkLHttb2RlOidjb3JzJyxtZXRob2Q6J2dldCcsaGVhZGVyczp7J0F1dGhvcml6YXRpb24nOidCZWFyZXIgJyt0b2tlbn19KTtcblx0XHRcdFx0XHRcdGlmKHJlcy5zdGF0dXM9PTIwMCl7XG5cdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBhbGVydChkYXRhKTtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9IGF3YWl0IEpTT04ucGFyc2UoZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZihkYXRhLnN0YXR1cz09XCJzdWNjZXNzXCIpXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb20gPSBkYXRhLmRhdGE7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbm5lY3RTb2NrZXQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsZXJ0KFwiU29ycnkgbm8gcm9vbSBmb3VuZFwiKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNhdGNoKGUpe1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiY2F1Z2h0XCIpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdFx0XHRcdFx0XHR9XHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRjYXRjaChlKXtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJjYXVnaHRcIik7XG5cdFx0XHRcdC8vdGhpcy5yZWRpcmVjdCgzMDAsXCIvbG9naW5cIik7XG5cdFx0XHRcdC8vIHRoaXMuZXJyb3IoZSxkYXRhLm1lc3NhZ2UpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGF3YWl0IHJlcy50ZXh0KCkpO1xuXHRcdFx0XHRcdC8vIHVzZXIuZW1haWw9XCJubyBsb2dnZWRcIjtcblx0XHRcdFx0XHQvLyByZXR1cm4ge3VzZXJ9O1xuXHRcdFx0XHRcdC8vIHRoaXMucmVkaXJlY3QoMzAwLFwiL2xvZ2luXCIpO1xuXHRcdFx0XHR9XG5cdFx0Ly9cblx0fSk7XG5cdFxuXG5cdFxuXG5cdGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RTb2NrZXQoKXtcblx0XHR2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuXHRcdHZhciB1SWQ9XCJ1SWRcIjtcblxuXHRcdHZhciBxdWVyeVN0cmluZyA9XCJyb29tX2lkPVwiK3Jvb21JZCtcIiZ0b2tlbj1cIit0b2tlbjtcblx0XHRjb25zb2xlLmxvZyhcInF1ZXJ5OiBcIitxdWVyeVN0cmluZyk7XG5cdFx0Y29uc29sZS5sb2coXCJjaGVja3BvaW50IDBcIik7XG5cdFx0c29ja2V0ID0gaW8oXCJ3c3M6Ly93ZWJpbmFyLm5lb25lZDcxLmNvbToxMjAwMlwiLCB7cGF0aDpcIi9zb2NrZXQuaW9cIixxdWVyeTpxdWVyeVN0cmluZyxleHRyYUhlYWRlcnM6IHtcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIrdG9rZW59LHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0J10sdXBncmFkZTp0cnVlfSk7XG5cblx0XHRzb2NrZXQub24oXCJjb25uZWN0XCIsKCk9Pntcblx0XHRcdGNvbnNvbGUubG9nKFwiY29ubmVjdGVkXCIpXG5cdFx0XHQvL2luaXRpYWxpemVTb2NrZXQoc29ja2V0KTtcblx0XHRcdGluaXRpYWxpemVTY3JlZW5zKCk7XG5cdFx0fSk7XG5cdH1cblxuXG5cdGZ1bmN0aW9uIGluaXRpYWxpemVTY3JlZW5zKClcblx0e1xuXHRcdGNvbnNvbGUubG9nKHVzZXIpO1xuXHRcdGNvbnNvbGUubG9nKHJvb20pO1xuXHRcdGNvbnNvbGUubG9nKHNvY2tldCk7XG5cdFx0aW5pdGlhbGl6ZWRTb2NrZXQgPSB0cnVlO1xuXHR9XG5cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0aDEsIGZpZ3VyZSwgcCB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDIuOGVtO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRtYXJnaW46IDAgMCAwLjVlbSAwO1xuXHR9XG5cblx0ZmlndXJlIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdHAge1xuXHRcdG1hcmdpbjogMWVtIGF1dG87XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0XHRoMSB7XG5cdFx0XHRmb250LXNpemU6IDRlbTtcblx0XHR9XG5cdH1cblx0LmZsZXh7XG5cdFx0ZmxleDoxO1xuXHR9XG5cdHZpZGVve1xuXHRcdGhlaWdodDoxMDBweDtcblx0XHR3aWR0aDogMTAwcHg7XG5cdFx0YmFja2dyb3VuZDogYmx1ZTtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U2FwcGVyIHByb2plY3QgdGVtcGxhdGU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuXG5cblx0PGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDt3aWR0aDoxMDAlXCI+XG5cdFx0XG5cdFx0PCEtLSA8YnV0dG9uIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWJvcmRlclwiIG9uOmNsaWNrPXtjb25uZWN0U29ja2V0fT5Db25uZWN0IFNvY2tldDwvYnV0dG9uPiAtLT5cblx0XHR7I2lmIGluaXRpYWxpemVkU29ja2V0fVxuXHRcdFx0PEZhY2VTY3JlZW4gc29ja2V0PXtzb2NrZXR9IHVzZXI9e3VzZXJ9IHJvb209e3Jvb219IHJvb21JZD17cm9vbUlkfSAvPlxuXHRcdHsvaWZ9XG5cdFx0XG5cdFx0PCEtLSA8RGF0YVVwbG9hZCBjbGFzcz1cImZsZXhcIiBvcmdhbml6YXRpb249e3VzZXIub3JnYW5pemF0aW9ufSBwb3N0PXt1c2VyLnBvc3R9IG5hbWU9e3VzZXIudXNlcm5hbWV9IC8+XG5cdFx0PEltYWdlVXBsb2FkIGNsYXNzPVwiZmxleFwiIGF2YXRhcj17dXNlci5sb2dvfSBuYW1lPXtcImxvZ29cIn0vPlxuXHRcdDxJbWFnZVVwbG9hZCBjbGFzcz1cImZsZXhcIiBhdmF0YXI9e3VzZXIuc2lnbmF0dXJlfSBuYW1lPXtcInNpZ25hdHVyZVwifS8+IC0tPlxuXHRcdFxuXHQ8L2Rpdj5cblxuXHQ8ZGl2IGlkPVwidmlkZW8tZ3JpZFwiPjwvZGl2PlxuPGhyPlxuIl0sIm5hbWVzIjpbImdldCIsImlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7dUJBNEx1QixHQUFNO21CQUFRLEdBQUk7bUJBQVEsR0FBSTt1QkFBVSxHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0VBQTlDLEdBQU07OERBQVEsR0FBSTs4REFBUSxHQUFJO29FQUFVLEdBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FEOUQsR0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUh2QixvQkFXTTs7O0dBRU4sb0JBQTJCOztHQUM1QixvQkFBSTs7Ozs2QkFYRyxHQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMUx2QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87OztJQUVmLE1BQU07O2VBRVksT0FBTyxDQUFDLENBQUMsRUFBQyxPQUFPO0tBQ2xDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTTtDQUNyQixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUk7Q0FDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsTUFBTTtV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
