import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, p as globals, v as validate_slots, u as bind, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, m as insert_hydration_dev, n as append_hydration_dev, A as set_input_value, B as listen_dev, C as prevent_default, o as noop, E as run_all } from './client.cd0f8950.js';
import { s as successkid } from './successkid.d53948a6.js';

/* src/routes/register/index.svelte generated by Svelte v3.40.2 */

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
	let p;
	let t6;
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
			p = element("p");
			t6 = text("saasdad");
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
				type: true,
				name: true,
				placeholder: true
			});

			t3 = claim_space(form_nodes);

			input1 = claim_element(form_nodes, "INPUT", {
				type: true,
				name: true,
				placeholder: true
			});

			t4 = claim_space(form_nodes);
			input2 = claim_element(form_nodes, "INPUT", { type: true });
			form_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t6 = claim_text(p_nodes, "saasdad");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h1, "class", "svelte-1kk9opm");
			add_location(h1, file, 84, 0, 1568);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "name", "email");
			attr_dev(input0, "placeholder", "Email Address");
			add_location(input0, file, 88, 1, 1649);
			attr_dev(input1, "type", "password");
			attr_dev(input1, "name", "password");
			attr_dev(input1, "placeholder", "Password");
			add_location(input1, file, 89, 1, 1731);
			attr_dev(input2, "type", "submit");
			add_location(input2, file, 91, 1, 1820);
			add_location(form, file, 86, 0, 1599);
			attr_dev(p, "class", "svelte-1kk9opm");
			add_location(p, file, 95, 0, 1852);
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
			insert_hydration_dev(target, p, anchor);
			append_hydration_dev(p, t6);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[4]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[5]),
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

const preload = async function (page, session) {
	const { user } = session;

	if (user) {
		return this.redirect(301, 'dashboard');
	}
}; // console.log(val);
// const res= await this.fetch('login.json',{method:'get'});
// const res = await this.fetch('login.json',{method:'post',headers:{'Content-type':'application/json'},body:JSON.stringify({username:"w",password:"asd"})});
// console.log(res);

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Register', slots, []);
	let { email } = $$props, { password } = $$props;
	let { user } = $$props;

	async function handleSubmit() {
		if (email && password) {
			// const res= await fetch('login.json',{method:'get'});
			const res = await fetch('register.json', {
				mode: 'cors',
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});

			if (res.status == 200) {
				location.href = "/dashboard";
			} else {
				alert("registration failed");
				console.log(res.text);
			}
		}
	}

	const writable_props = ['email', 'password', 'user'];

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
		if ('user' in $$props) $$invalidate(3, user = $$props.user);
	};

	$$self.$capture_state = () => ({
		preload,
		email,
		password,
		user,
		successkid,
		bind,
		handleSubmit
	});

	$$self.$inject_state = $$props => {
		if ('email' in $$props) $$invalidate(0, email = $$props.email);
		if ('password' in $$props) $$invalidate(1, password = $$props.password);
		if ('user' in $$props) $$invalidate(3, user = $$props.user);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		email,
		password,
		handleSubmit,
		user,
		input0_input_handler,
		input1_input_handler
	];
}

