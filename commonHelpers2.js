import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as o}from"./assets/vendor-a94eb9aa.js";const r=document.querySelector(".quote-container"),c=new Date().toLocaleDateString();async function u(){r.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await o.get("https://energyflow.b.goit.study/api/quote")).data}catch{}}function n(e,s){return`<p class="quote-text">${s}</p>
            <p class="quote-author">${e}</p>`}function p(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===c){const{author:e,quote:s}=JSON.parse(localStorage.getItem("quote"));r.innerHTML=n(e,s)}else u().then(({author:e,quote:s})=>{const t={author:e,quote:s};localStorage.setItem("quote",JSON.stringify(t)),localStorage.setItem("savedDate",c),r.innerHTML=n(e,s)}).catch(e=>Notify.failure(e.message))}p();document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("subscriptionForm");document.getElementById("email"),document.getElementById("submitButton").addEventListener("click",function(t){if(!e.checkValidity())alert("Please fill in a valid email address."),t.preventDefault();else{const i=new FormData(e);fetch(e.action,{method:"POST",body:i}).then(a=>a.json()).then(a=>{console.log(a)}).catch(a=>{console.error("Error:",a)})}})});const l=document.querySelector(".mobile-menu"),g=document.querySelector(".burger-menu");g.addEventListener("click",e=>{l.classList.remove("menu-is-hidden")});const m=document.querySelector(".shirm-close-button");m.addEventListener("click",e=>{l.classList.add("menu-is-hidden")});document.querySelector(".exercises-input-wrapper");const d=document.querySelector(".exercises-search-input");d.addEventListener("submit",async e=>{e.preventDefault();const t=e.currentTarget.querySelector(".exercises-search-input").value.trim();try{await x(t)}catch(i){console.error(i)}});async function x(e){try{const t=(await o.get("https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${query}&page=1&limit=10")).data;if(d.innerHTML="",t.length>0){const i=t.map(a=>`
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
      `).join("");photoContainer.innerHTML=i}else photoContainer.innerHTML="<p>No results found.</p>"}catch(s){console.error(s)}finally{loader.style.display="none"}}
//# sourceMappingURL=commonHelpers2.js.map
