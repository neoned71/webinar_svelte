import { I as get_store_value, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as globals, v as validate_slots, J as onMount, K as ApiUrl, T as Token, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_hydration_dev, m as append_hydration_dev, z as set_input_value, A as listen_dev, B as prevent_default, n as noop, D as run_all } from './client.b4cb7a6b.js';

/* src/routes/login/index.svelte generated by Svelte v3.40.2 */

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
			add_location(h1, file, 118, 0, 2052);
			add_location(h2, file, 119, 0, 2069);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "name", "email");
			attr_dev(input0, "placeholder", "email");
			add_location(input0, file, 123, 1, 2135);
			attr_dev(input1, "type", "password");
			attr_dev(input1, "name", "password");
			attr_dev(input1, "placeholder", "password");
			add_location(input1, file, 124, 1, 2210);
			attr_dev(input2, "type", "submit");
			input2.value = "Login";
			add_location(input2, file, 126, 1, 2299);
			add_location(form, file, 121, 0, 2085);
			attr_dev(a0, "href", "/register");
			add_location(a0, file, 130, 0, 2346);
			attr_dev(a1, "href", "https://neoned71.com");
			add_location(a1, file, 136, 15, 2556);
			attr_dev(p, "class", "svelte-1tqvmh4");
			add_location(p, file, 136, 0, 2541);
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
	const res = await this.fetch(loginPath + '/auth/whoami', { mode: 'cors', method: 'get' });

	if (res.status == 200) {
		try {
			var data = await res.json();
			console.log(data);

			if (data.status == "success") {
				this.redirect(301, "/dashboard");
			}
		} catch(e) {
			// this.error(e,data.message);
			console.log(e);
		}
	} // let data = JSON.parse(text);
};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Login', slots, []);
	let { email } = $$props, { password } = $$props;

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
				alert(token);
				localStorage.setItem("token", token);
				var text = await res.text();
				text = await JSON.parse(text);

				// user = text.user;
				location.href = "/dashboard";
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

