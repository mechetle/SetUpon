import{_ as l,f as a,g as p,o as c,c as r,h as m,b as o,w as i,i as v,a as t,n as f}from"./index.a68fb71d.js";const C={data(){return{}},beforeCreate:function(){document.body.className=""}},h={class:"about"},k=t("h1",null,"Setup Items",-1),b={key:0,class:"create-menu-expand"},y=t("div",{class:"action-button"},"Setup",-1),I=t("div",{class:"action-button"},"Item",-1);function w(e,s,N,$,B,V){const n=a("RouterLink"),d=a("PlusIcon"),_=p("click-away");return c(),r("div",h,[k,e.openedCreateMenu?m((c(),r("div",b,[o(n,{to:"/create/setup"},{default:i(()=>[y]),_:1}),o(n,{to:"/"},{default:i(()=>[I]),_:1})])),[[_,e.openCreate]]):v("",!0),t("div",{class:f(["action-button",{opened:e.openedCreateMenu}]),onClick:s[0]||(s[0]=(...u)=>e.openCreate&&e.openCreate(...u))},[o(d,{size:"45"})],2)])}var z=l(C,[["render",w]]);export{z as default};
