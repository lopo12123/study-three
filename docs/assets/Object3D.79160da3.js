import{W as g,S as y,P as C,T as w,b as S,c as M,a as j,d as B,L as $,e as v,f as x,g as P}from"./three.f4b96c5e.js";import{d as D,a as p,o as O,b as W,f as r,k as l,e as z}from"./@vue.09227f91.js";import{_ as G}from"./index.3c4cae41.js";import"./vue-router.67df8d88.js";const A={class:"object-3d-view"},E={class:"switch-btn-group"},H=D({__name:"Object3D",setup(I){const d=p(),k=()=>{const c=d.value;if(!c)return null;const a=new g({canvas:d.value,antialias:!0}),s=new y,e=new C(75,c.clientWidth/c.clientHeight,.1,1e3);e.position.set(0,0,10),s.add(e);const i=new w(2,1,16,20),u=new S(i,new M({color:16711680,size:.3})),m=new j(i,new B({color:16777215})),b=new $(i,new v({color:2990335,linewidth:1})),_=new x(i,new v({color:16777215,linewidth:1})),f=new P(i,new v({color:16777215,linewidth:1}));s.add(u);const L=t=>{u.rotation.y=t/2e3,m.rotation.y=t/2e3,b.rotation.y=t/2e3,_.rotation.y=t/2e3,f.rotation.y=t/2e3,a.render(s,e)};return a.setAnimationLoop(L),t=>{if(t!==o.value)switch(s.clear(),o.value=t,t){case"points":s.add(u);break;case"mesh":s.add(m);break;case"line":s.add(b);break;case"lineLoop":s.add(_);break;case"lineSegments":s.add(f);break}}},n=p(null),o=p("points");return O(()=>{n.value=k()}),(c,a)=>(z(),W("div",A,[r("div",E,[r("div",{class:l(["btn",o.value==="points"?"curr":""]),onClick:a[0]||(a[0]=s=>{var e;return(e=n.value)==null?void 0:e.call(n,"points")})},"points ",2),r("div",{class:l(["btn",o.value==="mesh"?"curr":""]),onClick:a[1]||(a[1]=s=>{var e;return(e=n.value)==null?void 0:e.call(n,"mesh")})},"mesh ",2),r("div",{class:l(["btn",o.value==="line"?"curr":""]),onClick:a[2]||(a[2]=s=>{var e;return(e=n.value)==null?void 0:e.call(n,"line")})},"line ",2),r("div",{class:l(["btn",o.value==="lineLoop"?"curr":""]),onClick:a[3]||(a[3]=s=>{var e;return(e=n.value)==null?void 0:e.call(n,"lineLoop")})},"lineLoop ",2),r("div",{class:l(["btn",o.value==="lineSegments"?"curr":""]),onClick:a[4]||(a[4]=s=>{var e;return(e=n.value)==null?void 0:e.call(n,"lineSegments")})}," lineSegments ",2)]),r("canvas",{class:"object-3d-canvas",ref_key:"threeContainer",ref:d},null,512)]))}});const F=G(H,[["__scopeId","data-v-5cbe1e3f"]]);export{F as default};
