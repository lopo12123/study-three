import{W as l,S as d,P as i,G as _,A as m}from"./three.9a487f21.js";import{d as p,a as f,o as u,b as v,e as L}from"./@vue.0a7e3d08.js";import{_ as g}from"./index.b647389e.js";import"./vue-router.b1c70ae2.js";const h=p({__name:"GLTFLoader",setup(w){const o=f(),r=()=>{const n=o.value;if(!n)return;const a=new l({canvas:o.value});a.setSize(n.clientWidth,n.clientHeight),a.setClearColor(16777215);const t=new d,s=new i;s.position.z=5,new _().load("./models/monkey.gltf",e=>{t.add(e.scene);const c=new m(16777215);t.add(c),a.render(t,s)},e=>{console.log(`loading...  ${(e.loaded*100/e.total).toFixed(2)}%`)},e=>{console.log(e)})};return u(()=>{o.value&&r()}),(n,a)=>(L(),v("canvas",{class:"gltf-loader-view",ref_key:"threeContainer",ref:o},null,512))}});const x=g(h,[["__scopeId","data-v-55e79905"]]);export{x as default};