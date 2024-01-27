import"./assets/modulepreload-polyfill-3cfb730f.js";import{n as s,a as c}from"./assets/vendor-a94eb9aa.js";const o=document.querySelector(".quote-container"),a=new Date().toLocaleDateString();async function i(){o.innerHTML=`
        <span class="loader"></span>
        <span>We're looking for a quote for you...</span>
    `;try{return await c.get("https://energyflow.b.goit.study/api/quote").then(e=>e.data)}catch{s.Notify.failure("Something went wrong, try again")}}function l(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===a){const{author:t,quote:e}=JSON.parse(localStorage.getItem("quote"));o.innerHTML=n(t,e)}else i().then(({author:t,quote:e})=>{const r={quote:e,author:t};localStorage.setItem("quote",JSON.stringify(r)),localStorage.setItem("savedDate",a),o.innerHTML=n(t,e)}).catch(t=>s.Notify.failure(t.message))}function n(t,e){return`
            <div class='title-container'>
              <span class='quote-icon_before'></span>
              <h2 class="quote-title">Quote of the day</h2>
              <span class='quote-icon_after'></span>
            </div>

            <p class='quote-text'>${e}</p>
            <p class='quote-author'>${t}</p>
      `}l();
//# sourceMappingURL=commonHelpers.js.map
