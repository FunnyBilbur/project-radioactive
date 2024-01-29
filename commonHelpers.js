import"./assets/header-eff62917.js";import{n as c,a as v}from"./assets/vendor-a94eb9aa.js";const a=document.querySelector(".quote-container"),i=new Date().toLocaleDateString();async function y(){a.innerHTML=`
        <span class="loader"></span>
    `;try{return await v.get("https://energyflow.b.goit.study/api/quote").then(e=>e.data)}catch{c.Notify.failure("Something went wrong, try again")}}function h(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===i){const{author:t,quote:e}=JSON.parse(localStorage.getItem("quote"));a.innerHTML=r(t,e)}else y().then(({author:t,quote:e})=>{const o={quote:e,author:t};localStorage.setItem("quote",JSON.stringify(o)),localStorage.setItem("savedDate",i),a.innerHTML=r(t,e)}).catch(t=>c.Notify.failure(t.message))}function r(t,e){return`
            <div class='title-container'>
              <span class='quote-icon_before'></span>
              <h2 class="quote-title">Quote of the day</h2>
              <span class='quote-icon_after'></span>
            </div>

           <div class='text-container'>
              <p class='quote-text'>${e}</p>
              <p class='quote-author'>${t}</p>
           </div>
      `}h();const l=document.querySelector(".favorite-list");l.addEventListener("click",I);const b=document.querySelector(".list-pages");b.addEventListener("click",L);const S=document.querySelector(".empty-favorite"),q=document.querySelector(".list-pages"),u="favorite",s=JSON.parse(localStorage.getItem(u))??[];s.slice(0,8);s.slice(8,17);s.slice(17,26);g(s);function g(t){if(!s.length)l.innerHTML="",S.style.display="flex",q.style.display="none";else{const e=t.map(({_id:o,bodyPart:n,name:f,target:m,burnedCalories:d,time:p})=>`<li data-id="${o}" class="favopite-item">
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
            <H2 class="name-from-api">${f}</H2>
            </div>
            <ul class="card-elements-botton">
                <li class="elements-botton-item"><h3 class="elements-botton-style">Burned calories:</h3>
                <p class="botton-style-fromAPI">${d}</p>
                <span class="botton-style-fromAPI">/</span>
                <p class="botton-style-fromAPI">${p} min</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Body part:</h3>
                <p class="botton-style-fromAPI">${n}</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Target:</h3>
                <p class="botton-style-fromAPI">${m}</p></li>
            </ul>    
        </li>
        `).join("");l.innerHTML=e}}function I(t){if(t.preventDefault(),t.target.classList.contains("delete-favorite")){const{id:e}=t.target.closest(".favopite-item").dataset,o=w(String(e)),n=A(o);localStorage.setItem(u,JSON.stringify(n)),console.log(n),g(n)}}function A(t){return s.splice(t,1),s}function w(t){return s.findIndex(({_id:e})=>e===t)}function L(t){t.preventDefault()}
//# sourceMappingURL=commonHelpers.js.map
