import{W as v,S as p,P as x,B as y,M as C,a as z}from"./three.9a487f21.js";import{d as f,a as c,o as $,b as w,f as s,e as g}from"./@vue.0a7e3d08.js";import{_ as j}from"./index.b647389e.js";import"./vue-router.b1c70ae2.js";const B={class:"object-control-view"},M={class:"switch-btn-group move"},_={class:"switch-btn-group rotate"},O=f({__name:"ObjectControl",setup(S){const l=c(),d=()=>{const i=l.value;if(!i)return null;const e=new v({canvas:i});e.setSize(i.clientWidth,i.clientHeight);const r=new p,t=new x,b=new y(1,1,1),u=new C,a=new z(b,u);r.add(a),t.position.z=10;function o(){requestAnimationFrame(o),e.render(r,t)}return o(),k=>{switch(k){case"x+":a.position.x+=1;break;case"x-":a.position.x-=1;break;case"y+":a.position.y+=1;break;case"y-":a.position.y-=1;break;case"z+":a.position.z+=1;break;case"z-":a.position.z-=1;break;case"rx+":a.rotation.x+=1;break;case"rx-":a.rotation.x-=1;break;case"ry+":a.rotation.y+=1;break;case"ry-":a.rotation.y-=1;break;case"rz+":a.rotation.z+=1;break;case"rz-":a.rotation.z-=1;break}}},n=c(null);return $(()=>{n.value=d()}),(i,e)=>(g(),w("div",B,[s("div",M,[s("div",{class:"btn",onClick:e[0]||(e[0]=r=>{var t;return(t=n.value)==null?void 0:t.call(n,"x+")})},"x+"),s("div",{class:"btn",onClick:e[1]||(e[1]=r=>{var t;return(t=n.value)==null?void 0:t.call(n,"x-")})},"x-"),s("div",{class:"btn",onClick:e[2]||(e[2]=r=>{var t;return(t=n.value)==null?void 0:t.call(n,"y+")})},"y+"),s("div",{class:"btn",onClick:e[3]||(e[3]=r=>{var t;return(t=n.value)==null?void 0:t.call(n,"y-")})},"y-"),s("div",{class:"btn",onClick:e[4]||(e[4]=r=>{var t;return(t=n.value)==null?void 0:t.call(n,"z+")})},"z+"),s("div",{class:"btn",onClick:e[5]||(e[5]=r=>{var t;return(t=n.value)==null?void 0:t.call(n,"z-")})},"z-")]),s("div",_,[s("div",{class:"btn",onClick:e[6]||(e[6]=r=>{var t;return(t=n.value)==null?void 0:t.call(n,"rx+")})},"rx+"),s("div",{class:"btn",onClick:e[7]||(e[7]=r=>{var t;return(t=n.value)==null?void 0:t.call(n,"rx-")})},"rx-"),s("div",{class:"btn",onClick:e[8]||(e[8]=r=>{var t;return(t=n.value)==null?void 0:t.call(n,"ry+")})},"ry+"),s("div",{class:"btn",onClick:e[9]||(e[9]=r=>{var t;return(t=n.value)==null?void 0:t.call(n,"ry-")})},"ry-"),s("div",{class:"btn",onClick:e[10]||(e[10]=r=>{var t;return(t=n.value)==null?void 0:t.call(n,"rz+")})},"rz+"),s("div",{class:"btn",onClick:e[11]||(e[11]=r=>{var t;return(t=n.value)==null?void 0:t.call(n,"rz-")})},"rz-")]),s("canvas",{class:"object-3d-canvas",ref_key:"threeContainer",ref:l},null,512)]))}});const q=j(O,[["__scopeId","data-v-d12fc816"]]);export{q as default};
