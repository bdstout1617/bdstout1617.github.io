import{c as y,f,j as r,a as d,h as C,k as _,E as k,g as x,J as h,r as m,K as i,U as p,T as l,R as o,W as $,V as B,L as F,M as P,N as Q}from"./index-Di_8EdXF.js";import{h as E}from"./render-C9KFPuQM.js";const j=y({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(a,{slots:c}){const{proxy:{$q:t}}=x(),e=f(_,r);if(e===r)return console.error("QPage needs to be a deep child of QLayout"),r;if(f(k,r)===r)return console.error("QPage needs to be child of QPageContainer"),r;const s=d(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof a.styleFn=="function"){const v=e.isContainer.value===!0?e.containerHeight.value:t.screen.height;return a.styleFn(n,v)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":t.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":t.screen.height-n+"px"}}),g=d(()=>`q-page${a.padding===!0?" q-layout-padding":""}`);return()=>C("main",{class:g.value,style:s.value},E(c.default))}}),q=h({__name:"ExampleComponent",props:{title:{},todos:{default:()=>[]},meta:{},active:{type:Boolean}},setup(a){const c=a,t=m(0);function e(){return t.value+=1,t.value}const u=d(()=>c.todos.length);return(s,g)=>(i(),p("div",null,[l("p",null,o(s.title),1),l("ul",null,[(i(!0),p($,null,B(s.todos,n=>(i(),p("li",{key:n.id,onClick:e},o(n.id)+" - "+o(n.content),1))),128))]),l("p",null,"Count: "+o(u.value)+" / "+o(s.meta.totalCount),1),l("p",null,"Active: "+o(s.active?"yes":"no"),1),l("p",null,"Clicks on todos: "+o(t.value),1)]))}}),L=h({__name:"IndexPage",setup(a){const c=m([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),t=m({totalCount:1200});return(e,u)=>(i(),F(j,{class:"row items-center justify-evenly"},{default:P(()=>[Q(q,{title:"Example component",active:"",todos:c.value,meta:t.value},null,8,["todos","meta"])]),_:1}))}});export{L as default};
