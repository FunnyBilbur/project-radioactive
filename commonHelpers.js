import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as s}from"./assets/vendor-0cb09735.js";const o=document.querySelector(".quote-container"),a=new Date().toLocaleDateString();async function c(){o.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return await s.get("https://energyflow.b.goit.study/api/quote").then(t=>t.data)}catch{}}function u(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===a){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));o.innerHTML=n(e,t)}else c().then(({author:e,quote:t})=>{const r={quote:t,author:e};localStorage.setItem("quote",JSON.stringify(r)),localStorage.setItem("savedDate",a),o.innerHTML=n(e,t)}).catch(e=>Notify.failure(e.message))}function n(e,t){return`
            <h2>Quote of the day</h2>
            <p><span>${t}</span></p>
            <p>${e}</p>
      `}u();
//# sourceMappingURL=commonHelpers.js.map
