const mb=document.getElementById('mb'),m=document.getElementById('m');
mb.onclick=()=>{const o=m.classList.toggle('o');mb.setAttribute('aria-expanded',o)};
m.querySelectorAll('a').forEach(a=>a.onclick=()=>{m.classList.remove('o');mb.setAttribute('aria-expanded',false)});
document.querySelectorAll('[data-svc]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('s').value=a.dataset.svc}));
const els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>io.observe(e))}else els.forEach(e=>e.classList.add('in'));
document.getElementById('f').onsubmit=e=>{e.preventDefault();const d=new FormData(e.target);
const t=`Hello CodeNest,%0AName: ${d.get('n')}%0APhone: ${d.get('p')}%0AEmail: ${d.get('e')||'-'}%0AService: ${d.get('s')}%0AMessage: ${d.get('m')||'-'}`;
window.open('https://wa.me/918296338576?text='+t.replace(/&/g,'%26'),'_blank','noopener')};

const $=q=>document.querySelector(q);
const pg=$('#pg');addEventListener('scroll',()=>requestAnimationFrame(()=>{const h=document.documentElement;pg.style.width=h.scrollTop/(h.scrollHeight-h.clientHeight)*100+'%'}),{passive:true});
const K=['HTML','CSS','JavaScript','React','UI/UX','POS Systems','IndexedDB','IP Cameras','NVR','Video Editing'];$('#mq').innerHTML=[...K,...K].map(x=>`<span>${x}</span>`).join('');
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')}});
const ls=[...document.querySelectorAll('.links a[href^="#"]')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ls.forEach(a=>a.classList.toggle('act',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
['services','security','projects','about','contact'].forEach(i=>so.observe(document.getElementById(i)));
if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&matchMedia('(hover:hover)').matches){const ws=[...document.querySelectorAll('.win')];$('.hero').addEventListener('pointermove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;ws.forEach((w,i)=>w.style.transform=`translate(${x*(i+1)*-10}px,${y*(i+1)*-10}px)`)})}
const P=[
{t:'CodeNest POS',c:'Software',d:'Offline-first billing and business management system.',f:['Fast billing workflow','Works without an internet connection','Browser-based local storage (IndexedDB)','Tailored to each business'],k:['JavaScript','IndexedDB','Offline-first'],s:'Software & Apps'},
{t:'Elora Boutique POS',c:'Software',d:'Boutique billing, inventory and barcode workflow.',f:['Boutique billing','Inventory tracking','Barcode-based workflow'],k:['POS','Barcode','Inventory'],s:'Software & Apps'},
{t:'Business Websites',c:'Web',d:'Custom websites designed around individual businesses.',f:['Designed around your business','Responsive on mobile, tablet and desktop','SEO-ready structure','WhatsApp and click-to-call actions'],k:['HTML','CSS','JavaScript','React'],s:'Websites'},
{t:'CCTV Projects',c:'Security',d:'Professional surveillance installations.',f:['HD / IP camera systems','DVR / NVR setup','Remote mobile viewing','Installation and maintenance'],k:['IP cameras','NVR','Remote viewing'],s:'CCTV & Security'}];
const dl=$('#pd');
document.querySelectorAll('.vp').forEach(b=>b.onclick=()=>{const p=P[b.dataset.i];$('#pt').textContent=p.t;$('#pc2').textContent=p.c;$('#pds').textContent=p.d;$('#pf').innerHTML=p.f.map(x=>`<li>${x}</li>`).join('');$('#pk').innerHTML=p.k.map(x=>`<span>${x}</span>`).join('');$('#pc').dataset.s=p.s;const im=b.closest('.pj').querySelector('.th img'),pi=$('#pi');if(im){pi.src=im.src;pi.alt=im.alt;pi.hidden=false}else pi.hidden=true;dl.showModal()});
$('#px').onclick=()=>dl.close();dl.addEventListener('click',e=>{if(e.target===dl)dl.close()});
$('#pc').onclick=()=>{$('#s').value=$('#pc').dataset.s;dl.close()};
$('#f').addEventListener('submit',()=>{$('#fs').textContent='Opening WhatsApp with your details…'});

const cam=document.querySelector('.cam'),cm=document.getElementById('cm'),ct=document.getElementById('ct');
document.querySelectorAll('.tg2 button').forEach(b=>b.onclick=()=>{cam.dataset.mode=b.dataset.m;document.querySelectorAll('.tg2 button').forEach(x=>x.setAttribute('aria-pressed',x===b));cm.textContent=b.dataset.m==='night'?'NIGHT VISION • IR':'DAY VISION • COLOR'});
const tk=()=>{ct.textContent=new Date().toLocaleTimeString('en-GB')};tk();setInterval(tk,1000);

const ht=document.getElementById('ht');if(ht){const t2=()=>{ht.textContent=new Date().toLocaleTimeString('en-GB')};t2();setInterval(t2,1000)}

const FD=[{"t": "HD / IP surveillance", "d": "High-definition and IP cameras that deliver clear video over your network. Suited to homes, shops, offices and warehouses.", "f": null}, {"t": "Night vision", "d": "Infrared-assisted cameras that keep recording in low light and darkness, so nothing is missed after hours.", "f": null}, {"t": "Remote viewing", "d": "Watch live and recorded footage on your mobile phone from anywhere with an internet connection.", "f": null}, {"t": "Motion detection", "d": "Cameras and recorders can flag movement, so you can find important moments faster instead of scrubbing through hours of video.", "f": null}, {"t": "DVR / NVR", "d": "The recorder is the brain of your system: it stores footage from your cameras. A DVR works with analog / HD-over-coax cameras and an NVR works with IP cameras over the network. We help choose, install and configure the right one, including storage and mobile access.", "f": ["Cameras", "DVR / NVR", "Phone & monitor"]}, {"t": "WiFi cameras", "d": "Wireless cameras that connect over WiFi, ideal where running cable is difficult or you need a quick, tidy setup.", "f": null}, {"t": "Solar surveillance", "d": "Solar-powered cameras for outdoor or remote spots where mains power is not easily available.", "f": null}, {"t": "Installation & maintenance", "d": "Professional installation, servicing, camera upgrades and ongoing maintenance so your system keeps working properly.", "f": null}];
const fbs=[...document.querySelectorAll('.fb')];
const showF=i=>{const f=FD[i];document.getElementById('fdt').textContent=f.t;document.getElementById('fdp').textContent=f.d;document.getElementById('fdf').innerHTML=f.f?f.f.map((x,n)=>(n?'<b>→</b>':'')+'<span>'+x+'</span>').join(''):'';fbs.forEach((b,n)=>b.setAttribute('aria-pressed',n===i))};
fbs.forEach((b,n)=>b.onclick=()=>showF(n));showF(4);
