import{d as m,a as p,o as _,b as h,e as y,f as l,g as v,j as g,k as w}from"./@vue.3be5d020.js";import{c as b,a as x}from"./vue-router.5df4f621.js";import{W as L,S as k,P as B,B as H,M,a as O}from"./three.d289d16f.js";const C=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};C();const N={class:"home-view"},P=m({__name:"Home",setup(s){const t=p(),r=()=>{const n=new L({canvas:t.value}),e=new k,o=new B;o.position.set(0,0,1),e.add(o);const c=new H(.2,.2,.2),d=new M,a=new O(c,d);e.add(a);const f=i=>{a.rotation.x=i/2e3,a.rotation.y=i/1e3,n.render(e,o)};n.setAnimationLoop(f)};return _(()=>{t.value&&r()}),(n,e)=>(l(),h("div",N,[y("canvas",{class:"three-container",ref_key:"threeContainer",ref:t},null,512)]))}});const u=(s,t)=>{const r=s.__vccOpts||s;for(const[n,e]of t)r[n]=e;return r},A=u(P,[["__scopeId","data-v-aee5bcd0"]]),I=[{path:"/",name:"Home",component:A}],S={history:b(),routes:I},W=x(S),E={};function G(s,t){const r=g("router-view");return l(),v(r)}const R=u(E,[["render",G]]);w(R).use(W).mount("#app");
