import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as globals, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, k as add_location, j as attr_dev, H as src_url_equal, F as set_style, l as insert_hydration_dev, m as append_hydration_dev, A as listen_dev, u as set_data_dev, n as noop, D as run_all, L as binding_callbacks, z as set_input_value, B as prevent_default } from './client.be204b93.js';

/* eslint-env browser */
var browser = typeof self == 'object' ? self.FormData : window.FormData;

/* src/routes/_utils/imageUpload.svelte generated by Svelte v3.42.4 */

const { console: console_1$1 } = globals;
const file$1 = "src/routes/_utils/imageUpload.svelte";

// (47:8) {:else}
function create_else_block(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { class: true, src: true, alt: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "avatar svelte-16mpme9");
			if (!src_url_equal(img.src, img_src_value = "/images/blank.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			add_location(img, file$1, 47, 8, 1052);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(47:8) {:else}",
		ctx
	});

	return block;
}

// (45:8) {#if avatar}
function create_if_block(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { class: true, src: true, alt: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "avatar svelte-16mpme9");
			if (!src_url_equal(img.src, img_src_value = /*avatar*/ ctx[0])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			add_location(img, file$1, 45, 8, 983);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*avatar*/ 1 && !src_url_equal(img.src, img_src_value = /*avatar*/ ctx[0])) {
				attr_dev(img, "src", img_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(45:8) {#if avatar}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div1;
	let h4;
	let t0;
	let t1;
	let t2;
	let t3;
	let img;
	let img_src_value;
	let t4;
	let div0;
	let t5;
	let t6;
	let input;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*avatar*/ ctx[0]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			h4 = element("h4");
			t0 = text(/*name*/ ctx[1]);
			t1 = text(" for the certificates");
			t2 = space();
			if_block.c();
			t3 = space();
			img = element("img");
			t4 = space();
			div0 = element("div");
			t5 = text("Choose Image");
			t6 = space();
			input = element("input");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { id: true, class: true });
			var div1_nodes = children(div1);
			h4 = claim_element(div1_nodes, "H4", {});
			var h4_nodes = children(h4);
			t0 = claim_text(h4_nodes, /*name*/ ctx[1]);
			t1 = claim_text(h4_nodes, " for the certificates");
			h4_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			if_block.l(div1_nodes);
			t3 = claim_space(div1_nodes);
			img = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
			t4 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t5 = claim_text(div0_nodes, "Choose Image");
			div0_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			input = claim_element(div1_nodes, "INPUT", { style: true, type: true, accept: true });
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h4, file$1, 42, 1, 914);
			attr_dev(img, "class", "upload svelte-16mpme9");
			if (!src_url_equal(img.src, img_src_value = "https://static.thenounproject.com/png/625182-200.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			add_location(img, file$1, 49, 4, 1125);
			attr_dev(div0, "class", "chan");
			add_location(div0, file$1, 50, 8, 1258);
			set_style(input, "display", "none");
			attr_dev(input, "type", "file");
			attr_dev(input, "accept", ".jpg, .jpeg, .png");
			add_location(input, file$1, 51, 8, 1339);
			attr_dev(div1, "id", "app");
			attr_dev(div1, "class", "svelte-16mpme9");
			add_location(div1, file$1, 41, 0, 898);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div1, anchor);
			append_hydration_dev(div1, h4);
			append_hydration_dev(h4, t0);
			append_hydration_dev(h4, t1);
			append_hydration_dev(div1, t2);
			if_block.m(div1, null);
			append_hydration_dev(div1, t3);
			append_hydration_dev(div1, img);
			append_hydration_dev(div1, t4);
			append_hydration_dev(div1, div0);
			append_hydration_dev(div0, t5);
			append_hydration_dev(div1, t6);
			append_hydration_dev(div1, input);
			/*input_binding*/ ctx[7](input);

			if (!mounted) {
				dispose = [
					listen_dev(img, "click", /*click_handler*/ ctx[4], false, false, false),
					listen_dev(div0, "click", /*click_handler_1*/ ctx[5], false, false, false),
					listen_dev(input, "change", /*change_handler*/ ctx[6], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*name*/ 2) set_data_dev(t0, /*name*/ ctx[1]);

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div1, t3);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if_block.d();
			/*input_binding*/ ctx[7](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('ImageUpload', slots, []);
	let { avatar, name } = $$props;
	console.log("avatar" + avatar);
	let fileinput;
	var formData = new browser();

	const onFileSelected = async e => {
		let image = e.target.files[0];

		//fetch upload of the image as the logo of the company!
		formData.append(name, image);

		const options = { method: 'POST', body: formData }; // If you add this, upload won't work
		// headers: {
		//   'Content-Type': 'multipart/form-data',

		// }
		var res = await fetch(`/utils/${name}ImageUpload.json`, options);

		if (res.status == 200) {
			let reader = new FileReader();
			reader.readAsDataURL(image);

			reader.onload = e => {
				$$invalidate(0, avatar = e.target.result);
			};
		} else {
			let text = await res.text();
			text = JSON.parse(text);
			alert(text.message);
		}
	};

	const writable_props = ['avatar', 'name'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1$1.warn(`<ImageUpload> was created with unknown prop '${key}'`);
	});

	const click_handler = () => {
		fileinput.click();
	};

	const click_handler_1 = () => {
		fileinput.click();
	};

	const change_handler = e => onFileSelected(e);

	function input_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			fileinput = $$value;
			$$invalidate(2, fileinput);
		});
	}

	$$self.$$set = $$props => {
		if ('avatar' in $$props) $$invalidate(0, avatar = $$props.avatar);
		if ('name' in $$props) $$invalidate(1, name = $$props.name);
	};

	$$self.$capture_state = () => ({
		avatar,
		name,
		fileinput,
		FormData: browser,
		formData,
		onFileSelected
	});

	$$self.$inject_state = $$props => {
		if ('avatar' in $$props) $$invalidate(0, avatar = $$props.avatar);
		if ('name' in $$props) $$invalidate(1, name = $$props.name);
		if ('fileinput' in $$props) $$invalidate(2, fileinput = $$props.fileinput);
		if ('formData' in $$props) formData = $$props.formData;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		avatar,
		name,
		fileinput,
		onFileSelected,
		click_handler,
		click_handler_1,
		change_handler,
		input_binding
	];
}

