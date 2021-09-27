import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as globals, v as validate_slots, I as get_store_value, J as onMount, T as Token, K as ApiUrl, t as text, a as space, e as element, h as claim_text, c as claim_space, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_hydration_dev, m as append_hydration_dev, A as listen_dev, u as set_data_dev, q as query_selector_all, F as set_style, n as noop } from './client.01e83e45.js';
import { I as ImageUpload, D as DataUpload } from './dataUpload.d308ed9e.js';

/* src/routes/dashboard/index.svelte generated by Svelte v3.42.4 */

const { console: console_1 } = globals;
const file = "src/routes/dashboard/index.svelte";

// (158:2) {#if user}
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
			t3 = text("Create room");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "USername:");
			t1 = claim_text(nodes, t1_value);
			t2 = claim_space(nodes);
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t3 = claim_text(button_nodes, "Create room");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "w3-button w3-round w3-border");
			add_location(button, file, 160, 2, 2961);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, t1, anchor);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, button, anchor);
			append_hydration_dev(button, t3);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*createRoom*/ ctx[1], false, false, false);
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
		source: "(158:2) {#if user}",
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
			div = claim_element(nodes, "DIV", { style: true });
			var div_nodes = children(div);
			if (if_block) if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			set_style(div, "display", "flex");
			set_style(div, "width", "100%");
			add_location(div, file, 156, 1, 2883);
			add_location(hr, file, 167, 0, 3315);
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
		const res = await fetch(loginPath + '/auth/whoami', {
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
			} catch(e) {
				console.log("caught"); // alert(JSON.stringify(user));

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
		createRoom
	});

	$$self.$inject_state = $$props => {
		if ('loginPath' in $$props) loginPath = $$props.loginPath;
		if ('user' in $$props) $$invalidate(0, user = $$props.user);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [user, createRoom];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2JmYzM0MWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGFzaGJvYXJkL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0IGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG5cdCBcblxuXHR2YXIgdXNlciA9bnVsbDtcblx0ZXhwb3J0IGNvbnN0IHByZWxvYWQgPSBhc3luYyBmdW5jdGlvbiggcGFnZSwgc2Vzc2lvbikge1x0XG5cdH1cblxuXG5cdFxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICcuLi9fdXRpbHMvaW1hZ2VVcGxvYWQuc3ZlbHRlJztcblx0aW1wb3J0IERhdGFVcGxvYWQgZnJvbSAnLi4vX3V0aWxzL2RhdGFVcGxvYWQuc3ZlbHRlJztcblx0aW1wb3J0IHtvbk1vdW50fSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQge1Rva2VufSBmcm9tICcuLi9fdXRpbHMvZHluYW1pY19zdG9yZS5qcyc7XG5cdGltcG9ydCB7QXBpVXJsfSBmcm9tICcuLi9fdXRpbHMvc3RhdGljX3N0b3JlLmpzJztcblx0aW1wb3J0IHsgZ2V0IH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcbi8vIGltcG9ydCB7IHJvb21JZCB9IGZyb20gJy4uL3Jvb20vW3NsdWddLnN2ZWx0ZSc7XG5cdC8vIGV4cG9ydCB2YXIgcm9vbUlkO1xuXHQgdmFyIGxvZ2luUGF0aD1nZXQoQXBpVXJsKTtcblx0XG5cdFxuXHRleHBvcnQgdmFyIHVzZXI7XG5cdG9uTW91bnQoYXN5bmMgKCk9Pntcblx0XHRcblx0XHRjb25zb2xlLmxvZyhcIm1vdW50ZWRcIik7XG5cdFx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLFwic29tZSB2YWx1ZVwiKTtcblx0XHRcblx0XHR2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuXHRcdGlmKCF0b2tlbilcblx0XHR7XG5cdFx0XHRjb25zb2xlLmxvZyhcInllc1wiKTtcblx0XHRcdGxvY2F0aW9uLmhyZWY9XCIvbG9naW5cIjtcblx0XHR9XG5cdFx0VG9rZW4uc2V0KHRva2VuKTtcblxuXG5cdFx0Ly8gY29uc29sZS5sb2cobG9naW5QYXRoKycvYXV0aC93aG9hbWknKTtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChsb2dpblBhdGgrJy9hdXRoL3dob2FtaScse21vZGU6J2NvcnMnLG1ldGhvZDonZ2V0JyxoZWFkZXJzOnsnQXV0aG9yaXphdGlvbic6J0JlYXJlciAnK3Rva2VufX0pO1xuXHRcdGlmKHJlcy5zdGF0dXM9PTIwMCl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdFx0bGV0IGRhdGE9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRcdFx0ZGF0YT0gYXdhaXQgSlNPTi5wYXJzZShkYXRhKTtcblx0XHRcdFx0XHR1c2VyID0gZGF0YS51c2VyO1xuXHRcdFx0XHRcdC8vIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh1c2VyKTtcblx0XHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdGNhdGNoKGUpe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImNhdWdodFwiKTtcblx0XHRcdFx0Ly90aGlzLnJlZGlyZWN0KDMwMCxcIi9sb2dpblwiKTtcblx0XHRcdFx0Ly8gdGhpcy5lcnJvcihlLGRhdGEubWVzc2FnZSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdFx0fVxuXHRcdFx0ZmluYWxseXtcblx0XHRcdFx0Ly8gcmV0dXJuIHsgdXNlciB9O1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7XG5cdFx0XHRcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhhd2FpdCByZXMudGV4dCgpKTtcblx0XHRcdFx0XHR1c2VyLmVtYWlsPVwibm8gbG9nZ2VkXCI7XG5cdFx0XHRcdFx0Ly8gcmV0dXJuIHt1c2VyfTtcblx0XHRcdFx0XHQvLyB0aGlzLnJlZGlyZWN0KDMwMCxcIi9sb2dpblwiKTtcblx0XHRcdFx0fVxuXHRcdC8vIFxuXHR9KVxuXHRcblxuXHRhc3luYyBmdW5jdGlvbiBjcmVhdGVSb29tKCl7XG5cblx0XHR2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuXHRcdC8vIGFsZXJ0KHRva2VuKTtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChsb2dpblBhdGgrJy9yb29tcy9jcmVhdGUvJyx7bW9kZTonY29ycycsbWV0aG9kOidnZXQnLGhlYWRlcnM6eydBdXRob3JpemF0aW9uJzonQmVhcmVyICcrdG9rZW59fSk7XG5cdFx0aWYocmVzLnN0YXR1cz09MjAwKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0XHRsZXQgZGF0YT0gYXdhaXQgcmVzLnRleHQoKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHRkYXRhPSBhd2FpdCBKU09OLnBhcnNlKGRhdGEpO1xuXHRcdFx0XHRcdHZhciByb29tSWQgPSBkYXRhLnJvb21faWQ7XG5cdFx0XHRcdFx0YWxlcnQocm9vbUlkKTtcblx0XHRcdFx0XHRsb2NhdGlvbi5ocmVmPVwiLi9yb29tL1wiK3Jvb21JZDtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh1c2VyKTtcblx0XHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdGNhdGNoKGUpe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImNhdWdodFwiKTtcblx0XHRcdFx0Ly90aGlzLnJlZGlyZWN0KDMwMCxcIi9sb2dpblwiKTtcblx0XHRcdFx0Ly8gdGhpcy5lcnJvcihlLGRhdGEubWVzc2FnZSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdFx0fVxuXHRcdFx0ZmluYWxseXtcblx0XHRcdFx0Ly8gcmV0dXJuIHsgdXNlciB9O1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7XG5cdFx0XHRcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhhd2FpdCByZXMudGV4dCgpKTtcblx0XHRcdFx0XHQvLyB1c2VyLmVtYWlsPVwiZmFpbGVkXCI7XG5cdFx0XHRcdFx0Ly8gcmV0dXJuIHt1c2VyfTtcblx0XHRcdFx0XHQvLyB0aGlzLnJlZGlyZWN0KDMwMCxcIi9sb2dpblwiKTtcblx0XHRcdFx0fVxuXHR9IFxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRoMSwgZmlndXJlLCBwIHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cblx0aDEge1xuXHRcdGZvbnQtc2l6ZTogMi44ZW07XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XG5cdH1cblxuXHRmaWd1cmUge1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0cCB7XG5cdFx0bWFyZ2luOiAxZW0gYXV0bztcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogNGVtO1xuXHRcdH1cblx0fVxuXHQuZmxleHtcblx0XHRmbGV4OjE7XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlNhcHBlciBwcm9qZWN0IHRlbXBsYXRlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cblxuXG5cdDxkaXYgc3R5bGU9XCJkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJVwiPlxuXHRcdHsjaWYgdXNlcn1cblx0XHRVU2VybmFtZTp7dXNlci5lbWFpbH1cblxuXHRcdDxidXR0b24gY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtYm9yZGVyXCIgb246Y2xpY2s9e2NyZWF0ZVJvb219PkNyZWF0ZSByb29tPC9idXR0b24+XG5cdFx0XHRcblx0XHR7L2lmfVxuXHRcdDwhLS0gPERhdGFVcGxvYWQgY2xhc3M9XCJmbGV4XCIgb3JnYW5pemF0aW9uPXt1c2VyLm9yZ2FuaXphdGlvbn0gcG9zdD17dXNlci5wb3N0fSBuYW1lPXt1c2VyLnVzZXJuYW1lfSAvPlxuXHRcdDxJbWFnZVVwbG9hZCBjbGFzcz1cImZsZXhcIiBhdmF0YXI9e3VzZXIubG9nb30gbmFtZT17XCJsb2dvXCJ9Lz5cblx0XHQ8SW1hZ2VVcGxvYWQgY2xhc3M9XCJmbGV4XCIgYXZhdGFyPXt1c2VyLnNpZ25hdHVyZX0gbmFtZT17XCJzaWduYXR1cmVcIn0vPiAtLT5cblx0PC9kaXY+XG48aHI+Il0sIm5hbWVzIjpbImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7eUJBOEpZLEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7O2FBRFYsV0FDRDs7OzthQUUwRCxhQUFXOzs7OzBCQUhwRSxXQUNEOzs7OztpQ0FFMEQsYUFBVzs7Ozs7Ozs7Ozs7O0dBQTlFLG9CQUF1Rjs7Ozt5REFBaEMsR0FBVTs7Ozs7K0RBRnZELEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQURmLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBRFYsb0JBVU07OztHQUNQLG9CQUFJOzs7Z0JBVkcsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE1SlQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPOztNQUlQLE9BQU8sbUJBQW1CLElBQUksRUFBRSxPQUFPOzs7Ozs7O0tBZ0IvQyxTQUFTLEdBQUNBLGVBQUcsQ0FBQyxNQUFNO09BR2QsSUFBSTs7Q0FDZixPQUFPO0VBRU4sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTOzs7TUFHakIsS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTzs7T0FDcEMsS0FBSztHQUVSLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSztHQUNqQixRQUFRLENBQUMsSUFBSSxHQUFDLFFBQVE7OztFQUV2QixLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7OztRQUlULEdBQUcsU0FBUyxLQUFLLENBQUMsU0FBUyxHQUFDLGNBQWM7R0FBRSxJQUFJLEVBQUMsTUFBTTtHQUFDLE1BQU0sRUFBQyxLQUFLO0dBQUMsT0FBTyxJQUFFLGVBQWUsRUFBQyxTQUFTLEdBQUMsS0FBSzs7O01BQ2hILEdBQUcsQ0FBQyxNQUFNLElBQUUsR0FBRzs7UUFFWCxJQUFJLFNBQVEsR0FBRyxDQUFDLElBQUk7OztJQUV4QixJQUFJLFNBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOztvQkFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1dBS1osQ0FBQztJQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTs7OztJQUdwQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7O0dBVVosT0FBTyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsSUFBSTttQkFDMUIsSUFBSSxDQUFDLEtBQUssR0FBQyxXQUFXOzs7OztnQkFRWCxVQUFVO01BRXBCLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU87OztRQUVsQyxHQUFHLFNBQVMsS0FBSyxDQUFDLFNBQVMsR0FBQyxnQkFBZ0I7R0FBRSxJQUFJLEVBQUMsTUFBTTtHQUFDLE1BQU0sRUFBQyxLQUFLO0dBQUMsT0FBTyxJQUFFLGVBQWUsRUFBQyxTQUFTLEdBQUMsS0FBSzs7O01BQ2xILEdBQUcsQ0FBQyxNQUFNLElBQUUsR0FBRzs7UUFFWCxJQUFJLFNBQVEsR0FBRyxDQUFDLElBQUk7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJO0lBQ2hCLElBQUksU0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPO0lBQ3pCLEtBQUssQ0FBQyxNQUFNO0lBQ1osUUFBUSxDQUFDLElBQUksR0FBQyxTQUFTLEdBQUMsTUFBTTtXQUkxQixDQUFDO0lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFROzs7O0lBR3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7R0FVWixPQUFPLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
