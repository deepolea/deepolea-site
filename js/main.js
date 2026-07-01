// --- 1. ARAYÜZ ANİMASYONLARI VE SCROLL ---
var hdr = document.getElementById('hdr');
if (hdr) {
  var onScroll = function() { hdr.classList.toggle('scrolled', window.scrollY > 12) };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var items = document.querySelectorAll('.reveal');
if (items.length > 0) {
  if (prefersReduced || !('IntersectionObserver' in window)) {
    items.forEach(function(el){ el.classList.add('in') });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target) }
      });
    }, { threshold: .16, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function(el){ io.observe(el) });
  }
}

// --- 2. ATIF KOPYALAMA FONKSİYONU (Sadece FISformer sayfasında çalışır) ---
function copyCitation() {
  const bibtex = document.getElementById("bibtex");
  if(bibtex) {
    navigator.clipboard.writeText(bibtex.innerText).then(() => {
      const currentLang = localStorage.getItem('selectedLang') || 'tr';
      if(currentLang === 'tr') alert("Atıf kopyalandı!");
      else alert("Citation copied!");
    });
  }
}

// --- 3. DİL YÖNETİMİ VE FADE-IN ANİMASYONU ---
async function loadLanguage(langCode) {
  try {
    // URL'ye bakarak lang klasörünün yerini otomatik bulur
    let pathPrefix = '';
    if (window.location.pathname.includes('/lab') || window.location.pathname.includes('/projects')) {
      pathPrefix = '../';
    }

    const response = await fetch(`${pathPrefix}lang/${langCode}.json`);
    const translations = await response.json();
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[key]) {
        if (element.tagName === 'META') {
          element.setAttribute('content', translations[key]);
        } else if (element.tagName === 'IMG') {
          element.setAttribute('alt', translations[key]);
        } else {
          element.innerHTML = translations[key];
        }
      }
    });

    localStorage.setItem('selectedLang', langCode);
    document.documentElement.lang = langCode;

    const langSelector = document.getElementById('lang-selector');
    if(langSelector) { langSelector.value = langCode; }

    // Çeviri bitince sayfayı yumuşakça göster (FOUC çözümü)
    document.body.classList.add('lang-loaded');

  } catch (error) {
    console.error("Dil dosyası yüklenirken hata oluştu:", error);
    document.body.classList.add('lang-loaded');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let savedLang = localStorage.getItem('selectedLang');
  if (!savedLang) {
    const browserLang = navigator.language || navigator.userLanguage;
    savedLang = browserLang.toLowerCase().startsWith('tr') ? 'tr' : 'en';
  }
  loadLanguage(savedLang); 

  const langSelector = document.getElementById('lang-selector');
  if(langSelector) {
    langSelector.addEventListener('change', (event) => {
      loadLanguage(event.target.value);
    });
  }
});

// Sekmeler arası dil senkronizasyonu
window.addEventListener('storage', (event) => {
  if (event.key === 'selectedLang') {
    loadLanguage(event.newValue);
  }
});