import{B as e,S as a,i as s,s as t,a as o,e as r,t as n,q as i,d as c,c as l,b as h,f as u,g as d,h as p,k as m,l as f,r as v,u as g,v as w,n as y,x as b}from"./client.c7e34c6f.js";import{A as x}from"./static_store.6b777201.js";function S(e){let a,s,t,x,S,E,N,j,L,P,T,$,q,A,I,O,R,U,k,F,H,J,B;return{c(){a=o(),s=r("h1"),t=n("Seminar"),x=o(),S=r("h2"),E=n("Login"),N=o(),j=r("form"),L=r("input"),P=o(),T=r("input"),$=o(),q=r("input"),A=o(),I=r("a"),O=n("Register new user"),R=o(),U=r("p"),k=n("created by: "),F=r("a"),H=n("neoned71"),this.h()},l(e){i('[data-svelte="svelte-wr3kpp"]',document.head).forEach(c),a=l(e),s=h(e,"H1",{class:!0});var o=u(s);t=d(o,"Seminar"),o.forEach(c),x=l(e),S=h(e,"H2",{});var r=u(S);E=d(r,"Login"),r.forEach(c),N=l(e),j=h(e,"FORM",{});var n=u(j);L=h(n,"INPUT",{type:!0,name:!0,placeholder:!0}),P=l(n),T=h(n,"INPUT",{type:!0,name:!0,placeholder:!0}),$=l(n),q=h(n,"INPUT",{type:!0}),n.forEach(c),A=l(e),I=h(e,"A",{href:!0});var p=u(I);O=d(p,"Register new user"),p.forEach(c),R=l(e),U=h(e,"P",{class:!0});var m=u(U);k=d(m,"created by: "),F=h(m,"A",{href:!0});var f=u(F);H=d(f,"neoned71"),f.forEach(c),m.forEach(c),this.h()},h(){document.title="Seminar",p(s,"class","svelte-1tqvmh4"),p(L,"type","text"),p(L,"name","email"),p(L,"placeholder","email"),p(T,"type","password"),p(T,"name","password"),p(T,"placeholder","password"),p(q,"type","submit"),q.value="Login",p(I,"href","/register"),p(F,"href","https://neoned71.com"),p(U,"class","svelte-1tqvmh4")},m(o,r){m(o,a,r),m(o,s,r),f(s,t),m(o,x,r),m(o,S,r),f(S,E),m(o,N,r),m(o,j,r),f(j,L),v(L,e[0]),f(j,P),f(j,T),v(T,e[1]),f(j,$),f(j,q),m(o,A,r),m(o,I,r),f(I,O),m(o,R,r),m(o,U,r),f(U,k),f(U,F),f(F,H),J||(B=[g(L,"input",e[4]),g(T,"input",e[5]),g(j,"submit",w(e[2]))],J=!0)},p(e,[a]){1&a&&L.value!==e[0]&&v(L,e[0]),2&a&&T.value!==e[1]&&v(T,e[1])},i:y,o:y,d(e){e&&c(a),e&&c(s),e&&c(x),e&&c(S),e&&c(N),e&&c(j),e&&c(A),e&&c(I),e&&c(R),e&&c(U),J=!1,b(B)}}}console.log("hello");var E=e(x);const N=async function(e,a){const s=await this.fetch(E+"/auth/whoami",{mode:"cors",method:"get"});if(200==s.status)try{var t=await s.json();console.log(t),"success"==t.status&&this.redirect(301,"/dashboard")}catch(e){console.log(e)}};function j(e,a,s){let{email:t}=a,{password:o}=a,{user:r}=a;return e.$$set=e=>{"email"in e&&s(0,t=e.email),"password"in e&&s(1,o=e.password),"user"in e&&s(3,r=e.user)},[t,o,async function(){if(t&&o){const a=await fetch(E+"/auth/login",{mode:"cors",method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:o})});if(200==a.status){var e=await a.text();e=JSON.parse(e),s(3,r=e.user),console.log(r),location.href="/dashboard"}else alert("Login Failed"),console.log(a.text())}},r,function(){t=this.value,s(0,t)},function(){o=this.value,s(1,o)}]}export default class extends a{constructor(e){super(),s(this,e,j,S,t,{email:0,password:1,user:3,handleSubmit:2})}get handleSubmit(){return this.$$.ctx[2]}}export{N as preload};
