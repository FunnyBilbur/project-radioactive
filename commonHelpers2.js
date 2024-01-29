import"./assets/header-eff62917.js";import{n as u,a as n}from"./assets/vendor-a94eb9aa.js";const o=document.querySelector(".quote__backend"),i=new Date().toLocaleDateString();async function g(){o.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await n.get("https://energyflow.b.goit.study/api/quote")).data}catch{u.Notify.failure("Something went wrong, try again")}}function c(s,e){return`<p class="quote__backend-text">${e}</p>
            <p class="quote__backend-author">${s}</p>`}function m(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===i){const{author:s,quote:e}=JSON.parse(localStorage.getItem("quote"));o.innerHTML=c(s,e)}else g().then(({author:s,quote:e})=>{const t={author:s,quote:e};localStorage.setItem("quote",JSON.stringify(t)),localStorage.setItem("savedDate",i),o.innerHTML=c(s,e)}).catch(s=>u.Notify.failure(s.message))}m();const y=document.getElementById("subscriptionForm"),l=document.getElementById("email"),f=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);y.addEventListener("submit",async function(s){s.preventDefault();try{f.test(l.value)?await n.post("https://energyflow.b.goit.study/api/subscription",{email:l.value}).then(e=>{console.log(e.data.message)}).catch(e=>{console.log(e.response.data.message)}):alert("Please enter the correct email")}catch(e){console.error("Error:",e),alert("Something went wrong, try again")}});const d=document.getElementById("exercises-search-form"),h=d.querySelector(".exercises-search-input"),r=document.querySelector(".exercises-list-page2");d.addEventListener("submit",async s=>{s.preventDefault();const e=h.value.trim().toLowerCase();try{await x(e)}catch(t){console.error(t)}});async function x(s){try{const t=(await n.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${s}&page=1&limit=10`)).data;if(r.innerHTML="",t.length>0){const p=t.map(a=>`
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
      `).join("");r.innerHTML=p}else r.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(e){console.error(e)}}
//# sourceMappingURL=commonHelpers2.js.map
