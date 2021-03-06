import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_hydration_dev, m as append_hydration_dev, n as noop } from './client.f2b73689.js';

/* src/routes/index.svelte generated by Svelte v3.44.0 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let figure;
	let figcaption;
	let t3;
	let t4;
	let p;
	let strong;
	let t5;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Great success!");
			t2 = space();
			figure = element("figure");
			figcaption = element("figcaption");
			t3 = text("Have fun with Sapper!");
			t4 = space();
			p = element("p");
			strong = element("strong");
			t5 = text("Try editing this file (src/routes/index.svelte) to test live reloading.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-oh6yg0\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Great success!");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			figure = claim_element(nodes, "FIGURE", { class: true });
			var figure_nodes = children(figure);
			figcaption = claim_element(figure_nodes, "FIGCAPTION", {});
			var figcaption_nodes = children(figcaption);
			t3 = claim_text(figcaption_nodes, "Have fun with Sapper!");
			figcaption_nodes.forEach(detach_dev);
			figure_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			strong = claim_element(p_nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t5 = claim_text(strong_nodes, "Try editing this file (src/routes/index.svelte) to test live reloading.");
			strong_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h1, "class", "svelte-1kk9opm");
			add_location(h1, file, 49, 0, 648);
			add_location(figcaption, file, 53, 1, 736);
			attr_dev(figure, "class", "svelte-1kk9opm");
			add_location(figure, file, 51, 0, 673);
			add_location(strong, file, 56, 3, 797);
			attr_dev(p, "class", "svelte-1kk9opm");
			add_location(p, file, 56, 0, 794);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, h1, anchor);
			append_hydration_dev(h1, t1);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, figure, anchor);
			append_hydration_dev(figure, figcaption);
			append_hydration_dev(figcaption, t3);
			insert_hydration_dev(target, t4, anchor);
			insert_hydration_dev(target, p, anchor);
			append_hydration_dev(p, strong);
			append_hydration_dev(strong, t5);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(figure);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(p);
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
	this.redirect(301, "/dashboard");
};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Routes', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ preload });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export { Routes as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZjJlOWFkZmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXG5leHBvcnQgY29uc3QgcHJlbG9hZCA9IGFzeW5jIGZ1bmN0aW9uKCBwYWdlLCBzZXNzaW9uKSB7XG5cdFx0dGhpcy5yZWRpcmVjdCgzMDEsXCIvZGFzaGJvYXJkXCIpO1xuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0Ly8gaW1wb3J0IHN1Y2Nlc3NraWQgZnJvbSAnaW1hZ2VzL3N1Y2Nlc3NraWQuanBnJztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdGgxLCBmaWd1cmUsIHAge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDIuOGVtO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRtYXJnaW46IDAgMCAwLjVlbSAwO1xuXHR9XG5cblx0ZmlndXJlIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdHAge1xuXHRcdG1hcmdpbjogMWVtIGF1dG87XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0XHRoMSB7XG5cdFx0XHRmb250LXNpemU6IDRlbTtcblx0XHR9XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlNhcHBlciBwcm9qZWN0IHRlbXBsYXRlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT5HcmVhdCBzdWNjZXNzITwvaDE+XG5cbjxmaWd1cmU+XG5cdDwhLS0gPGltZyBhbHQ9XCJTdWNjZXNzIEtpZFwiIHNyYz1cIntzdWNjZXNza2lkfVwiPiAtLT5cblx0PGZpZ2NhcHRpb24+SGF2ZSBmdW4gd2l0aCBTYXBwZXIhPC9maWdjYXB0aW9uPlxuPC9maWd1cmU+XG5cbjxwPjxzdHJvbmc+VHJ5IGVkaXRpbmcgdGhpcyBmaWxlIChzcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSkgdG8gdGVzdCBsaXZlIHJlbG9hZGluZy48L3N0cm9uZz48L3A+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFpREksZ0JBQWM7Ozs7YUFJTCx1QkFBcUI7Ozs7YUFHdkIseUVBQXVFOzs7Ozs7Ozs7NkJBUDlFLGdCQUFjOzs7Ozs7O3FDQUlMLHVCQUFxQjs7Ozs7Ozs7aUNBR3ZCLHlFQUF1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBUGxGLG9CQUF1Qjs7O0dBRXZCLG9CQUdTO0dBRFIsb0JBQThDOzs7R0FHL0Msb0JBQStGO0dBQTVGLG9CQUF3Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BdEQ5RSxPQUFPLG1CQUFtQixJQUFJLEVBQUUsT0FBTztDQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
