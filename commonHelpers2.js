import"./assets/scroll-8076d2f7.js";import{n as T,a as y,P as D}from"./assets/vendor-6ba419a8.js";const k=document.querySelector(".quote__backend"),B=new Date().toLocaleDateString();async function H(){k.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await y.get("https://energyflow.b.goit.study/api/quote")).data}catch{T.Notify.failure("Something went wrong, try again")}}function q(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function N(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===B){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));k.innerHTML=q(e,t)}else H().then(({author:e,quote:t})=>{const n={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(n)),localStorage.setItem("savedDate",B),k.innerHTML=q(e,t)}).catch(e=>T.Notify.failure(e.message))}N();const R=document.getElementById("subscriptionForm"),P=document.getElementById("email"),_=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);R.addEventListener("submit",async function(e){e.preventDefault();try{_.test(P.value)?await y.post("https://energyflow.b.goit.study/api/subscription",{email:P.value}).then(t=>{alert(t.data.message)}).catch(t=>{alert(t.response.data.message)}):alert("Please enter the correct email")}catch(t){console.error("Error:",t),alert("Something went wrong, try again")}});function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}function O(){document.querySelector(".exercises-list").addEventListener("click",t);async function t(o){let r=o.target;if(r.classList.contains("exercises-start-button")||r.parentElement.classList.contains("exercises-start-button")){let x=function(){const a=document.querySelector(".add-to-favorites-btn").dataset.id;if(a){let d=JSON.parse(localStorage.getItem("favorite"))||[];console.log(d),d.some(C=>C._id===a)?console.log(`Упражнение с ID ${a} уже находится в избранном.`):(d.push(m),localStorage.setItem("favorite",JSON.stringify(d)),console.log(`Упражнение с ID ${a} добавлено в избранное.`))}else console.log(`Упражнение с ID ${a} не найдено.`);f.removeEventListener("click",x)},c;r.parentElement.classList.contains("exercises-start-button")?c=r.parentElement.getAttribute("id"):c=r.getAttribute("id");let m;async function S(){try{await y.get("https://energyflow.b.goit.study/api/exercises/"+c).then(({data:a})=>{console.log(a),document.getElementById("modalImage").src=a.gifUrl,document.getElementById("modalName").textContent=l(a.name),document.getElementById("modalRating").textContent=a.rating.toFixed(1),document.getElementById("modalTarget").textContent=l(a.target),document.getElementById("bodyPart").textContent=l(a.bodyPart),document.getElementById("modalEquipment").textContent=l(a.equipment),document.getElementById("modalPopularity").textContent=a.popularity,document.getElementById("modalBurnedCalories").textContent=a.burnedCalories+" cal / "+a.time+" min",document.getElementById("modalDescription").textContent=a.description,document.querySelector(".add-to-favorites-btn").dataset.id=a._id;var d=document.getElementById("pop-up-exercise");d.style.display="flex",m=a})}catch(a){console.error("Error:",a),alert("Something went wrong, try again")}}await S();const f=document.querySelector(".add-to-favorites-btn");f.addEventListener("click",x)}}document.getElementById("closeBtn").addEventListener("click",function(){const o=document.getElementById("pop-up-exercise");o.style.display="none"});const s=3,i=document.querySelectorAll(".star");for(let o=0;o<s;o++)i[o].style.fill="yellow"}function I(e,t){const n=document.getElementById("tui-pagination-container"),s=t<3?t:3,i={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},o=new D(n,i);return s<=1?n.style.display="none":n.style.display="block",o}const u=document.querySelector(".exercises-list");let v="Muscles",p=1;const F=12,j=9;let h,w;const L=document.getElementById("exercises-search-form"),g=document.querySelector(".exircises-category"),A=document.querySelector(".exercises-title"),$=L.querySelector(".exercises-search-input");async function b(e,t){let n=new URLSearchParams({filter:e,page:t,limit:F});try{await y.get(`https://energyflow.b.goit.study/api/filters?${n}`).then(s=>{let i=s.data.results;h=s.data.totalPages;const o=i.map(({name:r,filter:c,imgUrl:m})=>`<li class="exercises-list-item" data-name="${r}" data-filter="${c}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${m}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${l(r)}</p>
            <p class="exercises-item-subname">${c}</p>
            </div>
          </li>`).join("");u.insertAdjacentHTML("beforeend",o),J()}).catch(s=>{console.log(s.response.data.message)})}catch(s){console.error("Error:",s),alert("Something went wrong, try again")}}await b(v,p);I(12,h).on("afterMove",({page:e})=>{u.innerHTML="",b(v,e)});function J(){let e=p;const t=document.querySelectorAll(".exercises-list-item");for(const n of t){n.addEventListener("click",s);async function s(i){const o=i.currentTarget.dataset.name,r=i.currentTarget.dataset.filter;L.classList.remove("input-hidden"),await E({filter:r,name:o,page:e}),I(9,w).on("afterMove",async({page:c})=>{u.innerHTML="",await E({filter:r,name:o,page:c})}),n.removeEventListener("click",s)}}}const M=document.querySelectorAll(".exercises-filter-button");for(const e of M)e.addEventListener("click",async function(t){L.classList.add("input-hidden");const n=t.currentTarget.dataset.name;for(const s of M)s.classList.remove("active-btn");t.target.classList.add("active-btn"),v=n,console.log("Clicked the button: ",n),u.innerHTML="",g.dataset.name="",g.textContent="",A.textContent="Exercises",await b(n,p),I(12,h).on("afterMove",({page:s})=>{console.log("Moved",s),console.log("Total Pages Pressed",h),u.innerHTML="",b(v,s)}),console.log(n,p)});async function E({filter:e,name:t,page:n,keyword:s=""}){const o={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];await y.get(`https://energyflow.b.goit.study/api/exercises?${o}=${t.toLowerCase()}&keyword=${s}&page=${n}&limit=${j}`).then(r=>{let c=r.data.results;w=r.data.totalPages,console.log("totalPagesforCards",w,"musclesResult:",r.data),g.dataset.name=t,g.dataset.filter=e,g.textContent=l(t),A.textContent="Exercises /";const m=c.map(({bodyPart:S,burnedCalories:f,name:x,_id:a,target:d,rating:C})=>`<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${C.toFixed(1)}</p>
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
                <button class="exercises-start-button" id=${a}>
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
                <p class="exercises-card-exname">${l(x)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${f}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${l(S)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${l(d)}
                </li>
              </ul>
            </div>
          </li> `).join("");u.innerHTML="",u.insertAdjacentHTML("beforeend",m),O()}).catch(r=>{console.log(r.response.data.message)})}L.addEventListener("submit",async e=>{e.preventDefault();let t=p,n=g.dataset.filter,s=g.dataset.name,i=$.value.trim().toLowerCase();console.log("Text Content",$.value.trim().toLowerCase()),await E({filter:n,name:s,page:t,keyword:i}),I(9,w).on("afterMove",async({page:o})=>{u.innerHTML="",await E({filter:n,name:s,page:o,keyword:i})})});
//# sourceMappingURL=commonHelpers2.js.map
