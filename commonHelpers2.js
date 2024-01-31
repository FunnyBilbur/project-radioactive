import"./assets/header-40f54f50.js";import{n as L,a as d,P as q}from"./assets/vendor-ae726d3c.js";const f=document.querySelector(".quote__backend"),w=new Date().toLocaleDateString();async function P(){f.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await d.get("https://energyflow.b.goit.study/api/quote")).data}catch{L.Notify.failure("Something went wrong, try again")}}function b(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function C(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===w){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));f.innerHTML=b(e,t)}else P().then(({author:e,quote:t})=>{const n={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(n)),localStorage.setItem("savedDate",w),f.innerHTML=b(e,t)}).catch(e=>L.Notify.failure(e.message))}C();const H=document.getElementById("subscriptionForm"),E=document.getElementById("email"),A=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);H.addEventListener("submit",async function(e){e.preventDefault();try{A.test(E.value)?await d.post("https://energyflow.b.goit.study/api/subscription",{email:E.value}).then(t=>{console.log(t.data.message)}).catch(t=>{console.log(t.response.data.message)}):alert("Please enter the correct email")}catch(t){console.error("Error:",t),alert("Something went wrong, try again")}});const I=document.getElementById("exercises-search-form"),v=I.querySelector(".exercises-search-input"),y=document.querySelector(".exercises-list-page2"),h=document.querySelector(".exercises-inputclear-icon");I.addEventListener("submit",async e=>{e.preventDefault();const t=v.value.trim().toLowerCase();try{await U(t)}catch(n){console.error(n)}});v.addEventListener("input",D);function D(){v.value.trim()!==""?h.classList.remove("exercises-is-hidden"):h.classList.add("exercises-is-hidden")}function R(){const e=document.getElementById("exercises-search-input");e&&(e.value="")}h.addEventListener("click",R);async function O(e){try{return(await d.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${e}&page=1&limit=10`)).data}catch(t){throw console.error("Error fetching exercises:",t),t}}async function U(e){try{const t=await O(e);if(y.innerHTML="",t.results.length>0){const n=t.results.map(s=>`
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
      `).join("");y.innerHTML=n}else y.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(t){console.error(t)}}function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}function N(){document.querySelector(".exercises-list").addEventListener("click",async function(n){let s=n.target;if(s.classList.contains("exercises-start-button")||s.parentElement.classList.contains("exercises-start-button")){let r;s.parentElement.classList.contains("exercises-start-button")?r=s.parentElement.getAttribute("id"):r=s.getAttribute("id");async function o(){try{await d.get("https://energyflow.b.goit.study/api/exercises/"+r).then(({data:a})=>{document.getElementById("modalImage").src=a.gifUrl,document.getElementById("modalName").textContent=i(a.name),document.getElementById("modalRating").textContent=a.rating,document.getElementById("modalTarget").textContent=i(a.target),document.getElementById("bodyPart").textContent=i(a.bodyPart),document.getElementById("modalEquipment").textContent=i(a.equipment),document.getElementById("modalPopularity").textContent=a.popularity,document.getElementById("modalBurnedCalories").textContent=a.burnedCalories+" cal / "+a.time+" min",document.getElementById("modalDescription").textContent=a.description;var c=document.getElementById("pop-up-exercise");c.style.display="flex"})}catch(a){console.error("Error:",a),alert("Something went wrong, try again")}}await o()}}),document.getElementById("closeBtn").addEventListener("click",function(){const n=document.getElementById("pop-up-exercise");n.style.display="none"})}function B(e,t){const n=document.getElementById("tui-pagination-container"),s=t<5?t:5,r={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},o=new q(n,r);return s<=1?n.style.display="none":n.style.display="block",o}const l=document.querySelector(".exercises-list");document.querySelector(".exercises-bottom-buttons");let g="Muscles",m=1;const $=12;let u;async function p(e,t){let n=new URLSearchParams({filter:e,page:t,limit:$});try{await d.get(`https://energyflow.b.goit.study/api/filters?${n}`).then(s=>{let r=s.data.results;u=s.data.totalPages,console.log("Total Pages: ",u);const o=r.map(({name:a,filter:c,imgUrl:x})=>`<li class="exercises-list-item" data-name="${a}" data-filter="${c}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${x}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${i(a)}</p>
            <p class="exercises-item-subname">${c}</p>
            </div>
          </li>`).join("");l.insertAdjacentHTML("beforeend",o),_()}).catch(s=>{console.log(s.response.data.message)})}catch(s){console.error("Error:",s),alert("Something went wrong, try again")}}await p(g,m);B(12,u).on("afterMove",({page:e})=>{console.log("Moved",e),l.innerHTML="",p(g,e)});function _(){const e=document.querySelectorAll(".exercises-list-item");for(const t of e)t.addEventListener("click",function(n){const s=n.currentTarget.dataset.name,r=n.currentTarget.dataset.filter;z({filter:r,name:s}),console.log("Clicked: ",i(s),r)})}const j=document.querySelectorAll(".exercises-filter-button");for(const e of j)e.addEventListener("click",async function(t){const n=t.currentTarget.dataset.name;g=n,console.log("Clicked the button: ",n),l.innerHTML="",await p(n,m),B(12,u).on("afterMove",({page:s})=>{console.log("Moved",s),console.log("Total Pages Pressed",u),l.innerHTML="",p(g,s)}),console.log(n,m)});function z({filter:e,name:t}){const s={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];new URLSearchParams({muscles:t,page:1,limit:9}),d.get(`https://energyflow.b.goit.study/api/exercises?${s}=${t.toLowerCase()}&page=${m}&limit${$}`).then(r=>{let o=r.data.results;console.log(o);const a=o.map(({bodyPart:c,burnedCalories:x,name:T,_id:k,target:S,rating:M})=>`<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${M}</p>
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
                <button class="exercises-start-button" id=${k}>
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
                <p class="exercises-card-exname">${i(T)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${x}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${i(c)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${i(S)}
                </li>
              </ul>
            </div>
          </li> `).join("");l.innerHTML="",l.insertAdjacentHTML("beforeend",a),N()}).catch(r=>{console.log(r.response.data.message)})}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("scrollTop");function t(){window.scrollTo({top:0,behavior:"smooth"})}e.addEventListener("click",t)});
//# sourceMappingURL=commonHelpers2.js.map
