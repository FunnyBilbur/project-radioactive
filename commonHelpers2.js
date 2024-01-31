import"./assets/scroll-8076d2f7.js";import{n as M,a as m,P as H}from"./assets/vendor-ae726d3c.js";const b=document.querySelector(".quote__backend"),S=new Date().toLocaleDateString();async function D(){b.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await m.get("https://energyflow.b.goit.study/api/quote")).data}catch{M.Notify.failure("Something went wrong, try again")}}function T(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function O(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===S){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));b.innerHTML=T(e,t)}else D().then(({author:e,quote:t})=>{const a={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(a)),localStorage.setItem("savedDate",S),b.innerHTML=T(e,t)}).catch(e=>M.Notify.failure(e.message))}O();const R=document.getElementById("subscriptionForm"),k=document.getElementById("email"),_=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);R.addEventListener("submit",async function(e){e.preventDefault();try{_.test(k.value)?await m.post("https://energyflow.b.goit.study/api/subscription",{email:k.value}).then(t=>{console.log(t.data.message)}).catch(t=>{console.log(t.response.data.message)}):alert("Please enter the correct email")}catch(t){console.error("Error:",t),alert("Something went wrong, try again")}});const P=document.getElementById("exercises-search-form"),L=P.querySelector(".exercises-search-input"),w=document.querySelector(".exercises-list"),E=document.querySelector(".exercises-inputclear-icon");P.addEventListener("submit",async e=>{e.preventDefault();const t=L.value.trim().toLowerCase();try{await j(t)}catch(a){console.error(a)}});L.addEventListener("input",N);function N(){L.value.trim()!==""?E.classList.remove("exercises-is-hidden"):E.classList.add("exercises-is-hidden")}function F(){const e=document.getElementById("exercises-search-input");e&&(e.value="")}E.addEventListener("click",F);async function U(e){try{return(await m.get(`https://energyflow.b.goit.study/api/exercises?bodypart=&muscles=abs&equipment=&keyword=${e}&page=1&limit=10`)).data}catch(t){throw console.error("Error fetching exercises:",t),t}}async function j(e){try{const t=await U(e);if(w.innerHTML="",t.results.length>0){const a=t.results.map(s=>`
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
      `).join("");w.innerHTML=a}else w.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(t){console.error(t)}}function c(e){return e.charAt(0).toUpperCase()+e.slice(1)}function J(){document.querySelector(".exercises-list").addEventListener("click",async function(n){let r=n.target;if(r.classList.contains("exercises-start-button")||r.parentElement.classList.contains("exercises-start-button")){let o;r.parentElement.classList.contains("exercises-start-button")?o=r.parentElement.getAttribute("id"):o=r.getAttribute("id");async function g(){try{await m.get("https://energyflow.b.goit.study/api/exercises/"+o).then(({data:i})=>{document.getElementById("modalImage").src=i.gifUrl,document.getElementById("modalName").textContent=c(i.name),document.getElementById("modalRating").textContent=i.rating,document.getElementById("modalTarget").textContent=c(i.target),document.getElementById("bodyPart").textContent=c(i.bodyPart),document.getElementById("modalEquipment").textContent=c(i.equipment),document.getElementById("modalPopularity").textContent=i.popularity,document.getElementById("modalBurnedCalories").textContent=i.burnedCalories+" cal / "+i.time+" min",document.getElementById("modalDescription").textContent=i.description;var v=document.getElementById("pop-up-exercise");v.style.display="flex",document.querySelector(".add-to-favorites-btn").addEventListener("click",function(){const l=this.getAttribute("id"),p=fromAPI.find(d=>d._id===l);if(p){let d=JSON.parse(localStorage.getItem(KEY_FAVORITE))||[];d.some(A=>A._id===l)?console.log(`Упражнение с ID ${l} уже находится в избранном.`):(d.push(p),localStorage.setItem(KEY_FAVORITE,JSON.stringify(d)),console.log(`Упражнение с ID ${l} добавлено в избранное.`))}else console.log(`Упражнение с ID ${l} не найдено.`)})})}catch(i){console.error("Error:",i),alert("Something went wrong, try again")}}await g()}}),document.getElementById("closeBtn").addEventListener("click",function(){const n=document.getElementById("pop-up-exercise");n.style.display="none"});const a=3,s=document.querySelectorAll(".star");for(let n=0;n<a;n++)s[n].style.fill="yellow"}function $(e,t){const a=document.getElementById("tui-pagination-container"),s=t<5?t:5,n={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},r=new H(a,n);return s<=1?a.style.display="none":a.style.display="block",r}const u=document.querySelector(".exercises-list");let f="Muscles",x=1;const C=12;let y,I;async function h(e,t){let a=new URLSearchParams({filter:e,page:t,limit:C});try{await m.get(`https://energyflow.b.goit.study/api/filters?${a}`).then(s=>{let n=s.data.results;y=s.data.totalPages;const r=n.map(({name:o,filter:g,imgUrl:i})=>`<li class="exercises-list-item" data-name="${o}" data-filter="${g}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${i}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${c(o)}</p>
            <p class="exercises-item-subname">${g}</p>
            </div>
          </li>`).join("");u.insertAdjacentHTML("beforeend",r),K()}).catch(s=>{console.log(s.response.data.message)})}catch(s){console.error("Error:",s),alert("Something went wrong, try again")}}await h(f,x);$(12,y).on("afterMove",({page:e})=>{u.innerHTML="",h(f,e)});function K(){let e=x;const t=document.querySelectorAll(".exercises-list-item");for(const a of t)a.addEventListener("click",async function(s){const n=s.currentTarget.dataset.name,r=s.currentTarget.dataset.filter;await q({filter:r,name:n,page:e}),$(10,I).on("afterMove",async({page:o})=>{u.innerHTML="",await q({filter:r,name:n,page:o})})})}const V=document.querySelectorAll(".exercises-filter-button");for(const e of V)e.classList.remove("foo"),e.addEventListener("click",async function(t){const a=t.currentTarget.dataset.name;t.currentTarget.classList.add("foo"),console.dir(t.currentTarget.classList),f=a,console.log("Clicked the button: ",a),u.innerHTML="",await h(a,x),$(12,y).on("afterMove",({page:s})=>{console.log("Moved",s),console.log("Total Pages Pressed",y),u.innerHTML="",h(f,s)}),console.log(a,x)});async function q({filter:e,name:t,page:a}){const n={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];await m.get(`https://energyflow.b.goit.study/api/exercises?${n}=${t.toLowerCase()}&page=${a}&limit${C}`).then(r=>{let o=r.data.results;I=r.data.totalPages,console.log("totalPagesforCards",I,"musclesResult:",r.data);const g=o.map(({bodyPart:i,burnedCalories:v,name:B,_id:l,target:p,rating:d})=>`<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${d}</p>
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
                <button class="exercises-start-button" id=${l}>
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
                <p class="exercises-card-exname">${c(B)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${v}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${c(i)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${c(p)}
                </li>
              </ul>
            </div>
          </li> `).join("");u.innerHTML="",u.insertAdjacentHTML("beforeend",g),J()}).catch(r=>{console.log(r.response.data.message)})}
//# sourceMappingURL=commonHelpers2.js.map
