import"./assets/header-eff62917.js";import{n as f,a as c}from"./assets/vendor-a94eb9aa.js";const u=document.querySelector(".quote__backend"),m=new Date().toLocaleDateString();async function $(){u.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await c.get("https://energyflow.b.goit.study/api/quote")).data}catch{f.Notify.failure("Something went wrong, try again")}}function x(s,e){return`<p class="quote__backend-text">${e}</p>
            <p class="quote__backend-author">${s}</p>`}function S(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===m){const{author:s,quote:e}=JSON.parse(localStorage.getItem("quote"));u.innerHTML=x(s,e)}else $().then(({author:s,quote:e})=>{const t={author:s,quote:e};localStorage.setItem("quote",JSON.stringify(t)),localStorage.setItem("savedDate",m),u.innerHTML=x(s,e)}).catch(s=>f.Notify.failure(s.message))}S();const L=document.getElementById("subscriptionForm"),h=document.getElementById("email"),k=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);L.addEventListener("submit",async function(s){s.preventDefault();try{k.test(h.value)?await c.post("https://energyflow.b.goit.study/api/subscription",{email:h.value}).then(e=>{console.log(e.data.message)}).catch(e=>{console.log(e.response.data.message)}):alert("Please enter the correct email")}catch(e){console.error("Error:",e),alert("Something went wrong, try again")}});const v=document.getElementById("exercises-search-form"),q=v.querySelector(".exercises-search-input"),d=document.querySelector(".exercises-list-page2");v.addEventListener("submit",async s=>{s.preventDefault();const e=q.value.trim().toLowerCase();try{await T(e)}catch(t){console.error(t)}});async function T(s){try{const t=(await c.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${s}&page=1&limit=10`)).data;if(d.innerHTML="",t.length>0){const a=t.map(r=>`
        <li class="exercises-item-page2">
          <div class="exercises-card">
            <div class="exercises-card-top">
              <div class="exercises-kind-wrapper">
                <p class="exercises-card-kind">WORKOUT</p>
                <div class="exercises-card-rating">
                  <p class="exercises-rating-value">${r.rating}</p>
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
              <p class="exercises-card-exname">${r.name}</p>
            </div>
            <ul class="exercises-card-info">
              <li class="exercises-info-data">
                <span class="exercises-data-name">Burned calories: </span>${r.calories} / ${r.duration} min
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Body part: </span>${r.bodyPart}
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Target: </span>${r.targetMuscle}
              </li>
            </ul>
          </div>
        </li>
      `).join("");d.innerHTML=a}else d.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(e){console.error(e)}}function p(s){return s.charAt(0).toUpperCase()+s.slice(1)}const g=document.querySelector(".exercises-list"),M=document.querySelector(".exercises-bottom-buttons");let E="Muscles";const H=async()=>{let s=new URLSearchParams({filter:E,page:1,limit:12});try{await c.get(`https://energyflow.b.goit.study/api/filters?${s}`).then(e=>{let t=e.data.results,{totalPages:a}=e.data;const r=t.map(({name:i,filter:o,imgUrl:l})=>`<li class="exercises-list-item" data-name="${i}" data-filter="${o}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${l}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${p(i)}</p>
            <p class="exercises-item-subname">${o}</p>
            </div>
          </li>`).join("");g.insertAdjacentHTML("beforeend",r);let n="";for(let i=0;i<a;i++)n+=`<button class="exercises-page-button" type="button">${i+1}</button> 
`;M.insertAdjacentHTML("beforeend",n)}).catch(e=>{console.log(e.response.data.message)})}catch(e){console.error("Error:",e),alert("Something went wrong, try again")}};await H();const I=document.querySelectorAll(".exercises-list-item");for(const s of I)s.addEventListener("click",function(e){const t=e.currentTarget.dataset.name,a=e.currentTarget.dataset.filter;P({filter:a,name:t}),console.log("Clicked: ",p(t),a)});function P({filter:s,name:e}){let t=new URLSearchParams({muscles:e,page:1,limit:9});c.get(`https://energyflow.b.goit.study/api/exercises?${t}`).then(a=>{let r=a.data.results;console.log(r),a.data;const n=r.map(({bodyPart:i,burnedCalories:o,name:l,_id:y,target:b,rating:w})=>`<li class="exercises-item-page2" id=${y}>
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${w}</p>
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
                <p class="exercises-card-exname">${p(l)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${o}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${i}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${b}
                </li>
              </ul>
            </div>
          </li> `).join("");g.innerHTML="",g.insertAdjacentHTML("beforeend",n)}).catch(a=>{console.log(a.response.data.message)})}
//# sourceMappingURL=commonHelpers2.js.map