export default Login;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTEzNGQ2ZGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9naW4vaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHQvLyB2YXIgdXNlcj17fTtcblx0IGltcG9ydCB7QXBpVXJsfSBmcm9tICcuLi9fdXRpbHMvc3RhdGljX3N0b3JlLmpzJztcblx0IGltcG9ydCB7VG9rZW59IGZyb20gJy4uL191dGlscy9keW5hbWljX3N0b3JlLmpzJztcblx0IGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG5cdCBpbXBvcnQgeyBnZXQgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuXG5cdCB2YXIgbG9naW5QYXRoPWdldChBcGlVcmwpO1xuXHQgXG5cdCBcblx0Ly8gaW1wb3J0IHsgUHJlbG9hZCB9IGZyb20gXCJAc2FwcGVyL2NvbW1vblwiO1xuXG5cdGV4cG9ydCBjb25zdCBwcmVsb2FkID0gYXN5bmMgZnVuY3Rpb24oIHBhZ2UsIHNlc3Npb24pIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGxvZ2luUGF0aCsnL2F1dGgvd2hvYW1pJyx7bW9kZTonY29ycycsbWV0aG9kOidnZXQnfSk7XG5cdFx0aWYocmVzLnN0YXR1cz09MjAwKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0dmFyIGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0aWYoZGF0YS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnJlZGlyZWN0KDMwMSxcIi9kYXNoYm9hcmRcIik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRjYXRjaChlKXtcblx0XHRcdFx0Ly8gdGhpcy5lcnJvcihlLGRhdGEubWVzc2FnZSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7XG5cdFx0XHRcblx0XHR9XG5cdH1cblxuXG5cdFxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgZW1haWwscGFzc3dvcmQ7XG5cdGltcG9ydCB7b25Nb3VudH0gZnJvbSAnc3ZlbHRlJztcblxuXHRvbk1vdW50KGFzeW5jICgpPT57XG5cdFx0dmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcblx0XHRpZih0b2tlbiAmJiB0b2tlbiE9ICdudWxsJylcblx0XHR7XG5cdFx0XHRsb2NhdGlvbi5ocmVmPVwiL2Rhc2hib2FyZFwiO1xuXHRcdH1cblx0fSk7XG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCl7XG5cdGlmKGVtYWlsICYmIHBhc3N3b3JkKVxuXHR7XG5cdFx0Ly8gY29uc3QgcmVzPSBhd2FpdCBmZXRjaCgnbG9naW4uanNvbicse21ldGhvZDonZ2V0J30pO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGxvZ2luUGF0aCsnL2F1dGgvbG9naW4nLHttb2RlOidjb3JzJyxtZXRob2Q6J3Bvc3QnLGhlYWRlcnM6eydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30sYm9keTpKU09OLnN0cmluZ2lmeSh7ZW1haWwscGFzc3dvcmR9KX0pO1xuXHRcdGlmKHJlcy5zdGF0dXM9PTIwMClcblx0XHR7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMuaGVhZGVycyk7XG5cdFx0XHR2YXIgdG9rZW49cmVzLmhlYWRlcnMuZ2V0KCd4dG9rZW4nKTtcblx0XHRcdGFsZXJ0KHRva2VuKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIix0b2tlbik7XG5cdFx0XHRcblx0XHRcdHZhciB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblx0XHRcdHRleHQgPSBhd2FpdCBKU09OLnBhcnNlKHRleHQpO1xuXHRcdFx0Ly8gdXNlciA9IHRleHQudXNlcjtcblx0XHRcdGxvY2F0aW9uLmhyZWYgPSBcIi9kYXNoYm9hcmRcIjtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdGFsZXJ0KFwiTG9naW4gRmFpbGVkXCIpO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzLnRleHQoKSk7XG5cdFx0fVxuXHRcdFxuXHR9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRoMSwgZmlndXJlLCBwIHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cblx0aDEge1xuXHRcdGZvbnQtc2l6ZTogMi44ZW07XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XG5cdH1cblxuXHRmaWd1cmUge1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0cCB7XG5cdFx0bWFyZ2luOiAwZW0gYXV0bztcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogNGVtO1xuXHRcdH1cblx0fVxuXHRcbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlNlbWluYXI8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPlNlbWluYXI8L2gxPlxuPGgyPkxvZ2luPC9oMj5cblxuPGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PXtoYW5kbGVTdWJtaXR9ID5cblxuXHQ8aW5wdXQgdHlwZT1cInRleHRcIiBiaW5kOnZhbHVlPXtlbWFpbH0gbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIC8+XG5cdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBiaW5kOnZhbHVlPXtwYXNzd29yZH0gbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIC8+XG5cblx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgPlxuXG48L2Zvcm0+XG5cbjxhIGhyZWY9XCIvcmVnaXN0ZXJcIj5SZWdpc3RlciBuZXcgdXNlcjwvYT5cblxuPCEtLSA8cD48c3Ryb25nPlRyeSBlZGl0aW5nIHRoaXMgZmlsZSAoc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUpIHRvIHRlc3QgbGl2ZSByZWxvYWRpbmcue3VzZXJuYW1lfSB7cGFzc3dvcmR9PC9zdHJvbmc+PC9wPiAtLT5cbjwhLS0gPHA+c2Fhc2RhZDwvcD4gLS0+XG5cblxuPHA+Y3JlYXRlZCBieTogPGEgaHJlZj1cImh0dHBzOi8vbmVvbmVkNzEuY29tXCI+bmVvbmVkNzE8L2E+PC9wPiJdLCJuYW1lcyI6WyJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQXNISSxTQUFPOzs7YUFDUCxPQUFLOzs7Ozs7Ozs7O2FBV1csbUJBQWlCOzs7Y0FNbEMsY0FBWTs7Y0FBK0IsVUFBUTs7Ozs7Ozs7OzZCQWxCbEQsU0FBTzs7Ozs7NkJBQ1AsT0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBV1csbUJBQWlCOzs7Ozs2QkFNbEMsY0FBWTs7OzhCQUErQixVQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbEJ0RCxvQkFBZ0I7OztHQUNoQixvQkFBYzs7O0dBRWQsb0JBT087R0FMTixvQkFBeUU7cUNBQTFDLEdBQUs7O0dBQ3BDLG9CQUFzRjt3Q0FBbkQsR0FBUTs7R0FFM0Msb0JBQW9DOztHQUlyQyxvQkFBeUM7OztHQU16QyxvQkFBOEQ7O0dBQS9DLG9CQUEyQzs7Ozs7OztpRUFmMUIsR0FBWTs7Ozs7Ozt5REFFWixHQUFLO3NDQUFMLEdBQUs7OzsrREFDRCxHQUFRO3lDQUFSLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeEgxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87SUFHZixTQUFTLEdBQUNBLGVBQUcsQ0FBQyxNQUFNOztNQUtaLE9BQU8sbUJBQW1CLElBQUksRUFBRSxPQUFPO09BQzdDLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBQyxjQUFjLElBQUUsSUFBSSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSzs7S0FDNUUsR0FBRyxDQUFDLE1BQU0sSUFBRSxHQUFHOztPQUVaLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSTtHQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7O09BQ2IsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTO0lBRTFCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFDLFlBQVk7O1VBSzFCLENBQUM7O0dBRU4sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7OztPQWFMLEtBQUssZ0JBQUMsUUFBUTs7Q0FHekIsT0FBTztNQUNGLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU87O01BQ3JDLEtBQUssSUFBSSxLQUFLLElBQUcsTUFBTTtHQUV6QixRQUFRLENBQUMsSUFBSSxHQUFDLFlBQVk7Ozs7Z0JBTVAsWUFBWTtNQUM5QixLQUFLLElBQUksUUFBUTs7U0FHYixHQUFHLFNBQVMsS0FBSyxDQUFDLFNBQVMsR0FBQyxhQUFhO0lBQUUsSUFBSSxFQUFDLE1BQU07SUFBQyxNQUFNLEVBQUMsTUFBTTtJQUFDLE9BQU8sSUFBRSxjQUFjLEVBQUMsa0JBQWtCO0lBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLEdBQUUsS0FBSyxFQUFDLFFBQVE7OztPQUN2SixHQUFHLENBQUMsTUFBTSxJQUFFLEdBQUc7SUFFakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTztRQUNuQixLQUFLLEdBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTtJQUNsQyxLQUFLLENBQUMsS0FBSztJQUNYLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFDLEtBQUs7UUFFOUIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJO0lBQ3pCLElBQUksU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7OztJQUU1QixRQUFRLENBQUMsSUFBSSxHQUFHLFlBQVk7O0lBRzVCLEtBQUssQ0FBQyxjQUFjO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUk7Ozs7Ozs7Ozs7OztFQW1EUyxLQUFLOzs7OztFQUNELFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
