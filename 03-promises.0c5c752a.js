function e(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),u=document.querySelector('input[name="amount"]'),l=parseInt(n.value),a=parseInt(o.value),i=parseInt(u.value);for(let t=0;t<i;t++){e(t+1,l+t*a).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}n.value="",o.value="",u.value=""}));
//# sourceMappingURL=03-promises.0c5c752a.js.map
