import{a as l}from"./vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a=document.querySelector(".quote-container"),i=new Date().toLocaleDateString();async function f(){a.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return await l.get("https://energyflow.b.goit.study/api/quote").then(t=>t.data)}catch{}}function d(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===i){const{author:o,quote:t}=JSON.parse(localStorage.getItem("quote"));a.innerHTML=u(o,t)}else f().then(({author:o,quote:t})=>{const n={quote:t,author:o};localStorage.setItem("quote",JSON.stringify(n)),localStorage.setItem("savedDate",i),a.innerHTML=u(o,t)}).catch(o=>Notify.failure(o.message))}function u(o,t){return`
            <h2>Quote of the day</h2>
            <p><span>${t}</span></p>
            <p>${o}</p>
      `}d();
//# sourceMappingURL=main-be60489e.js.map
