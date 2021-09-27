import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as globals, v as validate_slots, I as get_store_value, J as onMount, K as ApiUrl, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_hydration_dev, m as append_hydration_dev, z as set_input_value, A as listen_dev, B as prevent_default, n as noop, D as run_all } from './client.05be740d.js';

/* src/routes/register/index.svelte generated by Svelte v3.42.4 */

const { console: console_1 } = globals;
const file = "src/routes/register/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let form;
	let input0;
	let t3;
	let input1;
	let t4;
	let input2;
	let t5;
	let hr;
	let t6;
	let a;
	let t7;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Register for CERTPAD");
			t2 = space();
			form = element("form");
			input0 = element("input");
			t3 = space();
			input1 = element("input");
			t4 = space();
			input2 = element("input");
			t5 = space();
			hr = element("hr");
			t6 = text("\n\nCreated by: ");
			a = element("a");
			t7 = text("neoned71");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-oh6yg0\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Register for CERTPAD");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);

			input0 = claim_element(form_nodes, "INPUT", {
				class: true,
				type: true,
				name: true,
				placeholder: true
			});

			t3 = claim_space(form_nodes);

			input1 = claim_element(form_nodes, "INPUT", {
				class: true,
				type: true,
				name: true,
				placeholder: true
			});

			t4 = claim_space(form_nodes);
			input2 = claim_element(form_nodes, "INPUT", { class: true, type: true });
			form_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			t6 = claim_text(nodes, "\n\nCreated by: ");
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			t7 = claim_text(a_nodes, "neoned71");
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h1, "class", "svelte-1kk9opm");
			add_location(h1, file, 92, 0, 1548);
			attr_dev(input0, "class", "w3-input");
			attr_dev(input0, "type", "text");
			attr_dev(input0, "name", "email");
			attr_dev(input0, "placeholder", "Email Address");
			add_location(input0, file, 96, 1, 1629);
			attr_dev(input1, "class", "w3-input");
			attr_dev(input1, "type", "password");
			attr_dev(input1, "name", "password");
			attr_dev(input1, "placeholder", "Password");
			add_location(input1, file, 97, 1, 1728);
			attr_dev(input2, "class", "w3-button w3-round w3-border");
			attr_dev(input2, "type", "submit");
			input2.value = "Register now";
			add_location(input2, file, 99, 1, 1834);
			add_location(form, file, 94, 0, 1579);
			add_location(hr, file, 102, 0, 1923);
			attr_dev(a, "href", "https://neoned71.com");
			add_location(a, file, 104, 12, 1941);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, h1, anchor);
			append_hydration_dev(h1, t1);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, form, anchor);
			append_hydration_dev(form, input0);
			set_input_value(input0, /*email*/ ctx[0]);
			append_hydration_dev(form, t3);
			append_hydration_dev(form, input1);
			set_input_value(input1, /*password*/ ctx[1]);
			append_hydration_dev(form, t4);
			append_hydration_dev(form, input2);
			insert_hydration_dev(target, t5, anchor);
			insert_hydration_dev(target, hr, anchor);
			insert_hydration_dev(target, t6, anchor);
			insert_hydration_dev(target, a, anchor);
			append_hydration_dev(a, t7);

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
			if (detaching) detach_dev(form);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(hr);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(a);
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

