import"./assets/header-40f54f50.js";import{n as T,a as u}from"./assets/vendor-a94eb9aa.js";const v=document.querySelector(".quote__backend"),w=new Date().toLocaleDateString();async function M(){v.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await u.get("https://energyflow.b.goit.study/api/quote")).data}catch{T.Notify.failure("Something went wrong, try again")}}function E(t,e){return`<p class="quote__backend-text">${e}</p>
            <p class="quote__backend-author">${t}</p>`}function C(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===w){const{author:t,quote:e}=JSON.parse(localStorage.getItem("quote"));v.innerHTML=E(t,e)}else M().then(({author:t,quote:e})=>{const r={author:t,quote:e};localStorage.setItem("quote",JSON.stringify(r)),localStorage.setItem("savedDate",w),v.innerHTML=E(t,e)}).catch(t=>T.Notify.failure(t.message))}C();const P=document.getElementById("subscriptionForm"),L=document.getElementById("email"),D=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);P.addEventListener("submit",async function(t){t.preventDefault();try{D.test(L.value)?await u.post("https://energyflow.b.goit.study/api/subscription",{email:L.value}).then(e=>{console.log(e.data.message)}).catch(e=>{console.log(e.response.data.message)}):alert("Please enter the correct email")}catch(e){console.error("Error:",e),alert("Something went wrong, try again")}});const S=document.getElementById("exercises-search-form"),h=S.querySelector(".exercises-search-input"),x=document.querySelector(".exercises-list-page2"),f=document.querySelector(".exercises-inputclear-icon");S.addEventListener("submit",async t=>{t.preventDefault();const e=h.value.trim().toLowerCase();try{await A(e)}catch(r){console.error(r)}});h.addEventListener("input",H);function H(){h.value.trim()!==""?f.classList.remove("exercises-is-hidden"):f.classList.add("exercises-is-hidden")}function R(){const t=document.getElementById("exercises-search-input");t&&(t.value="")}f.addEventListener("click",R);async function O(t){try{return(await u.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${t}&page=1&limit=10`)).data}catch(e){throw console.error("Error fetching exercises:",e),e}}async function A(t){try{const e=await O(t);if(x.innerHTML="",e.results.length>0){const r=e.results.map(s=>`
        <li class="exercises-item-page2">
          <div class="exercises-card">
            <div class="exercises-card-top">
              <div class="exercises-kind-wrapper">
                <p class="exercises-card-kind">WORKOUT</p>
                <div class="exercises-card-rating">
                  <p class="exercises-rating-value">${s.rating}</p>
                  <svg class="exercises-star-icon" width="18" height="18" aria-label="star icon">
                    <use href="./img/exercises/exercises-sprite.svg#icon-star"></use>
                  </svg>
                </div>
              </div>
              <button class="exercises-start-button">
                Start
                <svg class="exercises-start-icon" width="14" height="14">
                  <use href="./img/exercises/exercises-sprite.svg#icon-arrow"></use>
                </svg>
              </button>
            </div>
            <div class="exercises-card-namewrapper">
              <svg class="exercises-star-icon" width="24" height="24" aria-label="star icon">
                <use href="./img/exercises/exercises-sprite.svg#icon-icon"></use>
              </svg>
              <p class="exercises-card-exname">${s.name}</p>
            </div>
            <ul class="exercises-card-info">
              <li class="exercises-info-data">
                <span class="exercises-data-name">Burned calories: </span>${s.calories} / ${s.duration} min
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Body part: </span>${s.bodyPart}
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Target: </span>${s.target}
              </li>
            </ul>
          </div>
        </li>
      `).join("");x.innerHTML=r}else x.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(e){console.error(e)}}document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".openModalBtn"),e=document.querySelector(".pop-up-exercise"),r=document.getElementById("modalTitle"),s=document.getElementById("modalImage"),o=document.getElementById("modalBodyPart"),c=document.getElementById("modalEquipment"),n=document.getElementById("modalTarget"),l=document.getElementById("modalDescription"),d=document.getElementById("modalRating"),m=document.getElementById("modalBurnedCalories"),p=document.getElementById("modalTime"),g=document.getElementById("modalPopularity"),B=document.querySelector(".add-to-favorites-btn"),q=document.querySelector(".give-rating-btn");B.addEventListener("click",function(){}),q.addEventListener("click",function(){}),t.forEach(function(a){a.addEventListener("click",function(){var i=a.getAttribute("data-id");I(i)})});function I(a){var i=new XMLHttpRequest;i.open("GET","https://energyflow.b.goit.study/api/data?id="+a,!0),i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE)if(i.status===200){var k=JSON.parse(i.responseText);$(k)}else console.error("Ошибка запроса на сервер: "+i.status)},i.send()}function $(a){r.textContent=a.name,s.src=a.gifUrl,o.textContent=a.bodyPart,c.textContent=a.equipment,n.textContent=a.target,l.textContent=a.description,d.textContent=a.rating,m.textContent=a.burnedCalories,p.textContent=a.time+" мин",g.textContent=a.popularity,e.style.display="flex"}});function b(t){return t.charAt(0).toUpperCase()+t.slice(1)}const y=document.querySelector(".exercises-list"),U=document.querySelector(".exercises-bottom-buttons");let N="Muscles";const j=async()=>{let t=new URLSearchParams({filter:N,page:1,limit:12});try{await u.get(`https://energyflow.b.goit.study/api/filters?${t}`).then(e=>{let r=e.data.results,{totalPages:s}=e.data;const o=r.map(({name:n,filter:l,imgUrl:d})=>`<li class="exercises-list-item" data-name="${n}" data-filter="${l}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${d}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${b(n)}</p>
            <p class="exercises-item-subname">${l}</p>
            </div>
          </li>`).join("");y.insertAdjacentHTML("beforeend",o);let c="";for(let n=0;n<s;n++)c+=`<button class="exercises-page-button" type="button">${n+1}</button> 
`;U.insertAdjacentHTML("beforeend",c)}).catch(e=>{console.log(e.response.data.message)})}catch(e){console.error("Error:",e),alert("Something went wrong, try again")}};await j();const _=document.querySelectorAll(".exercises-list-item");for(const t of _)t.addEventListener("click",function(e){const r=e.currentTarget.dataset.name,s=e.currentTarget.dataset.filter;F({filter:s,name:r}),console.log("Clicked: ",b(r),s)});function F({filter:t,name:e}){let r=new URLSearchParams({muscles:e,page:1,limit:9});u.get(`https://energyflow.b.goit.study/api/exercises?${r}`).then(s=>{let o=s.data.results;console.log(o),s.data;const c=o.map(({bodyPart:n,burnedCalories:l,name:d,_id:m,target:p,rating:g})=>`<li class="exercises-item-page2" id=${m}>
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${g}</p>
                    <svg
                      class="exercises-star-icon"
                      width="18"
                      height="18"
                      aria-label="star icon"
                    >
                      <use
                        href="./img/exercises/exercises-sprite.svg#icon-star"
                      ></use>
                    </svg>
                  </div>
                </div>
                <button class="exercises-start-button">
                  Start
                  <svg class="exercises-start-icon" width="14" height="14">
                    <use
                      href="./img/exercises/exercises-sprite.svg#icon-arrow"
                    ></use>
                  </svg>
                </button>
              </div>
              <div class="exercises-card-namewrapper">
                <svg
                  class="exercises-star-icon"
                  width="24"
                  height="24"
                  aria-label="star icon"
                >
                  <use
                    href="./img/exercises/exercises-sprite.svg#icon-icon"
                  ></use>
                </svg>
                <p class="exercises-card-exname">${b(d)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${l}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${n}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${p}
                </li>
              </ul>
            </div>
          </li> `).join("");y.innerHTML="",y.insertAdjacentHTML("beforeend",c)}).catch(s=>{console.log(s.response.data.message)})}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("scrollTop");function e(){window.scrollTo({top:0,behavior:"smooth"})}t.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