class ImageUpload extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { avatar: 0, name: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ImageUpload",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*avatar*/ ctx[0] === undefined && !('avatar' in props)) {
			console_1$1.warn("<ImageUpload> was created without expected prop 'avatar'");
		}

		if (/*name*/ ctx[1] === undefined && !('name' in props)) {
			console_1$1.warn("<ImageUpload> was created without expected prop 'name'");
		}
	}

	get avatar() {
		throw new Error("<ImageUpload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set avatar(value) {
		throw new Error("<ImageUpload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get name() {
		throw new Error("<ImageUpload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<ImageUpload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/_utils/dataUpload.svelte generated by Svelte v3.42.4 */

const { console: console_1 } = globals;
const file = "src/routes/_utils/dataUpload.svelte";

function create_fragment(ctx) {
	let div;
	let form;
	let h60;
	let t0;
	let input0;
	let t1;
	let h61;
	let t2;
	let input1;
	let t3;
	let h62;
	let t4;
	let input2;
	let t5;
	let input3;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			form = element("form");
			h60 = element("h6");
			t0 = text("Name");
			input0 = element("input");
			t1 = space();
			h61 = element("h6");
			t2 = text("Organization");
			input1 = element("input");
			t3 = space();
			h62 = element("h6");
			t4 = text("Post");
			input2 = element("input");
			t5 = space();
			input3 = element("input");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { id: true, class: true });
			var div_nodes = children(div);
			form = claim_element(div_nodes, "FORM", {});
			var form_nodes = children(form);
			h60 = claim_element(form_nodes, "H6", {});
			var h60_nodes = children(h60);
			t0 = claim_text(h60_nodes, "Name");
			h60_nodes.forEach(detach_dev);

			input0 = claim_element(form_nodes, "INPUT", {
				type: true,
				name: true,
				placeholder: true
			});

			t1 = claim_space(form_nodes);
			h61 = claim_element(form_nodes, "H6", {});
			var h61_nodes = children(h61);
			t2 = claim_text(h61_nodes, "Organization");
			h61_nodes.forEach(detach_dev);

			input1 = claim_element(form_nodes, "INPUT", {
				type: true,
				name: true,
				placeholder: true
			});

			t3 = claim_space(form_nodes);
			h62 = claim_element(form_nodes, "H6", {});
			var h62_nodes = children(h62);
			t4 = claim_text(h62_nodes, "Post");
			h62_nodes.forEach(detach_dev);

			input2 = claim_element(form_nodes, "INPUT", {
				type: true,
				name: true,
				placeholder: true
			});

			t5 = claim_space(form_nodes);
			input3 = claim_element(form_nodes, "INPUT", { type: true });
			form_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h60, file, 54, 2, 900);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "name", "name");
			attr_dev(input0, "placeholder", /*name*/ ctx[1]);
			add_location(input0, file, 54, 15, 913);
			add_location(h61, file, 55, 2, 986);
			attr_dev(input1, "type", "text");
			attr_dev(input1, "name", "organization");
			attr_dev(input1, "placeholder", /*organization*/ ctx[0]);
			add_location(input1, file, 55, 23, 1007);
			add_location(h62, file, 56, 2, 1104);
			attr_dev(input2, "type", "text");
			attr_dev(input2, "name", "post");
			attr_dev(input2, "placeholder", /*post*/ ctx[2]);
			add_location(input2, file, 56, 15, 1117);
			attr_dev(input3, "type", "submit");
			input3.value = "Save";
			add_location(input3, file, 58, 2, 1192);
			add_location(form, file, 52, 1, 851);
			attr_dev(div, "id", "app");
			attr_dev(div, "class", "svelte-16mpme9");
			add_location(div, file, 51, 0, 835);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, form);
			append_hydration_dev(form, h60);
			append_hydration_dev(h60, t0);
			append_hydration_dev(form, input0);
			set_input_value(input0, /*name*/ ctx[1]);
			append_hydration_dev(form, t1);
			append_hydration_dev(form, h61);
			append_hydration_dev(h61, t2);
			append_hydration_dev(form, input1);
			set_input_value(input1, /*organization*/ ctx[0]);
			append_hydration_dev(form, t3);
			append_hydration_dev(form, h62);
			append_hydration_dev(h62, t4);
			append_hydration_dev(form, input2);
			set_input_value(input2, /*post*/ ctx[2]);
			append_hydration_dev(form, t5);
			append_hydration_dev(form, input3);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[4]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[5]),
					listen_dev(input2, "input", /*input2_input_handler*/ ctx[6]),
					listen_dev(form, "submit", prevent_default(/*updateInfo*/ ctx[3]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*name*/ 2) {
				attr_dev(input0, "placeholder", /*name*/ ctx[1]);
			}

			if (dirty & /*name*/ 2 && input0.value !== /*name*/ ctx[1]) {
				set_input_value(input0, /*name*/ ctx[1]);
			}

			if (dirty & /*organization*/ 1) {
				attr_dev(input1, "placeholder", /*organization*/ ctx[0]);
			}

			if (dirty & /*organization*/ 1 && input1.value !== /*organization*/ ctx[0]) {
				set_input_value(input1, /*organization*/ ctx[0]);
			}

			if (dirty & /*post*/ 4) {
				attr_dev(input2, "placeholder", /*post*/ ctx[2]);
			}

			if (dirty & /*post*/ 4 && input2.value !== /*post*/ ctx[2]) {
				set_input_value(input2, /*post*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('DataUpload', slots, []);
	let { organization = "organization", name = "name", post = "post" } = $$props;

	async function updateInfo() {
		var body = { organization, name, post };
		console.log(body);

		const options = {
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			method: 'POST',
			body: JSON.stringify(body)
		};

		var res = await fetch(`/utils/infoUpload.json`, options);

		if (res.status == 200) ; else // reset the input fields with placeholders
		{
			let text = await res.text(); //successfullt updated
			text = JSON.parse(text);
			alert(text.message);
		}
	}

	const writable_props = ['organization', 'name', 'post'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<DataUpload> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		name = this.value;
		$$invalidate(1, name);
	}

	function input1_input_handler() {
		organization = this.value;
		$$invalidate(0, organization);
	}

	function input2_input_handler() {
		post = this.value;
		$$invalidate(2, post);
	}

	$$self.$$set = $$props => {
		if ('organization' in $$props) $$invalidate(0, organization = $$props.organization);
		if ('name' in $$props) $$invalidate(1, name = $$props.name);
		if ('post' in $$props) $$invalidate(2, post = $$props.post);
	};

	$$self.$capture_state = () => ({ organization, name, post, updateInfo });

	$$self.$inject_state = $$props => {
		if ('organization' in $$props) $$invalidate(0, organization = $$props.organization);
		if ('name' in $$props) $$invalidate(1, name = $$props.name);
		if ('post' in $$props) $$invalidate(2, post = $$props.post);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		organization,
		name,
		post,
		updateInfo,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler
	];
}

class DataUpload extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { organization: 0, name: 1, post: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "DataUpload",
			options,
			id: create_fragment.name
		});
	}

	get organization() {
		throw new Error("<DataUpload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set organization(value) {
		throw new Error("<DataUpload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get name() {
		throw new Error("<DataUpload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<DataUpload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get post() {
		throw new Error("<DataUpload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<DataUpload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { DataUpload as D, ImageUpload as I };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YVVwbG9hZC40NzE1ODAzOS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Zvcm0tZGF0YS9saWIvYnJvd3Nlci5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX3V0aWxzL2ltYWdlVXBsb2FkLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX3V0aWxzL2RhdGFVcGxvYWQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyA/IHNlbGYuRm9ybURhdGEgOiB3aW5kb3cuRm9ybURhdGE7XG4iLCI8c2NyaXB0PlxuXHRleHBvcnQgbGV0IGF2YXRhciwgbmFtZTtcblx0Y29uc29sZS5sb2coXCJhdmF0YXJcIithdmF0YXIpO1xuXHRsZXQgZmlsZWlucHV0O1xuXHRpbXBvcnQgRm9ybURhdGEgZnJvbSAnZm9ybS1kYXRhJztcblx0dmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cdFxuXHRjb25zdCBvbkZpbGVTZWxlY3RlZCA9YXN5bmMgKGUpID0+e1xuICBsZXQgaW1hZ2UgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgLy9mZXRjaCB1cGxvYWQgb2YgdGhlIGltYWdlIGFzIHRoZSBsb2dvIG9mIHRoZSBjb21wYW55IVxuICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgaW1hZ2UpO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAvLyBJZiB5b3UgYWRkIHRoaXMsIHVwbG9hZCB3b24ndCB3b3JrXG4gICAgICAvLyBoZWFkZXJzOiB7XG4gICAgICAvLyAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAvLyB9XG4gICAgfTtcbiAgICBcbiAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goYC91dGlscy8ke25hbWV9SW1hZ2VVcGxvYWQuanNvbmAsIG9wdGlvbnMpO1xuXHRpZihyZXMuc3RhdHVzPT0yMDApXG5cdHtcblx0XHRsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlKTtcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBlID0+IHtcbiAgICAgICAgICAgICAgICAgYXZhdGFyID0gZS50YXJnZXQucmVzdWx0XG4gICAgICAgICAgICB9O1xuXHR9XG5cdGVsc2V7XG5cdFx0bGV0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xuXHRcdHRleHQgPSBKU09OLnBhcnNlKHRleHQpO1xuXHRcdGFsZXJ0KHRleHQubWVzc2FnZSk7XG5cdH1cblxuXG4gICAgICAgICAgICBcbn1cblx0XG48L3NjcmlwdD5cbjxkaXYgaWQ9XCJhcHBcIj5cblx0PGg0PntuYW1lfSBmb3IgdGhlIGNlcnRpZmljYXRlczwvaDQ+XG4gIFxuICAgICAgICB7I2lmIGF2YXRhcn1cbiAgICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz1cInthdmF0YXJ9XCIgYWx0PVwiXCIgLz5cbiAgICAgICAgezplbHNlfVxuICAgICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiL2ltYWdlcy9ibGFuay5qcGdcIiBhbHQ9XCJcIiAvPiBcbiAgICAgICAgey9pZn1cblx0XHRcdFx0PGltZyBjbGFzcz1cInVwbG9hZFwiIHNyYz1cImh0dHBzOi8vc3RhdGljLnRoZW5vdW5wcm9qZWN0LmNvbS9wbmcvNjI1MTgyLTIwMC5wbmdcIiBhbHQ9XCJcIiBvbjpjbGljaz17KCk9PntmaWxlaW5wdXQuY2xpY2soKTt9fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhblwiIG9uOmNsaWNrPXsoKT0+e2ZpbGVpbnB1dC5jbGljaygpO319PkNob29zZSBJbWFnZTwvZGl2PlxuICAgICAgICA8aW5wdXQgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIiB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCIgb246Y2hhbmdlPXsoZSk9Pm9uRmlsZVNlbGVjdGVkKGUpfSBiaW5kOnRoaXM9e2ZpbGVpbnB1dH0gPlxuXG48L2Rpdj5cbjxzdHlsZT5cblx0I2FwcHtcblx0ZGlzcGxheTpmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuXHRcdGZsZXgtZmxvdzpjb2x1bW47XG59XG4gXG5cdC51cGxvYWR7XG5cdFx0ZGlzcGxheTpmbGV4O1xuXHRoZWlnaHQ6NTBweDtcblx0XHR3aWR0aDo1MHB4O1xuXHRcdGN1cnNvcjpwb2ludGVyO1xuXHR9XG5cdC5hdmF0YXJ7XG5cdFx0ZGlzcGxheTpmbGV4O1xuXHRcdGhlaWdodDoyMDBweDtcblx0XHR3aWR0aDoyMDBweDtcblx0fVxuPC9zdHlsZT5cblxuICIsIjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgb3JnYW5pemF0aW9uPVwib3JnYW5pemF0aW9uXCIsIG5hbWU9XCJuYW1lXCIgLHBvc3Q9XCJwb3N0XCI7XG5cblx0YXN5bmMgZnVuY3Rpb24gdXBkYXRlSW5mbygpe1xuXHRcdHZhciBib2R5ID0ge29yZ2FuaXphdGlvbixuYW1lLHBvc3R9O1xuXHRcdGNvbnNvbGUubG9nKGJvZHkpO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0XHRtb2RlOlwiY29yc1wiLFxuXHRcdFx0aGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgIH07XG4gICAgXG4gICAgdmFyIHJlcyA9IGF3YWl0IGZldGNoKGAvdXRpbHMvaW5mb1VwbG9hZC5qc29uYCwgb3B0aW9ucyk7XG5cdGlmKHJlcy5zdGF0dXM9PTIwMClcblx0e1xuXHRcdC8vc3VjY2Vzc2Z1bGx0IHVwZGF0ZWRcblx0XHQvLyByZXNldCB0aGUgaW5wdXQgZmllbGRzIHdpdGggcGxhY2Vob2xkZXJzXG5cdH1cblx0ZWxzZXtcblx0XHRsZXQgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0dGV4dCA9IEpTT04ucGFyc2UodGV4dCk7XG5cdFx0YWxlcnQodGV4dC5tZXNzYWdlKTtcblx0fVxufVxuXHRcblx0XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQjYXBwe1xuXHRkaXNwbGF5OmZsZXg7XG5cdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDpjZW50ZXI7XG5cdFx0ZmxleC1mbG93OmNvbHVtbjtcbn1cbiBcblx0LnVwbG9hZHtcblx0XHRkaXNwbGF5OmZsZXg7XG5cdGhlaWdodDo1MHB4O1xuXHRcdHdpZHRoOjUwcHg7XG5cdFx0Y3Vyc29yOnBvaW50ZXI7XG5cdH1cblx0LmF2YXRhcntcblx0XHRkaXNwbGF5OmZsZXg7XG5cdFx0aGVpZ2h0OjIwMHB4O1xuXHRcdHdpZHRoOjIwMHB4O1xuXHR9XG48L3N0eWxlPlxuXG5cbjxkaXYgaWQ9XCJhcHBcIj5cblx0PGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PXt1cGRhdGVJbmZvfSA+XG5cblx0XHQ8aDY+TmFtZTwvaDY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgYmluZDp2YWx1ZT17bmFtZX0gbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj17bmFtZX0gLz5cblx0XHQ8aDY+T3JnYW5pemF0aW9uPC9oNj48aW5wdXQgdHlwZT1cInRleHRcIiBiaW5kOnZhbHVlPXtvcmdhbml6YXRpb259IG5hbWU9XCJvcmdhbml6YXRpb25cIiBwbGFjZWhvbGRlcj17b3JnYW5pemF0aW9ufSAvPlxuXHRcdDxoNj5Qb3N0PC9oNj48aW5wdXQgdHlwZT1cInRleHRcIiBiaW5kOnZhbHVlPXtwb3N0fSBuYW1lPVwicG9zdFwiIHBsYWNlaG9sZGVyPXtwb3N0fSAvPlxuXHRcblx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2F2ZVwiID5cblx0XG5cdDwvZm9y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
