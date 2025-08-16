(function(h){typeof define=="function"&&define.amd?define(h):h()})(function(){"use strict";function h(s){var o=document.querySelectorAll(`[${s}]`);!o||o.length===0||o.forEach(function(r){r.addEventListener("submit",function(u){u.preventDefault();for(var t,e=u.target.elements,l={},n=0;n<e.length;n++)if(e[n].type==="submit")t=e[n];else if(e[n].type==="select-multiple"){for(var f=[],g=e[n].options,d=0;d<g.length;d++)g[d].selected&&f.push(g[d].value);l[e[n].name]=f}else if(e[n].type==="radio")e[n].checked&&(l[e[n].name]=e[n].value);else if(e[n].type==="datetime-local"){var a=e[n].value;if(a){var y=new Date(a),b=y.toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0});l[e[n].name]=b}}else l[e[n].name]=e[n].value;if(!t){console.error("No submit button found.");return}var E=t.innerText;l.analyticsId=window.LANDING_SITE_ID,t.innerText="Sending...",fetch(window.LANDING_SITE_CONTACT_US_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(function(p){if(console.log(p),p.ok){t.innerText="Done!";for(var m=0;m<e.length;m++)e[m].type!=="submit"&&(e[m].value="")}else t.innerText="Error. Please try again."}).catch(p=>{console.error("Error:",p)}).finally(function(){setTimeout(function(){t.innerText=E},4e3)})})})}function x(s){if(!document)return;const o=document.getElementById(s);if(!o)return;const r=document.getElementById("navigation-menu");if(!r)return;o.addEventListener("click",function(){r.classList.toggle("hidden");const e=!r.classList.contains("hidden");o.setAttribute("aria-expanded",e?"true":"false")});function u(){this.querySelectorAll(".lg\\:group-hover\\:block").forEach(l=>{l.classList.toggle("hidden")})}Array.from(r.querySelectorAll(".group")).forEach(e=>{e.addEventListener("click",u)})}function I(){if(!document)return;const s=document.querySelector("[data-landingsite-mobile-menu-toggle]");if(!s)return;const o=document.querySelector("[data-landingsite-mobile-menu]");o&&s.addEventListener("click",function(){o.classList.toggle("hidden");const r=!o.classList.contains("hidden");s.setAttribute("aria-expanded",r?"true":"false")})}function v(s){const o=s.querySelectorAll("[data-landingsite-carousel-item]");if(o.length===0)return{itemWidth:0,gapValue:0,stepSize:0,itemsInView:1};const r=window.getComputedStyle(s),u=parseFloat(r.columnGap)||0,e=o[0].offsetWidth,l=e+u,n=s.parentElement.clientWidth,f=Math.max(Math.floor(n/e),1);return{itemWidth:e,gapValue:u,stepSize:l,itemsInView:f}}function w(s,o){let r;return function(...u){clearTimeout(r),r=setTimeout(()=>s.apply(this,u),o)}}function A(s){const o=document.querySelectorAll(`[${s}]`),r=[];o.forEach(t=>{const e=t.querySelectorAll("[data-landingsite-carousel-item]"),l=t.closest("section, .code-section, body").querySelector("[data-landingsite-carousel-controls-left]"),n=t.closest("section, .code-section, body").querySelector("[data-landingsite-carousel-controls-right]"),f=t.closest("section, .code-section, body").querySelector("[data-landingsite-carousel-current-index]"),g=t.closest("section, .code-section, body").querySelector("[data-landingsite-carousel-length]"),d=t.closest("section, .code-section, body").querySelector("[data-landingsite-carousel-controls-index]");let a=0;const y=e.length;let{itemWidth:b,gapValue:E,stepSize:p,itemsInView:m}=v(t);g&&(g.textContent=y);function q(){f&&(f.textContent=a+1)}function L(){if(!d)return;d.querySelectorAll("li").forEach((c,C)=>{c.className=c.className.replace(/\bbg-\S+/g,""),C===a?c.classList.add("bg-[var(--primary-button-bg-color)]"):c.classList.add("bg-[#C9CECD]")})}q();function S(i){typeof i=="string"?i==="next"?(a++,a>y-m&&(a=0)):i==="prev"&&(a--,a<0&&(a=y-m,a<0&&(a=0))):typeof i=="number"&&(a=i);const c=a*p;t.style.transform=`translateX(-${c}px)`,q(),L()}if(l&&l.addEventListener("click",()=>{l.closest("section, .code-section, body").querySelector("[data-landingsite-carousel]")===t&&S("prev")}),n&&n.addEventListener("click",()=>{n.closest("section, .code-section, body").querySelector("[data-landingsite-carousel]")===t&&S("next")}),d){d.innerHTML="";for(let i=0;i<y;i++){const c=document.createElement("li");c.classList.add("h-5","w-5","rounded-full","cursor-pointer","transition-colors"),i===0?c.classList.add("bg-[var(--primary-button-bg-color)]"):c.classList.add("bg-[#C9CECD]"),c.addEventListener("click",()=>{c.closest("section, .code-section, body").querySelector("[data-landingsite-carousel]")===t&&S(i)}),d.appendChild(c)}}L(),r.push({carousel:t,get currentIndex(){return a},set currentIndex(i){a=i},get stepSize(){return p},set stepSize(i){p=i},get itemsInView(){return m},set itemsInView(i){m=i},updateCarousel:S})});const u=w(()=>{r.forEach(t=>{const{itemWidth:e,gapValue:l,stepSize:n,itemsInView:f}=v(t.carousel);t.stepSize=n,t.itemsInView=f;const g=t.currentIndex*n;t.carousel.style.transform=`translateX(-${g}px)`})},200);window.addEventListener("resize",u)}function D(s){const o=document.querySelectorAll(`[${s}]`);o.length&&o.forEach(r=>{r.querySelectorAll("[data-landingsite-faq-item]").forEach(t=>{const e=t.querySelector("[data-landingsite-faq-question]"),l=t.querySelector("[data-landingsite-faq-answer]");e&&l&&e.addEventListener("click",()=>{l.classList.toggle("hidden"),e.querySelector("i").classList.toggle("rotate-180")})})})}function T(s){document&&document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()}T(function(){x("mobile-menu-button"),I(),h("data-landingsite-contact-form"),A("data-landingsite-carousel"),D("data-landingsite-faq")})});

