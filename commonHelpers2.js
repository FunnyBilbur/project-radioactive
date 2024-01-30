import"./assets/header-40f54f50.js";import{n as y,a as i}from"./assets/vendor-a94eb9aa.js";const u=document.querySelector(".quote__backend"),h=new Date().toLocaleDateString();async function S(){u.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await i.get("https://energyflow.b.goit.study/api/quote")).data}catch{y.Notify.failure("Something went wrong, try again")}}function f(s,e){return`<p class="quote__backend-text">${e}</p>
            <p class="quote__backend-author">${s}</p>`}function k(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===h){const{author:s,quote:e}=JSON.parse(localStorage.getItem("quote"));u.innerHTML=f(s,e)}else S().then(({author:s,quote:e})=>{const a={author:s,quote:e};localStorage.setItem("quote",JSON.stringify(a)),localStorage.setItem("savedDate",h),u.innerHTML=f(s,e)}).catch(s=>y.Notify.failure(s.message))}k();const q=document.getElementById("subscriptionForm"),v=document.getElementById("email"),E=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);q.addEventListener("submit",async function(s){s.preventDefault();try{E.test(v.value)?await i.post("https://energyflow.b.goit.study/api/subscription",{email:v.value}).then(e=>{console.log(e.data.message)}).catch(e=>{console.log(e.response.data.message)}):alert("Please enter the correct email")}catch(e){console.error("Error:",e),alert("Something went wrong, try again")}});const w=document.getElementById("exercises-search-form"),m=w.querySelector(".exercises-search-input"),d=document.querySelector(".exercises-list-page2"),p=document.querySelector(".exercises-inputclear-icon");w.addEventListener("submit",async s=>{s.preventDefault();const e=m.value.trim().toLowerCase();try{await H(e)}catch(a){console.error(a)}});m.addEventListener("input",T);function T(){m.value.trim()!==""?p.classList.remove("exercises-is-hidden"):p.classList.add("exercises-is-hidden")}function I(){const s=document.getElementById("exercises-search-input");s&&(s.value="")}p.addEventListener("click",I);async function M(s){try{return(await i.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${s}&page=1&limit=10`)).data}catch(e){throw console.error("Error fetching exercises:",e),e}}async function H(s){try{const e=await M(s);if(d.innerHTML="",e.results.length>0){const a=e.results.map(t=>`
        <li class="exercises-item-page2">
          <div class="exercises-card">
            <div class="exercises-card-top">
              <div class="exercises-kind-wrapper">
                <p class="exercises-card-kind">WORKOUT</p>
                <div class="exercises-card-rating">
                  <p class="exercises-rating-value">${t.rating}</p>
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
              <p class="exercises-card-exname">${t.name}</p>
            </div>
            <ul class="exercises-card-info">
              <li class="exercises-info-data">
                <span class="exercises-data-name">Burned calories: </span>${t.calories} / ${t.duration} min
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Body part: </span>${t.bodyPart}
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Target: </span>${t.target}
              </li>
            </ul>
          </div>
        </li>
      `).join("");d.innerHTML=a}else d.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(e){console.error(e)}}function x(s){return s.charAt(0).toUpperCase()+s.slice(1)}const g=document.querySelector(".exercises-list"),B=document.querySelector(".exercises-bottom-buttons");let P="Muscles";const A=async()=>{let s=new URLSearchParams({filter:P,page:1,limit:12});try{await i.get(`https://energyflow.b.goit.study/api/filters?${s}`).then(e=>{let a=e.data.results,{totalPages:t}=e.data;const c=a.map(({name:r,filter:o,imgUrl:l})=>`<li class="exercises-list-item" data-name="${r}" data-filter="${o}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${l}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${x(r)}</p>
            <p class="exercises-item-subname">${o}</p>
            </div>
          </li>`).join("");g.insertAdjacentHTML("beforeend",c);let n="";for(let r=0;r<t;r++)n+=`<button class="exercises-page-button" type="button">${r+1}</button> 
`;B.insertAdjacentHTML("beforeend",n)}).catch(e=>{console.log(e.response.data.message)})}catch(e){console.error("Error:",e),alert("Something went wrong, try again")}};await A();const R=document.querySelectorAll(".exercises-list-item");for(const s of R)s.addEventListener("click",function(e){const a=e.currentTarget.dataset.name,t=e.currentTarget.dataset.filter;O({filter:t,name:a}),console.log("Clicked: ",x(a),t)});function O({filter:s,name:e}){let a=new URLSearchParams({muscles:e,page:1,limit:9});i.get(`https://energyflow.b.goit.study/api/exercises?${a}`).then(t=>{let c=t.data.results;console.log(c),t.data;const n=c.map(({bodyPart:r,burnedCalories:o,name:l,_id:b,target:$,rating:L})=>`<li class="exercises-item-page2" id=${b}>
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${L}</p>
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
                <p class="exercises-card-exname">${x(l)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${o}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${r}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${$}
                </li>
              </ul>
            </div>
          </li> `).join("");g.innerHTML="",g.insertAdjacentHTML("beforeend",n)}).catch(t=>{console.log(t.response.data.message)})}
//# sourceMappingURL=commonHelpers2.js.map
