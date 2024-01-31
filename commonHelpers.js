import"./assets/scroll-8076d2f7.js";import{n as y,a as I}from"./assets/vendor-ae726d3c.js";const d=document.querySelector(".quote-container"),f=new Date().toLocaleDateString();async function P(){d.innerHTML=`
        <span class="loader"></span>
    `;try{return await I.get("https://energyflow.b.goit.study/api/quote").then(t=>t.data)}catch{y.Notify.failure("Something went wrong, try again")}}function A(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===f){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));d.innerHTML=p(e,t)}else P().then(({author:e,quote:t})=>{const i={quote:t,author:e};localStorage.setItem("quote",JSON.stringify(i)),localStorage.setItem("savedDate",f),d.innerHTML=p(e,t)}).catch(e=>y.Notify.failure(e.message))}function p(e,t){return`
            <div class='title-container'>
              <span class='quote-icon_before'></span>
              <h2 class="quote-title">Quote of the day</h2>
              <span class='quote-icon_after'></span>
            </div>

           <div class='text-container'>
              <p class='quote-text'>${t}</p>
              <p class='quote-author'>${e}</p>
           </div>
      `}A();const u=document.querySelector(".favorite-list");u.addEventListener("click",$);const x=document.querySelector(".list-pages");x.addEventListener("click",H);const k=document.querySelector(".empty-favorite"),v=document.querySelector(".list-pages");window.addEventListener("resize",b);const l=document.querySelector(".first-page"),a=document.querySelector(".second-page"),o=document.querySelector(".third-page"),h="favorite",s=JSON.parse(localStorage.getItem(h))??[],g=s.slice(0,8),m=s.slice(8,16),M=s.slice(16,26);function b(){if(window.innerWidth<768&&s.length>=8){n(g),r(),l.classList.add("current-page");return}else{n(s),v.style.display="none";return}}b();function n(e){if(!s.length)u.innerHTML="",k.style.display="flex",v.style.display="none";else{const t=e.map(({_id:i,bodyPart:c,name:S,target:L,burnedCalories:q,time:w})=>`<li data-id="${i}" class="favopite-item">
            <div class="card-elements-top">
            <svg class="workaut-img" width="76" height="26">
                <use href="../img/fav_list/symbol-defs.svg#icon-Badge"></use></svg>
                <button class="btn-delete-favorite"><svg  width="14" height="14">
                <use class="delete-favorite" href="../img/fav_list/symbol-defs.svg#icon-delete"></use></svg></button>
                <button class ="start-button">Start
                <svg class="svg-start" width="14" height="14">
                <use href="../img/fav_list/symbol-defs.svg#icon-start"></use></svg>
                </button>
            </div>
            <div class="card-elements">
            <svg class="svg-name" width="24" height="24"><use href="../img/fav_list/symbol-defs.svg#icon-runMan"></use></svg>
            <H2 class="name-from-api">${S}</H2>
            </div>
            <ul class="card-elements-botton">
                <li class="elements-botton-item"><h3 class="elements-botton-style">Burned calories:</h3>
                <p class="botton-style-fromAPI">${q}</p>
                <span class="botton-style-fromAPI">&nbsp/&nbsp</span>
                <p class="botton-style-fromAPI">${w} min</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Body part:</h3>
                <p class="botton-style-fromAPI">${c}</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Target:</h3>
                <p class="botton-style-fromAPI">${L}</p></li>
            </ul>    
        </li>
        `).join("");u.innerHTML=t}}function $(e){if(e.preventDefault(),e.target.classList.contains("delete-favorite")){const{id:t}=e.target.closest(".favopite-item").dataset,i=T(String(t)),c=E(i);localStorage.setItem(h,JSON.stringify(c)),n(s),r(),l.classList.add("current-page"),a.classList.remove("current-page"),o.classList.remove("current-page")}}function E(e){return s.splice(e,1),s}function T(e){return s.findIndex(({_id:t})=>t===e)}function H(e){if(e.preventDefault(),e.target.classList.contains("page")){const t=e.target.dataset.id;if(t==="1"){n(g),l.classList.add("current-page"),a.classList.remove("current-page"),o.classList.remove("current-page"),r();return}else if(t==="2"){if(s.length>=8){n(m),r(),a.classList.add("current-page"),l.classList.remove("current-page"),o.classList.remove("current-page");return}else n(g);return}else t==="3"&&(s.length>16?(n(M),r(),a.classList.remove("current-page"),l.classList.remove("current-page"),o.classList.add("current-page")):n(m))}}function r(){s.length<=8?(l.style.display="none",a.style.display="none",o.style.display="none"):s.length>8&&s.length<=16?(o.style.display="none",a.style.display="flex"):s.length>16&&(a.style.display="flex",o.style.display="flex")}
//# sourceMappingURL=commonHelpers.js.map
