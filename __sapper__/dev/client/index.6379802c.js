import { H as get_store_value, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as globals, v as validate_slots, I as onMount, J as ApiUrl, T as Token, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_hydration_dev, m as append_hydration_dev, u as set_input_value, x as listen_dev, y as prevent_default, n as noop, z as run_all } from './client.5c940aa5.js';

/* src/routes/login/index.svelte generated by Svelte v3.44.0 */

const { console: console_1 } = globals;
const file = "src/routes/login/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let h2;
	let t3;
	let t4;
	let form;
	let input0;
	let t5;
	let input1;
	let t6;
	let input2;
	let t7;
	let a0;
	let t8;
	let t9;
	let p;
	let t10;
	let a1;
	let t11;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Seminar");
			t2 = space();
			h2 = element("h2");
			t3 = text("Login");
			t4 = space();
			form = element("form");
			input0 = element("input");
			t5 = space();
			input1 = element("input");
			t6 = space();
			input2 = element("input");
			t7 = space();
			a0 = element("a");
			t8 = text("Register new user");
			t9 = space();
			p = element("p");
			t10 = text("created by: ");
			a1 = element("a");
			t11 = text("neoned71");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-wr3kpp\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Seminar");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, "Login");
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);

			input0 = claim_element(form_nodes, "INPUT", {
				type: true,
				name: true,
				placeholder: true
			});

			t5 = claim_space(form_nodes);

			input1 = claim_element(form_nodes, "INPUT", {
				type: true,
				name: true,
				placeholder: true
			});

			t6 = claim_space(form_nodes);
			input2 = claim_element(form_nodes, "INPUT", { type: true });
			form_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			a0 = claim_element(nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t8 = claim_text(a0_nodes, "Register new user");
			a0_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t10 = claim_text(p_nodes, "created by: ");
			a1 = claim_element(p_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t11 = claim_text(a1_nodes, "neoned71");
			a1_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Seminar";
			attr_dev(h1, "class", "svelte-1tqvmh4");
			add_location(h1, file, 126, 0, 2187);
			add_location(h2, file, 127, 0, 2204);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "name", "email");
			attr_dev(input0, "placeholder", "email");
			add_location(input0, file, 131, 1, 2270);
			attr_dev(input1, "type", "password");
			attr_dev(input1, "name", "password");
			attr_dev(input1, "placeholder", "password");
			add_location(input1, file, 132, 1, 2345);
			attr_dev(input2, "type", "submit");
			input2.value = "Login";
			add_location(input2, file, 134, 1, 2434);
			add_location(form, file, 129, 0, 2220);
			attr_dev(a0, "href", "/register");
			add_location(a0, file, 138, 0, 2481);
			attr_dev(a1, "href", "https://neoned71.com");
			add_location(a1, file, 144, 15, 2691);
			attr_dev(p, "class", "svelte-1tqvmh4");
			add_location(p, file, 144, 0, 2676);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, h1, anchor);
			append_hydration_dev(h1, t1);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, h2, anchor);
			append_hydration_dev(h2, t3);
			insert_hydration_dev(target, t4, anchor);
			insert_hydration_dev(target, form, anchor);
			append_hydration_dev(form, input0);
			set_input_value(input0, /*email*/ ctx[0]);
			append_hydration_dev(form, t5);
			append_hydration_dev(form, input1);
			set_input_value(input1, /*password*/ ctx[1]);
			append_hydration_dev(form, t6);
			append_hydration_dev(form, input2);
			insert_hydration_dev(target, t7, anchor);
			insert_hydration_dev(target, a0, anchor);
			append_hydration_dev(a0, t8);
			insert_hydration_dev(target, t9, anchor);
			insert_hydration_dev(target, p, anchor);
			append_hydration_dev(p, t10);
			append_hydration_dev(p, a1);
			append_hydration_dev(a1, t11);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[3]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[4]),
					listen_dev(form, "submit", prevent_default(/*handleSubmit*/ ctx[2]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*email*/ 1 && input0.value !== /*email*/ ctx[0]) {
				set_input_value(input0, /*email*/ ctx[0]);
			}

			if (dirty & /*password*/ 2 && input1.value !== /*password*/ ctx[1]) {
				set_input_value(input1, /*password*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(form);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(a0);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(p);
			mounted = false;
			run_all(dispose);
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
var loginPath = get_store_value(ApiUrl);

const preload = async function (page, session) {
	
}; // const res = await this.fetch(loginPath+'/auth/whoami',{mode:'cors',method:'get'});
// if(res.status==200){
// 	try{
// 		var data = await res.json();

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Login', slots, []);
	let { email, password } = $$props;

	onMount(async () => {
		var token = localStorage.getItem("token");

		if (token && token != 'null') {
			location.href = "/dashboard";
		}
	});

	async function handleSubmit() {
		if (email && password) {
			// const res= await fetch('login.json',{method:'get'});
			const res = await fetch(loginPath + '/auth/login', {
				mode: 'cors',
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});

			if (res.status == 200) {
				console.log(res.headers);
				var token = res.headers.get('xtoken');

				// alert(token);
				if (token) {
					localStorage.setItem("token", token);
					var text = await res.text();
					text = await JSON.parse(text);

					// user = text.user;
					location.href = "/dashboard";
				} else {
					console.log("no token present");
				}
			} else {
				alert("Login Failed");
				console.log(res.text());
			}
		}
	}

	const writable_props = ['email', 'password'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Login> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		email = this.value;
		$$invalidate(0, email);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	$$self.$$set = $$props => {
		if ('email' in $$props) $$invalidate(0, email = $$props.email);
		if ('password' in $$props) $$invalidate(1, password = $$props.password);
	};

	$$self.$capture_state = () => ({
		ApiUrl,
		Token,
		get: get_store_value,
		loginPath,
		preload,
		email,
		password,
		onMount,
		handleSubmit
	});

	$$self.$inject_state = $$props => {
		if ('email' in $$props) $$invalidate(0, email = $$props.email);
		if ('password' in $$props) $$invalidate(1, password = $$props.password);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [email, password, handleSubmit, input0_input_handler, input1_input_handler];
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { email: 0, password: 1, handleSubmit: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*email*/ ctx[0] === undefined && !('email' in props)) {
			console_1.warn("<Login> was created without expected prop 'email'");
		}

		if (/*password*/ ctx[1] === undefined && !('password' in props)) {
			console_1.warn("<Login> was created without expected prop 'password'");
		}
	}

	get email() {
		throw new Error("<Login>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set email(value) {
		throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get password() {
		throw new Error("<Login>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set password(value) {
		throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get handleSubmit() {
		return this.$$.ctx[2];
	}

	set handleSubmit(value) {
		throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Login as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjM3OTgwMmMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9naW4vaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHQvLyB2YXIgdXNlcj17fTtcblx0IGltcG9ydCB7QXBpVXJsfSBmcm9tICcuLi9fdXRpbHMvc3RhdGljX3N0b3JlLmpzJztcblx0IGltcG9ydCB7VG9rZW59IGZyb20gJy4uL191dGlscy9keW5hbWljX3N0b3JlLmpzJztcblx0IGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG5cdCBpbXBvcnQgeyBnZXQgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuXG5cdCB2YXIgbG9naW5QYXRoPWdldChBcGlVcmwpO1xuXHQgXG5cdCBcblx0Ly8gaW1wb3J0IHsgUHJlbG9hZCB9IGZyb20gXCJAc2FwcGVyL2NvbW1vblwiO1xuXG5cdGV4cG9ydCBjb25zdCBwcmVsb2FkID0gYXN5bmMgZnVuY3Rpb24oIHBhZ2UsIHNlc3Npb24pIHtcblx0XHQvLyBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGxvZ2luUGF0aCsnL2F1dGgvd2hvYW1pJyx7bW9kZTonY29ycycsbWV0aG9kOidnZXQnfSk7XG5cdFx0Ly8gaWYocmVzLnN0YXR1cz09MjAwKXtcblx0XHQvLyBcdHRyeXtcblx0XHQvLyBcdFx0dmFyIGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHQvLyBcdFx0aWYoZGF0YS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpXG5cdFx0Ly8gXHRcdHtcblx0XHQvLyBcdFx0XHR0aGlzLnJlZGlyZWN0KDMwMSxcIi9kYXNoYm9hcmRcIik7XG5cdFx0XHRcdFx0XG5cdFx0Ly8gXHRcdH1cblx0XHRcdFx0XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHRjYXRjaChlKXtcblx0XHQvLyBcdFx0Ly8gdGhpcy5lcnJvcihlLGRhdGEubWVzc2FnZSk7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdC8vIFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7XG5cdFx0XHRcblx0XHQvLyB9XG5cdH1cblxuXG5cdFxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgZW1haWwscGFzc3dvcmQ7XG5cdGltcG9ydCB7b25Nb3VudH0gZnJvbSAnc3ZlbHRlJztcblxuXHRvbk1vdW50KGFzeW5jICgpPT57XG5cdFx0dmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcblx0XHRpZih0b2tlbiAmJiB0b2tlbiE9ICdudWxsJylcblx0XHR7XG5cdFx0XHRsb2NhdGlvbi5ocmVmPVwiL2Rhc2hib2FyZFwiO1xuXHRcdH1cblx0fSk7XG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCl7XG5cdGlmKGVtYWlsICYmIHBhc3N3b3JkKVxuXHR7XG5cdFx0Ly8gY29uc3QgcmVzPSBhd2FpdCBmZXRjaCgnbG9naW4uanNvbicse21ldGhvZDonZ2V0J30pO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGxvZ2luUGF0aCsnL2F1dGgvbG9naW4nLHttb2RlOidjb3JzJyxtZXRob2Q6J3Bvc3QnLGhlYWRlcnM6eydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30sYm9keTpKU09OLnN0cmluZ2lmeSh7ZW1haWwscGFzc3dvcmR9KX0pO1xuXHRcdGlmKHJlcy5zdGF0dXM9PTIwMClcblx0XHR7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMuaGVhZGVycyk7XG5cdFx0XHR2YXIgdG9rZW49cmVzLmhlYWRlcnMuZ2V0KCd4dG9rZW4nKTtcblx0XHRcdC8vIGFsZXJ0KHRva2VuKTtcblx0XHRcdGlmKHRva2VuKVxuXHRcdFx0e1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsdG9rZW4pO1xuXHRcdFx0XG5cdFx0XHRcdHZhciB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblx0XHRcdFx0dGV4dCA9IGF3YWl0IEpTT04ucGFyc2UodGV4dCk7XG5cdFx0XHRcdC8vIHVzZXIgPSB0ZXh0LnVzZXI7XG5cdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBcIi9kYXNoYm9hcmRcIjtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJubyB0b2tlbiBwcmVzZW50XCIpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRhbGVydChcIkxvZ2luIEZhaWxlZFwiKTtcblx0XHRcdGNvbnNvbGUubG9nKHJlcy50ZXh0KCkpO1xuXHRcdH1cblx0XHRcblx0fVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0aDEsIGZpZ3VyZSwgcCB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDIuOGVtO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRtYXJnaW46IDAgMCAwLjVlbSAwO1xuXHR9XG5cblx0ZmlndXJlIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdHAge1xuXHRcdG1hcmdpbjogMGVtIGF1dG87XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0XHRoMSB7XG5cdFx0XHRmb250LXNpemU6IDRlbTtcblx0XHR9XG5cdH1cblx0XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5TZW1pbmFyPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT5TZW1pbmFyPC9oMT5cbjxoMj5Mb2dpbjwvaDI+XG5cbjxmb3JtIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD17aGFuZGxlU3VibWl0fSA+XG5cblx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgYmluZDp2YWx1ZT17ZW1haWx9IG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiAvPlxuXHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgYmluZDp2YWx1ZT17cGFzc3dvcmR9IG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiAvPlxuXG5cdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiID5cblxuPC9mb3JtPlxuXG48YSBocmVmPVwiL3JlZ2lzdGVyXCI+UmVnaXN0ZXIgbmV3IHVzZXI8L2E+XG5cbjwhLS0gPHA+PHN0cm9uZz5UcnkgZWRpdGluZyB0aGlzIGZpbGUgKHNyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlKSB0byB0ZXN0IGxpdmUgcmVsb2FkaW5nLnt1c2VybmFtZX0ge3Bhc3N3b3JkfTwvc3Ryb25nPjwvcD4gLS0+XG48IS0tIDxwPnNhYXNkYWQ8L3A+IC0tPlxuXG5cbjxwPmNyZWF0ZWQgYnk6IDxhIGhyZWY9XCJodHRwczovL25lb25lZDcxLmNvbVwiPm5lb25lZDcxPC9hPjwvcD4iXSwibmFtZXMiOlsiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUE4SEksU0FBTzs7O2FBQ1AsT0FBSzs7Ozs7Ozs7OzthQVdXLG1CQUFpQjs7O2NBTWxDLGNBQVk7O2NBQStCLFVBQVE7Ozs7Ozs7Ozs2QkFsQmxELFNBQU87Ozs7OzZCQUNQLE9BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQVdXLG1CQUFpQjs7Ozs7NkJBTWxDLGNBQVk7Ozs4QkFBK0IsVUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWxCdEQsb0JBQWdCOzs7R0FDaEIsb0JBQWM7OztHQUVkLG9CQU9PO0dBTE4sb0JBQXlFO3FDQUExQyxHQUFLOztHQUNwQyxvQkFBc0Y7d0NBQW5ELEdBQVE7O0dBRTNDLG9CQUFvQzs7R0FJckMsb0JBQXlDOzs7R0FNekMsb0JBQThEOztHQUEvQyxvQkFBMkM7Ozs7Ozs7aUVBZjFCLEdBQVk7Ozs7Ozs7eURBRVosR0FBSztzQ0FBTCxHQUFLOzs7K0RBQ0QsR0FBUTt5Q0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhJMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0lBR2YsU0FBUyxHQUFDQSxlQUFHLENBQUMsTUFBTTs7TUFLWixPQUFPLG1CQUFtQixJQUFJLEVBQUUsT0FBTzs7Ozs7Ozs7OztPQTRCekMsS0FBSyxFQUFDLFFBQVE7O0NBR3pCLE9BQU87TUFDRixLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPOztNQUNyQyxLQUFLLElBQUksS0FBSyxJQUFHLE1BQU07R0FFekIsUUFBUSxDQUFDLElBQUksR0FBQyxZQUFZOzs7O2dCQU1QLFlBQVk7TUFDOUIsS0FBSyxJQUFJLFFBQVE7O1NBR2IsR0FBRyxTQUFTLEtBQUssQ0FBQyxTQUFTLEdBQUMsYUFBYTtJQUFFLElBQUksRUFBQyxNQUFNO0lBQUMsTUFBTSxFQUFDLE1BQU07SUFBQyxPQUFPLElBQUUsY0FBYyxFQUFDLGtCQUFrQjtJQUFFLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxHQUFFLEtBQUssRUFBQyxRQUFROzs7T0FDdkosR0FBRyxDQUFDLE1BQU0sSUFBRSxHQUFHO0lBRWpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU87UUFDbkIsS0FBSyxHQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVE7OztRQUUvQixLQUFLO0tBRVAsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUMsS0FBSztTQUU5QixJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUk7S0FDekIsSUFBSSxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7O0tBRTVCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsWUFBWTs7S0FJNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0I7OztJQUsvQixLQUFLLENBQUMsY0FBYztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7RUFtRFMsS0FBSzs7Ozs7RUFDRCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
