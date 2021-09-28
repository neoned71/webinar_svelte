import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as globals, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, H as src_url_equal, F as set_style, l as insert_hydration_dev, m as append_hydration_dev, u as set_data_dev, n as noop } from './client.ad4503a9.js';

/* src/routes/certificate/[slug].svelte generated by Svelte v3.42.4 */

const { console: console_1 } = globals;
const file = "src/routes/certificate/[slug].svelte";

function create_fragment(ctx) {
	let title_value;
	let t0;
	let div3;
	let h10;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let img0;
	let img0_src_value;
	let t5;
	let h20;
	let t6_value = /*certificate*/ ctx[0].issuer.organization + "";
	let t6;
	let t7;
	let span;
	let t8;
	let t9;
	let h21;
	let t10_value = /*certificate*/ ctx[0].name + "";
	let t10;
	let t11;
	let h40;
	let t12;
	let t13;
	let h11;
	let t14_value = /*certificate*/ ctx[0].template.name + "";
	let t14;
	let t15;
	let h41;
	let t16;
	let t17;
	let div2;
	let div0;
	let t18;
	let div1;
	let img1;
	let img1_src_value;
	let t19;
	let hr;
	let t20;
	let p1;
	let t21_value = /*certificate*/ ctx[0].issuer.name + "";
	let t21;
	let t22;
	let p2;
	let t23_value = /*certificate*/ ctx[0].issuer.post + "";
	let t23;
	let t24;
	let p3;
	let t25_value = /*certificate*/ ctx[0].issuer.organization + "";
	let t25;
	document.title = title_value = /*certificate*/ ctx[0].template.name;

	const block = {
		c: function create() {
			t0 = space();
			div3 = element("div");
			h10 = element("h1");
			t1 = text("Certificate");
			t2 = space();
			p0 = element("p");
			t3 = text(/*d*/ ctx[1]);
			t4 = space();
			img0 = element("img");
			t5 = space();
			h20 = element("h2");
			t6 = text(t6_value);
			t7 = space();
			span = element("span");
			t8 = text("This is to certify that");
			t9 = space();
			h21 = element("h2");
			t10 = text(t10_value);
			t11 = space();
			h40 = element("h4");
			t12 = text("has completed");
			t13 = space();
			h11 = element("h1");
			t14 = text(t14_value);
			t15 = space();
			h41 = element("h4");
			t16 = text("with flying colors!!");
			t17 = space();
			div2 = element("div");
			div0 = element("div");
			t18 = space();
			div1 = element("div");
			img1 = element("img");
			t19 = space();
			hr = element("hr");
			t20 = space();
			p1 = element("p");
			t21 = text(t21_value);
			t22 = space();
			p2 = element("p");
			t23 = text(t23_value);
			t24 = space();
			p3 = element("p");
			t25 = text(t25_value);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-1jgxr7s\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true, style: true });
			var div3_nodes = children(div3);
			h10 = claim_element(div3_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t1 = claim_text(h10_nodes, "Certificate");
			h10_nodes.forEach(detach_dev);
			t2 = claim_space(div3_nodes);
			p0 = claim_element(div3_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, /*d*/ ctx[1]);
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(div3_nodes);
			img0 = claim_element(div3_nodes, "IMG", { src: true, alt: true, class: true });
			t5 = claim_space(div3_nodes);
			h20 = claim_element(div3_nodes, "H2", { class: true });
			var h20_nodes = children(h20);
			t6 = claim_text(h20_nodes, t6_value);
			h20_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			span = claim_element(div3_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t8 = claim_text(span_nodes, "This is to certify that");
			span_nodes.forEach(detach_dev);
			t9 = claim_space(div3_nodes);
			h21 = claim_element(div3_nodes, "H2", { class: true });
			var h21_nodes = children(h21);
			t10 = claim_text(h21_nodes, t10_value);
			h21_nodes.forEach(detach_dev);
			t11 = claim_space(div3_nodes);
			h40 = claim_element(div3_nodes, "H4", { class: true });
			var h40_nodes = children(h40);
			t12 = claim_text(h40_nodes, "has completed");
			h40_nodes.forEach(detach_dev);
			t13 = claim_space(div3_nodes);
			h11 = claim_element(div3_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t14 = claim_text(h11_nodes, t14_value);
			h11_nodes.forEach(detach_dev);
			t15 = claim_space(div3_nodes);
			h41 = claim_element(div3_nodes, "H4", { class: true });
			var h41_nodes = children(h41);
			t16 = claim_text(h41_nodes, "with flying colors!!");
			h41_nodes.forEach(detach_dev);
			t17 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			div0_nodes.forEach(detach_dev);
			t18 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img1 = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			t19 = claim_space(div1_nodes);
			hr = claim_element(div1_nodes, "HR", { style: true, class: true });
			t20 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t21 = claim_text(p1_nodes, t21_value);
			p1_nodes.forEach(detach_dev);
			t22 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t23 = claim_text(p2_nodes, t23_value);
			p2_nodes.forEach(detach_dev);
			t24 = claim_space(div1_nodes);
			p3 = claim_element(div1_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t25 = claim_text(p3_nodes, t25_value);
			p3_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h10, "class", "certificate svelte-10cv5wr");
			add_location(h10, file, 134, 1, 2617);
			attr_dev(p0, "class", "straight svelte-10cv5wr");
			add_location(p0, file, 135, 1, 2659);
			if (!src_url_equal(img0.src, img0_src_value = /*certificate*/ ctx[0].issuer.logo)) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "logo");
			attr_dev(img0, "class", "svelte-10cv5wr");
			add_location(img0, file, 137, 1, 2691);
			attr_dev(h20, "class", "organization svelte-10cv5wr");
			add_location(h20, file, 139, 1, 2743);
			attr_dev(span, "class", "cont svelte-10cv5wr");
			add_location(span, file, 141, 1, 2810);
			attr_dev(h21, "class", "straight svelte-10cv5wr");
			add_location(h21, file, 142, 1, 2862);
			attr_dev(h40, "class", "cont svelte-10cv5wr");
			add_location(h40, file, 143, 1, 2909);
			attr_dev(h11, "class", "straight svelte-10cv5wr");
			add_location(h11, file, 144, 1, 2947);
			attr_dev(h41, "class", "cont svelte-10cv5wr");
			add_location(h41, file, 145, 1, 3003);
			attr_dev(div0, "class", "flexit svelte-10cv5wr");
			add_location(div0, file, 148, 2, 3071);
			if (!src_url_equal(img1.src, img1_src_value = /*certificate*/ ctx[0].issuer.signature)) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "logo");
			attr_dev(img1, "class", "svelte-10cv5wr");
			add_location(img1, file, 152, 3, 3193);
			set_style(hr, "color", "black");
			attr_dev(hr, "class", "svelte-10cv5wr");
			add_location(hr, file, 153, 3, 3250);
			attr_dev(p1, "class", "cont svelte-10cv5wr");
			add_location(p1, file, 154, 3, 3278);
			attr_dev(p2, "class", "straight svelte-10cv5wr");
			add_location(p2, file, 156, 3, 3331);
			attr_dev(p3, "class", "straight svelte-10cv5wr");
			add_location(p3, file, 157, 3, 3384);
			attr_dev(div1, "class", "flexit svelte-10cv5wr");
			add_location(div1, file, 151, 2, 3169);
			attr_dev(div2, "class", "flex svelte-10cv5wr");
			add_location(div2, file, 147, 1, 3050);
			attr_dev(div3, "class", "container w3-card  svelte-10cv5wr");
			set_style(div3, "--template-color", /*certificate*/ ctx[0].template.color);
			add_location(div3, file, 133, 0, 2529);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div3, anchor);
			append_hydration_dev(div3, h10);
			append_hydration_dev(h10, t1);
			append_hydration_dev(div3, t2);
			append_hydration_dev(div3, p0);
			append_hydration_dev(p0, t3);
			append_hydration_dev(div3, t4);
			append_hydration_dev(div3, img0);
			append_hydration_dev(div3, t5);
			append_hydration_dev(div3, h20);
			append_hydration_dev(h20, t6);
			append_hydration_dev(div3, t7);
			append_hydration_dev(div3, span);
			append_hydration_dev(span, t8);
			append_hydration_dev(div3, t9);
			append_hydration_dev(div3, h21);
			append_hydration_dev(h21, t10);
			append_hydration_dev(div3, t11);
			append_hydration_dev(div3, h40);
			append_hydration_dev(h40, t12);
			append_hydration_dev(div3, t13);
			append_hydration_dev(div3, h11);
			append_hydration_dev(h11, t14);
			append_hydration_dev(div3, t15);
			append_hydration_dev(div3, h41);
			append_hydration_dev(h41, t16);
			append_hydration_dev(div3, t17);
			append_hydration_dev(div3, div2);
			append_hydration_dev(div2, div0);
			append_hydration_dev(div2, t18);
			append_hydration_dev(div2, div1);
			append_hydration_dev(div1, img1);
			append_hydration_dev(div1, t19);
			append_hydration_dev(div1, hr);
			append_hydration_dev(div1, t20);
			append_hydration_dev(div1, p1);
			append_hydration_dev(p1, t21);
			append_hydration_dev(div1, t22);
			append_hydration_dev(div1, p2);
			append_hydration_dev(p2, t23);
			append_hydration_dev(div1, t24);
			append_hydration_dev(div1, p3);
			append_hydration_dev(p3, t25);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*certificate*/ 1 && title_value !== (title_value = /*certificate*/ ctx[0].template.name)) {
				document.title = title_value;
			}

			if (dirty & /*certificate*/ 1 && !src_url_equal(img0.src, img0_src_value = /*certificate*/ ctx[0].issuer.logo)) {
				attr_dev(img0, "src", img0_src_value);
			}

			if (dirty & /*certificate*/ 1 && t6_value !== (t6_value = /*certificate*/ ctx[0].issuer.organization + "")) set_data_dev(t6, t6_value);
			if (dirty & /*certificate*/ 1 && t10_value !== (t10_value = /*certificate*/ ctx[0].name + "")) set_data_dev(t10, t10_value);
			if (dirty & /*certificate*/ 1 && t14_value !== (t14_value = /*certificate*/ ctx[0].template.name + "")) set_data_dev(t14, t14_value);

			if (dirty & /*certificate*/ 1 && !src_url_equal(img1.src, img1_src_value = /*certificate*/ ctx[0].issuer.signature)) {
				attr_dev(img1, "src", img1_src_value);
			}

			if (dirty & /*certificate*/ 1 && t21_value !== (t21_value = /*certificate*/ ctx[0].issuer.name + "")) set_data_dev(t21, t21_value);
			if (dirty & /*certificate*/ 1 && t23_value !== (t23_value = /*certificate*/ ctx[0].issuer.post + "")) set_data_dev(t23, t23_value);
			if (dirty & /*certificate*/ 1 && t25_value !== (t25_value = /*certificate*/ ctx[0].issuer.organization + "")) set_data_dev(t25, t25_value);

			if (dirty & /*certificate*/ 1) {
				set_style(div3, "--template-color", /*certificate*/ ctx[0].template.color);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div3);
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

