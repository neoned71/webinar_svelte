import{S as e,i as a,s as t,a as s,e as o,t as l,q as r,d as i,c as n,b as c,f as u,g as p,h as d,o as v,k as h,l as E,r as f,p as m,u as _,v as O,n as N,x as P,y as R}from"./client.c7e34c6f.js";function T(e){let a,t,R,T,L,y,b,g,w,x,I,U,G,S,A,C,j,$,B,D,W,Y,k,q,F,H;return{c(){a=s(),t=o("h1"),R=l("Create Template!"),T=s(),L=o("form"),y=o("input"),b=s(),g=o("textarea"),w=s(),x=o("select"),I=o("option"),U=l("RED"),G=o("option"),S=l("BLUE"),A=o("option"),C=l("YELLOW"),j=o("option"),$=l("PURPLE"),B=o("option"),D=l("GREEN"),W=o("option"),Y=l("ORANGE"),k=s(),q=o("input"),this.h()},l(e){r('[data-svelte="svelte-oh6yg0"]',document.head).forEach(i),a=n(e),t=c(e,"H1",{class:!0});var s=u(t);R=p(s,"Create Template!"),s.forEach(i),T=n(e),L=c(e,"FORM",{});var o=u(L);y=c(o,"INPUT",{class:!0,type:!0,placeholder:!0}),b=n(o),g=c(o,"TEXTAREA",{class:!0,placeholder:!0}),u(g).forEach(i),w=n(o),x=c(o,"SELECT",{class:!0});var l=u(x);I=c(l,"OPTION",{id:!0,class:!0});var d=u(I);U=p(d,"RED"),d.forEach(i),G=c(l,"OPTION",{id:!0});var v=u(G);S=p(v,"BLUE"),v.forEach(i),A=c(l,"OPTION",{id:!0});var h=u(A);C=p(h,"YELLOW"),h.forEach(i),j=c(l,"OPTION",{id:!0});var E=u(j);$=p(E,"PURPLE"),E.forEach(i),B=c(l,"OPTION",{id:!0});var f=u(B);D=p(f,"GREEN"),f.forEach(i),W=c(l,"OPTION",{id:!0});var m=u(W);Y=p(m,"ORANGE"),m.forEach(i),l.forEach(i),k=n(o),q=c(o,"INPUT",{class:!0,type:!0}),o.forEach(i),this.h()},h(){document.title="Sapper project template",d(t,"class","svelte-18pro61"),d(y,"class","w3-input svelte-18pro61"),d(y,"type","text"),d(y,"placeholder","name of the template"),d(g,"class","w3-input"),d(g,"placeholder","description"),d(I,"id","red"),I.__value="RED",I.value=I.__value,d(I,"class","svelte-18pro61"),d(G,"id","blue"),G.__value="BLUE",G.value=G.__value,d(A,"id","yellow"),A.__value="YELLOW",A.value=A.__value,d(j,"id","purple"),j.__value="PURPLE",j.value=j.__value,d(B,"id","green"),B.__value="GREEN",B.value=B.__value,d(W,"id","orange"),W.__value="ORANGE",W.value=W.__value,d(x,"class","w3-input"),void 0===e[3]&&v((()=>e[7].call(x))),d(q,"class","w3-button w3-border w3-round"),d(q,"type","submit"),q.value="Create template"},m(s,o){h(s,a,o),h(s,t,o),E(t,R),h(s,T,o),h(s,L,o),E(L,y),f(y,e[0]),E(L,b),E(L,g),f(g,e[1]),E(L,w),E(L,x),E(x,I),E(I,U),E(x,G),E(G,S),E(x,A),E(A,C),E(x,j),E(j,$),E(x,B),E(B,D),E(x,W),E(W,Y),m(x,e[3]),E(L,k),E(L,q),F||(H=[_(y,"input",e[5]),_(g,"input",e[6]),_(x,"change",e[7]),_(L,"submit",O(e[2]))],F=!0)},p(e,[a]){1&a&&y.value!==e[0]&&f(y,e[0]),2&a&&f(g,e[1]),8&a&&m(x,e[3])},i:N,o:N,d(e){e&&i(a),e&&i(t),e&&i(T),e&&i(L),F=!1,P(H)}}}const L=async function(e,a){var{user:t}=a;return t?{user:t}:this.redirect(301,"login")};function y(e,a,t){let s,{name:o}=a,{description:l}=a,{user:r}=a;return e.$$set=e=>{"name"in e&&t(0,o=e.name),"description"in e&&t(1,l=e.description),"user"in e&&t(4,r=e.user)},[o,l,async function(){if(o&&l){const e=await fetch("create_template.json",{mode:"cors",method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,description:l,color:s})});if(200==e.status)location.href="/templates";else{let a=await e.text();console.log(a)}}},s,r,function(){o=this.value,t(0,o)},function(){l=this.value,t(1,l)},function(){s=R(this),t(3,s)}]}export default class extends e{constructor(e){super(),a(this,e,y,T,t,{name:0,description:1,user:4,handleSubmit:2})}get handleSubmit(){return this.$$.ctx[2]}}export{L as preload};
