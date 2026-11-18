const translations = {
  en: {
    skip:'Skip to content',navServices:'Services',navWork:'Our work',navContact:'Contact',ctaQuote:'Request a quote',
    heroEyebrow:'SOUTH FLORIDA · POOL RENOVATIONS',heroTitle:'A beautiful pool. A fresh beginning.',heroDesc:"Crafted transformations for the heart of your outdoor space. Thoughtful finishes, timeless style, and a pool you'll love coming home to.",heroExplore:'Explore our work',heroDiscuss:"Let's talk about your pool",heroBottom:'REFINED POOLS, REIMAGINED SPACES',
    servicesEyebrow:'OUR CRAFT',servicesTitle:'The details make the difference.',servicesIntro:'From refreshing the surface to rethinking the entire look, we bring a considered approach to every pool remodeling project.',service1:'Tile & coping',service1Desc:'Beautiful pool edges and waterline finishes that redefine the look and feel of your space.',service2:'Plaster & resurfacing',service2Desc:'A refreshed interior finish that gives your pool a clean, renewed appearance.',service3:'Complete remodeling',service3Desc:'A cohesive update to the materials, finishes, and overall character of your pool.',
    workEyebrow:'THE TRANSFORMATION',workTitle:'See the possibility.',workSubtitle:'Slide the handle to explore the before-and-after experience.',demoNote:'Gallery preview: these are sample photos with a visual effect, not actual Brisa Azul completed projects. Replace with authentic project pairs before publishing.',before:'BEFORE',after:'AFTER',project1:'Waterline & finish inspiration',project2:'Poolside design inspiration',project3:'A refreshed perspective',rangeLabel:'Swipe to compare the before and after sample',beforeAlt:'Sample pool photo with a faded before-style filter, for demonstration only',afterAlt:'Sample pool photography, not a completed Brisa Azul project',
    contactEyebrow:"LET'S CREATE SOMETHING BEAUTIFUL",contactTitle:'Your next chapter starts here.',contactIntro:"Tell us about your pool and what you're envisioning. We'll be in touch to discuss your project.",region:'Proudly serving South Florida',formTitle:'Tell us about your project',formSub:'Preview only — submissions are not enabled.',labelName:'Full name',labelEmail:'Email address',labelPhone:'Phone number',labelDetails:'Tell us about the job',placeholderName:'Your name',placeholderEmail:'you@example.com',placeholderPhone:'(305) 555-0000',placeholderDetails:'What would you like to update about your pool?',sendRequest:'Send inquiry',formPrivacy:"Preview only — no details are sent or saved. Please do not enter real personal information.",footerArea:'South Florida · Pool Renovation',mobileCta:'Request a quote',formPreview:'Demo only. No message was sent or saved. A secure form service must be connected before launch.',thankyouTitle:'Preview only — no request was sent.',thankyouDesc:'This page does not confirm a submission. The contact form is not connected yet.',thankyouBack:'Back to home'
  },
  es: {
    skip:'Ir al contenido',navServices:'Servicios',navWork:'Proyectos',navContact:'Contacto',ctaQuote:'Solicitar cotización',
    heroEyebrow:'SUR DE FLORIDA · REMODELACIÓN DE PISCINAS',heroTitle:'Una piscina hermosa. Un nuevo comienzo.',heroDesc:'Transformamos el corazón de tu espacio exterior con acabados cuidadosamente elegidos, estilo atemporal y una piscina que disfrutarás al llegar a casa.',heroExplore:'Explora nuestro trabajo',heroDiscuss:'Hablemos de tu piscina',heroBottom:'PISCINAS RENOVADAS, ESPACIOS REIMAGINADOS',
    servicesEyebrow:'NUESTRA ESPECIALIDAD',servicesTitle:'Cada detalle hace la diferencia.',servicesIntro:'Desde renovar el acabado hasta transformar por completo su apariencia, cuidamos cada detalle de tu proyecto de remodelación.',service1:'Azulejos y bordes',service1Desc:'Bordes y revestimientos de línea de agua que renuevan el estilo y la personalidad de tu piscina.',service2:'Acabados y revestimiento',service2Desc:'Renovamos el acabado interior para darle a tu piscina una apariencia limpia y fresca.',service3:'Remodelación completa',service3Desc:'Una renovación armoniosa de los materiales, acabados y estilo general de tu piscina.',
    workEyebrow:'LA TRANSFORMACIÓN',workTitle:'Imagina lo que es posible.',workSubtitle:'Desliza el control para explorar la experiencia de antes y después.',demoNote:'Vista de ejemplo: son fotos de muestra con un efecto visual, no proyectos realizados por Brisa Azul. Reemplázalas con fotos reales de antes y después antes de publicar.',before:'ANTES',after:'DESPUÉS',project1:'Inspiración para acabados y azulejos',project2:'Inspiración para el área de piscina',project3:'Una nueva perspectiva',rangeLabel:'Desliza para comparar la muestra de antes y después',beforeAlt:'Foto de ejemplo con un filtro visual de antes; solo demostración',afterAlt:'Foto de ejemplo, no representa un proyecto terminado por Brisa Azul',
    contactEyebrow:'CREEMOS ALGO HERMOSO',contactTitle:'Tu próximo capítulo comienza aquí.',contactIntro:'Cuéntanos sobre tu piscina y lo que te gustaría lograr. Nos comunicaremos contigo para hablar de tu proyecto.',region:'Atendemos al sur de Florida',formTitle:'Cuéntanos de tu proyecto',formSub:'Solo demostración — todavía no se pueden enviar solicitudes.',labelName:'Nombre completo',labelEmail:'Correo electrónico',labelPhone:'Número de teléfono',labelDetails:'Describe el trabajo',placeholderName:'Tu nombre',placeholderEmail:'tu@correo.com',placeholderPhone:'(305) 555-0000',placeholderDetails:'¿Qué te gustaría renovar de tu piscina?',sendRequest:'Enviar solicitud',formPrivacy:'Solo demostración: no se envían ni guardan datos. No ingreses información personal real.',footerArea:'Sur de Florida · Remodelación de piscinas',mobileCta:'Solicitar cotización',formPreview:'Solo demostración. No se envió ni guardó ningún mensaje. Se requiere un servicio seguro antes del lanzamiento.',thankyouTitle:'Vista de prueba — no se envió una solicitud.',thankyouDesc:'Esta página no confirma un envío. El formulario todavía no está conectado.',thankyouBack:'Volver al inicio'
  }
};
function setLanguage(lang) {
  if (!translations[lang]) lang='en';
  document.documentElement.lang=lang;
  try { localStorage.setItem('brisa-language',lang); } catch(_e) {}
  const dict=translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(dict[k]){if(el.tagName==='H1' || el.classList.contains('serif-heading')) {
    const t=dict[k];
    if(k==='heroTitle') el.innerHTML=lang==='es'?'Una piscina hermosa.<br>Un nuevo comienzo.':'A beautiful pool.<br>A fresh beginning.';
    else if(k==='servicesTitle') el.innerHTML=lang==='es'?'Cada detalle hace<br><em>la diferencia.</em>':'The details make<br><em>the difference.</em>';
    else if(k==='contactTitle') el.innerHTML=lang==='es'?'Tu próximo capítulo<br><em>comienza aquí.</em>':'Your next chapter<br><em>starts here.</em>';
    else el.textContent=t;
  } else el.textContent=dict[k]; }});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{el.placeholder=dict[el.dataset.i18nPlaceholder]||'';});
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{el.setAttribute('aria-label',dict[el.dataset.i18nAria]||'');});
  document.querySelectorAll('[data-i18n-alt]').forEach(el=>{el.alt=dict[el.dataset.i18nAlt]||'';});
  document.querySelectorAll('[data-lang]').forEach(el=>{let active=el.dataset.lang===lang;el.classList.toggle('is-current',active);el.setAttribute('aria-pressed',String(active));});
  const input=document.getElementById('contact-language');if(input)input.value=lang;
  document.title=lang==='es'?'Brisa Azul | Remodelación de Piscinas · Sur de Florida':'Brisa Azul | Pool Remodeling · South Florida';
}
let saved='en';try{saved=localStorage.getItem('brisa-language')||'en';}catch(_e){}
const params=new URLSearchParams(location.search);if(params.get('lang')==='es'||params.get('lang')==='en')saved=params.get('lang');
setLanguage(saved);
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
document.querySelectorAll('[data-comparison]').forEach(container=>{
  const range=container.querySelector('input[type=range]');
  const update=()=>container.style.setProperty('--split',range.value+'%');
  range.addEventListener('input',update);update();
});
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
// Preview-only form: never send visitors' details from static GitHub Pages.
const form=document.getElementById('contact-form');
if(form){
  form.addEventListener('submit',event=>event.preventDefault());
  const button=form.querySelector('[data-demo-submit]');
  if(button)button.addEventListener('click',()=>{
    if(!form.reportValidity())return;
    const feedback=document.getElementById('form-feedback');
    feedback.hidden=false;
    feedback.textContent=translations[document.documentElement.lang].formPreview;
    feedback.scrollIntoView({block:'nearest',behavior:'smooth'});
  });
}

// Use the included illustration if sample photography cannot load.
document.querySelectorAll('.comparison img').forEach(img=>{img.addEventListener('error',()=>{if(!img.src.endsWith('pool-fallback.svg')){img.src='pool-fallback.svg';img.alt=document.documentElement.lang==='es'?'Ilustración de una piscina, foto de muestra no disponible':'Pool illustration; sample photo unavailable';}});});