const preload = async function (page, session) {
	
};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Register', slots, []);
	var registerPath = get_store_value(ApiUrl);
	let { email, password } = $$props;

	onMount(async () => {
		var token = localStorage.getItem("token");

		if (token) {
			location.href = "/dashboard";
		}
	});

	async function handleSubmit() {
		if (email && password) {
			// const res= await fetch('login.json',{method:'get'});
			const res = await fetch(registerPath + '/auth/register', {
				mode: 'cors',
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});

			if (res.status == 200) {
				console.log(res.headers);
				var token = res.headers.get('xtoken');
				localStorage.setItem("token", token);
				var text = await res.text();
				text = JSON.parse(text);

				// user = text.user;
				location.href = "/dashboard";
			} else {
				alert("Register Failed");
				console.log(res.text());
			}
		}
	}

	const writable_props = ['email', 'password'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Register> was created with unknown prop '${key}'`);
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
		preload,
		ApiUrl,
		get: get_store_value,
		registerPath,
		email,
		password,
		onMount,
		handleSubmit
	});

	$$self.$inject_state = $$props => {
		if ('registerPath' in $$props) registerPath = $$props.registerPath;
		if ('email' in $$props) $$invalidate(0, email = $$props.email);
		if ('password' in $$props) $$invalidate(1, password = $$props.password);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [email, password, handleSubmit, input0_input_handler, input1_input_handler];
}

class Register extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { email: 0, password: 1, handleSubmit: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Register",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*email*/ ctx[0] === undefined && !('email' in props)) {
			console_1.warn("<Register> was created without expected prop 'email'");
		}

		if (/*password*/ ctx[1] === undefined && !('password' in props)) {
			console_1.warn("<Register> was created without expected prop 'password'");
		}
	}

	get email() {
		throw new Error("<Register>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set email(value) {
		throw new Error("<Register>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get password() {
		throw new Error("<Register>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set password(value) {
		throw new Error("<Register>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get handleSubmit() {
		return this.$$.ctx[2];
	}

	set handleSubmit(value) {
		throw new Error("<Register>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Register as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguM2M3Yjk4NjkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcmVnaXN0ZXIvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRcblx0Ly8gaW1wb3J0IHsgUHJlbG9hZCB9IGZyb20gXCJAc2FwcGVyL2NvbW1vblwiO1xuXG5cdGV4cG9ydCBjb25zdCBwcmVsb2FkID0gYXN5bmMgZnVuY3Rpb24oIHBhZ2UsIHNlc3Npb24pIHtcblx0fVxuXG5cblx0XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHtBcGlVcmx9IGZyb20gJy4uL191dGlscy9zdGF0aWNfc3RvcmUuanMnO1xuXHRpbXBvcnQgeyBnZXQgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuXG5cdHZhciByZWdpc3RlclBhdGg9Z2V0KEFwaVVybCk7XG5cblx0ZXhwb3J0IGxldCBlbWFpbCxwYXNzd29yZDtcblx0aW1wb3J0IHtvbk1vdW50fSBmcm9tICdzdmVsdGUnO1xuXG5cdG9uTW91bnQoYXN5bmMgKCk9Pntcblx0XHR2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuXHRcdGlmKHRva2VuKVxuXHRcdHtcblx0XHRcdGxvY2F0aW9uLmhyZWY9XCIvZGFzaGJvYXJkXCI7XG5cdFx0fVxuXHR9KTtcblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKXtcblx0aWYoZW1haWwgJiYgcGFzc3dvcmQpXG5cdHtcblx0XHQvLyBjb25zdCByZXM9IGF3YWl0IGZldGNoKCdsb2dpbi5qc29uJyx7bWV0aG9kOidnZXQnfSk7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocmVnaXN0ZXJQYXRoKycvYXV0aC9yZWdpc3Rlcicse21vZGU6J2NvcnMnLG1ldGhvZDoncG9zdCcsaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSxib2R5OkpTT04uc3RyaW5naWZ5KHtlbWFpbCxwYXNzd29yZH0pfSk7XG5cdFx0aWYocmVzLnN0YXR1cz09MjAwKVxuXHRcdHtcblx0XHRcdGNvbnNvbGUubG9nKHJlcy5oZWFkZXJzKTtcblx0XHRcdHZhciB0b2tlbj1yZXMuaGVhZGVycy5nZXQoJ3h0b2tlbicpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLHRva2VuKTtcblx0XHRcdFxuXHRcdFx0dmFyIHRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xuXHRcdFx0dGV4dCA9IEpTT04ucGFyc2UodGV4dCk7XG5cdFx0XHQvLyB1c2VyID0gdGV4dC51c2VyO1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9IFwiL2Rhc2hib2FyZFwiO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0YWxlcnQoXCJSZWdpc3RlciBGYWlsZWRcIik7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMudGV4dCgpKTtcblx0XHR9XG5cdFx0XG5cdH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdGgxLCBmaWd1cmUsIHAge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDIuOGVtO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRtYXJnaW46IDAgMCAwLjVlbSAwO1xuXHR9XG5cblx0ZmlndXJlIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdHAge1xuXHRcdG1hcmdpbjogMWVtIGF1dG87XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0XHRoMSB7XG5cdFx0XHRmb250LXNpemU6IDRlbTtcblx0XHR9XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlNhcHBlciBwcm9qZWN0IHRlbXBsYXRlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48aDE+UmVnaXN0ZXIgZm9yIENFUlRQQUQ8L2gxPlxuXG48Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e2hhbmRsZVN1Ym1pdH0gPlxuXG5cdDxpbnB1dCBjbGFzcz1cInczLWlucHV0XCIgdHlwZT1cInRleHRcIiBiaW5kOnZhbHVlPXtlbWFpbH0gbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIvPlxuXHQ8aW5wdXQgY2xhc3M9XCJ3My1pbnB1dFwiIHR5cGU9XCJwYXNzd29yZFwiIGJpbmQ6dmFsdWU9e3Bhc3N3b3JkfSBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cblxuXHQ8aW5wdXQgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtYm9yZGVyXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUmVnaXN0ZXIgbm93XCI+XG5cbjwvZm9ybT5cbjxocj5cblxuQ3JlYXRlZCBieTogPGEgaHJlZj1cImh0dHBzOi8vbmVvbmVkNzEuY29tXCI+bmVvbmVkNzE8L2E+Il0sIm5hbWVzIjpbImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBNEZJLHNCQUFvQjs7Ozs7Ozs7OzthQVVwQixrQkFFUTs7YUFBK0IsVUFBUTs7Ozs7Ozs7OzZCQVovQyxzQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFVcEIsa0JBRVE7Ozs0QkFBK0IsVUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FabkQsb0JBQTZCOzs7R0FFN0Isb0JBT087R0FMTixvQkFBaUc7cUNBQWpELEdBQUs7O0dBQ3JELG9CQUF1Rzt3Q0FBbkQsR0FBUTs7R0FFNUQsb0JBQStFOztHQUdoRixvQkFBSTs7R0FFUSxvQkFBMkM7Ozs7Ozs7aUVBVnZCLEdBQVk7Ozs7Ozs7eURBRUssR0FBSztzQ0FBTCxHQUFLOzs7K0RBQ0QsR0FBUTt5Q0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUE3Ri9DLE9BQU8sbUJBQW1CLElBQUksRUFBRSxPQUFPOzs7Ozs7O0tBV2hELFlBQVksR0FBQ0EsZUFBRyxDQUFDLE1BQU07T0FFaEIsS0FBSyxFQUFDLFFBQVE7O0NBR3pCLE9BQU87TUFDRixLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPOztNQUNyQyxLQUFLO0dBRVAsUUFBUSxDQUFDLElBQUksR0FBQyxZQUFZOzs7O2dCQU1QLFlBQVk7TUFDOUIsS0FBSyxJQUFJLFFBQVE7O1NBR2IsR0FBRyxTQUFTLEtBQUssQ0FBQyxZQUFZLEdBQUMsZ0JBQWdCO0lBQUUsSUFBSSxFQUFDLE1BQU07SUFBQyxNQUFNLEVBQUMsTUFBTTtJQUFDLE9BQU8sSUFBRSxjQUFjLEVBQUMsa0JBQWtCO0lBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLEdBQUUsS0FBSyxFQUFDLFFBQVE7OztPQUM3SixHQUFHLENBQUMsTUFBTSxJQUFFLEdBQUc7SUFFakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTztRQUNuQixLQUFLLEdBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTtJQUNsQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBQyxLQUFLO1FBRTlCLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSTtJQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7SUFFdEIsUUFBUSxDQUFDLElBQUksR0FBRyxZQUFZOztJQUc1QixLQUFLLENBQUMsaUJBQWlCO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUk7Ozs7Ozs7Ozs7OztFQWdEMEIsS0FBSzs7Ozs7RUFDRCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
