import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as S}from"./assets/vendor-77e16229.js";const a=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),f=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");let r=0;n.disabled=!0;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],r<new Date?(S.error({position:"topRight",title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(n.disabled=!1,a.disabled=!0)}};m(a,b);n.addEventListener("click",g);let i=0;function g(){n.disabled=!0,a.disabled=!0,i=setInterval(()=>{const t=Date.now(),e=r-t;if(e<=0){clearInterval(i);return}const o=q(e);D(o)},1e3)}function q(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),u=Math.floor(t%36e5/6e4),l=Math.floor(t%6e4/1e3);return{days:c,hours:d,minutes:u,seconds:l}}function D({days:t,hours:e,minutes:o,seconds:s}){f.textContent=String(t).padStart(2,"0"),h.textContent=String(e).padStart(2,"0"),p.textContent=String(o).padStart(2,"0"),y.textContent=String(s).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
