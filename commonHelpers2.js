import"./assets/scroll-8076d2f7.js";import{n as k,a as y,P as H}from"./assets/vendor-6ba419a8.js";const B=document.querySelector(".quote__backend"),P=new Date().toLocaleDateString();async function R(){B.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await y.get("https://energyflow.b.goit.study/api/quote")).data}catch{k.Notify.failure("Something went wrong, try again")}}function T(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function _(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===P){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));B.innerHTML=T(e,t)}else R().then(({author:e,quote:t})=>{const a={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(a)),localStorage.setItem("savedDate",P),B.innerHTML=T(e,t)}).catch(e=>k.Notify.failure(e.message))}_();const N=document.getElementById("subscriptionForm"),$=document.getElementById("email"),O=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);N.addEventListener("submit",async function(e){e.preventDefault();try{O.test($.value)?await y.post("https://energyflow.b.goit.study/api/subscription",{email:$.value}).then(t=>{alert(t.data.message)}).catch(t=>{alert(t.response.data.message)}):alert("Please enter the correct email")}catch(t){console.error("Error:",t),alert("Something went wrong, try again")}});function c(e){return e.charAt(0).toUpperCase()+e.slice(1)}function F(){document.querySelector(".exercises-list").addEventListener("click",async function(n){let o=n.target;if(o.classList.contains("exercises-start-button")||o.parentElement.classList.contains("exercises-start-button")){let i;o.parentElement.classList.contains("exercises-start-button")?i=o.parentElement.getAttribute("id"):i=o.getAttribute("id");async function m(){try{await y.get("https://energyflow.b.goit.study/api/exercises/"+i).then(({data:r})=>{document.getElementById("modalImage").src=r.gifUrl,document.getElementById("modalName").textContent=c(r.name),document.getElementById("modalRating").textContent=r.rating,document.getElementById("modalTarget").textContent=c(r.target),document.getElementById("bodyPart").textContent=c(r.bodyPart),document.getElementById("modalEquipment").textContent=c(r.equipment),document.getElementById("modalPopularity").textContent=r.popularity,document.getElementById("modalBurnedCalories").textContent=r.burnedCalories+" cal / "+r.time+" min",document.getElementById("modalDescription").textContent=r.description;var L=document.getElementById("pop-up-exercise");L.style.display="flex",document.querySelector(".add-to-favorites-btn").addEventListener("click",function(){const d=this.getAttribute("id"),f=fromAPI.find(u=>u._id===d);if(f){let u=JSON.parse(localStorage.getItem(KEY_FAVORITE))||[];u.some(S=>S._id===d)?console.log(`Упражнение с ID ${d} уже находится в избранном.`):(u.push(f),localStorage.setItem(KEY_FAVORITE,JSON.stringify(u)),console.log(`Упражнение с ID ${d} добавлено в избранное.`))}else console.log(`Упражнение с ID ${d} не найдено.`)})})}catch(r){console.error("Error:",r),alert("Something went wrong, try again")}}await m()}}),document.getElementById("closeBtn").addEventListener("click",function(){const n=document.getElementById("pop-up-exercise");n.style.display="none"});const a=3,s=document.querySelectorAll(".star");for(let n=0;n<a;n++)s[n].style.fill="yellow"}function E(e,t){const a=document.getElementById("tui-pagination-container"),s=t<3?t:3,n={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},o=new H(a,n);return s<=1?a.style.display="none":a.style.display="block",o}const l=document.querySelector(".exercises-list");let x="Muscles",p=1;const A=12;let v,h;const I=document.getElementById("exercises-search-form"),g=document.querySelector(".exircises-category"),D=document.querySelector(".exercises-title"),q=I.querySelector(".exercises-search-input");async function w(e,t){let a=new URLSearchParams({filter:e,page:t,limit:A});try{await y.get(`https://energyflow.b.goit.study/api/filters?${a}`).then(s=>{let n=s.data.results;v=s.data.totalPages;const o=n.map(({name:i,filter:m,imgUrl:r})=>`<li class="exercises-list-item" data-name="${i}" data-filter="${m}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${r}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${c(i)}</p>
            <p class="exercises-item-subname">${m}</p>
            </div>
          </li>`).join("");l.insertAdjacentHTML("beforeend",o),j()}).catch(s=>{console.log(s.response.data.message)})}catch(s){console.error("Error:",s),alert("Something went wrong, try again")}}await w(x,p);E(12,v).on("afterMove",({page:e})=>{l.innerHTML="",w(x,e)});function j(){let e=p;const t=document.querySelectorAll(".exercises-list-item");for(const a of t)a.addEventListener("click",async function(s){const n=s.currentTarget.dataset.name,o=s.currentTarget.dataset.filter;I.classList.remove("input-hidden"),await b({filter:o,name:n,page:e}),E(10,h).on("afterMove",async({page:i})=>{l.innerHTML="",await b({filter:o,name:n,page:i})})})}const M=document.querySelectorAll(".exercises-filter-button");for(const e of M)e.addEventListener("click",async function(t){I.classList.add("input-hidden");const a=t.currentTarget.dataset.name;for(const s of M)s.classList.remove("active-btn");t.target.classList.add("active-btn"),x=a,console.log("Clicked the button: ",a),l.innerHTML="",g.dataset.name="",g.textContent="",D.textContent="Exercises",await w(a,p),E(12,v).on("afterMove",({page:s})=>{console.log("Moved",s),console.log("Total Pages Pressed",v),l.innerHTML="",w(x,s)}),console.log(a,p)});async function b({filter:e,name:t,page:a,keyword:s=""}){const o={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];await y.get(`https://energyflow.b.goit.study/api/exercises?${o}=${t.toLowerCase()}&keyword=${s}&page=${a}&limit${A}`).then(i=>{let m=i.data.results;h=i.data.totalPages,console.log("totalPagesforCards",h,"musclesResult:",i.data),g.dataset.name=t,g.dataset.filter=e,g.textContent=c(t),D.textContent="Exercises /";const r=m.map(({bodyPart:L,burnedCalories:C,name:d,_id:f,target:u,rating:S})=>`<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${S.toFixed(1)}</p>
                    <svg
                      class="exercises-star-icon"
                      width="18"
                      height="18"
                      aria-label="star icon"
                    >
                      <use
                        href="../img/exercises/exercises-sprite.svg#icon-star"
                      ></use>
                    </svg>
                  </div>
                </div>
                <button class="exercises-start-button" id=${f}>
                  Start
                  <svg class="exercises-start-icon" width="14" height="14">
                    <use
                      href="../img/exercises/exercises-sprite.svg#icon-arrow"
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
                    href="../img/exercises/exercises-sprite.svg#icon-icon"
                  ></use>
                </svg>
                <p class="exercises-card-exname">${c(d)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${C}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${c(L)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${c(u)}
                </li>
              </ul>
            </div>
          </li> `).join("");l.innerHTML="",l.insertAdjacentHTML("beforeend",r),F()}).catch(i=>{console.log(i.response.data.message)})}I.addEventListener("submit",async e=>{e.preventDefault();let t=p,a=g.dataset.filter,s=g.dataset.name,n=q.value.trim().toLowerCase();console.log("Text Content",q.value.trim().toLowerCase()),await b({filter:a,name:s,page:t,keyword:n}),E(10,h).on("afterMove",async({page:o})=>{l.innerHTML="",await b({filter:a,name:s,page:o,keyword:n})})});
//# sourceMappingURL=commonHelpers2.js.map
