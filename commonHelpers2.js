import"./assets/header-40f54f50.js";import{n as k,a as d,P as R}from"./assets/vendor-ae726d3c.js";const h=document.querySelector(".quote__backend"),B=new Date().toLocaleDateString();async function D(){h.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await d.get("https://energyflow.b.goit.study/api/quote")).data}catch{k.Notify.failure("Something went wrong, try again")}}function I(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function O(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===B){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));h.innerHTML=I(e,t)}else D().then(({author:e,quote:t})=>{const a={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(a)),localStorage.setItem("savedDate",B),h.innerHTML=I(e,t)}).catch(e=>k.Notify.failure(e.message))}O();const N=document.getElementById("subscriptionForm"),T=document.getElementById("email"),U=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);N.addEventListener("submit",async function(e){e.preventDefault();try{U.test(T.value)?await d.post("https://energyflow.b.goit.study/api/subscription",{email:T.value}).then(t=>{console.log(t.data.message)}).catch(t=>{console.log(t.response.data.message)}):alert("Please enter the correct email")}catch(t){console.error("Error:",t),alert("Something went wrong, try again")}});const M=document.getElementById("exercises-search-form"),E=M.querySelector(".exercises-search-input"),f=document.querySelector(".exercises-list"),v=document.querySelector(".exercises-inputclear-icon");M.addEventListener("submit",async e=>{e.preventDefault();const t=E.value.trim().toLowerCase();try{await F(t)}catch(a){console.error(a)}});E.addEventListener("input",_);function _(){E.value.trim()!==""?v.classList.remove("exercises-is-hidden"):v.classList.add("exercises-is-hidden")}function j(){const e=document.getElementById("exercises-search-input");e&&(e.value="")}v.addEventListener("click",j);async function z(e){try{return(await d.get(`https://energyflow.b.goit.study/api/exercises?bodypart=&muscles=abs&equipment=&keyword=${e}&page=1&limit=10`)).data}catch(t){throw console.error("Error fetching exercises:",t),t}}async function F(e){try{const t=await z(e);if(f.innerHTML="",t.results.length>0){const a=t.results.map(s=>`
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
      `).join("");f.innerHTML=a}else f.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(t){console.error(t)}}function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Q(){document.querySelector(".exercises-list").addEventListener("click",async function(a){let s=a.target;if(s.classList.contains("exercises-start-button")||s.parentElement.classList.contains("exercises-start-button")){let i;s.parentElement.classList.contains("exercises-start-button")?i=s.parentElement.getAttribute("id"):i=s.getAttribute("id");async function r(){try{await d.get("https://energyflow.b.goit.study/api/exercises/"+i).then(({data:n})=>{document.getElementById("modalImage").src=n.gifUrl,document.getElementById("modalName").textContent=o(n.name),document.getElementById("modalRating").textContent=n.rating,document.getElementById("modalTarget").textContent=o(n.target),document.getElementById("bodyPart").textContent=o(n.bodyPart),document.getElementById("modalEquipment").textContent=o(n.equipment),document.getElementById("modalPopularity").textContent=n.popularity,document.getElementById("modalBurnedCalories").textContent=n.burnedCalories+" cal / "+n.time+" min",document.getElementById("modalDescription").textContent=n.description;var l=document.getElementById("pop-up-exercise");l.style.display="flex"})}catch(n){console.error("Error:",n),alert("Something went wrong, try again")}}await r()}}),document.getElementById("closeBtn").addEventListener("click",function(){const a=document.getElementById("pop-up-exercise");a.style.display="none"})}function L(e,t){const a=document.getElementById("tui-pagination-container"),s=t<5?t:5,i={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},r=new R(a,i);return s<=1?a.style.display="none":a.style.display="block",r}const c=document.querySelector(".exercises-list");let g="Muscles",m=1;const P=12;let p,w;async function y(e,t){let a=new URLSearchParams({filter:e,page:t,limit:P});try{await d.get(`https://energyflow.b.goit.study/api/filters?${a}`).then(s=>{let i=s.data.results;p=s.data.totalPages;const r=i.map(({name:n,filter:l,imgUrl:x})=>`<li class="exercises-list-item" data-name="${n}" data-filter="${l}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${x}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${o(n)}</p>
            <p class="exercises-item-subname">${l}</p>
            </div>
          </li>`).join("");c.insertAdjacentHTML("beforeend",r),W()}).catch(s=>{console.log(s.response.data.message)})}catch(s){console.error("Error:",s),alert("Something went wrong, try again")}}await y(g,m);L(12,p).on("afterMove",({page:e})=>{c.innerHTML="",y(g,e)});function W(){let e=m;const t=document.querySelectorAll(".exercises-list-item");for(const a of t)a.addEventListener("click",async function(s){const i=s.currentTarget.dataset.name,r=s.currentTarget.dataset.filter;await $({filter:r,name:i,page:e}),L(10,w).on("afterMove",async({page:n})=>{c.innerHTML="",await $({filter:r,name:i,page:n})})})}const J=document.querySelectorAll(".exercises-filter-button");for(const e of J)e.classList.remove("foo"),e.addEventListener("click",async function(t){const a=t.currentTarget.dataset.name;t.currentTarget.classList.add("foo"),console.dir(t.currentTarget.classList),g=a,console.log("Clicked the button: ",a),c.innerHTML="",await y(a,m),L(12,p).on("afterMove",({page:s})=>{console.log("Moved",s),console.log("Total Pages Pressed",p),c.innerHTML="",y(g,s)}),console.log(a,m)});async function $({filter:e,name:t,page:a}){const i={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];await d.get(`https://energyflow.b.goit.study/api/exercises?${i}=${t.toLowerCase()}&page=${a}&limit${P}`).then(r=>{let n=r.data.results;w=r.data.totalPages,console.log("totalPagesforCards",w,"musclesResult:",r.data);const l=n.map(({bodyPart:x,burnedCalories:S,name:q,_id:C,target:H,rating:A})=>`<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${A}</p>
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
                <button class="exercises-start-button" id=${C}>
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
                <p class="exercises-card-exname">${o(q)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${S}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${o(x)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${o(H)}
                </li>
              </ul>
            </div>
          </li> `).join("");c.innerHTML="",c.insertAdjacentHTML("beforeend",l),Q()}).catch(r=>{console.log(r.response.data.message)})}const u=document.getElementById("scrollTopBtn");window.onscroll=function(){K()};function K(){document.body.scrollTop>20||document.documentElement.scrollTop>20?u.style.display="block":u.style.display="none"}u.addEventListener("click",b);function b(){window.scrollTo({top:0,behavior:"smooth"}),document.body.scrollTop>20||document.documentElement.scrollTop>20?u.addEventListener("click",b):u.removeEventListener("click",b)}
//# sourceMappingURL=commonHelpers2.js.map
