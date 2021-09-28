import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as globals, v as validate_slots, I as get_store_value, J as onMount, T as Token, K as ApiUrl, e as element, t as text, a as space, G as empty, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_hydration_dev, m as append_hydration_dev, A as listen_dev, q as query_selector_all, n as noop } from './client.e62c0d2a.js';
import { I as ImageUpload, D as DataUpload } from './dataUpload.f8a061c8.js';

/* src/routes/dashboard/index.svelte generated by Svelte v3.42.4 */

const { console: console_1 } = globals;
const file = "src/routes/dashboard/index.svelte";

// (205:2) {#if user}
function create_if_block(ctx) {
	let p;
	let t0;
	let br;
	let t1;
	let button;
	let t2;
	let t3;
	let if_block_anchor;
	let mounted;
	let dispose;
	let if_block = /*rooms*/ ctx[1] && create_if_block_1(ctx);

	const block = {
		c: function create() {
			p = element("p");
			t0 = text("Create a new Room");
			br = element("br");
			t1 = space();
			button = element("button");
			t2 = text("Create room");
			t3 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "Create a new Room");
			p_nodes.forEach(detach_dev);
			br = claim_element(nodes, "BR", {});
			t1 = claim_space(nodes);
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t2 = claim_text(button_nodes, "Create room");
			button_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "svelte-dfeqyr");
			add_location(p, file, 206, 2, 3918);
			add_location(br, file, 206, 26, 3942);
			attr_dev(button, "class", "w3-button w3-round w3-border");
			add_location(button, file, 207, 2, 3949);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, p, anchor);
			append_hydration_dev(p, t0);
			insert_hydration_dev(target, br, anchor);
			insert_hydration_dev(target, t1, anchor);
			insert_hydration_dev(target, button, anchor);
			append_hydration_dev(button, t2);
			insert_hydration_dev(target, t3, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_hydration_dev(target, if_block_anchor, anchor);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*createRoom*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (/*rooms*/ ctx[1]) {
				if (if_block) ; else {
					if_block = create_if_block_1(ctx);
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
			if (detaching) detach_dev(br);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(button);
			if (detaching) detach_dev(t3);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(205:2) {#if user}",
		ctx
	});

	return block;
}

// (210:3) {#if rooms}
function create_if_block_1(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text("Already Running room");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, "Already Running room");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "svelte-dfeqyr");
			add_location(p, file, 210, 4, 4057);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, p, anchor);
			append_hydration_dev(p, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(210:3) {#if rooms}",
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
			attr_dev(div, "class", "main w3-center w3-padding w3-margin");
			add_location(div, file, 203, 1, 3820);
			add_location(hr, file, 219, 0, 4365);
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
				var roomId = data.room_id;
				alert(roomId);
				location.href = "./room/" + roomId;
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
		createRoom
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjY4NTI4ZGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGFzaGJvYXJkL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0IGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG5cdCBcblxuXHR2YXIgdXNlciA9bnVsbDtcblx0ZXhwb3J0IGNvbnN0IHByZWxvYWQgPSBhc3luYyBmdW5jdGlvbiggcGFnZSwgc2Vzc2lvbikge1x0XG5cdH1cblxuXG5cdFxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICcuLi9fdXRpbHMvaW1hZ2VVcGxvYWQuc3ZlbHRlJztcblx0aW1wb3J0IERhdGFVcGxvYWQgZnJvbSAnLi4vX3V0aWxzL2RhdGFVcGxvYWQuc3ZlbHRlJztcblx0aW1wb3J0IHtvbk1vdW50fSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQge1Rva2VufSBmcm9tICcuLi9fdXRpbHMvZHluYW1pY19zdG9yZS5qcyc7XG5cdGltcG9ydCB7QXBpVXJsfSBmcm9tICcuLi9fdXRpbHMvc3RhdGljX3N0b3JlLmpzJztcblx0aW1wb3J0IHsgZ2V0IH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcbi8vIGltcG9ydCB7IHJvb21JZCB9IGZyb20gJy4uL3Jvb20vW3NsdWddLnN2ZWx0ZSc7XG5cdC8vIGV4cG9ydCB2YXIgcm9vbUlkO1xuXHQgdmFyIGxvZ2luUGF0aD1nZXQoQXBpVXJsKTtcblx0XG5cdFxuXHRleHBvcnQgdmFyIHVzZXI7XG5cblx0dmFyIHJvb21zO1xuXHRvbk1vdW50KGFzeW5jICgpPT57XG5cdFx0XG5cdFx0Y29uc29sZS5sb2coXCJtb3VudGVkXCIpO1xuXHRcdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIixcInNvbWUgdmFsdWVcIik7XG5cdFx0XG5cdFx0dmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcblx0XHRpZighdG9rZW4pXG5cdFx0e1xuXHRcdFx0Y29uc29sZS5sb2coXCJ5ZXNcIik7XG5cdFx0XHRsb2NhdGlvbi5ocmVmPVwiL2xvZ2luXCI7XG5cdFx0fVxuXHRcdFRva2VuLnNldCh0b2tlbik7XG5cblxuXHRcdC8vIGNvbnNvbGUubG9nKGxvZ2luUGF0aCsnL2F1dGgvd2hvYW1pJyk7XG5cdFx0dmFyIHJlcyA9IGF3YWl0IGZldGNoKGxvZ2luUGF0aCsnL2F1dGgvd2hvYW1pJyx7bW9kZTonY29ycycsbWV0aG9kOidnZXQnLGhlYWRlcnM6eydBdXRob3JpemF0aW9uJzonQmVhcmVyICcrdG9rZW59fSk7XG5cdFx0aWYocmVzLnN0YXR1cz09MjAwKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0XHRsZXQgZGF0YT0gYXdhaXQgcmVzLnRleHQoKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHRkYXRhPSBhd2FpdCBKU09OLnBhcnNlKGRhdGEpO1xuXHRcdFx0XHRcdHVzZXIgPSBkYXRhLnVzZXI7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codXNlcik7XG5cdFx0XHRcdFx0cmVzID0gYXdhaXQgZmV0Y2gobG9naW5QYXRoKycvcm9vbXMvcm9vbXMnLHttb2RlOidjb3JzJyxtZXRob2Q6J2dldCcsaGVhZGVyczp7J0F1dGhvcml6YXRpb24nOidCZWFyZXIgJyt0b2tlbn19KTtcblx0XHRcdFx0XHRpZihyZXMuc3RhdHVzPT0yMDApe1xuXHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdGxldCBkYXRhPSBhd2FpdCByZXMudGV4dCgpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdFx0XHRcdGRhdGE9IGF3YWl0IEpTT04ucGFyc2UoZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0cm9vbXMgPSBkYXRhLmRhdGE7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocm9vbXMpO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y2F0Y2goZSl7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiY2F1Z2h0XCIpO1xuXHRcdFx0XHRcdFx0XHQvL3RoaXMucmVkaXJlY3QoMzAwLFwiL2xvZ2luXCIpO1xuXHRcdFx0XHRcdFx0XHQvLyB0aGlzLmVycm9yKGUsZGF0YS5tZXNzYWdlKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmaW5hbGx5e1xuXHRcdFx0XHRcdFx0XHQvLyByZXR1cm4geyB1c2VyIH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGF3YWl0IHJlcy50ZXh0KCkpO1xuXHRcdFx0XHRcdFx0XHRcdHVzZXIuZW1haWw9XCJubyBsb2dnZWRcIjtcblx0XHRcdFx0XHRcdFx0XHQvLyByZXR1cm4ge3VzZXJ9O1xuXHRcdFx0XHRcdFx0XHRcdC8vIHRoaXMucmVkaXJlY3QoMzAwLFwiL2xvZ2luXCIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdC8vIFxuXHRcdFx0XG5cdFx0XHRcdFx0Ly8gYWxlcnQoSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHVzZXIpO1xuXHRcdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0Y2F0Y2goZSl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiY2F1Z2h0XCIpO1xuXHRcdFx0XHQvL3RoaXMucmVkaXJlY3QoMzAwLFwiL2xvZ2luXCIpO1xuXHRcdFx0XHQvLyB0aGlzLmVycm9yKGUsZGF0YS5tZXNzYWdlKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0XHR9XG5cdFx0XHRmaW5hbGx5e1xuXHRcdFx0XHQvLyByZXR1cm4geyB1c2VyIH07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcblx0XHRcdFxuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGF3YWl0IHJlcy50ZXh0KCkpO1xuXHRcdFx0XHRcdHVzZXIuZW1haWw9XCJubyBsb2dnZWRcIjtcblx0XHRcdFx0XHQvLyByZXR1cm4ge3VzZXJ9O1xuXHRcdFx0XHRcdC8vIHRoaXMucmVkaXJlY3QoMzAwLFwiL2xvZ2luXCIpO1xuXHRcdFx0XHR9XG5cdFx0Ly8gXG5cdH0pXG5cdFxuXG5cdGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJvb20oKXtcblxuXHRcdHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG5cdFx0Ly8gYWxlcnQodG9rZW4pO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGxvZ2luUGF0aCsnL3Jvb21zL2NyZWF0ZS8nLHttb2RlOidjb3JzJyxtZXRob2Q6J2dldCcsaGVhZGVyczp7J0F1dGhvcml6YXRpb24nOidCZWFyZXIgJyt0b2tlbn19KTtcblx0XHRpZihyZXMuc3RhdHVzPT0yMDApe1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRcdGxldCBkYXRhPSBhd2FpdCByZXMudGV4dCgpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdGRhdGE9IGF3YWl0IEpTT04ucGFyc2UoZGF0YSk7XG5cdFx0XHRcdFx0dmFyIHJvb21JZCA9IGRhdGEucm9vbV9pZDtcblx0XHRcdFx0XHRhbGVydChyb29tSWQpO1xuXHRcdFx0XHRcdGxvY2F0aW9uLmhyZWY9XCIuL3Jvb20vXCIrcm9vbUlkO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHVzZXIpO1xuXHRcdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0Y2F0Y2goZSl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiY2F1Z2h0XCIpO1xuXHRcdFx0XHQvL3RoaXMucmVkaXJlY3QoMzAwLFwiL2xvZ2luXCIpO1xuXHRcdFx0XHQvLyB0aGlzLmVycm9yKGUsZGF0YS5tZXNzYWdlKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0XHR9XG5cdFx0XHRmaW5hbGx5e1xuXHRcdFx0XHQvLyByZXR1cm4geyB1c2VyIH07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTtcblx0XHRcdFxuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGF3YWl0IHJlcy50ZXh0KCkpO1xuXHRcdFx0XHRcdC8vIHVzZXIuZW1haWw9XCJmYWlsZWRcIjtcblx0XHRcdFx0XHQvLyByZXR1cm4ge3VzZXJ9O1xuXHRcdFx0XHRcdC8vIHRoaXMucmVkaXJlY3QoMzAwLFwiL2xvZ2luXCIpO1xuXHRcdFx0XHR9XG5cdH1cblxuXG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdGgxLCBmaWd1cmUsIHAge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxuXHRoMSB7XG5cdFx0Zm9udC1zaXplOiAyLjhlbTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcblx0fVxuXG5cdGZpZ3VyZSB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRpbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRwIHtcblx0XHRtYXJnaW46IDFlbSBhdXRvO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiA0ZW07XG5cdFx0fVxuXHR9XG5cdC5mbGV4e1xuXHRcdGZsZXg6MTtcblx0fVxuXG5cdG1haW57XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG5cdFx0XG5cdH1cblx0cHtcblx0XHRkaXNwbGF5OmlubGluZTtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U2FwcGVyIHByb2plY3QgdGVtcGxhdGU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuXG5cblx0PGRpdiBjbGFzcz1cIm1haW4gdzMtY2VudGVyIHczLXBhZGRpbmcgdzMtbWFyZ2luXCI+XG5cdFx0eyNpZiB1c2VyfVxuXHRcdDwhLS0gVVNlcm5hbWU6e3VzZXIuZW1haWx9IC0tPlxuXHRcdDxwPkNyZWF0ZSBhIG5ldyBSb29tPC9wPjxicj5cblx0XHQ8YnV0dG9uIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWJvcmRlclwiIG9uOmNsaWNrPXtjcmVhdGVSb29tfT5DcmVhdGUgcm9vbTwvYnV0dG9uPlxuXG5cdFx0XHR7I2lmIHJvb21zfVxuXHRcdFx0XHQ8cD5BbHJlYWR5IFJ1bm5pbmcgcm9vbTwvcD5cblx0XHRcdFx0XG5cdFx0XHR7L2lmfVxuXHRcdFx0XG5cdFx0ey9pZn1cblx0XHQ8IS0tIDxEYXRhVXBsb2FkIGNsYXNzPVwiZmxleFwiIG9yZ2FuaXphdGlvbj17dXNlci5vcmdhbml6YXRpb259IHBvc3Q9e3VzZXIucG9zdH0gbmFtZT17dXNlci51c2VybmFtZX0gLz5cblx0XHQ8SW1hZ2VVcGxvYWQgY2xhc3M9XCJmbGV4XCIgYXZhdGFyPXt1c2VyLmxvZ299IG5hbWU9e1wibG9nb1wifS8+XG5cdFx0PEltYWdlVXBsb2FkIGNsYXNzPVwiZmxleFwiIGF2YXRhcj17dXNlci5zaWduYXR1cmV9IG5hbWU9e1wic2lnbmF0dXJlXCJ9Lz4gLS0+XG5cdDwvZGl2PlxuPGhyPiJdLCJuYW1lcyI6WyJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWlOUSxHQUFLOzs7OzthQUhSLG1CQUFpQjs7OzthQUMrQyxhQUFXOzs7Ozs7Ozs7NEJBRDNFLG1CQUFpQjs7Ozs7O2lDQUMrQyxhQUFXOzs7Ozs7Ozs7Ozs7Ozs7R0FEOUUsb0JBQXdCOztHQUFBLG9CQUFJOztHQUM1QixvQkFBdUY7Ozs7Ozs7eURBQWhDLEdBQVU7Ozs7O2lCQUUzRCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQ04sc0JBQW9COzs7Ozs7MkJBQXBCLHNCQUFvQjs7Ozs7Ozs7O0dBQXZCLG9CQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQU54QixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBRFYsb0JBZU07OztHQUNQLG9CQUFJOzs7Z0JBZkcsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEzTVQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPOztNQUlQLE9BQU8sbUJBQW1CLElBQUksRUFBRSxPQUFPOzs7Ozs7O0tBZ0IvQyxTQUFTLEdBQUNBLGVBQUcsQ0FBQyxNQUFNO09BR2QsSUFBSTtLQUVYLEtBQUs7O0NBQ1QsT0FBTztFQUVOLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUzs7O01BR2pCLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU87O09BQ3BDLEtBQUs7R0FFUixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUs7R0FDakIsUUFBUSxDQUFDLElBQUksR0FBQyxRQUFROzs7RUFFdkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLOzs7TUFJWCxHQUFHLFNBQVMsS0FBSyxDQUFDLFNBQVMsR0FBQyxjQUFjO0dBQUUsSUFBSSxFQUFDLE1BQU07R0FBQyxNQUFNLEVBQUMsS0FBSztHQUFDLE9BQU8sSUFBRSxlQUFlLEVBQUMsU0FBUyxHQUFDLEtBQUs7OztNQUM5RyxHQUFHLENBQUMsTUFBTSxJQUFFLEdBQUc7O1FBRVgsSUFBSSxTQUFRLEdBQUcsQ0FBQyxJQUFJOzs7SUFFeEIsSUFBSSxTQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7b0JBQzNCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7O0lBQ2hCLEdBQUcsU0FBUyxLQUFLLENBQUMsU0FBUyxHQUFDLGNBQWM7S0FBRSxJQUFJLEVBQUMsTUFBTTtLQUFDLE1BQU0sRUFBQyxLQUFLO0tBQUMsT0FBTyxJQUFFLGVBQWUsRUFBQyxTQUFTLEdBQUMsS0FBSzs7O1FBQzFHLEdBQUcsQ0FBQyxNQUFNLElBQUUsR0FBRzs7VUFFWCxJQUFJLFNBQVEsR0FBRyxDQUFDLElBQUk7OztNQUV4QixJQUFJLFNBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOztzQkFDM0IsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJO01BQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSzthQUdiLENBQUM7TUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVE7Ozs7TUFHcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7OztLQVVaLE9BQU8sQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUk7cUJBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUMsV0FBVzs7O1dBVXJCLENBQUM7SUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVE7Ozs7SUFHcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7OztHQVVaLE9BQU8sQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUk7bUJBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUMsV0FBVzs7Ozs7Z0JBUVgsVUFBVTtNQUVwQixLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7UUFFbEMsR0FBRyxTQUFTLEtBQUssQ0FBQyxTQUFTLEdBQUMsZ0JBQWdCO0dBQUUsSUFBSSxFQUFDLE1BQU07R0FBQyxNQUFNLEVBQUMsS0FBSztHQUFDLE9BQU8sSUFBRSxlQUFlLEVBQUMsU0FBUyxHQUFDLEtBQUs7OztNQUNsSCxHQUFHLENBQUMsTUFBTSxJQUFFLEdBQUc7O1FBRVgsSUFBSSxTQUFRLEdBQUcsQ0FBQyxJQUFJO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtJQUNoQixJQUFJLFNBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQ3ZCLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTztJQUN6QixLQUFLLENBQUMsTUFBTTtJQUNaLFFBQVEsQ0FBQyxJQUFJLEdBQUMsU0FBUyxHQUFDLE1BQU07V0FJMUIsQ0FBQztJQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTs7OztJQUdwQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7O0dBVVosT0FBTyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
