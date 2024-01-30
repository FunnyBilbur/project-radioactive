import"./assets/header-40f54f50.js";import{n as I,a as p,P as A}from"./assets/vendor-ae726d3c.js";const L=document.querySelector(".quote__backend"),S=new Date().toLocaleDateString();async function O(){L.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await p.get("https://energyflow.b.goit.study/api/quote")).data}catch{I.Notify.failure("Something went wrong, try again")}}function q(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function U(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===S){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));L.innerHTML=q(e,t)}else O().then(({author:e,quote:t})=>{const a={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(a)),localStorage.setItem("savedDate",S),L.innerHTML=q(e,t)}).catch(e=>I.Notify.failure(e.message))}U();const N=document.getElementById("subscriptionForm"),M=document.getElementById("email"),_=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);N.addEventListener("submit",async function(e){e.preventDefault();try{_.test(M.value)?await p.post("https://energyflow.b.goit.study/api/subscription",{email:M.value}).then(t=>{console.log(t.data.message)}).catch(t=>{console.log(t.response.data.message)}):alert("Please enter the correct email")}catch(t){console.error("Error:",t),alert("Something went wrong, try again")}});const $=document.getElementById("exercises-search-form"),B=$.querySelector(".exercises-search-input"),E=document.querySelector(".exercises-list-page2"),T=document.querySelector(".exercises-inputclear-icon");$.addEventListener("submit",async e=>{e.preventDefault();const t=B.value.trim().toLowerCase();try{await J(t)}catch(a){console.error(a)}});B.addEventListener("input",j);function j(){B.value.trim()!==""?T.classList.remove("exercises-is-hidden"):T.classList.add("exercises-is-hidden")}function F(){const e=document.getElementById("exercises-search-input");e&&(e.value="")}T.addEventListener("click",F);async function z(e){try{return(await p.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${e}&page=1&limit=10`)).data}catch(t){throw console.error("Error fetching exercises:",t),t}}async function J(e){try{const t=await z(e);if(E.innerHTML="",t.results.length>0){const a=t.results.map(s=>`
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
      `).join("");E.innerHTML=a}else E.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(t){console.error(t)}}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".openModalBtn"),t=document.querySelector(".pop-up-exercise"),a=document.getElementById("modalTitle"),s=document.getElementById("modalImage"),n=document.getElementById("modalBodyPart"),i=document.getElementById("modalEquipment"),c=document.getElementById("modalTarget"),l=document.getElementById("modalDescription"),u=document.getElementById("modalRating"),y=document.getElementById("modalBurnedCalories"),h=document.getElementById("modalTime"),w=document.getElementById("modalPopularity"),b=document.querySelector(".add-to-favorites-btn"),C=document.querySelector(".give-rating-btn");b.addEventListener("click",function(){}),C.addEventListener("click",function(){}),e.forEach(function(r){r.addEventListener("click",function(){var o=r.getAttribute("data-id");H(o)})});function H(r){var o=new XMLHttpRequest;o.open("GET","https://energyflow.b.goit.study/api/data?id="+r,!0),o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE)if(o.status===200){var R=JSON.parse(o.responseText);D(R)}else console.error("Ошибка запроса на сервер: "+o.status)},o.send()}function D(r){a.textContent=r.name,s.src=r.gifUrl,n.textContent=r.bodyPart,i.textContent=r.equipment,c.textContent=r.target,l.textContent=r.description,u.textContent=r.rating,y.textContent=r.burnedCalories,h.textContent=r.time+" мин",w.textContent=r.popularity,t.style.display="flex"}});function k(e,t){const a=document.getElementById("tui-pagination-container"),s=t<5?t:5,n={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},i=new A(a,n);return s<=1?a.style.display="none":a.style.display="block",i}function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}const d=document.querySelector(".exercises-list");document.querySelector(".exercises-bottom-buttons");let x="Muscles",v=1;const P=12;let g;async function f(e,t){let a=new URLSearchParams({filter:e,page:t,limit:P});try{await p.get(`https://energyflow.b.goit.study/api/filters?${a}`).then(s=>{let n=s.data.results;g=s.data.totalPages,console.log("Total Pages: ",g);const i=n.map(({name:c,filter:l,imgUrl:u})=>`<li class="exercises-list-item" data-name="${c}" data-filter="${l}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${u}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${m(c)}</p>
            <p class="exercises-item-subname">${l}</p>
            </div>
          </li>`).join("");d.insertAdjacentHTML("beforeend",i),Q()}).catch(s=>{console.log(s.response.data.message)})}catch(s){console.error("Error:",s),alert("Something went wrong, try again")}}await f(x,v);k(12,g).on("afterMove",({page:e})=>{console.log("Moved",e),d.innerHTML="",f(x,e)});function Q(){const e=document.querySelectorAll(".exercises-list-item");for(const t of e)t.addEventListener("click",function(a){const s=a.currentTarget.dataset.name,n=a.currentTarget.dataset.filter;K({filter:n,name:s}),console.log("Clicked: ",m(s),n)})}const W=document.querySelectorAll(".exercises-filter-button");for(const e of W)e.addEventListener("click",async function(t){const a=t.currentTarget.dataset.name;x=a,console.log("Clicked the button: ",a),d.innerHTML="",await f(a,v),k(12,g).on("afterMove",({page:s})=>{console.log("Moved",s),console.log("Total Pages Pressed",g),d.innerHTML="",f(x,s)}),console.log(a,v)});function K({filter:e,name:t}){const s={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];new URLSearchParams({muscles:t,page:1,limit:9}),p.get(`https://energyflow.b.goit.study/api/exercises?${s}=${t.toLowerCase()}&page=${v}&limit${P}`).then(n=>{let i=n.data.results;console.log(i);const c=i.map(({bodyPart:l,burnedCalories:u,name:y,_id:h,target:w,rating:b})=>`<li class="exercises-item-page2" id=${h}>
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${b}</p>
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
                <p class="exercises-card-exname">${m(y)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${u}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${m(l)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${m(w)}
                </li>
              </ul>
            </div>
          </li> `).join("");d.innerHTML="",d.insertAdjacentHTML("beforeend",c)}).catch(n=>{console.log(n.response.data.message)})}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("scrollTop");function t(){window.scrollTo({top:0,behavior:"smooth"})}e.addEventListener("click",t)});
//# sourceMappingURL=commonHelpers2.js.map
