import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, p as validate_each_argument, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, c as claim_space, b as detach_dev, F as set_style, j as attr_dev, k as add_location, l as insert_hydration_dev, m as append_hydration_dev, u as set_data_dev, G as empty, q as query_selector_all, n as noop, C as destroy_each } from './client.c0dd0c34.js';
import { s as successkid } from './successkid.d53948a6.js';

/* src/routes/templates/index.svelte generated by Svelte v3.42.4 */
const file = "src/routes/templates/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	return child_ctx;
}

// (120:0) {#each templates as template}
function create_each_block(ctx) {
	let div;
	let t0;
	let t1_value = /*increment_count*/ ctx[1]() + "";
	let t1;
	let t2;
	let h2;
	let t3_value = /*template*/ ctx[6].name + "";
	let t3;
	let t4;
	let h4;
	let t5;
	let t6_value = /*template*/ ctx[6].description + "";
	let t6;
	let t7;
	let p0;
	let t8;
	let t9_value = /*template*/ ctx[6].color + "";
	let t9;
	let t10;
	let p1;
	let t11_value = /*template*/ ctx[6].timestamp + "";
	let t11;
	let t12;
	let hr;
	let t13;

	const block = {
		c: function create() {
			div = element("div");
			t0 = text("#");
			t1 = text(t1_value);
			t2 = space();
			h2 = element("h2");
			t3 = text(t3_value);
			t4 = space();
			h4 = element("h4");
			t5 = text("Description:");
			t6 = text(t6_value);
			t7 = space();
			p0 = element("p");
			t8 = text("Color:");
			t9 = text(t9_value);
			t10 = space();
			p1 = element("p");
			t11 = text(t11_value);
			t12 = space();
			hr = element("hr");
			t13 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t0 = claim_text(div_nodes, "#");
			t1 = claim_text(div_nodes, t1_value);
			t2 = claim_space(div_nodes);
			h2 = claim_element(div_nodes, "H2", { style: true, class: true });
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, t3_value);
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			h4 = claim_element(div_nodes, "H4", { class: true });
			var h4_nodes = children(h4);
			t5 = claim_text(h4_nodes, "Description:");
			t6 = claim_text(h4_nodes, t6_value);
			h4_nodes.forEach(detach_dev);
			t7 = claim_space(div_nodes);
			p0 = claim_element(div_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t8 = claim_text(p0_nodes, "Color:");
			t9 = claim_text(p0_nodes, t9_value);
			p0_nodes.forEach(detach_dev);
			t10 = claim_space(div_nodes);
			p1 = claim_element(div_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t11 = claim_text(p1_nodes, t11_value);
			p1_nodes.forEach(detach_dev);
			t12 = claim_space(div_nodes);
			hr = claim_element(div_nodes, "HR", { class: true });
			t13 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(h2, "--ct-color", /*template*/ ctx[6].color);
			attr_dev(h2, "class", "svelte-1buzu10");
			add_location(h2, file, 122, 1, 1810);
			attr_dev(h4, "class", "svelte-1buzu10");
			add_location(h4, file, 124, 1, 1874);
			attr_dev(p0, "class", "svelte-1buzu10");
			add_location(p0, file, 126, 1, 1921);
			attr_dev(p1, "class", "svelte-1buzu10");
			add_location(p1, file, 127, 1, 1952);
			attr_dev(hr, "class", "svelte-1buzu10");
			add_location(hr, file, 128, 1, 1981);
			attr_dev(div, "class", "item svelte-1buzu10");
			add_location(div, file, 120, 0, 1768);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, t0);
			append_hydration_dev(div, t1);
			append_hydration_dev(div, t2);
			append_hydration_dev(div, h2);
			append_hydration_dev(h2, t3);
			append_hydration_dev(div, t4);
			append_hydration_dev(div, h4);
			append_hydration_dev(h4, t5);
			append_hydration_dev(h4, t6);
			append_hydration_dev(div, t7);
			append_hydration_dev(div, p0);
			append_hydration_dev(p0, t8);
			append_hydration_dev(p0, t9);
			append_hydration_dev(div, t10);
			append_hydration_dev(div, p1);
			append_hydration_dev(p1, t11);
			append_hydration_dev(div, t12);
			append_hydration_dev(div, hr);
			append_hydration_dev(div, t13);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*templates*/ 1 && t3_value !== (t3_value = /*template*/ ctx[6].name + "")) set_data_dev(t3, t3_value);

			if (dirty & /*templates*/ 1) {
				set_style(h2, "--ct-color", /*template*/ ctx[6].color);
			}

			if (dirty & /*templates*/ 1 && t6_value !== (t6_value = /*template*/ ctx[6].description + "")) set_data_dev(t6, t6_value);
			if (dirty & /*templates*/ 1 && t9_value !== (t9_value = /*template*/ ctx[6].color + "")) set_data_dev(t9, t9_value);
			if (dirty & /*templates*/ 1 && t11_value !== (t11_value = /*template*/ ctx[6].timestamp + "")) set_data_dev(t11, t11_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(120:0) {#each templates as template}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let a;
	let t3;
	let t4;
	let hr;
	let t5;
	let each_1_anchor;
	let each_value = /*templates*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Templates!");
			t2 = space();
			a = element("a");
			t3 = text("Create a new Template");
			t4 = space();
			hr = element("hr");
			t5 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-oh6yg0\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Templates!");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			t3 = claim_text(a_nodes, "Create a new Template");
			a_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			hr = claim_element(nodes, "HR", { class: true });
			t5 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h1, "class", "svelte-1buzu10");
			add_location(h1, file, 116, 0, 1658);
			attr_dev(a, "href", "/create_template");
			add_location(a, file, 117, 0, 1680);
			attr_dev(hr, "class", "svelte-1buzu10");
			add_location(hr, file, 118, 0, 1733);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, h1, anchor);
			append_hydration_dev(h1, t1);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, a, anchor);
			append_hydration_dev(a, t3);
			insert_hydration_dev(target, t4, anchor);
			insert_hydration_dev(target, hr, anchor);
			insert_hydration_dev(target, t5, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_hydration_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*templates, increment_count*/ 3) {
				each_value = /*templates*/ ctx[0];
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
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(a);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(hr);
			if (detaching) detach_dev(t5);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
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

var templates = {};

const preload = async function (page, session) {
	var { user } = session;

	// user=JSON.parse(user);
	if (!user) {
		return this.redirect(301, 'login');
	}

	const res = await this.fetch('templates.json', { mode: 'cors', method: 'get' });

	if (res.status == 200) {
		var data = await res.json();

		// console.log(data);
		if (data.status == "success") {
			templates = data.data;
		} else {
			this.error(data.status, data.message); // console.log(templates);
		}
	} // let data = JSON.parse(text);

	// console.log(1);
	return { user, templates };
};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Templates', slots, []);
	let { email, password } = $$props;
	let { user } = $$props;
	let { templates } = $$props;
	let count = 0;

	function increment_count() {
		count++;
		return count;
	}

	const writable_props = ['email', 'password', 'user', 'templates'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Templates> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('email' in $$props) $$invalidate(2, email = $$props.email);
		if ('password' in $$props) $$invalidate(3, password = $$props.password);
		if ('user' in $$props) $$invalidate(4, user = $$props.user);
		if ('templates' in $$props) $$invalidate(0, templates = $$props.templates);
	};

	$$self.$capture_state = () => ({
		templates,
		preload,
		email,
		password,
		user,
		templates,
		count,
		successkid,
		increment_count
	});

	$$self.$inject_state = $$props => {
		if ('email' in $$props) $$invalidate(2, email = $$props.email);
		if ('password' in $$props) $$invalidate(3, password = $$props.password);
		if ('user' in $$props) $$invalidate(4, user = $$props.user);
		if ('templates' in $$props) $$invalidate(0, templates = $$props.templates);
		if ('count' in $$props) count = $$props.count;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [templates, increment_count, email, password, user];
}

class Templates extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			email: 2,
			password: 3,
			user: 4,
			templates: 0
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Templates",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*email*/ ctx[2] === undefined && !('email' in props)) {
			console.warn("<Templates> was created without expected prop 'email'");
		}

		if (/*password*/ ctx[3] === undefined && !('password' in props)) {
			console.warn("<Templates> was created without expected prop 'password'");
		}

		if (/*user*/ ctx[4] === undefined && !('user' in props)) {
			console.warn("<Templates> was created without expected prop 'user'");
		}

		if (/*templates*/ ctx[0] === undefined && !('templates' in props)) {
			console.warn("<Templates> was created without expected prop 'templates'");
		}
	}

	get email() {
		throw new Error("<Templates>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set email(value) {
		throw new Error("<Templates>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get password() {
		throw new Error("<Templates>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set password(value) {
		throw new Error("<Templates>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<Templates>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<Templates>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get templates() {
		throw new Error("<Templates>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set templates(value) {
		throw new Error("<Templates>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Templates as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYWM0MjllNWUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdGVtcGxhdGVzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0dmFyIHRlbXBsYXRlcyA9e307XG5cdC8vIGltcG9ydCB7IFByZWxvYWQgfSBmcm9tIFwiQHNhcHBlci9jb21tb25cIjtcblxuXHRleHBvcnQgY29uc3QgcHJlbG9hZCA9IGFzeW5jIGZ1bmN0aW9uKCBwYWdlLCBzZXNzaW9uKSB7XG5cdFx0dmFyIHsgdXNlciB9ID0gc2Vzc2lvbjtcblx0XHQvLyB1c2VyPUpTT04ucGFyc2UodXNlcik7XG5cdFx0aWYoIXVzZXIpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHRoaXMucmVkaXJlY3QoMzAxLCAnbG9naW4nKTtcblx0XHR9XG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKCd0ZW1wbGF0ZXMuanNvbicse21vZGU6J2NvcnMnLG1ldGhvZDonZ2V0J30pO1xuXHRcdGlmKHJlcy5zdGF0dXM9PTIwMCl7XG5cdFx0XHR2YXIgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdGlmKGRhdGEuc3RhdHVzID09IFwic3VjY2Vzc1wiKVxuXHRcdFx0e1xuXHRcdFx0XHR0ZW1wbGF0ZXMgPSBkYXRhLmRhdGE7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRlbXBsYXRlcyk7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0dGhpcy5lcnJvcihkYXRhLnN0YXR1cyxkYXRhLm1lc3NhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xuXHRcdFx0XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKDEpO1xuXHRcdHJldHVybiB7IHVzZXIsIHRlbXBsYXRlcyB9O1xuXHR9XG5cblxuXHRcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IGVtYWlsLHBhc3N3b3JkO1xuXHRleHBvcnQgbGV0IHVzZXI7XG5cdGV4cG9ydCBsZXQgdGVtcGxhdGVzO1xuXHRsZXQgY291bnQ9MDtcblx0aW1wb3J0IHN1Y2Nlc3NraWQgZnJvbSAnaW1hZ2VzL3N1Y2Nlc3NraWQuanBnJztcblxuXG5cbmZ1bmN0aW9uIGluY3JlbWVudF9jb3VudCgpe1xuXHRjb3VudCsrO1xuXHRyZXR1cm4gY291bnQ7XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRoMSwgZmlndXJlLCBwIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDIuOGVtO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRtYXJnaW46IDVweDtcblx0XHRmb250LWZhbWlseTogJ01vbnRlQ2FybG8nLCBjdXJzaXZlO1xuXHR9XG5cdGg0e1xuXHRcdG1hcmdpbjogNXB4O1xuXHR9XG5cblx0ZmlndXJlIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiA0ZW07XG5cdFx0fVxuXHR9XG5cdC5pdGVte1xuXHRcdHBhZGRpbmc6MTBweDtcblx0XHRkaXNwbGF5OmJsb2NrO1xuXHRcdHdpZHRoOjEwMCU7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdG1hcmdpbjoxcHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXHR9XG5cdC5pdGVtOmhvdmVye1xuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDIwMSwgMjU1KTsgKi9cblx0XHRcblx0fVxuXG5cblx0cHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdG1hcmdpbjowO1xuXHR9XG5cblx0aHJ7XG5cdFx0Y29sb3I6YmxhY2s7XG5cdH1cblxuXHRoMntcblx0XHRjb2xvcjp2YXIoLS1jdC1jb2xvcik7XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlNhcHBlciBwcm9qZWN0IHRlbXBsYXRlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT4gVGVtcGxhdGVzISA8L2gxPlxuPGEgaHJlZj1cIi9jcmVhdGVfdGVtcGxhdGVcIj5DcmVhdGUgYSBuZXcgVGVtcGxhdGU8L2E+XG48aHI+XG57I2VhY2ggdGVtcGxhdGVzIGFzIHRlbXBsYXRlfVxuPGRpdiBjbGFzcz1cIml0ZW1cIj5cblx0I3tpbmNyZW1lbnRfY291bnQoKX1cblx0PGgyIHN0eWxlPVwiLS1jdC1jb2xvcjp7dGVtcGxhdGUuY29sb3J9XCI+e3RlbXBsYXRlLm5hbWV9PC9oMj5cblx0XG5cdDxoND5EZXNjcmlwdGlvbjp7dGVtcGxhdGUuZGVzY3JpcHRpb259PC9oND5cblx0XG5cdDxwPkNvbG9yOnt0ZW1wbGF0ZS5jb2xvcn08L3A+XG5cdDxwPnt0ZW1wbGF0ZS50aW1lc3RhbXB9PC9wPlxuXHQ8aHI+XG48L2Rpdj5cblxuey9lYWNofSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O29DQXlIRyxHQUFlOzs7OzZCQUN3QixHQUFRLElBQUMsSUFBSTs7Ozs7NkJBRXJDLEdBQVEsSUFBQyxXQUFXOzs7Ozs2QkFFM0IsR0FBUSxJQUFDLEtBQUs7Ozs7OEJBQ3BCLEdBQVEsSUFBQyxTQUFTOzs7Ozs7Ozs7YUFQTCxHQUNoQjs7Ozs7OzthQUdHLGNBQVk7Ozs7YUFFYixRQUFNOzs7Ozs7Ozs7Ozs7OzhCQU5RLEdBQ2hCOzs7Ozs7Ozs7OzZCQUdHLGNBQVk7Ozs7Ozs2QkFFYixRQUFNOzs7Ozs7Ozs7Ozs7Ozs7NENBSmMsR0FBUSxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztHQUZ0QyxvQkFTTTs7OztHQVBMLG9CQUE0RDs7O0dBRTVELG9CQUEyQzs7OztHQUUzQyxvQkFBNkI7Ozs7R0FDN0Isb0JBQTJCOzs7R0FDM0Isb0JBQUk7Ozs7d0VBTnFDLEdBQVEsSUFBQyxJQUFJOzs7NkNBQS9CLEdBQVEsSUFBQyxLQUFLOzs7d0VBRXBCLEdBQVEsSUFBQyxXQUFXO3dFQUUzQixHQUFRLElBQUMsS0FBSzswRUFDcEIsR0FBUSxJQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQVJoQixHQUFTOzs7O2dDQUFkLE1BQUk7Ozs7Ozs7O2FBSEYsWUFBWTs7O2FBQ1csdUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRDVDLFlBQVk7Ozs7OzRCQUNXLHVCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBRGhELG9CQUFxQjs7O0dBQ3JCLG9CQUFvRDs7O0dBQ3BELG9CQUFJOzs7Ozs7Ozs7OzsrQkFDRyxHQUFTOzs7OytCQUFkLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF0SEQsU0FBUzs7TUFHQSxPQUFPLG1CQUFtQixJQUFJLEVBQUUsT0FBTztPQUM3QyxJQUFJLEtBQUssT0FBTzs7O01BRWxCLElBQUk7U0FFQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPOzs7T0FHNUIsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLElBQUUsSUFBSSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSzs7S0FDcEUsR0FBRyxDQUFDLE1BQU0sSUFBRSxHQUFHO01BQ2IsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJOzs7TUFFdEIsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTO0dBRTFCLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSTs7R0FLckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxPQUFPOzs7OztVQU01QixJQUFJLEVBQUUsU0FBUzs7Ozs7O09BUWQsS0FBSyxFQUFDLFFBQVE7T0FDZCxJQUFJO09BQ0osU0FBUztLQUNoQixLQUFLLEdBQUMsQ0FBQzs7VUFLSCxlQUFlO0VBQ3ZCLEtBQUs7U0FDRSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
