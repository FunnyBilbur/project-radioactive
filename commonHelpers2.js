import"./assets/scroll-fa6657b1.js";import{i as c,a as f,P as H}from"./assets/vendor-ebe44317.js";const B=document.querySelector(".quote__backend"),q=new Date().toLocaleDateString();async function R(){B.innerHTML=`
        <span class="loader"></span>
    `;try{return(await f.get("https://energyflow.b.goit.study/api/quote")).data}catch{c.error({title:"Error",message:"Something went wrong, try again"})}}function P(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function _(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===q){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));B.innerHTML=P(e,t)}else R().then(({author:e,quote:t})=>{const r={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(r)),localStorage.setItem("savedDate",q),B.innerHTML=P(e,t)}).catch(e=>c.error({title:"Error",message:e.message}))}_();const O=document.getElementById("subscriptionForm"),M=document.getElementById("email"),j=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);O.addEventListener("submit",async function(e){e.preventDefault();try{j.test(M.value)?await f.post("https://energyflow.b.goit.study/api/subscription",{email:M.value}).then(t=>c.success({title:"Success",message:t.data.message})).catch(t=>c.error({title:"Error",message:t.response.data.message})):c.error({title:"Error",message:"Please enter the correct email!"})}catch{c.error({title:"Error",message:"Something went wrong, try again"})}});function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}function F(){document.querySelector(".exercises-list").addEventListener("click",t);async function t(n){let o=n.target;if(o.classList.contains("exercises-start-button")||o.parentElement.classList.contains("exercises-start-button")){let v=function(){const a=document.querySelector(".add-to-favorites-btn").dataset.id;if(a){let u=JSON.parse(localStorage.getItem("favorite"))||[];console.log(u),u.some(C=>C._id===a)?c.success({title:"Success",message:`Упражнение с ID ${a} уже находится в избранном.`}):(u.push(p),localStorage.setItem("favorite",JSON.stringify(u)),c.success({title:"Success",message:`Упражнение с ID ${a} добавлено в избранное.`}))}else c.error({title:"Error",message:`Упражнение с ID ${a} не найдено.`});x.removeEventListener("click",v)},l;o.parentElement.classList.contains("exercises-start-button")?l=o.parentElement.getAttribute("id"):l=o.getAttribute("id");let p;async function L(){try{await f.get("https://energyflow.b.goit.study/api/exercises/"+l).then(({data:a})=>{console.log(a),document.getElementById("modalImage").src=a.gifUrl,document.getElementById("modalName").textContent=d(a.name),document.getElementById("modalRating").textContent=a.rating.toFixed(1),document.getElementById("modalTarget").textContent=d(a.target),document.getElementById("bodyPart").textContent=d(a.bodyPart),document.getElementById("modalEquipment").textContent=d(a.equipment),document.getElementById("modalPopularity").textContent=a.popularity,document.getElementById("modalBurnedCalories").textContent=a.burnedCalories+" cal / "+a.time+" min",document.getElementById("modalDescription").textContent=a.description,document.querySelector(".add-to-favorites-btn").dataset.id=a._id;var u=document.getElementById("pop-up-exercise");u.style.display="flex",p=a})}catch{c.error({title:"Error",message:"Something went wrong, try again"})}}await L();const x=document.querySelector(".add-to-favorites-btn");x.addEventListener("click",v)}}document.getElementById("closeBtn").addEventListener("click",function(){const n=document.getElementById("pop-up-exercise");n.style.display="none"});const s=3,i=document.querySelectorAll(".star");for(let n=0;n<s;n++)i[n].style.fill="yellow"}const $="/project-radioactive/assets/exercises-sprite-d4ab7b8a.svg";function S(e,t){const r=document.getElementById("tui-pagination-container"),s=t<3?t:3,i={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},n=new H(r,i);return s<=1?r.style.display="none":r.style.display="block",n}const m=document.querySelector(".exercises-list");let h="Muscles",y=1;const N=12,z=9;let k,E;const I=document.getElementById("exercises-search-form"),g=document.querySelector(".exircises-category"),A=document.querySelector(".exercises-title"),T=I.querySelector(".exercises-search-input");async function b(e,t){let r=new URLSearchParams({filter:e,page:t,limit:N});try{await f.get(`https://energyflow.b.goit.study/api/filters?${r}`).then(s=>{let i=s.data.results;k=s.data.totalPages;const n=i.map(({name:o,filter:l,imgUrl:p})=>`<li class="exercises-list-item" data-name="${o}" data-filter="${l}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${p}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${d(o)}</p>
            <p class="exercises-item-subname">${l}</p>
            </div>
          </li>`).join("");m.insertAdjacentHTML("beforeend",n),J()}).catch(s=>{console.log(s.response.data.message)})}catch{c.error({title:"Error",message:"Something went wrong, try again"})}}await b(h,y);S(12,k).on("afterMove",({page:e})=>{m.innerHTML="",b(h,e)});function J(){let e=y;const t=document.querySelectorAll(".exercises-list-item");for(const r of t){r.addEventListener("click",s);async function s(i){const n=i.currentTarget.dataset.name,o=i.currentTarget.dataset.filter;I.classList.remove("input-hidden"),await w({filter:o,name:n,page:e}),S(9,E).on("afterMove",async({page:l})=>{m.innerHTML="",await w({filter:o,name:n,page:l})}),r.removeEventListener("click",s)}}}const D=document.querySelectorAll(".exercises-filter-button");for(const e of D)e.addEventListener("click",async function(t){I.classList.add("input-hidden");const r=t.currentTarget.dataset.name;for(const s of D)s.classList.remove("active-btn");t.target.classList.add("active-btn"),h=r,console.log("Clicked the button: ",r),m.innerHTML="",g.dataset.name="",g.textContent="",A.textContent="Exercises",await b(r,y),S(12,k).on("afterMove",({page:s})=>{m.innerHTML="",b(h,s)}),console.log(r,y)});async function w({filter:e,name:t,page:r,keyword:s=""}){const n={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];await f.get(`https://energyflow.b.goit.study/api/exercises?${n}=${t.toLowerCase()}&keyword=${s}&page=${r}&limit=${z}`).then(o=>{let l=o.data.results;E=o.data.totalPages,console.log("totalPagesforCards",E,"musclesResult:",o.data),g.dataset.name=t,g.dataset.filter=e,g.textContent=d(t),A.textContent="Exercises /";const p=l.map(({bodyPart:L,burnedCalories:x,name:v,_id:a,target:u,rating:C})=>`<li class="exercises-item-page2">
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
                        href="${$}#icon-star"
                      ></use>
                    </svg>
                  </div>
                </div>
                <button class="exercises-start-button" id=${a}>
                  Start
                  <svg class="exercises-start-icon" width="14" height="14">
                    <use
                      href="${$}#icon-arrow"
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
                    href="${$}#icon-icon"
                  ></use>
                </svg>
                <p class="exercises-card-exname">${d(v)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${x}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${d(L)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${d(u)}
                </li>
              </ul>
            </div>
          </li> `).join("");m.innerHTML="",m.insertAdjacentHTML("beforeend",p),F()}).catch(o=>{c.error({title:"Error",message:o.response.data.message})})}I.addEventListener("submit",async e=>{e.preventDefault();let t=y,r=g.dataset.filter,s=g.dataset.name,i=T.value.trim().toLowerCase();console.log("Text Content",T.value.trim().toLowerCase()),await w({filter:r,name:s,page:t,keyword:i}),S(9,E).on("afterMove",async({page:n})=>{m.innerHTML="",await w({filter:r,name:s,page:n,keyword:i})})});
//# sourceMappingURL=commonHelpers2.js.map