async function preload(p, session) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	let params = p.params;

	// console.log("printing:")
	// console.log(p);
	// console.log(session);
	const res = await this.fetch(`/certificate/${params.slug}.json`);

	const data = await res.json();

	if (res.status === 200) {
		// console.log(data.certificate)
		return { certificate: data.certificate };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('U5Bslugu5D', slots, []);
	let { certificate } = $$props;
	let date = new Date(certificate.timestamp);

	let d = new Date(date).toLocaleDateString('en-US', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	});

	let day = date.getDay();
	console.log(certificate.issuer);
	const writable_props = ['certificate'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('certificate' in $$props) $$invalidate(0, certificate = $$props.certificate);
	};

	$$self.$capture_state = () => ({ preload, certificate, date, d, day });

	$$self.$inject_state = $$props => {
		if ('certificate' in $$props) $$invalidate(0, certificate = $$props.certificate);
		if ('date' in $$props) date = $$props.date;
		if ('d' in $$props) $$invalidate(1, d = $$props.d);
		if ('day' in $$props) day = $$props.day;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [certificate, d];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { certificate: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*certificate*/ ctx[0] === undefined && !('certificate' in props)) {
			console_1.warn("<U5Bslugu5D> was created without expected prop 'certificate'");
		}
	}

	get certificate() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set certificate(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { U5Bslugu5D as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLjE2M2NkMGRhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2NlcnRpZmljYXRlL1tzbHVnXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHAsc2Vzc2lvbikge1xuXHRcdC8vIHRoZSBgc2x1Z2AgcGFyYW1ldGVyIGlzIGF2YWlsYWJsZSBiZWNhdXNlXG5cdFx0Ly8gdGhpcyBmaWxlIGlzIGNhbGxlZCBbc2x1Z10uc3ZlbHRlXG5cdFx0bGV0IHBhcmFtcyA9IHAucGFyYW1zO1xuXHRcdC8vIGNvbnNvbGUubG9nKFwicHJpbnRpbmc6XCIpXG5cdFx0Ly8gY29uc29sZS5sb2cocCk7XG5cdFx0Ly8gY29uc29sZS5sb2coc2Vzc2lvbik7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgL2NlcnRpZmljYXRlLyR7cGFyYW1zLnNsdWd9Lmpzb25gKTtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuXHRcdGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEuY2VydGlmaWNhdGUpXG5cdFx0XHRcblx0XHRcdHJldHVybiB7IGNlcnRpZmljYXRlOiBkYXRhLmNlcnRpZmljYXRlIH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZXJyb3IocmVzLnN0YXR1cywgZGF0YS5tZXNzYWdlKTtcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuLy8gaW1wb3J0IHsgdXNlckluZm8gfSBmcm9tIFwib3NcIjtcblxuXG5cdGV4cG9ydCBsZXQgY2VydGlmaWNhdGU7XG5cdGxldCBkYXRlPSBuZXcgRGF0ZShjZXJ0aWZpY2F0ZS50aW1lc3RhbXApO1xuXHRsZXQgZD0gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgZGF5OiAnMi1kaWdpdCcsXG4gIG1vbnRoOiAnMi1kaWdpdCcsXG4gIHllYXI6ICdudW1lcmljJyxcbn0pO1xuXHRsZXQgZGF5PSBkYXRlLmdldERheSgpO1xuXHRcblx0Y29uc29sZS5sb2coY2VydGlmaWNhdGUuaXNzdWVyKTtcblx0XG5cdC8vIGNvbnNvbGUubG9nKHQpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0Kntcblx0XHRjb2xvcjp3aGl0ZTtcblx0fVxuXHQvKlxuXHRcdEJ5IGRlZmF1bHQsIENTUyBpcyBsb2NhbGx5IHNjb3BlZCB0byB0aGUgY29tcG9uZW50LFxuXHRcdGFuZCBhbnkgdW51c2VkIHN0eWxlcyBhcmUgZGVhZC1jb2RlLWVsaW1pbmF0ZWQuXG5cdFx0SW4gdGhpcyBwYWdlLCBTdmVsdGUgY2FuJ3Qga25vdyB3aGljaCBlbGVtZW50cyBhcmVcblx0XHRnb2luZyB0byBhcHBlYXIgaW5zaWRlIHRoZSB7e3twb3N0Lmh0bWx9fX0gYmxvY2ssXG5cdFx0c28gd2UgaGF2ZSB0byB1c2UgdGhlIDpnbG9iYWwoLi4uKSBtb2RpZmllciB0byB0YXJnZXRcblx0XHRhbGwgZWxlbWVudHMgaW5zaWRlIC5jb250ZW50XG5cdCovXG5cdC5jb250ZW50IDpnbG9iYWwoaDIpIHtcblx0XHRmb250LXNpemU6IDEuNGVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdH1cblxuXHQuY29udGVudCA6Z2xvYmFsKHByZSkge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNkZmM1MDI7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcblx0XHRwYWRkaW5nOiAwLjVlbTtcblx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0b3ZlcmZsb3cteDogYXV0bztcblx0fVxuXG5cdC5jb250ZW50IDpnbG9iYWwocHJlKSA6Z2xvYmFsKGNvZGUpIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cblx0LmNvbnRlbnQgOmdsb2JhbCh1bCkge1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdH1cblxuXHQuY29udGVudCA6Z2xvYmFsKGxpKSB7XG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcblx0fVxuXG5cdC5jb250YWluZXJ7XG5cdFx0XG5cdFx0d2lkdGg6MTAwJTtcblx0XHQvKiBib3JkZXI6MXB4IHNvbGlkIHJnYigxNDAsIDE0MCwgMTQwKTsgKi9cblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0bWFyZ2luOjEwcHg7XG5cdFx0cGFkZGluZzogMTBweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcscmdiKDEzNCwgNjAsIDI1MyksdmFyKC0tdGVtcGxhdGUtY29sb3IpKTtcblxuXHR9XG5cdGltZ3tcblx0XHRkaXNwbGF5OmJsb2NrO1xuXHRcdHdpZHRoOjE1MHB4O1xuXHR9XG5cdC5jZXJ0aWZpY2F0ZXtcblx0XHRmb250LXNpemU6IDEyMHB4O1xuXHRcdGZvbnQtZmFtaWx5OiAnTW9udGVDYXJsbycsIGN1cnNpdmU7XG5cdH1cblx0Lm9yZ2FuaXphdGlvbntcblx0XHRjb2xvcjpibGFjaztcblx0XHRmb250LXNpemU6IDgwcHg7XG5cdFx0Zm9udC1mYW1pbHk6ICdNb250ZUNhcmxvJywgY3Vyc2l2ZTtcblx0fVxuXHQuY29udHtcblx0XHRmb250LWZhbWlseTogJ01vbnRlQ2FybG8nLCBjdXJzaXZlO1xuXHRcdGZvbnQtc2l6ZTogMzBweDtcblx0fVxuXHQuc3RyYWlnaHR7XG5cdFx0Zm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcblxuXHRcdC8qIGZvbnQtZmFtaWx5OiAnTW9udGVDYXJsbycsIGN1cnNpdmU7ICovXG5cdH1cblx0LmZsZXh7XG5cdFx0bWFyZ2luLXRvcDogMzBweDtcblx0XHRkaXNwbGF5OmZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cdH1cblx0LmZsZXhpdHtcblx0XHRmbGV4OjE7XG5cdFx0cGFkZGluZzoyMHB4O1xuXHR9XG5cdHB7XG5cdFx0d2lkdGg6MTAwJTtcblx0XHRtYXJnaW46MDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPntjZXJ0aWZpY2F0ZS50ZW1wbGF0ZS5uYW1lfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXIgdzMtY2FyZCBcIiBzdHlsZT1cIi0tdGVtcGxhdGUtY29sb3I6e2NlcnRpZmljYXRlLnRlbXBsYXRlLmNvbG9yfVwiPlxuXHQ8aDEgY2xhc3M9XCJjZXJ0aWZpY2F0ZVwiPkNlcnRpZmljYXRlPC9oMT5cblx0PHAgY2xhc3M9XCJzdHJhaWdodFwiPntkIH08L3A+XG5cdFxuXHQ8aW1nIHNyYz17Y2VydGlmaWNhdGUuaXNzdWVyLmxvZ299IGFsdD1cImxvZ29cIiAvPlxuXHRcblx0PGgyIGNsYXNzPVwib3JnYW5pemF0aW9uXCI+e2NlcnRpZmljYXRlLmlzc3Vlci5vcmdhbml6YXRpb259PC9oMj5cblx0XG5cdDxzcGFuIGNsYXNzPVwiY29udFwiID5UaGlzIGlzIHRvIGNlcnRpZnkgdGhhdDwvc3Bhbj5cblx0PGgyIGNsYXNzPVwic3RyYWlnaHRcIiA+e2NlcnRpZmljYXRlLm5hbWV9PC9oMj5cblx0PGg0IGNsYXNzPVwiY29udFwiID5oYXMgY29tcGxldGVkPC9oND5cblx0PGgxIGNsYXNzPVwic3RyYWlnaHRcIiA+e2NlcnRpZmljYXRlLnRlbXBsYXRlLm5hbWV9PC9oMT5cblx0PGg0IGNsYXNzPVwiY29udFwiID53aXRoIGZseWluZyBjb2xvcnMhITwvaDQ+XG5cdFxuXHQ8ZGl2IGNsYXNzPVwiZmxleFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJmbGV4aXRcIj5cblx0XHRcdDwhLS0gPGltZyBzcmM9e2NlcnRpZmljYXRlLmlzc3Vlci5zaWduYXR1cmV9IGFsdD1cImxvZ29cIiAvPiAtLT5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiZmxleGl0XCI+XG5cdFx0XHQ8aW1nIHNyYz17Y2VydGlmaWNhdGUuaXNzdWVyLnNpZ25hdHVyZX0gYWx0PVwibG9nb1wiIC8+XG5cdFx0XHQ8aHIgc3R5bGU9XCJjb2xvcjpibGFja1wiPlxuXHRcdFx0PHAgY2xhc3M9XCJjb250XCI+e2NlcnRpZmljYXRlLmlzc3Vlci5uYW1lfTwvcD5cblx0XHRcdFxuXHRcdFx0PHAgY2xhc3M9XCJzdHJhaWdodFwiPntjZXJ0aWZpY2F0ZS5pc3N1ZXIucG9zdH08L3A+XG5cdFx0XHQ8cCBjbGFzcz1cInN0cmFpZ2h0XCI+e2NlcnRpZmljYXRlLmlzc3Vlci5vcmdhbml6YXRpb259PC9wPlxuXHRcdFx0XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHQ8IS0tIDxoMT57Y2VydGlmaWNhdGUudGVtcGxhdGUubmFtZX08L2gxPiAtLT5cblx0XG5cdFxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQTJJMkIsR0FBVyxJQUFDLE1BQU0sQ0FBQyxZQUFZOzs7Ozs7O2lDQUdsQyxHQUFXLElBQUMsSUFBSTs7Ozs7OztpQ0FFaEIsR0FBVyxJQUFDLFFBQVEsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O2lDQVU3QixHQUFXLElBQUMsTUFBTSxDQUFDLElBQUk7Ozs7aUNBRW5CLEdBQVcsSUFBQyxNQUFNLENBQUMsSUFBSTs7OztpQ0FDdkIsR0FBVyxJQUFDLE1BQU0sQ0FBQyxZQUFZOztnREE1QjlDLEdBQVcsSUFBQyxRQUFRLENBQUMsSUFBSTs7Ozs7OzthQUtULGFBQVc7OzttQkFDZCxHQUFDOzs7Ozs7OzthQU1GLHlCQUF1Qjs7Ozs7O2NBRXpCLGVBQWE7Ozs7OztjQUViLHNCQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFYZCxhQUFXOzs7OzttQ0FDZCxHQUFDOzs7Ozs7Ozs7Ozs7K0JBTUYseUJBQXVCOzs7Ozs7Ozs7OytCQUV6QixlQUFhOzs7Ozs7Ozs7OytCQUViLHNCQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lFQVI1QixHQUFXLElBQUMsTUFBTSxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRUFlckIsR0FBVyxJQUFDLE1BQU0sQ0FBQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dURBbkJnQixHQUFXLElBQUMsUUFBUSxDQUFDLEtBQUs7Ozs7O0dBQW5GLG9CQStCTTtHQTlCTCxvQkFBd0M7OztHQUN4QyxvQkFBNEI7OztHQUU1QixvQkFBZ0Q7O0dBRWhELG9CQUErRDs7O0dBRS9ELG9CQUFrRDs7O0dBQ2xELG9CQUE2Qzs7O0dBQzdDLG9CQUFvQzs7O0dBQ3BDLG9CQUFzRDs7O0dBQ3RELG9CQUEyQzs7O0dBRTNDLG9CQWFNO0dBWkwsb0JBRU07O0dBQ04sb0JBUU07R0FQTCxvQkFBcUQ7O0dBQ3JELG9CQUF3Qjs7R0FDeEIsb0JBQTZDOzs7R0FFN0Msb0JBQWlEOzs7R0FDakQsb0JBQXlEOzs7O21GQTVCbkQsR0FBVyxJQUFDLFFBQVEsQ0FBQyxJQUFJOzs7OzhGQVF2QixHQUFXLElBQUMsTUFBTSxDQUFDLElBQUk7Ozs7NkVBRVAsR0FBVyxJQUFDLE1BQU0sQ0FBQyxZQUFZOytFQUdsQyxHQUFXLElBQUMsSUFBSTsrRUFFaEIsR0FBVyxJQUFDLFFBQVEsQ0FBQyxJQUFJOzs4RkFRcEMsR0FBVyxJQUFDLE1BQU0sQ0FBQyxTQUFTOzs7OytFQUVyQixHQUFXLElBQUMsTUFBTSxDQUFDLElBQUk7K0VBRW5CLEdBQVcsSUFBQyxNQUFNLENBQUMsSUFBSTsrRUFDdkIsR0FBVyxJQUFDLE1BQU0sQ0FBQyxZQUFZOzs7d0RBeEJFLEdBQVcsSUFBQyxRQUFRLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXBJNUQsT0FBTyxDQUFDLENBQUMsRUFBQyxPQUFPOzs7S0FHbEMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNOzs7OztPQUlmLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxpQkFBaUIsTUFBTSxDQUFDLElBQUk7O09BQ2xELElBQUksU0FBUyxHQUFHLENBQUMsSUFBSTs7S0FFdkIsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHOztXQUdaLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVzs7RUFFdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPOzs7Ozs7O09BUzFCLFdBQVc7S0FDbEIsSUFBSSxPQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUzs7S0FDcEMsQ0FBQyxPQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsT0FBTztFQUMvQyxHQUFHLEVBQUUsU0FBUztFQUNkLEtBQUssRUFBRSxTQUFTO0VBQ2hCLElBQUksRUFBRSxTQUFTOzs7S0FFWixHQUFHLEdBQUUsSUFBSSxDQUFDLE1BQU07Q0FFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
