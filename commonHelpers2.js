import"./assets/header-f61c3187.js";import{n,a as o}from"./assets/vendor-a94eb9aa.js";const i=document.querySelector(".quote-container"),t=new Date().toLocaleDateString();async function d(){i.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await o.get("https://energyflow.b.goit.study/api/quote")).data}catch{n.Notify.failure("Something went wrong, try again")}}function c(e,s){return`<p class="quote-text">${s}</p>
            <p class="quote-author">${e}</p>`}function p(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===t){const{author:e,quote:s}=JSON.parse(localStorage.getItem("quote"));i.innerHTML=c(e,s)}else d().then(({author:e,quote:s})=>{const r={author:e,quote:s};localStorage.setItem("quote",JSON.stringify(r)),localStorage.setItem("savedDate",t),i.innerHTML=c(e,s)}).catch(e=>n.Notify.failure(e.message))}p();document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("subscriptionForm");e.addEventListener("submit",function(s){if(!e.checkValidity())alert("Please fill in a valid email address."),s.preventDefault();else{const r=new FormData(e);fetch(e.action,{method:"POST",body:r}).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{a.message?alert(a.message):console.warn("Response does not contain a message field:",a)}).catch(a=>{console.error("Error:",a)})}})});document.querySelector(".exercises-input-wrapper");const l=document.querySelector(".exercises-search-input");l.addEventListener("submit",async e=>{e.preventDefault();const r=e.currentTarget.querySelector(".exercises-search-input").value.trim();try{await u(r)}catch(a){console.error(a)}});async function u(e){try{const r=(await o.get("https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${query}&page=1&limit=10")).data;if(l.innerHTML="",r.length>0){const a=r.map(g=>`
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
