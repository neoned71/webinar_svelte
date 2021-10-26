import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as globals, v as validate_slots, H as get_store_value, I as onMount, T as Token, J as ApiUrl, a as space, e as element, t as text, c as claim_space, f as claim_element, g as children, h as claim_text, b as detach_dev, k as add_location, j as attr_dev, l as insert_hydration_dev, m as append_hydration_dev, x as listen_dev, B as validate_each_argument, E as empty, F as destroy_each, D as set_data_dev, q as query_selector_all, n as noop, K as is_function } from './client.07b69146.js';
import { I as ImageUpload, D as DataUpload } from './dataUpload.ea7a1d76.js';

/* src/routes/dashboard/index.svelte generated by Svelte v3.44.0 */

const { console: console_1 } = globals;
const file = "src/routes/dashboard/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (219:2) {#if user}
function create_if_block(ctx) {
	let t0;
	let div;
	let h3;
	let t1;
	let br;
	let t2;
	let button;
	let t3;
	let t4;
	let hr;
	let mounted;
	let dispose;
	let if_block = /*rooms*/ ctx[1] && /*rooms*/ ctx[1].length > 0 && create_if_block_1(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			t0 = space();
			div = element("div");
			h3 = element("h3");
			t1 = text("Create a new Room");
			br = element("br");
			t2 = space();
			button = element("button");
			t3 = text("Create room");
			t4 = space();
			hr = element("hr");
			this.h();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			h3 = claim_element(div_nodes, "H3", {});
			var h3_nodes = children(h3);
			t1 = claim_text(h3_nodes, "Create a new Room");
			h3_nodes.forEach(detach_dev);
			br = claim_element(div_nodes, "BR", {});
			t2 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t3 = claim_text(button_nodes, "Create room");
			button_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			this.h();
		},
		h: function hydrate() {
			add_location(h3, file, 233, 3, 4473);
			add_location(br, file, 233, 29, 4499);
			attr_dev(button, "class", "w3-button w3-round w3-border w3-card");
			add_location(button, file, 234, 3, 4507);
			add_location(div, file, 232, 2, 4464);
			add_location(hr, file, 236, 2, 4614);
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, h3);
			append_hydration_dev(h3, t1);
			append_hydration_dev(div, br);
			append_hydration_dev(div, t2);
			append_hydration_dev(div, button);
			append_hydration_dev(button, t3);
			insert_hydration_dev(target, t4, anchor);
			insert_hydration_dev(target, hr, anchor);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*createRoom*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (/*rooms*/ ctx[1] && /*rooms*/ ctx[1].length > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(t0.parentNode, t0);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(hr);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(219:2) {#if user}",
		ctx
	});

	return block;
}

// (221:2) {#if (rooms && rooms.length>0)}
function create_if_block_1(ctx) {
	let h3;
	let t0;
	let t1;
	let each_1_anchor;
	let each_value = /*rooms*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			h3 = element("h3");
			t0 = text("Previous running Rooms");
			t1 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			h3 = claim_element(nodes, "H3", {});
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, "Previous running Rooms");
			h3_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			add_location(h3, file, 221, 4, 4168);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, h3, anchor);
			append_hydration_dev(h3, t0);
			insert_hydration_dev(target, t1, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_hydration_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*visitRoom, rooms*/ 2) {
				each_value = /*rooms*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h3);
			if (detaching) detach_dev(t1);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(221:2) {#if (rooms && rooms.length>0)}",
		ctx
	});

	return block;
}

// (227:5) {#if room.current_status!="finished"}
function create_if_block_2(ctx) {
	let button;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t = text("Visit");
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t = claim_text(button_nodes, "Visit");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "w3-button w3-green w3-padding w3-margin w3-round w3-card");
			add_location(button, file, 227, 6, 4310);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, button, anchor);
			append_hydration_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(
					button,
					"click",
					function () {
						if (is_function(visitRoom(/*room*/ ctx[4]._id))) visitRoom(/*room*/ ctx[4]._id).apply(this, arguments);
					},
					false,
					false,
					false
				);

				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(227:5) {#if room.current_status!=\\\"finished\\\"}",
		ctx
	});

	return block;
}

