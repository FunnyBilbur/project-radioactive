import{c as g,a as R}from"./assets/scroll-54bd078a.js";import{i as c,a as y,P as D}from"./assets/vendor-ebe44317.js";const L=document.querySelector(".quote__backend"),$=new Date().toLocaleDateString();async function _(){L.innerHTML=`
        <span class="loader"></span>
    `;try{return(await y.get("https://energyflow.b.goit.study/api/quote")).data}catch{c.error({title:"Error",message:"Something went wrong, try again"})}}function M(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function j(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===$){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));L.innerHTML=M(e,t)}else _().then(({author:e,quote:t})=>{const s={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(s)),localStorage.setItem("savedDate",$),L.innerHTML=M(e,t)}).catch(e=>c.error({title:"Error",message:e.message}))}j();const z=document.getElementById("subscriptionForm"),S=document.getElementById("email"),O=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);z.addEventListener("submit",async function(e){e.preventDefault();try{O.test(S.value)?await y.post("https://energyflow.b.goit.study/api/subscription",{email:S.value}).then(t=>c.success({title:"Success",message:t.data.message})).catch(t=>c.error({title:"Error",message:t.response.data.message})):c.error({title:"Error",message:"Please enter the correct email!"})}catch{c.error({title:"Error",message:"Something went wrong, try again"})}});const b="/project-radioactive/assets/exercises-sprite-d4ab7b8a.svg";function v(e,t){const s=document.getElementById("tui-pagination-container"),a=t<3?t:3,i={totalItems:e*t,itemsPerPage:e,visiblePages:a,centerAlign:!0},n=new D(s,i);return a<=1?s.style.display="none":s.style.display="block",n}const o=document.querySelector(".exercises-list");let m="Muscles",u=1;const F=12,Q=9;let E,p;const h=document.getElementById("exercises-search-form"),l=document.querySelector(".exircises-category"),T=document.querySelector(".exercises-title"),P=h.querySelector(".exercises-search-input");async function f(e,t){let s=new URLSearchParams({filter:e,page:t,limit:F});try{await y.get(`https://energyflow.b.goit.study/api/filters?${s}`).then(a=>{let i=a.data.results;E=a.data.totalPages;const n=i.map(({name:r,filter:d,imgUrl:w})=>`<li class="exercises-list-item" data-name="${r}" data-filter="${d}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${w}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${g(r)}</p>
            <p class="exercises-item-subname">${d}</p>
            </div>
          </li>`).join("");o.insertAdjacentHTML("beforeend",n),J()}).catch(a=>{console.log(a.response.data.message)})}catch{c.error({title:"Error",message:"Something went wrong, try again"})}}await f(m,u);v(12,E).on("afterMove",({page:e})=>{o.innerHTML="",f(m,e)});function J(){let e=u;const t=document.querySelectorAll(".exercises-list-item");for(const s of t){s.addEventListener("click",a);async function a(i){const n=i.currentTarget.dataset.name,r=i.currentTarget.dataset.filter;h.classList.remove("input-hidden"),await x({filter:r,name:n,page:e}),v(9,p).on("afterMove",async({page:d})=>{o.innerHTML="",await x({filter:r,name:n,page:d})}),s.removeEventListener("click",a)}}}const k=document.querySelectorAll(".exercises-filter-button");for(const e of k)e.addEventListener("click",async function(t){h.classList.add("input-hidden");const s=t.currentTarget.dataset.name;for(const a of k)a.classList.remove("active-btn");t.target.classList.add("active-btn"),m=s,console.log("Clicked the button: ",s),o.innerHTML="",l.dataset.name="",l.textContent="",T.textContent="Exercises",await f(s,u),v(12,E).on("afterMove",({page:a})=>{o.innerHTML="",f(m,a)}),console.log(s,u)});async function x({filter:e,name:t,page:s,keyword:a=""}){const n={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];await y.get(`https://energyflow.b.goit.study/api/exercises?${n}=${t.toLowerCase()}&keyword=${a}&page=${s}&limit=${Q}`).then(r=>{let d=r.data.results;p=r.data.totalPages,console.log("totalPagesforCards",p,"musclesResult:",r.data),l.dataset.name=t,l.dataset.filter=e,l.textContent=g(t),T.textContent="Exercises /";const w=d.map(({bodyPart:q,burnedCalories:C,name:H,_id:I,target:A,rating:B})=>`<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${B.toFixed(1)}</p>
                    <svg
                      class="exercises-star-icon"
                      width="18"
                      height="18"
                      aria-label="star icon"
                    >
                      <use
                        href="${b}#icon-star"
                      ></use>
                    </svg>
                  </div>
                </div>
                <button class="exercises-start-button" id=${I}>
                  Start
                  <svg class="exercises-start-icon" width="14" height="14">
                    <use
                      href="${b}#icon-arrow"
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
                    href="${b}#icon-icon"
                  ></use>
                </svg>
                <p class="exercises-card-exname">${g(H)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${C}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${g(q)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${g(A)}
                </li>
              </ul>
            </div>
          </li> `).join("");o.innerHTML="",o.insertAdjacentHTML("beforeend",w),R("Add")}).catch(r=>{c.error({title:"Error",message:r.response.data.message})})}h.addEventListener("submit",async e=>{e.preventDefault();let t=u,s=l.dataset.filter,a=l.dataset.name,i=P.value.trim().toLowerCase();console.log("Text Content",P.value.trim().toLowerCase()),await x({filter:s,name:a,page:t,keyword:i}),v(9,p).on("afterMove",async({page:n})=>{o.innerHTML="",await x({filter:s,name:a,page:n,keyword:i})})});
//# sourceMappingURL=commonHelpers2.js.map
