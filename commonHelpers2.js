import"./assets/scroll-8076d2f7.js";import{n as M,a as u,P as H}from"./assets/vendor-ae726d3c.js";const h=document.querySelector(".quote__backend"),L=new Date().toLocaleDateString();async function A(){h.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await u.get("https://energyflow.b.goit.study/api/quote")).data}catch{M.Notify.failure("Something went wrong, try again")}}function I(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function R(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===L){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));h.innerHTML=I(e,t)}else A().then(({author:e,quote:t})=>{const a={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(a)),localStorage.setItem("savedDate",L),h.innerHTML=I(e,t)}).catch(e=>M.Notify.failure(e.message))}R();const D=document.getElementById("subscriptionForm"),B=document.getElementById("email"),O=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);D.addEventListener("submit",async function(e){e.preventDefault();try{O.test(B.value)?await u.post("https://energyflow.b.goit.study/api/subscription",{email:B.value}).then(t=>{console.log(t.data.message)}).catch(t=>{console.log(t.response.data.message)}):alert("Please enter the correct email")}catch(t){console.error("Error:",t),alert("Something went wrong, try again")}});const S=document.getElementById("exercises-search-form"),b=S.querySelector(".exercises-search-input"),f=document.querySelector(".exercises-list"),v=document.querySelector(".exercises-inputclear-icon");S.addEventListener("submit",async e=>{e.preventDefault();const t=b.value.trim().toLowerCase();try{await j(t)}catch(a){console.error(a)}});b.addEventListener("input",N);function N(){b.value.trim()!==""?v.classList.remove("exercises-is-hidden"):v.classList.add("exercises-is-hidden")}function U(){const e=document.getElementById("exercises-search-input");e&&(e.value="")}v.addEventListener("click",U);async function _(e){try{return(await u.get(`https://energyflow.b.goit.study/api/exercises?bodypart=&muscles=abs&equipment=&keyword=${e}&page=1&limit=10`)).data}catch(t){throw console.error("Error fetching exercises:",t),t}}async function j(e){try{const t=await _(e);if(f.innerHTML="",t.results.length>0){const a=t.results.map(s=>`
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
      `).join("");f.innerHTML=a}else f.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(t){console.error(t)}}function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}function z(){document.querySelector(".exercises-list").addEventListener("click",async function(n){let r=n.target;if(r.classList.contains("exercises-start-button")||r.parentElement.classList.contains("exercises-start-button")){let c;r.parentElement.classList.contains("exercises-start-button")?c=r.parentElement.getAttribute("id"):c=r.getAttribute("id");async function d(){try{await u.get("https://energyflow.b.goit.study/api/exercises/"+c).then(({data:i})=>{document.getElementById("modalImage").src=i.gifUrl,document.getElementById("modalName").textContent=o(i.name),document.getElementById("modalRating").textContent=i.rating,document.getElementById("modalTarget").textContent=o(i.target),document.getElementById("bodyPart").textContent=o(i.bodyPart),document.getElementById("modalEquipment").textContent=o(i.equipment),document.getElementById("modalPopularity").textContent=i.popularity,document.getElementById("modalBurnedCalories").textContent=i.burnedCalories+" cal / "+i.time+" min",document.getElementById("modalDescription").textContent=i.description;var y=document.getElementById("pop-up-exercise");y.style.display="flex"})}catch(i){console.error("Error:",i),alert("Something went wrong, try again")}}await d()}}),document.getElementById("closeBtn").addEventListener("click",function(){const n=document.getElementById("pop-up-exercise");n.style.display="none"});const a=3,s=document.querySelectorAll(".star");for(let n=0;n<a;n++)s[n].style.fill="yellow"}function E(e,t){const a=document.getElementById("tui-pagination-container"),s=t<5?t:5,n={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},r=new H(a,n);return s<=1?a.style.display="none":a.style.display="block",r}const l=document.querySelector(".exercises-list");let g="Muscles",m=1;const T=12;let p,w;async function x(e,t){let a=new URLSearchParams({filter:e,page:t,limit:T});try{await u.get(`https://energyflow.b.goit.study/api/filters?${a}`).then(s=>{let n=s.data.results;p=s.data.totalPages;const r=n.map(({name:c,filter:d,imgUrl:i})=>`<li class="exercises-list-item" data-name="${c}" data-filter="${d}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${i}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${o(c)}</p>
            <p class="exercises-item-subname">${d}</p>
            </div>
          </li>`).join("");l.insertAdjacentHTML("beforeend",r),Q()}).catch(s=>{console.log(s.response.data.message)})}catch(s){console.error("Error:",s),alert("Something went wrong, try again")}}await x(g,m);E(12,p).on("afterMove",({page:e})=>{l.innerHTML="",x(g,e)});function Q(){let e=m;const t=document.querySelectorAll(".exercises-list-item");for(const a of t)a.addEventListener("click",async function(s){const n=s.currentTarget.dataset.name,r=s.currentTarget.dataset.filter;await $({filter:r,name:n,page:e}),E(10,w).on("afterMove",async({page:c})=>{l.innerHTML="",await $({filter:r,name:n,page:c})})})}const W=document.querySelectorAll(".exercises-filter-button");for(const e of W)e.classList.remove("foo"),e.addEventListener("click",async function(t){const a=t.currentTarget.dataset.name;t.currentTarget.classList.add("foo"),console.dir(t.currentTarget.classList),g=a,console.log("Clicked the button: ",a),l.innerHTML="",await x(a,m),E(12,p).on("afterMove",({page:s})=>{console.log("Moved",s),console.log("Total Pages Pressed",p),l.innerHTML="",x(g,s)}),console.log(a,m)});async function $({filter:e,name:t,page:a}){const n={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];await u.get(`https://energyflow.b.goit.study/api/exercises?${n}=${t.toLowerCase()}&page=${a}&limit${T}`).then(r=>{let c=r.data.results;w=r.data.totalPages,console.log("totalPagesforCards",w,"musclesResult:",r.data);const d=c.map(({bodyPart:i,burnedCalories:y,name:k,_id:q,target:P,rating:C})=>`<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${C}</p>
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
                <button class="exercises-start-button" id=${q}>
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
                <p class="exercises-card-exname">${o(k)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${y}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${o(i)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${o(P)}
                </li>
              </ul>
            </div>
          </li> `).join("");l.innerHTML="",l.insertAdjacentHTML("beforeend",d),z()}).catch(r=>{console.log(r.response.data.message)})}
//# sourceMappingURL=commonHelpers2.js.map
