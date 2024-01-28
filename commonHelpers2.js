import"./assets/header-f61c3187.js";import{n as l,a as u}from"./assets/vendor-a94eb9aa.js";const n=document.querySelector(".quote__backend"),i=new Date().toLocaleDateString();async function p(){n.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await u.get("https://energyflow.b.goit.study/api/quote")).data}catch{l.Notify.failure("Something went wrong, try again")}}function c(e,s){return`<p class="quote__backend-text">${s}</p>
            <p class="quote__backend-author">${e}</p>`}function g(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===i){const{author:e,quote:s}=JSON.parse(localStorage.getItem("quote"));n.innerHTML=c(e,s)}else p().then(({author:e,quote:s})=>{const a={author:e,quote:s};localStorage.setItem("quote",JSON.stringify(a)),localStorage.setItem("savedDate",i),n.innerHTML=c(e,s)}).catch(e=>l.Notify.failure(e.message))}g();document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("subscriptionForm");e.addEventListener("submit",function(s){if(!e.checkValidity())alert("Please fill in a valid email address."),s.preventDefault();else{const a=new FormData(e);fetch(e.action,{method:"POST",body:a}).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{t.message?alert(t.message):console.warn("Response does not contain a message field:",t)}).catch(t=>{console.error("Error:",t)})}})});const d=document.querySelector(".exercises-input-wrapper"),m=d.querySelector(".exercises-search-input"),o=document.querySelector(".exercises-list-page2");d.addEventListener("submit",async e=>{e.preventDefault();const s=m.value.trim();try{await f(s)}catch(a){console.error(a)}});async function f(e){try{const a=(await u.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${e}&page=1&limit=10`)).data;if(o.innerHTML="",a.length>0){const t=a.map(r=>`
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
      `).join("");o.innerHTML=t}else o.innerHTML='<p class="no-results-message">Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(s){console.error(s)}}
//# sourceMappingURL=commonHelpers2.js.map
