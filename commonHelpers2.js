import"./assets/scroll-8076d2f7.js";import{n as $,a as d,P as H}from"./assets/vendor-ae726d3c.js";const f=document.querySelector(".quote__backend"),E=new Date().toLocaleDateString();async function A(){f.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await d.get("https://energyflow.b.goit.study/api/quote")).data}catch{$.Notify.failure("Something went wrong, try again")}}function L(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function R(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===E){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));f.innerHTML=L(e,t)}else A().then(({author:e,quote:t})=>{const a={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(a)),localStorage.setItem("savedDate",E),f.innerHTML=L(e,t)}).catch(e=>$.Notify.failure(e.message))}R();const D=document.getElementById("subscriptionForm"),I=document.getElementById("email"),O=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);D.addEventListener("submit",async function(e){e.preventDefault();try{O.test(I.value)?await d.post("https://energyflow.b.goit.study/api/subscription",{email:I.value}).then(t=>{console.log(t.data.message)}).catch(t=>{console.log(t.response.data.message)}):alert("Please enter the correct email")}catch(t){console.error("Error:",t),alert("Something went wrong, try again")}});const M=document.getElementById("exercises-search-form"),w=M.querySelector(".exercises-search-input"),y=document.querySelector(".exercises-list"),h=document.querySelector(".exercises-inputclear-icon");M.addEventListener("submit",async e=>{e.preventDefault();const t=w.value.trim().toLowerCase();try{await j(t)}catch(a){console.error(a)}});w.addEventListener("input",N);function N(){w.value.trim()!==""?h.classList.remove("exercises-is-hidden"):h.classList.add("exercises-is-hidden")}function U(){const e=document.getElementById("exercises-search-input");e&&(e.value="")}h.addEventListener("click",U);async function _(e){try{return(await d.get(`https://energyflow.b.goit.study/api/exercises?bodypart=&muscles=abs&equipment=&keyword=${e}&page=1&limit=10`)).data}catch(t){throw console.error("Error fetching exercises:",t),t}}async function j(e){try{const t=await _(e);if(y.innerHTML="",t.results.length>0){const a=t.results.map(s=>`
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
      `).join("");y.innerHTML=a}else y.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(t){console.error(t)}}function c(e){return e.charAt(0).toUpperCase()+e.slice(1)}function z(){document.querySelector(".exercises-list").addEventListener("click",async function(a){let s=a.target;if(s.classList.contains("exercises-start-button")||s.parentElement.classList.contains("exercises-start-button")){let i;s.parentElement.classList.contains("exercises-start-button")?i=s.parentElement.getAttribute("id"):i=s.getAttribute("id");async function n(){try{await d.get("https://energyflow.b.goit.study/api/exercises/"+i).then(({data:r})=>{document.getElementById("modalImage").src=r.gifUrl,document.getElementById("modalName").textContent=c(r.name),document.getElementById("modalRating").textContent=r.rating,document.getElementById("modalTarget").textContent=c(r.target),document.getElementById("bodyPart").textContent=c(r.bodyPart),document.getElementById("modalEquipment").textContent=c(r.equipment),document.getElementById("modalPopularity").textContent=r.popularity,document.getElementById("modalBurnedCalories").textContent=r.burnedCalories+" cal / "+r.time+" min",document.getElementById("modalDescription").textContent=r.description;var l=document.getElementById("pop-up-exercise");l.style.display="flex"})}catch(r){console.error("Error:",r),alert("Something went wrong, try again")}}await n()}}),document.getElementById("closeBtn").addEventListener("click",function(){const a=document.getElementById("pop-up-exercise");a.style.display="none"})}function b(e,t){const a=document.getElementById("tui-pagination-container"),s=t<5?t:5,i={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},n=new H(a,i);return s<=1?a.style.display="none":a.style.display="block",n}const o=document.querySelector(".exercises-list");let u="Muscles",g=1;const T=12;let m,v;async function p(e,t){let a=new URLSearchParams({filter:e,page:t,limit:T});try{await d.get(`https://energyflow.b.goit.study/api/filters?${a}`).then(s=>{let i=s.data.results;m=s.data.totalPages;const n=i.map(({name:r,filter:l,imgUrl:x})=>`<li class="exercises-list-item" data-name="${r}" data-filter="${l}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${x}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${c(r)}</p>
            <p class="exercises-item-subname">${l}</p>
            </div>
          </li>`).join("");o.insertAdjacentHTML("beforeend",n),Q()}).catch(s=>{console.log(s.response.data.message)})}catch(s){console.error("Error:",s),alert("Something went wrong, try again")}}await p(u,g);b(12,m).on("afterMove",({page:e})=>{o.innerHTML="",p(u,e)});function Q(){let e=g;const t=document.querySelectorAll(".exercises-list-item");for(const a of t)a.addEventListener("click",async function(s){const i=s.currentTarget.dataset.name,n=s.currentTarget.dataset.filter;await B({filter:n,name:i,page:e}),b(10,v).on("afterMove",async({page:r})=>{o.innerHTML="",await B({filter:n,name:i,page:r})})})}const W=document.querySelectorAll(".exercises-filter-button");for(const e of W)e.classList.remove("foo"),e.addEventListener("click",async function(t){const a=t.currentTarget.dataset.name;t.currentTarget.classList.add("foo"),console.dir(t.currentTarget.classList),u=a,console.log("Clicked the button: ",a),o.innerHTML="",await p(a,g),b(12,m).on("afterMove",({page:s})=>{console.log("Moved",s),console.log("Total Pages Pressed",m),o.innerHTML="",p(u,s)}),console.log(a,g)});async function B({filter:e,name:t,page:a}){const i={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];await d.get(`https://energyflow.b.goit.study/api/exercises?${i}=${t.toLowerCase()}&page=${a}&limit${T}`).then(n=>{let r=n.data.results;v=n.data.totalPages,console.log("totalPagesforCards",v,"musclesResult:",n.data);const l=r.map(({bodyPart:x,burnedCalories:k,name:P,_id:S,target:q,rating:C})=>`<li class="exercises-item-page2">
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
                <button class="exercises-start-button" id=${S}>
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
                <p class="exercises-card-exname">${c(P)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${k}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${c(x)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${c(q)}
                </li>
              </ul>
            </div>
          </li> `).join("");o.innerHTML="",o.insertAdjacentHTML("beforeend",l),z()}).catch(n=>{console.log(n.response.data.message)})}
//# sourceMappingURL=commonHelpers2.js.map