/* ===== Gallery Code ===== */
const projectGalleries = {
  'pahali-pazuri': [
    {
      url: 'https://i.ibb.co/3yYqkq4G/pahali-pazuri.jpg',
      title: 'Pahali Pazuri - Main View',
      description: 'Professional painting and finishing work'
    },
    {
      url: 'https://i.ibb.co/9kPPR0Nj/paazurii.jpg',
      title: 'Pahali Pazuri - Additional View',
      description: 'Additional project angle showing detail work'
    }
  ],
  'sandy-shore': [
    {
      url: 'https://i.ibb.co/0yKxHvDC/Sandy-Shore-bfr.jpg',
      title: 'Sandy Shore - Before',
      description: 'Project condition before renovation'
    },
    {
      url: 'https://i.ibb.co/Q7qG84cb/Sandy-Shore.jpg',
      title: 'Sandy Shore - After',
      description: 'Complete renovation and painting work'
    },
    {
      url: 'https://i.ibb.co/xqtLvvC3/sandy-shore-1.jpg',
      title: 'Sandy Shore - Progress 1',
      description: 'Work in progress - stage 1'
    },
    {
      url: 'https://i.ibb.co/S7tnNRMD/sandy-shore-2.jpg',
      title: 'Sandy Shore - Progress 2',
      description: 'Work in progress - stage 2'
    },
    {
      url: 'https://i.ibb.co/wZbNbgw9/sandy-shore-aft.jpg',
      title: 'Sandy Shore - Final Result',
      description: 'Final completed project result'
    }
  ],
  'residential': [
    {
      url: 'https://i.ibb.co/JWrL3K05/residentials.jpg',
      title: 'Residential - Main View',
      description: 'High-quality residential painting and waterproofing'
    },
    {
      url: 'https://i.ibb.co/3ygdRHB7/IMG-20250803-WA0005.jpg',
      title: 'Residential - Interior Detail',
      description: 'Interior work detail showing quality craftsmanship'
    },
    {
      url: 'https://i.ibb.co/DPG7kdzW/IMG-20250803-WA0008.jpg',
      title: 'Residential - Painting Detail',
      description: 'Detailed painting work in progress'
    },
    {
      url: 'https://i.ibb.co/7HjhpnW/IMG-20250803-WA0011.jpg',
      title: 'Residential - Finishing Work',
      description: 'Professional finishing work detail'
    },
    {
      url: 'https://i.ibb.co/W4LcRQtw/IMG-20250803-WA0027.jpg',
      title: 'Residential - Quality Craftsmanship',
      description: 'Quality craftsmanship detail work'
    },
    {
      url: 'https://i.ibb.co/dwrZ6qYb/IMG-20250803-WA0028.jpg',
      title: 'Residential - Professional Finish',
      description: 'Professional finish detail showing quality'
    }
  ],
  'nyali-bazaar': [
    {
      url: 'https://i.ibb.co/YT7BtrYH/Nyali-Baazar.jpg',
      title: 'Nyali Bazaar - Main View',
      description: 'Commercial painting and finishing work'
    },
    {
      url: 'https://i.ibb.co/8Lf9rStb/nyali-baazar-paintwork.jpg',
      title: 'Nyali Bazaar - Paint Work Detail',
      description: 'Detailed paint work in commercial setting'
    }
  ],
  'dolphin-hotel': [
    {
      url: 'https://i.ibb.co/4wKSFVFY/Dolphin.jpg',
      title: 'Dolphin Hotel - Main View',
      description: 'Professional waterproofing and painting services'
    },
    {
      url: 'https://i.ibb.co/XnSGVWw/dolphin-waterproofing.jpg',
      title: 'Dolphin Hotel - Waterproofing Detail',
      description: 'Specialized waterproofing work detail'
    }
  ],
  'butterfly-park': [
    {
      url: 'https://i.ibb.co/YTqrfKh7/butterfly-park.jpg',
      title: 'Butterfly Park',
      description: 'Specialized painting and finishing work'
    }
  ],
  'damaac-poly': [
    {
      url: 'https://i.ibb.co/mVVsRYzT/damac-2.jpg',
      title: 'Damaac Poly Heights - Main View',
      description: 'Large-scale commercial painting and waterproofing'
    },
    {
      url: 'https://i.ibb.co/W4qw09D4/damac.jpg',
      title: 'Damaac Poly Heights - Detail Work',
      description: 'Commercial work detail and finishing'
    }
  ]
};