// (225:4) {#each rooms as room}
function create_each_block(ctx) {
	let p;
	let t0;
	let t1_value = /*room*/ ctx[4]._id + "";
	let t1;
	let t2;
	let if_block_anchor;
	let if_block = /*room*/ ctx[4].current_status != "finished" && create_if_block_2(ctx);

	const block = {
		c: function create() {
			p = element("p");
			t0 = text("Room: ");
			t1 = text(t1_value);
			t2 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "Room: ");
			t1 = claim_text(p_nodes, t1_value);
			p_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "svelte-rnjwhz");
			add_location(p, file, 225, 5, 4237);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, p, anchor);
			append_hydration_dev(p, t0);
			append_hydration_dev(p, t1);
			insert_hydration_dev(target, t2, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_hydration_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*rooms*/ 2 && t1_value !== (t1_value = /*room*/ ctx[4]._id + "")) set_data_dev(t1, t1_value);

			if (/*room*/ ctx[4].current_status != "finished") {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t2);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(225:4) {#each rooms as room}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div;
	let t1;
	let hr;
	let if_block = /*user*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			if (if_block) if_block.c();
			t1 = space();
			hr = element("hr");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-oh6yg0\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (if_block) if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(div, "class", "w3-center w3-padding w3-margin");
			add_location(div, file, 217, 1, 4039);
			add_location(hr, file, 245, 0, 4890);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div, anchor);
			if (if_block) if_block.m(div, null);
			insert_hydration_dev(target, t1, anchor);
			insert_hydration_dev(target, hr, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (/*user*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div, null);
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
			if (detaching) detach_dev(div);
			if (if_block) if_block.d();
			if (detaching) detach_dev(t1);
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

const preload = async function (page, session) {
	
};

function visitRoom(roomId) {
	console.log("going to the room");
	location.href = "/room/" + roomId;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Dashboard', slots, []);
	var loginPath = get_store_value(ApiUrl);
	let { user } = $$props;
	var rooms;

	onMount(async () => {
		console.log("mounted");

		// localStorage.setItem("token","some value");
		var token = localStorage.getItem("token");

		if (!token) {
			console.log("yes");
			location.href = "/login";
		}

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

				// console.log(data);
				data = await JSON.parse(data);

				$$invalidate(0, user = data.user);
				console.log(user);

				res = await fetch(loginPath + '/rooms/rooms', {
					mode: 'cors',
					method: 'get',
					headers: { 'Authorization': 'Bearer ' + token }
				});

				if (res.status == 200) {
					try {
						let data = await res.text();

						// console.log(data);
						data = await JSON.parse(data);

						$$invalidate(1, rooms = data.data);
						console.log(rooms);
					} catch(e) {
						console.log("caught");

						//this.redirect(300,"/login");
						// this.error(e,data.message);
						console.log(e);
					} finally {
						
					} // return { user };
				} else {
					console.log(await res.text()); // let data = JSON.parse(text);
					$$invalidate(0, user.email = "no logged", user);
				} // return {user};
				// this.redirect(300,"/login");
			} catch(e) {
				console.log("caught"); // 

				//this.redirect(300,"/login");
				// this.error(e,data.message);
				console.log(e);
			} finally {
				
			} // return { user };
		} else {
			console.log(await res.text()); // let data = JSON.parse(text);
			$$invalidate(0, user.email = "no logged", user);
		} // return {user};
		// this.redirect(300,"/login");
	}); // 

	async function createRoom() {
		var token = localStorage.getItem("token");

		// alert(token);
		const res = await fetch(loginPath + '/rooms/create/', {
			mode: 'cors',
			method: 'get',
			headers: { 'Authorization': 'Bearer ' + token }
		});

		if (res.status == 200) {
			try {
				let data = await res.text();
				console.log(data);
				data = await JSON.parse(data);

				if (data.status == "success") {
					var roomId = data.room_id;

					// alert(roomId);
					location.href = "./room/" + roomId;
				} else {
					alert(data.message);
				} // location.href="./room/"+roomId;
			} catch(e) {
				console.log("caught"); // console.log(user);

				//this.redirect(300,"/login");
				// this.error(e,data.message);
				console.log(e);
			} finally {
				
			} // return { user };
		} else {
			console.log(await res.text()); // let data = JSON.parse(text);
		} // user.email="failed";
		// return {user};
	} // this.redirect(300,"/login");

	const writable_props = ['user'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Dashboard> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('user' in $$props) $$invalidate(0, user = $$props.user);
	};

	$$self.$capture_state = () => ({
		user,
		preload,
		ImageUpload,
		DataUpload,
		onMount,
		Token,
		ApiUrl,
		get: get_store_value,
		loginPath,
		user,
		rooms,
		createRoom,
		visitRoom
	});

	$$self.$inject_state = $$props => {
		if ('loginPath' in $$props) loginPath = $$props.loginPath;
		if ('user' in $$props) $$invalidate(0, user = $$props.user);
		if ('rooms' in $$props) $$invalidate(1, rooms = $$props.rooms);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [user, rooms, createRoom];
}

class Dashboard extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { user: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Dashboard",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*user*/ ctx[0] === undefined && !('user' in props)) {
			console_1.warn("<Dashboard> was created without expected prop 'user'");
		}
	}

	get user() {
		throw new Error("<Dashboard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<Dashboard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Dashboard as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzE0NDFlYTYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGFzaGJvYXJkL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0IGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG5cdCBcblxuXHR2YXIgdXNlciA9bnVsbDtcblx0ZXhwb3J0IGNvbnN0IHByZWxvYWQgPSBhc3luYyBmdW5jdGlvbiggcGFnZSwgc2Vzc2lvbikge1x0XG5cdH1cblxuXG5cdFxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICcuLi9fdXRpbHMvaW1hZ2VVcGxvYWQuc3ZlbHRlJztcblx0aW1wb3J0IERhdGFVcGxvYWQgZnJvbSAnLi4vX3V0aWxzL2RhdGFVcGxvYWQuc3ZlbHRlJztcblx0aW1wb3J0IHtvbk1vdW50fSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQge1Rva2VufSBmcm9tICcuLi9fdXRpbHMvZHluYW1pY19zdG9yZS5qcyc7XG5cdGltcG9ydCB7QXBpVXJsfSBmcm9tICcuLi9fdXRpbHMvc3RhdGljX3N0b3JlLmpzJztcblx0aW1wb3J0IHsgZ2V0IH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcbi8vIGltcG9ydCB7IHJvb21JZCB9IGZyb20gJy4uL3Jvb20vW3NsdWddLnN2ZWx0ZSc7XG5cdC8vIGV4cG9ydCB2YXIgcm9vbUlkO1xuXHQgdmFyIGxvZ2luUGF0aD1nZXQoQXBpVXJsKTtcblx0XG5cdFxuXHRleHBvcnQgdmFyIHVzZXI7XG5cblx0dmFyIHJvb21zO1xuXHRvbk1vdW50KGFzeW5jICgpPT57XG5cdFx0XG5cdFx0Y29uc29sZS5sb2coXCJtb3VudGVkXCIpO1xuXHRcdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIixcInNvbWUgdmFsdWVcIik7XG5cdFx0XG5cdFx0dmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcblx0XHRpZighdG9rZW4pXG5cdFx0e1xuXHRcdFx0Y29uc29sZS5sb2coXCJ5ZXNcIik7XG5cdFx0XHRsb2NhdGlvbi5ocmVmPVwiL2xvZ2luXCI7XG5cdFx0fVxuXHRcdFRva2VuLnNldCh0b2tlbik7XG5cblxuXHRcdC8vIGNvbnNvbGUubG9nKGxvZ2luUGF0aCsnL2F1dGgvd2hvYW1pJyk7XG5cdFx0dmFyIHJlcyA9IGF3YWl0IGZldGNoKGxvZ2luUGF0aCsnL2F1dGgvd2hvYW1pJyx7bW9kZTonY29ycycsbWV0aG9kOidnZXQnLGhlYWRlcnM6eydBdXRob3JpemF0aW9uJzonQmVhcmVyICcrdG9rZW59fSk7XG5cdFx0aWYocmVzLnN0YXR1cz09MjAwKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0XHRsZXQgZGF0YT0gYXdhaXQgcmVzLnRleHQoKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHRkYXRhPSBhd2FpdCBKU09OLnBhcnNlKGRhdGEpO1xuXHRcdFx0XHRcdHVzZXIgPSBkYXRhLnVzZXI7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codXNlcik7XG5cdFx0XHRcdFx0cmVzID0gYXdhaXQgZmV0Y2gobG9naW5QYXRoKycvcm9vbXMvcm9vbXMnLHttb2RlOidjb3JzJyxtZXRob2Q6J2dldCcsaGVhZGVyczp7J0F1dGhvcml6YXRpb24nOidCZWFyZXIgJyt0b2tlbn19KTtcblx0XHRcdFx0XHRpZihyZXMuc3RhdHVzPT0yMDApe1xuXHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdGxldCBkYXRhPSBhd2FpdCByZXMudGV4dCgpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdFx0XHRcdGRhdGE9IGF3YWl0IEpTT04ucGFyc2UoZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0cm9vbXMgPSBkYXRhLmRhdGE7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocm9vbXMpO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y2F0Y2goZSl7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiY2F1Z2h0XCIpO1xuXHRcdFx0XHRcdFx0XHQvL3RoaXMucmVkaXJlY3QoMzAwLFwiL2xvZ2luXCIpO1xuXHRcdFx0XHRcdFx0XHQvLyB0aGlzLmVycm9yKGUsZGF0YS5tZXNzYWdlKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmaW5hbGx5e1xuXHRcdFx0XHRcdFx0XHQvLyByZXR1cm4geyB1c2VyIH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGF3YWl0IHJlcy50ZXh0KCkpO1xuXHRcdFx0XHRcdFx0XHRcdHVzZXIuZW1haWw9XCJubyBsb2dnZWRcIjtcblx0XHRcdFx0XHRcdFx0XHQvLyByZXR1cm4ge3VzZXJ9O1xuXHRcdFx0XHRcdFx0XHRcdC8vIHRoaXMucmVkaXJlY3QoMzAwLFwiL2xvZ2luXCIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdC8vIFxuXHRcdFx0XG5cdFx0XHRcdFx0Ly8gYWxlcnQoSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHVzZXIpO1xuXHRcdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0Y2F0Y2goZSl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiY2F1Z2h0XCIpO1xuXHRcdFx0XHQvL3RoaXMucmVkaXJlY3QoMzAwLFwiL2xvZ2luXCIpO1xuXHRcdFx0XHQvLyB0aGlzLmVycm9yKGUsZGF0YS5tZXNzYWdlKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0XHR9XG5cdFx0XHRmaW5hbGx5e1xuXHRcdFx0XHQvLyByZXR1cm4geyB1c2VyIH07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcblx0XHRcdFxuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGF3YWl0IHJlcy50ZXh0KCkpO1xuXHRcdFx0XHRcdHVzZXIuZW1haWw9XCJubyBsb2dnZWRcIjtcblx0XHRcdFx0XHQvLyByZXR1cm4ge3VzZXJ9O1xuXHRcdFx0XHRcdC8vIHRoaXMucmVkaXJlY3QoMzAwLFwiL2xvZ2luXCIpO1xuXHRcdFx0XHR9XG5cdFx0Ly8gXG5cdH0pXG5cdFxuXG5cdGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJvb20oKXtcblxuXHRcdHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG5cdFx0Ly8gYWxlcnQodG9rZW4pO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGxvZ2luUGF0aCsnL3Jvb21zL2NyZWF0ZS8nLHttb2RlOidjb3JzJyxtZXRob2Q6J2dldCcsaGVhZGVyczp7J0F1dGhvcml6YXRpb24nOidCZWFyZXIgJyt0b2tlbn19KTtcblx0XHRpZihyZXMuc3RhdHVzPT0yMDApe1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRcdGxldCBkYXRhPSBhd2FpdCByZXMudGV4dCgpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdGRhdGE9IGF3YWl0IEpTT04ucGFyc2UoZGF0YSk7XG5cdFx0XHRcdFx0aWYoZGF0YS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dmFyIHJvb21JZCA9IGRhdGEucm9vbV9pZDtcblx0XHRcdFx0XHRcdC8vIGFsZXJ0KHJvb21JZCk7XG5cdFx0XHRcdFx0XHRsb2NhdGlvbi5ocmVmPVwiLi9yb29tL1wiK3Jvb21JZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0YWxlcnQoZGF0YS5tZXNzYWdlKTtcblx0XHRcdFx0XHRcdC8vIGxvY2F0aW9uLmhyZWY9XCIuL3Jvb20vXCIrcm9vbUlkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh1c2VyKTtcblx0XHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdGNhdGNoKGUpe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImNhdWdodFwiKTtcblx0XHRcdFx0Ly90aGlzLnJlZGlyZWN0KDMwMCxcIi9sb2dpblwiKTtcblx0XHRcdFx0Ly8gdGhpcy5lcnJvcihlLGRhdGEubWVzc2FnZSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdFx0fVxuXHRcdFx0ZmluYWxseXtcblx0XHRcdFx0Ly8gcmV0dXJuIHsgdXNlciB9O1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7XG5cdFx0XHRcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhhd2FpdCByZXMudGV4dCgpKTtcblx0XHRcdFx0XHQvLyB1c2VyLmVtYWlsPVwiZmFpbGVkXCI7XG5cdFx0XHRcdFx0Ly8gcmV0dXJuIHt1c2VyfTtcblx0XHRcdFx0XHQvLyB0aGlzLnJlZGlyZWN0KDMwMCxcIi9sb2dpblwiKTtcblx0XHRcdFx0fVxuXHR9XG5cblxuXHRmdW5jdGlvbiB2aXNpdFJvb20ocm9vbUlkKVxuXHR7XG5cdFx0Y29uc29sZS5sb2coXCJnb2luZyB0byB0aGUgcm9vbVwiKTtcblx0XHRsb2NhdGlvbi5ocmVmID0gXCIvcm9vbS9cIityb29tSWQ7XG5cdH1cblxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRoMSwgZmlndXJlLCBwIHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cblx0aDEge1xuXHRcdGZvbnQtc2l6ZTogMi44ZW07XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XG5cdH1cblxuXHRmaWd1cmUge1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0cCB7XG5cdFx0bWFyZ2luOiAxZW0gYXV0bztcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogNGVtO1xuXHRcdH1cblx0fVxuXHQuZmxleHtcblx0XHRmbGV4OjE7XG5cdH1cblxuXHRtYWlue1xuXHRcdFxuXHRcdC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG5cdFx0XG5cdH1cblx0cHtcblx0XHRkaXNwbGF5OmlubGluZTtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U2FwcGVyIHByb2plY3QgdGVtcGxhdGU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuXG5cblx0PGRpdiBjbGFzcz1cInczLWNlbnRlciB3My1wYWRkaW5nIHczLW1hcmdpblwiPlxuXHRcdHsjaWYgdXNlcn1cblx0XHQ8IS0tIFVTZXJuYW1lOnt1c2VyLmVtYWlsfSAtLT5cblx0XHR7I2lmIChyb29tcyAmJiByb29tcy5sZW5ndGg+MCl9XG5cdFx0XHRcdDxoMz5QcmV2aW91cyBydW5uaW5nIFJvb21zPC9oMz5cblx0XHRcdFx0XG5cblx0XHRcdFx0eyNlYWNoIHJvb21zIGFzIHJvb219XG5cdFx0XHRcdFx0PHA+Um9vbToge3Jvb20uX2lkfTwvcD5cblx0XHRcdFx0XHR7I2lmIHJvb20uY3VycmVudF9zdGF0dXMhPVwiZmluaXNoZWRcIn1cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJ3My1idXR0b24gdzMtZ3JlZW4gdzMtcGFkZGluZyB3My1tYXJnaW4gdzMtcm91bmQgdzMtY2FyZFwiIG9uOmNsaWNrPXt2aXNpdFJvb20ocm9vbS5faWQpfT5WaXNpdDwvYnV0dG9uPlxuXHRcdFx0XHRcdHsvaWZ9XG5cdFx0XHRcdHsvZWFjaH1cblx0XHRcdHsvaWZ9XG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGgzPkNyZWF0ZSBhIG5ldyBSb29tPC9oMz48YnI+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWJvcmRlciB3My1jYXJkXCIgb246Y2xpY2s9e2NyZWF0ZVJvb219PkNyZWF0ZSByb29tPC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdFx0PGhyPlxuXG5cdFx0XHRcblx0XHRcdFxuXHRcdHsvaWZ9XG5cdFx0PCEtLSA8RGF0YVVwbG9hZCBjbGFzcz1cImZsZXhcIiBvcmdhbml6YXRpb249e3VzZXIub3JnYW5pemF0aW9ufSBwb3N0PXt1c2VyLnBvc3R9IG5hbWU9e3VzZXIudXNlcm5hbWV9IC8+XG5cdFx0PEltYWdlVXBsb2FkIGNsYXNzPVwiZmxleFwiIGF2YXRhcj17dXNlci5sb2dvfSBuYW1lPXtcImxvZ29cIn0vPlxuXHRcdDxJbWFnZVVwbG9hZCBjbGFzcz1cImZsZXhcIiBhdmF0YXI9e3VzZXIuc2lnbmF0dXJlfSBuYW1lPXtcInNpZ25hdHVyZVwifS8+IC0tPlxuXHQ8L2Rpdj5cbjxocj4iXSwibmFtZXMiOlsiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQTROUSxHQUFLLGlCQUFJLEdBQUssSUFBQyxNQUFNLEdBQUMsQ0FBQzs7Ozs7Ozs7YUFheEIsbUJBQWlCOzs7O2FBQ3NELGFBQVc7Ozs7Ozs7Ozs7Ozs2QkFEbEYsbUJBQWlCOzs7Ozs7aUNBQ3NELGFBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUZ2RixvQkFHTTtHQUZMLG9CQUEwQjs7R0FBQSxvQkFBSTs7R0FDOUIsb0JBQStGOzs7R0FFaEcsb0JBQUk7Ozt5REFGNEQsR0FBVTs7Ozs7aUJBZHBFLEdB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
