
import { writable } from 'svelte/store';

// export var token = writable(null);

// const lastToken = localStorage.getItem("token");
export const Token = writable(null);
Token.subscribe(value => {
    // localStorage.setItem("token", value);
});

// User.subscribe(a=>localStorage.setItem("user", a));
