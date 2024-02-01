import"./assets/scroll-8076d2f7.js";import{n as y,a as q}from"./assets/vendor-6ba419a8.js";const d=document.querySelector(".quote-container"),p=new Date().toLocaleDateString();async function I(){d.innerHTML=`
        <span class="loader"></span>
    `;try{return await q.get("https://energyflow.b.goit.study/api/quote").then(t=>t.data)}catch{y.Notify.failure("Something went wrong, try again")}}function x(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===p){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));d.innerHTML=f(e,t)}else I().then(({author:e,quote:t})=>{const i={quote:t,author:e};localStorage.setItem("quote",JSON.stringify(i)),localStorage.setItem("savedDate",p),d.innerHTML=f(e,t)}).catch(e=>y.Notify.failure(e.message))}function f(e,t){return`
            <div class='title-container'>
              <span class='quote-icon_before'></span>
              <h2 class="quote-title">Quote of the day</h2>
              <span class='quote-icon_after'></span>
            </div>

           <div class='text-container'>
              <p class='quote-text'>${t}</p>
              <p class='quote-author'>${e}</p>
           </div>
      `}x();const g=document.querySelector(".favorite-list");g.addEventListener("click",k);const P=document.querySelector(".list-pages");P.addEventListener("click",$);const A=document.querySelector(".empty-favorite"),h=document.querySelector(".list-pages");window.addEventListener("resize",L);const l=document.querySelector(".first-page"),o=document.querySelector(".second-page"),a=document.querySelector(".third-page"),v="favorite",s=JSON.parse(localStorage.getItem(v))??[],u=s.slice(0,8),m=s.slice(8,16),M=s.slice(16,26);function L(){if(window.innerWidth<768&&s.length>=8){n(u),r(),l.classList.add("current-page");return}else{n(s),h.style.display="none";return}}L();function n(e){if(!s.length)g.innerHTML="",A.style.display="flex",h.style.display="none";else{const t=e.map(({_id:i,bodyPart:c,name:C,target:b,burnedCalories:S,time:w})=>`<li data-id="${i}" class="favopite-item">
            <div class="card-elements-top">
            <svg class="workaut-img" width="76" height="26">
                <use href="../img/fav_list/symbol-defs.svg#icon-Badge"></use></svg>
                <button class="btn-delete-favorite"><svg  width="14" height="14">
                <use class="delete-favorite" href="../img/fav_list/symbol-defs.svg#icon-delete"></use></svg></button>
                <button class ="start-button">Start
                <svg class="svg-start" width="14" height="14">
                <use href="../img/fav_list/symbol-defs.svg#icon-start"></use></svg>
                </button>
            </div>
            <div class="card-elements">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#7E847F"/>
<path d="M18.8234 8.7254C18.6138 8.47501 18.2403 8.44209 17.9899 8.65089L16.349 10.0293L15.5943 8.15964C15.5675 8.08946 15.5267 8.03054 15.4799 7.97856C15.3257 7.63546 15.058 7.34088 14.6889 7.17019C14.5286 7.09742 14.3631 7.05843 14.1977 7.03937C14.1613 7.02031 14.1283 6.99518 14.0868 6.98218L11.199 6.17729C11.037 6.1331 10.8741 6.16169 10.7407 6.23967C10.5821 6.29339 10.4461 6.40862 10.3811 6.57584L9.29378 9.37174C9.17594 9.67585 9.3267 10.019 9.63168 10.1385C9.93492 10.2563 10.2789 10.1047 10.3976 9.79975L11.316 7.43878L12.6312 7.80441C12.5991 7.85639 12.5645 7.90491 12.5385 7.96036L10.8524 11.6149C10.8282 11.6686 10.8152 11.7232 10.7979 11.7786L8.7488 15.2139L5.31955 16.3611C4.9314 16.6513 4.84909 17.198 5.13587 17.5862C5.42439 17.9752 5.97282 18.0575 6.36011 17.7707L9.86907 16.5621C9.97651 16.4841 10.0545 16.3819 10.1134 16.2718C10.1576 16.225 10.2078 16.1878 10.2416 16.1297L11.4633 14.0815L13.6319 15.9296L11.3116 18.5444C10.9919 18.9049 11.024 19.4602 11.3862 19.7791C11.7474 20.1005 12.3011 20.0667 12.6225 19.7046L15.5181 16.4425C15.6082 16.342 15.6619 16.2259 15.6983 16.1046C15.7199 16.0388 15.7199 15.9703 15.7251 15.9019C15.7251 15.8672 15.7381 15.836 15.7355 15.804C15.7277 15.5648 15.6307 15.3326 15.4349 15.1672L13.4395 13.4655C13.5834 13.3286 13.7055 13.1658 13.7939 12.9743L15.0866 10.1749L15.5007 11.2778C15.5181 11.3758 15.551 11.4719 15.6203 11.5525C15.6827 11.627 15.7624 11.6764 15.8473 11.7111C15.856 11.7154 15.8664 11.7162 15.8768 11.7188C15.9305 11.7379 15.9851 11.7561 16.0414 11.7587C16.1081 11.7648 16.1757 11.7561 16.2441 11.737C16.2459 11.7362 16.2467 11.7362 16.2467 11.7362C16.2649 11.7318 16.2831 11.7353 16.3013 11.7275C16.3975 11.6911 16.4711 11.6296 16.5344 11.5577L18.8893 9.55889C19.1397 9.34835 19.034 8.97579 18.8234 8.7254Z" fill="#F6F6F6"/>
<path d="M15.8446 7.30102C16.7562 7.30102 17.4951 6.56206 17.4951 5.65051C17.4951 4.73896 16.7562 4 15.8446 4C14.9331 4 14.1941 4.73896 14.1941 5.65051C14.1941 6.56206 14.9331 7.30102 15.8446 7.30102Z" fill="#F6F6F6"/>
</svg>
            <H2 class="name-from-api">${C}</H2>
            </div>
            <ul class="card-elements-botton">
                <li class="elements-botton-item"><h3 class="elements-botton-style">Burned calories:</h3>
                <p class="botton-style-fromAPI">${S}</p>
                <span class="botton-style-fromAPI">&nbsp/&nbsp</span>
                <p class="botton-style-fromAPI">${w} min</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Body part:</h3>
                <p class="botton-style-fromAPI">${c}</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Target:</h3>
                <p class="botton-style-fromAPI">${b}</p></li>
            </ul>    
        </li>
        `).join("");g.innerHTML=t}}function k(e){if(e.preventDefault(),e.target.classList.contains("delete-favorite")){const{id:t}=e.target.closest(".favopite-item").dataset,i=F(String(t)),c=E(i);localStorage.setItem(v,JSON.stringify(c)),n(s),r(),l.classList.add("current-page"),o.classList.remove("current-page"),a.classList.remove("current-page")}}function E(e){return s.splice(e,1),s}function F(e){return s.findIndex(({_id:t})=>t===e)}function $(e){if(e.preventDefault(),e.target.classList.contains("page")){const t=e.target.dataset.id;if(t==="1"){n(u),l.classList.add("current-page"),o.classList.remove("current-page"),a.classList.remove("current-page"),r();return}else if(t==="2"){if(s.length>=8){n(m),r(),o.classList.add("current-page"),l.classList.remove("current-page"),a.classList.remove("current-page");return}else n(u);return}else t==="3"&&(s.length>16?(n(M),r(),o.classList.remove("current-page"),l.classList.remove("current-page"),a.classList.add("current-page")):n(m))}}function r(){s.length<=8?(l.style.display="none",o.style.display="none",a.style.display="none"):s.length>8&&s.length<=16?(a.style.display="none",o.style.display="flex"):s.length>16&&(o.style.display="flex",a.style.display="flex")}
//# sourceMappingURL=commonHelpers.js.map
