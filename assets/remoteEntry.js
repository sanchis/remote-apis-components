const d="modulepreload",h=function(t){return"/remote-apis-components/"+t},a={},u=function(n,o,i){return!o||o.length===0?n():Promise.all(o.map(e=>{if(e=h(e),e in a)return;a[e]=!0;const r=e.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${c}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":d,r||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),r)return new Promise((_,f)=>{s.addEventListener("load",_),s.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},m=new Set(["Module","__esModule","default","_export_sfc"]);let p={"./network-info":()=>(g([]),y("./__federation_expose_Network-info_d889c67b.js").then(t=>Object.keys(t).every(n=>m.has(n))?()=>t.default:()=>t))};const l={},g=t=>{const n=import.meta.url;if(typeof n>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const o=n.substring(0,n.lastIndexOf("remoteEntry.js"));t.forEach(i=>{const e=o+i;if(e in l)return;l[e]=!0;const r=document.head.appendChild(document.createElement("link"));r.href=e,r.rel="stylesheet"})};async function y(t){return u(()=>import(t),[])}const b=t=>p[t](),k=t=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(t).forEach(([n,o])=>{const i=Object.keys(o)[0],e=Object.values(o)[0],r=e.scope||"default";globalThis.__federation_shared__[r]=globalThis.__federation_shared__[r]||{};const c=globalThis.__federation_shared__[r];(c[n]=c[n]||{})[i]=e})};export{g as dynamicLoadingCss,b as get,k as init};