let currentGallery = [];
let currentImageIndex = 0;

function openGallery(projectId) {
  currentGallery = projectGalleries[projectId] || [];
  currentImageIndex = 0;
  if (currentGallery.length === 0) return;
  createGalleryModal();
  updateGalleryImage();
  document.body.style.overflow = 'hidden';
}

function createGalleryModal() {
  const modal = document.createElement('div');
  modal.id = 'gallery-modal';
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90';
  modal.innerHTML = `
    <div class="relative w-full h-full flex items-center justify-center p-4">
      <button onclick="closeGallery()" class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors z-10">
        <i class="fas fa-times"></i>
      </button>
      <button onclick="previousImage()" class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors z-10 \${currentGallery.length <= 1 ? 'hidden' : ''}">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button onclick="nextImage()" class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors z-10 \${currentGallery.length <= 1 ? 'hidden' : ''}">
        <i class="fas fa-chevron-right"></i>
      </button>
      <div class="w-full h-full flex items-center justify-center">
        <div class="max-w-5xl max-h-full">
          <img id="gallery-image" class="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
        </div>
      </div>
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white bg-black bg-opacity-50 px-6 py-3 rounded-lg backdrop-blur-sm">
        <h3 id="gallery-title" class="text-lg font-bold mb-1"></h3>
        <p id="gallery-description" class="text-sm opacity-90"></p>
        <p id="gallery-counter" class="text-xs opacity-75 mt-2 \${currentGallery.length <= 1 ? 'hidden' : ''}"></p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeGallery(); });
  document.addEventListener('keydown', handleKeyPress);
}

function updateGalleryImage() {
  const image = document.getElementById('gallery-image');
  const title = document.getElementById('gallery-title');
  const description = document.getElementById('gallery-description');
  const counter = document.getElementById('gallery-counter');
  if (!image || !currentGallery[currentImageIndex]) return;
  const currentImage = currentGallery[currentImageIndex];
  image.src = currentImage.url;
  image.alt = currentImage.title;
  title.textContent = currentImage.title;
  description.textContent = currentImage.description;
  if (counter && currentGallery.length > 1) {
    counter.textContent = `${currentImageIndex + 1} of ${currentGallery.length}`;
  }
}

function nextImage() {
  if (currentGallery.length <= 1) return;
  currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
  updateGalleryImage();
}

function previousImage() {
  if (currentGallery.length <= 1) return;
  currentImageIndex = currentImageIndex === 0 ? currentGallery.length - 1 : currentImageIndex - 1;
  updateGalleryImage();
}

function closeGallery() {
  const modal = document.getElementById('gallery-modal');
  if (modal) modal.remove();
  document.removeEventListener('keydown', handleKeyPress);
  document.body.style.overflow = '';
}

function handleKeyPress(e) {
  switch(e.key) {
    case 'Escape': closeGallery(); break;
    case 'ArrowRight': nextImage(); break;
    case 'ArrowLeft': previousImage(); break;
  }
}

window.openGallery = openGallery;
window.closeGallery = closeGallery;
window.nextImage = nextImage;
window.previousImage = previousImage;