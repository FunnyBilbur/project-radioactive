import"./assets/scroll-fa6657b1.js";import{i as h,a as $}from"./assets/vendor-ebe44317.js";const u=document.querySelector(".quote-container"),f=new Date().toLocaleDateString();async function P(){u.innerHTML=`
        <span class="loader"></span>
    `;try{return await $.get("https://energyflow.b.goit.study/api/quote").then(t=>t.data)}catch{h.error({title:"Error",message:"Something went wrong, try again"})}}function A(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===f){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));u.innerHTML=m(e,t)}else P().then(({author:e,quote:t})=>{const l={quote:t,author:e};localStorage.setItem("quote",JSON.stringify(l)),localStorage.setItem("savedDate",f),u.innerHTML=m(e,t)}).catch(e=>h.error({title:"Error",message:e.message}))}function m(e,t){return`
            <div class='title-container'>
              <span class='quote-icon_before'></span>
              <h2 class="quote-title">Quote of the day</h2>
              <span class='quote-icon_after'></span>
            </div>

           <div class='text-container'>
              <p class='quote-text'>${t}</p>
              <p class='quote-author'>${e}</p>
           </div>
      `}A();const c="/project-radioactive/assets/symbol-defs-b922d213.svg",g=document.querySelector(".favorite-list");g.addEventListener("click",T);const k=document.querySelector(".list-pages");k.addEventListener("click",D);const E=document.querySelector(".empty-favorite"),v=document.querySelector(".list-pages");window.addEventListener("resize",S);const r=document.querySelector(".first-page"),a=document.querySelector(".second-page"),o=document.querySelector(".third-page"),b="favorite",s=JSON.parse(localStorage.getItem(b))??[],p=s.slice(0,8),y=s.slice(8,16),M=s.slice(16,26);function S(){if(window.innerWidth<768&&s.length>=8){n(p),i(),r.classList.add("current-page");return}else{n(s),v.style.display="none";return}}S();function n(e){if(!s.length)g.innerHTML="",E.style.display="flex",v.style.display="none";else{const t=e.map(({_id:l,bodyPart:d,name:L,target:q,burnedCalories:w,time:I})=>`<li data-id="${l}" class="favopite-item">
            <div class="card-elements-top">
            <svg class="workaut-img" width="76" height="26">
                <use href="${c}#icon-Badge"></use></svg>
                <button class="btn-delete-favorite"><svg  width="14" height="14">
                <use class="delete-favorite" href="${c}#icon-delete"></use></svg></button>
                <button class ="start-button">Start
                <svg class="svg-start" width="14" height="14">
                <use href="${c}#icon-start"></use></svg>
                </button>
            </div>
            <div class="card-elements">
            <svg class="svg-name" width="24" height="24"><use href="${c}#icon-runMan"></use></svg>
            <H2 class="name-from-api">${L}</H2>
            </div>
            <ul class="card-elements-botton">
                <li class="elements-botton-item"><h3 class="elements-botton-style">Burned calories:</h3>
                <p class="botton-style-fromAPI">${w}</p>
                <span class="botton-style-fromAPI">&nbsp/&nbsp</span>
                <p class="botton-style-fromAPI">${I} min</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Body part:</h3>
                <p class="botton-style-fromAPI">${d}</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Target:</h3>
                <p class="botton-style-fromAPI">${q}</p></li>
            </ul>    
        </li>
        `).join("");g.innerHTML=t}}function T(e){if(e.preventDefault(),e.target.classList.contains("delete-favorite")){const{id:t}=e.target.closest(".favopite-item").dataset,l=H(String(t)),d=x(l);localStorage.setItem(b,JSON.stringify(d)),n(s),i(),r.classList.add("current-page"),a.classList.remove("current-page"),o.classList.remove("current-page")}}function x(e){return s.splice(e,1),s}function H(e){return s.findIndex(({_id:t})=>t===e)}function D(e){if(e.preventDefault(),e.target.classList.contains("page")){const t=e.target.dataset.id;if(t==="1"){n(p),r.classList.add("current-page"),a.classList.remove("current-page"),o.classList.remove("current-page"),i();return}else if(t==="2"){if(s.length>=8){n(y),i(),a.classList.add("current-page"),r.classList.remove("current-page"),o.classList.remove("current-page");return}else n(p);return}else t==="3"&&(s.length>16?(n(M),i(),a.classList.remove("current-page"),r.classList.remove("current-page"),o.classList.add("current-page")):n(y))}}function i(){s.length<=8?(r.style.display="none",a.style.display="none",o.style.display="none"):s.length>8&&s.length<=16?(o.style.display="none",a.style.display="flex"):s.length>16&&(a.style.display="flex",o.style.display="flex")}
//# sourceMappingURL=commonHelpers.js.map
