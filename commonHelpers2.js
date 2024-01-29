import"./assets/header-eff62917.js";import{n as p,a as o}from"./assets/vendor-a94eb9aa.js";const l=document.querySelector(".quote__backend"),u=new Date().toLocaleDateString();async function h(){l.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await o.get("https://energyflow.b.goit.study/api/quote")).data}catch{p.Notify.failure("Something went wrong, try again")}}function d(s,e){return`<p class="quote__backend-text">${e}</p>
            <p class="quote__backend-author">${s}</p>`}function f(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===u){const{author:s,quote:e}=JSON.parse(localStorage.getItem("quote"));l.innerHTML=d(s,e)}else h().then(({author:s,quote:e})=>{const t={author:s,quote:e};localStorage.setItem("quote",JSON.stringify(t)),localStorage.setItem("savedDate",u),l.innerHTML=d(s,e)}).catch(s=>p.Notify.failure(s.message))}f();const b=document.getElementById("subscriptionForm"),g=document.getElementById("email"),v=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);b.addEventListener("submit",async function(s){s.preventDefault();try{v.test(g.value)?await o.post("https://energyflow.b.goit.study/api/subscription",{email:g.value}).then(e=>{console.log(e.data.message)}).catch(e=>{console.log(e.response.data.message)}):alert("Please enter the correct email")}catch(e){console.error("Error:",e),alert("Something went wrong, try again")}});const m=document.getElementById("exercises-search-form"),w=m.querySelector(".exercises-search-input"),c=document.querySelector(".exercises-list-page2");m.addEventListener("submit",async s=>{s.preventDefault();const e=w.value.trim().toLowerCase();try{await S(e)}catch(t){console.error(t)}});async function S(s){try{const t=(await o.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${s}&page=1&limit=10`)).data;if(c.innerHTML="",t.length>0){const n=t.map(a=>`
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
      `).join("");c.innerHTML=n}else c.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(e){console.error(e)}}const q=document.querySelector(".exercises-list"),$=document.querySelector(".exercises-bottom-buttons"),L=async()=>{let s=new URLSearchParams({page:1,limit:12});try{await o.get(`https://energyflow.b.goit.study/api/filters?filter=Muscles&${s}`).then(e=>{let t=e.data.results,{totalPages:n}=e.data;const a=t.map(({name:r,filter:y,imgUrl:x})=>`<li>
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${x}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${r}</p>
            <p class="exercises-item-subname">${y}</p>
            </div>
          </li>`).join("");q.insertAdjacentHTML("beforeend",a);let i="";for(let r=0;r<n;r++)i+=`<button class="exercises-page-button" type="button">${r+1}</button> 
`;console.log(i),$.insertAdjacentHTML("beforeend",i)}).catch(e=>{console.log(e.response.data.message)})}catch(e){console.error("Error:",e),alert("Something went wrong, try again")}};L();
//# sourceMappingURL=commonHelpers2.js.map
