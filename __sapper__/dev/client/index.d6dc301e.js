import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, p as validate_each_argument, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, F as set_style, k as add_location, j as attr_dev, l as insert_hydration_dev, m as append_hydration_dev, u as set_data_dev, G as empty, q as query_selector_all, n as noop, C as destroy_each } from './client.ee5a4e80.js';

/* src/routes/certificates/index.svelte generated by Svelte v3.42.4 */

const file = "src/routes/certificates/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (101:0) {#each certificates as certificate}
function create_each_block(ctx) {
	let a;
	let h2;
	let t0_value = /*certificate*/ ctx[2].name + "";
	let t0;
	let t1;
	let p0;
	let t2_value = /*certificate*/ ctx[2].timestamp + "";
	let t2;
	let t3;
	let p1;
	let t4;
	let t5_value = /*certificate*/ ctx[2].template.name + "";
	let t5;
	let t6;
	let a_href_value;

	const block = {
		c: function create() {
			a = element("a");
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			p0 = element("p");
			t2 = text(t2_value);
			t3 = space();
			p1 = element("p");
			t4 = text("Template: ");
			t5 = text(t5_value);
			t6 = space();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			h2 = claim_element(a_nodes, "H2", { style: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(a_nodes);
			p0 = claim_element(a_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, t2_value);
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(a_nodes);
			p1 = claim_element(a_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Template: ");
			t5 = claim_text(p1_nodes, t5_value);
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(h2, "color", /*certificate*/ ctx[2].template.color);
			add_location(h2, file, 102, 1, 1718);
			attr_dev(p0, "class", "svelte-81fneq");
			add_location(p0, file, 103, 1, 1790);
			attr_dev(p1, "class", "svelte-81fneq");
			add_location(p1, file, 104, 2, 1823);
			attr_dev(a, "href", a_href_value = "certificate/" + /*certificate*/ ctx[2]._id);
			attr_dev(a, "class", "item w3-hover-shadow w3-margin w3-round svelte-81fneq");
			add_location(a, file, 101, 0, 1628);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, a, anchor);
			append_hydration_dev(a, h2);
			append_hydration_dev(h2, t0);
			append_hydration_dev(a, t1);
			append_hydration_dev(a, p0);
			append_hydration_dev(p0, t2);
			append_hydration_dev(a, t3);
			append_hydration_dev(a, p1);
			append_hydration_dev(p1, t4);
			append_hydration_dev(p1, t5);
			append_hydration_dev(a, t6);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*certificates*/ 1 && t0_value !== (t0_value = /*certificate*/ ctx[2].name + "")) set_data_dev(t0, t0_value);

			if (dirty & /*certificates*/ 1) {
				set_style(h2, "color", /*certificate*/ ctx[2].template.color);
			}

			if (dirty & /*certificates*/ 1 && t2_value !== (t2_value = /*certificate*/ ctx[2].timestamp + "")) set_data_dev(t2, t2_value);
			if (dirty & /*certificates*/ 1 && t5_value !== (t5_value = /*certificate*/ ctx[2].template.name + "")) set_data_dev(t5, t5_value);

			if (dirty & /*certificates*/ 1 && a_href_value !== (a_href_value = "certificate/" + /*certificate*/ ctx[2]._id)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(101:0) {#each certificates as certificate}",
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
	let each_value = /*certificates*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Certificates!");
			t2 = space();
			a = element("a");
			t3 = text("Create a new Certificate");
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
			const head_nodes = query_selector_all('[data-svelte=\"svelte-5dngc9\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Certificates!");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			t3 = claim_text(a_nodes, "Create a new Certificate");
			a_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			t5 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project certificate";
			attr_dev(h1, "class", "svelte-81fneq");
			add_location(h1, file, 96, 0, 1502);
			attr_dev(a, "href", "/create_certificate");
			add_location(a, file, 98, 0, 1528);
			add_location(hr, file, 99, 0, 1587);
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
			if (dirty & /*certificates*/ 1) {
				each_value = /*certificates*/ ctx[0];
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

var certificates = {};

const preload = async function (page, session) {
	var { user } = session;

	// user=JSON.parse(user);
	if (!user) {
		return this.redirect(301, 'login');
	}

	const res = await this.fetch('certificates.json', { mode: 'cors', method: 'get' });

	if (res.status == 200) {
		var data = await res.json();

		// console.log(data);
		if (data.status == "success") {
			certificates = data.data;
		} else {
			this.error(data.status, data.message); // console.log(certificates);
		}
	} // let data = JSON.parse(text);

	// console.log(1);
	return { user, certificates };
};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Certificates', slots, []);
	let { user } = $$props;
	let { certificates } = $$props;
	const writable_props = ['user', 'certificates'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Certificates> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('user' in $$props) $$invalidate(1, user = $$props.user);
		if ('certificates' in $$props) $$invalidate(0, certificates = $$props.certificates);
	};

	$$self.$capture_state = () => ({
		certificates,
		preload,
		user,
		certificates
	});

	$$self.$inject_state = $$props => {
		if ('user' in $$props) $$invalidate(1, user = $$props.user);
		if ('certificates' in $$props) $$invalidate(0, certificates = $$props.certificates);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [certificates, user];
}

class Certificates extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { user: 1, certificates: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Certificates",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*user*/ ctx[1] === undefined && !('user' in props)) {
			console.warn("<Certificates> was created without expected prop 'user'");
		}

		if (/*certificates*/ ctx[0] === undefined && !('certificates' in props)) {
			console.warn("<Certificates> was created without expected prop 'certificates'");
		}
	}

	get user() {
		throw new Error("<Certificates>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<Certificates>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get certificates() {
		throw new Error("<Certificates>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set certificates(value) {
		throw new Error("<Certificates>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Certificates as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZDZkYzMwMWUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY2VydGlmaWNhdGVzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0dmFyIGNlcnRpZmljYXRlcyA9e307XG5cdC8vIGltcG9ydCB7IFByZWxvYWQgfSBmcm9tIFwiQHNhcHBlci9jb21tb25cIjtcblxuXHRleHBvcnQgY29uc3QgcHJlbG9hZCA9IGFzeW5jIGZ1bmN0aW9uKCBwYWdlLCBzZXNzaW9uKSB7XG5cdFx0dmFyIHsgdXNlciB9ID0gc2Vzc2lvbjtcblx0XHQvLyB1c2VyPUpTT04ucGFyc2UodXNlcik7XG5cdFx0aWYoIXVzZXIpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHRoaXMucmVkaXJlY3QoMzAxLCAnbG9naW4nKTtcblx0XHR9XG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKCdjZXJ0aWZpY2F0ZXMuanNvbicse21vZGU6J2NvcnMnLG1ldGhvZDonZ2V0J30pO1xuXHRcdGlmKHJlcy5zdGF0dXM9PTIwMCl7XG5cdFx0XHR2YXIgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdGlmKGRhdGEuc3RhdHVzID09IFwic3VjY2Vzc1wiKVxuXHRcdFx0e1xuXHRcdFx0XHRjZXJ0aWZpY2F0ZXMgPSBkYXRhLmRhdGE7XG5cblx0XHRcdFx0Ly8gY29uc29sZS5sb2coY2VydGlmaWNhdGVzKTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHR0aGlzLmVycm9yKGRhdGEuc3RhdHVzLGRhdGEubWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7XG5cdFx0XHRcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2coMSk7XG5cdFx0cmV0dXJuIHsgdXNlciwgY2VydGlmaWNhdGVzIH07XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXG5cblxuXHRleHBvcnQgbGV0IHVzZXI7XG5cdGV4cG9ydCBsZXQgY2VydGlmaWNhdGVzO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0aDEsIGZpZ3VyZSwgcCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbjogMDtcblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDIuOGVtO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRtYXJnaW46NXB4O1xuXHRcdGZvbnQtZmFtaWx5OiAnTW9udGVDYXJsbycsIGN1cnNpdmU7XG5cdH1cblxuXHRmaWd1cmUge1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiA0ZW07XG5cdFx0fVxuXHR9XG5cblx0Lml0ZW17XG5cdFx0cGFkZGluZzoxMHB4O1xuXHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0d2lkdGg6MTAwJTtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0bWFyZ2luOjFweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cdH1cblx0Lml0ZW06aG92ZXJ7XG5cdFx0LyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgMjAxLCAyNTUpOyAqL1xuXHRcdGN1cnNvcjpwb2ludGVyO1xuXHR9XG5cdHB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5TYXBwZXIgcHJvamVjdCBjZXJ0aWZpY2F0ZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+IENlcnRpZmljYXRlcyEgPC9oMT5cblxuPGEgaHJlZj1cIi9jcmVhdGVfY2VydGlmaWNhdGVcIj5DcmVhdGUgYSBuZXcgQ2VydGlmaWNhdGU8L2E+XG48aHI+XG57I2VhY2ggY2VydGlmaWNhdGVzIGFzIGNlcnRpZmljYXRlfVxuPGEgaHJlZj1cImNlcnRpZmljYXRlL3tjZXJ0aWZpY2F0ZS5faWR9XCIgY2xhc3M9XCJpdGVtIHczLWhvdmVyLXNoYWRvdyB3My1tYXJnaW4gdzMtcm91bmRcIj5cblx0PGgyIHN0eWxlPVwiY29sb3I6e2NlcnRpZmljYXRlLnRlbXBsYXRlLmNvbG9yfVwiPntjZXJ0aWZpY2F0ZS5uYW1lfTwvaDI+XG5cdDxwPntjZXJ0aWZpY2F0ZS50aW1lc3RhbXB9PC9wPlxuXHRcdDxwPlRlbXBsYXRlOiB7Y2VydGlmaWNhdGUudGVtcGxhdGUubmFtZX08L3A+XG48L2E+XG57L2VhY2h9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBc0dpRCxHQUFXLElBQUMsSUFBSTs7OztnQ0FDNUQsR0FBVyxJQUFDLFNBQVM7Ozs7O2dDQUNWLEdBQVcsSUFBQyxRQUFRLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O2FBQXBDLFlBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUFWLFlBQVU7Ozs7Ozs7OzBDQUZJLEdBQVcsSUFBQyxRQUFRLENBQUMsS0FBSzs7Ozs7O3VFQUR2QixHQUFXLElBQUMsR0FBRzs7Ozs7R0FBckMsb0JBSUk7R0FISCxvQkFBc0U7OztHQUN0RSxvQkFBOEI7OztHQUM3QixvQkFBNEM7Ozs7Ozs4RUFGRyxHQUFXLElBQUMsSUFBSTs7OzJDQUE5QyxHQUFXLElBQUMsUUFBUSxDQUFDLEtBQUs7Ozs4RUFDeEMsR0FBVyxJQUFDLFNBQVM7OEVBQ1YsR0FBVyxJQUFDLFFBQVEsQ0FBQyxJQUFJOzt1R0FIbkIsR0FBVyxJQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBRDlCLEdBQVk7Ozs7Z0NBQWpCLE1BQUk7Ozs7Ozs7O2FBSkYsZUFBZTs7O2FBRVcsMEJBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRmxELGVBQWU7Ozs7OzRCQUVXLDBCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FGdEQsb0JBQXdCOzs7R0FFeEIsb0JBQTBEOzs7R0FDMUQsb0JBQUk7Ozs7Ozs7Ozs7O2tDQUNHLEdBQVk7Ozs7K0JBQWpCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFuR0QsWUFBWTs7TUFHSCxPQUFPLG1CQUFtQixJQUFJLEVBQUUsT0FBTztPQUM3QyxJQUFJLEtBQUssT0FBTzs7O01BRWxCLElBQUk7U0FFQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPOzs7T0FHNUIsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLElBQUUsSUFBSSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSzs7S0FDdkUsR0FBRyxDQUFDLE1BQU0sSUFBRSxHQUFHO01BQ2IsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJOzs7TUFFdEIsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTO0dBRTFCLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSTs7R0FNeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxPQUFPOzs7OztVQU01QixJQUFJLEVBQUUsWUFBWTs7Ozs7O09BUWpCLElBQUk7T0FDSixZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