class Register extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			email: 0,
			password: 1,
			user: 3,
			handleSubmit: 2
		});

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

		if (/*user*/ ctx[3] === undefined && !('user' in props)) {
			console_1.warn("<Register> was created without expected prop 'user'");
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

	get user() {
		throw new Error("<Register>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<Register>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get handleSubmit() {
		return this.$$.ctx[2];
	}

	set handleSubmit(value) {
		throw new Error("<Register>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Register;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjk5NGJhMDguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcmVnaXN0ZXIvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRcblx0Ly8gaW1wb3J0IHsgUHJlbG9hZCB9IGZyb20gXCJAc2FwcGVyL2NvbW1vblwiO1xuXG5cdGV4cG9ydCBjb25zdCBwcmVsb2FkID0gYXN5bmMgZnVuY3Rpb24oIHBhZ2UsIHNlc3Npb24pIHtcblx0XHRjb25zdCB7IHVzZXJ9ID0gc2Vzc2lvbjtcblx0XHRpZih1c2VyKVxuXHRcdHtcblx0XHRcdHJldHVybiB0aGlzLnJlZGlyZWN0KDMwMSwgJ2Rhc2hib2FyZCcpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZyh2YWwpO1xuXHRcdC8vIGNvbnN0IHJlcz0gYXdhaXQgdGhpcy5mZXRjaCgnbG9naW4uanNvbicse21ldGhvZDonZ2V0J30pO1xuXHRcdC8vIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goJ2xvZ2luLmpzb24nLHttZXRob2Q6J3Bvc3QnLGhlYWRlcnM6eydDb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30sYm9keTpKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6XCJ3XCIscGFzc3dvcmQ6XCJhc2RcIn0pfSk7XG5cdFx0Ly8gY29uc29sZS5sb2cocmVzKTtcblx0XHQvL2NvbnNvbGUubG9nKHJlcyk7XG5cdFx0Ly8gcmV0dXJuIHsgdXNlciB9O1xuXHR9XG5cblxuXHRcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IGVtYWlsLHBhc3N3b3JkO1xuXHRleHBvcnQgbGV0IHVzZXI7XG5cdGltcG9ydCBzdWNjZXNza2lkIGZyb20gJ2ltYWdlcy9zdWNjZXNza2lkLmpwZyc7XG5pbXBvcnQgeyBiaW5kIH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCl7XG5cdGlmKGVtYWlsICYmIHBhc3N3b3JkKVxuXHR7XG5cdFx0Ly8gY29uc3QgcmVzPSBhd2FpdCBmZXRjaCgnbG9naW4uanNvbicse21ldGhvZDonZ2V0J30pO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdyZWdpc3Rlci5qc29uJyx7bW9kZTonY29ycycsbWV0aG9kOidwb3N0JyxoZWFkZXJzOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9LGJvZHk6SlNPTi5zdHJpbmdpZnkoe2VtYWlsLHBhc3N3b3JkfSl9KTtcblx0XHRpZihyZXMuc3RhdHVzPT0yMDApXG5cdFx0e1xuXHRcdFx0bG9jYXRpb24uaHJlZj1cIi9kYXNoYm9hcmRcIjtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdGFsZXJ0KFwicmVnaXN0cmF0aW9uIGZhaWxlZFwiKTtcblx0XHRcdGNvbnNvbGUubG9nKHJlcy50ZXh0KTtcblx0XHR9XG5cdH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdGgxLCBmaWd1cmUsIHAge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDIuOGVtO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRtYXJnaW46IDAgMCAwLjVlbSAwO1xuXHR9XG5cblx0ZmlndXJlIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdHAge1xuXHRcdG1hcmdpbjogMWVtIGF1dG87XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0XHRoMSB7XG5cdFx0XHRmb250LXNpemU6IDRlbTtcblx0XHR9XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlNhcHBlciBwcm9qZWN0IHRlbXBsYXRlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48aDE+UmVnaXN0ZXIgZm9yIENFUlRQQUQ8L2gxPlxuXG48Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e2hhbmRsZVN1Ym1pdH0gPlxuXG5cdDxpbnB1dCB0eXBlPVwidGV4dFwiIGJpbmQ6dmFsdWU9e2VtYWlsfSBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIi8+XG5cdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBiaW5kOnZhbHVlPXtwYXNzd29yZH0gbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG5cblx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIj5cblxuPC9mb3JtPlxuXG48cD5zYWFzZGFkPC9wPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQW9GSSxzQkFBb0I7Ozs7Ozs7Ozs7YUFXckIsU0FBTzs7Ozs7Ozs7OzZCQVhOLHNCQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBV3JCLFNBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQVhWLG9CQUE2Qjs7O0dBRTdCLG9CQU9PO0dBTE4sb0JBQWdGO3FDQUFqRCxHQUFLOztHQUNwQyxvQkFBc0Y7d0NBQW5ELEdBQVE7O0dBRTNDLG9CQUFxQjs7R0FJdEIsb0JBQWM7Ozs7Ozs7aUVBVGtCLEdBQVk7Ozs7Ozs7eURBRVosR0FBSztzQ0FBTCxHQUFLOzs7K0RBQ0QsR0FBUTt5Q0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BckY5QixPQUFPLG1CQUFtQixJQUFJLEVBQUUsT0FBTztTQUMzQyxJQUFJLEtBQUksT0FBTzs7S0FDcEIsSUFBSTtTQUVDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFdBQVc7Ozs7Ozs7Ozs7T0FlNUIsS0FBSyxnQkFBQyxRQUFRO09BQ2QsSUFBSTs7Z0JBS00sWUFBWTtNQUM5QixLQUFLLElBQUksUUFBUTs7U0FHYixHQUFHLFNBQVMsS0FBSyxDQUFDLGVBQWU7SUFBRSxJQUFJLEVBQUMsTUFBTTtJQUFDLE1BQU0sRUFBQyxNQUFNO0lBQUMsT0FBTyxJQUFFLGNBQWMsRUFBQyxrQkFBa0I7SUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRSxLQUFLLEVBQUMsUUFBUTs7O09BQy9JLEdBQUcsQ0FBQyxNQUFNLElBQUUsR0FBRztJQUVqQixRQUFRLENBQUMsSUFBSSxHQUFDLFlBQVk7O0lBSTFCLEtBQUssQ0FBQyxxQkFBcUI7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7O0VBK0NTLEtBQUs7Ozs7O0VBQ0QsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
