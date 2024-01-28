import"./assets/header-b6fb7402.js";import{n as d,a as i}from"./assets/vendor-a94eb9aa.js";const n=document.querySelector(".quote__backend"),c=new Date().toLocaleDateString();async function p(){n.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await i.get("https://energyflow.b.goit.study/api/quote")).data}catch{d.Notify.failure("Something went wrong, try again")}}function l(e,s){return`<p class="quote__backend-text">${s}</p>
            <p class="quote__backend-author">${e}</p>`}function g(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===c){const{author:e,quote:s}=JSON.parse(localStorage.getItem("quote"));n.innerHTML=l(e,s)}else p().then(({author:e,quote:s})=>{const t={author:e,quote:s};localStorage.setItem("quote",JSON.stringify(t)),localStorage.setItem("savedDate",c),n.innerHTML=l(e,s)}).catch(e=>d.Notify.failure(e.message))}g();document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("subscriptionForm");e.addEventListener("submit",async function(s){if(s.preventDefault(),!e.checkValidity())alert("Please fill in a valid email address.");else{const t=new FormData(e);try{const r=await i.post("https://energyflow.b.goit.study/api-docs/#/Subscriptions",t);alert("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),console.log("Server response:",r)}catch(r){console.error("Error:",r),alert("Something went wrong, try again")}}})});const u=document.getElementById("exercises-search-form"),m=u.querySelector(".exercises-search-input"),o=document.querySelector(".exercises-list-page2");u.addEventListener("submit",async e=>{e.preventDefault();const s=m.value.trim().toLowerCase();try{await f(s)}catch(t){console.error(t)}});async function f(e){try{const t=(await i.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${e}&page=1&limit=10`)).data;if(o.innerHTML="",t.length>0){const r=t.map(a=>`
        <li class="exercises-item-page2">
          <div class="exercises-card">
            <div class="exercises-card-top">
              <div class="exercises-kind-wrapper">
                <p class="exercises-card-kind">WORKOUT</p>
                <div class="exercises-card-rating">
                  <p class="exercises-rating-value">${a.rating}</p>
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
              <p class="exercises-card-exname">${a.name}</p>
            </div>
            <ul class="exercises-card-info">
              <li class="exercises-info-data">
                <span class="exercises-data-name">Burned calories: </span>${a.calories} / ${a.duration} min
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Body part: </span>${a.bodyPart}
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Target: </span>${a.targetMuscle}
              </li>
            </ul>
          </div>
        </li>
      `).join("");o.innerHTML=r}else o.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(s){console.error(s)}}
//# sourceMappingURL=commonHelpers2.js.map
