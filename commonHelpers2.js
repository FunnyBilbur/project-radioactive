import"./assets/modulepreload-polyfill-3cfb730f.js";import{n as o,a as l}from"./assets/vendor-a94eb9aa.js";const r=document.querySelector(".quote-container"),c=new Date().toLocaleDateString();async function p(){r.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await l.get("https://energyflow.b.goit.study/api/quote")).data}catch{o.Notify.failure("Something went wrong, try again")}}function n(e,s){return`<p class="quote-text">${s}</p>
            <p class="quote-author">${e}</p>`}function g(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===c){const{author:e,quote:s}=JSON.parse(localStorage.getItem("quote"));r.innerHTML=n(e,s)}else p().then(({author:e,quote:s})=>{const t={author:e,quote:s};localStorage.setItem("quote",JSON.stringify(t)),localStorage.setItem("savedDate",c),r.innerHTML=n(e,s)}).catch(e=>o.Notify.failure(e.message))}g();document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("subscriptionForm");document.getElementById("email"),document.getElementById("submitButton").addEventListener("click",function(t){if(!e.checkValidity())alert("Please fill in a valid email address."),t.preventDefault();else{const a=new FormData(e);fetch(e.action,{method:"POST",body:a}).then(i=>i.json()).then(i=>{console.log(i)}).catch(i=>{console.error("Error:",i)})}})});const d=document.querySelector(".mobile-menu"),m=document.querySelector(".burger-menu");m.addEventListener("click",e=>{d.classList.remove("menu-is-hidden")});const x=document.querySelector(".shirm-close-button");x.addEventListener("click",e=>{d.classList.add("menu-is-hidden")});document.querySelector(".exercises-input-wrapper");const u=document.querySelector(".exercises-search-input");u.addEventListener("submit",async e=>{e.preventDefault();const t=e.currentTarget.querySelector(".exercises-search-input").value.trim();try{await v(t)}catch(a){console.error(a)}});async function v(e){try{const t=(await l.get("https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${query}&page=1&limit=10")).data;if(u.innerHTML="",t.length>0){const a=t.map(i=>`
      <ul class="exercises-list-page2">
          <li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">4.0</p>
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
                <p class="exercises-card-exname">Air bike</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>312
                  / 3 min
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>Waist
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>Abs
                </li>
              </ul>
            </div>
          </li>
          <li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">4.0</p>
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
                <p class="exercises-card-exname">Air bike</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>312
                  / 3 min
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>Waist
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>Abs
                </li>
              </ul>
            </div>
          </li>
      `).join("");photoContainer.innerHTML=a}else photoContainer.innerHTML="<p>No results found.</p>"}catch(s){console.error(s)}finally{loader.style.display="none"}}
//# sourceMappingURL=commonHelpers2.js.map
