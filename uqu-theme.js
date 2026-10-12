/**
 * LOGIC GATES LAB & SIMULATOR
 * ========================================================
 * يمكنك تعديل معلوماتك الشخصية وحقوق الملكية من هنا مباشرة:
 * You can edit your personal details & copyright right here:
 * ========================================================
 */
const AUTHOR_CONFIG = {
  // الاسم باللغتين العربية والإنجليزية
  name_ar: "عاصم الردادي", // ✏️ عدل اسمك هنا (مثال: أ. عاصم / م. عاصم)
  name_en: "Asem AlRadadi", // ✏️ Edit your name here (e.g., Asem)

  // البريد الإلكتروني الرسمي للتواصل
  email: "aaradadi@uqu.edu.sa", // ✏️ عدل إيميلك هنا

  // المسمى أو الصفة
  title_ar: "مطور ومصمم المحتوى الرقمي",
  title_en: "Digital Content Developer & Designer",

  // المقرر الدراسي
  course_ar: "مقرر تصميم المنطق الرقمي (Digital Logic Design)",
  course_en: "Digital Logic Design Course",

  // سنة النشر
  year: "2026",

  // رابط GitHub (اختياري)
  github: "https://github.com/asem-arwasmac/logic-gates-simulator"
};

// Global language & theme state
let currentLang = localStorage.getItem('logic_lab_lang') || 'ar';
let isDarkMode = localStorage.getItem('logic_lab_theme') === 'dark';

// Unified Navigation Component Injection
function renderUnifiedHeader(activePage = 'lab') {
  const headerElem = document.getElementById('uqu-header');
  if (!headerElem) return;

  headerElem.innerHTML = `
    <div class="uqu-topbar">
      <!-- Brand Area: Logic Gates Lab (No university name) -->
      <a href="index.html" class="uqu-brand-link">
        <div class="uqu-logo-symbol">
          <svg viewBox="0 0 24 24" class="uqu-svg-icon" fill="none" stroke="#8F7949" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
            <circle cx="8" cy="10" r="1.5" fill="#8F7949"/>
            <circle cx="16" cy="10" r="1.5" fill="#8F7949"/>
          </svg>
        </div>
        <div class="uqu-brand-titles">
          <div class="uqu-uni-name">
            <span class="ar-txt">مختبر البوابات المنطقية</span>
            <span class="en-txt">Logic Gates Lab</span>
          </div>
          <div class="uqu-lab-sub">
            <span class="ar-txt">محاكي الدوائر الرقمية والمصابيح</span>
            <span class="en-txt">Interactive Digital Circuits Simulator</span>
          </div>
        </div>
      </a>

      <!-- Unified Navigation Links -->
      <nav class="uqu-nav-links">
        <a href="index.html" class="uqu-nav-item ${activePage === 'lab' ? 'active' : ''}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          <span class="ar-txt">المختبر والمحاكي</span>
          <span class="en-txt">Lab & Simulator</span>
        </a>

        <a href="slides_video_mimic.html" class="uqu-nav-item ${activePage === 'slides' ? 'active' : ''}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          <span class="ar-txt">عرض الشرائح (PPT)</span>
          <span class="en-txt">Presentation (PPT)</span>
        </a>

        <a href="#author-info" class="uqu-nav-item" onclick="openAuthorModal(event)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <span class="ar-txt">عن المشروع والحقوق</span>
          <span class="en-txt">About & Author</span>
        </a>
      </nav>

      <!-- Action Buttons: Theme & Language -->
      <div class="uqu-actions">
        <!-- Theme Toggle -->
        <button class="uqu-btn-action" onclick="toggleUnifiedTheme()" title="Toggle Dark/Light Mode">
          <span id="theme-btn-icon">${isDarkMode ? '☀️' : '🌙'}</span>
          <span class="ar-txt" id="theme-btn-lbl-ar">${isDarkMode ? 'الوضع الفاتح' : 'الوضع الداكن'}</span>
          <span class="en-txt" id="theme-btn-lbl-en">${isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        <!-- Language Toggle -->
        <button class="uqu-btn-action uqu-btn-lang" onclick="toggleUnifiedLanguage()" title="Switch Language">
          <span>🌐</span>
          <span id="lang-btn-text">${currentLang === 'ar' ? 'English' : 'العربية'}</span>
        </button>
      </div>
    </div>
  `;
}

// Unified Footer Component Injection
function renderUnifiedFooter() {
  const footerElem = document.getElementById('uqu-footer');
  if (!footerElem) return;

  footerElem.innerHTML = `
    <div class="uqu-footer-content">
      <div class="uqu-footer-brand">
        <div class="uqu-footer-logo-wrap">
          <span style="font-weight: 900; font-size: 1.15rem; color: #8F7949;">
            <span class="ar-txt">مختبر البوابات المنطقية التفاعلي</span>
            <span class="en-txt">Interactive Logic Gates Lab</span>
          </span>
        </div>
        <p class="uqu-footer-desc">
          <span class="ar-txt">${AUTHOR_CONFIG.course_ar}</span>
          <span class="en-txt">${AUTHOR_CONFIG.course_en}</span>
        </p>
      </div>

      <div class="uqu-footer-meta">
        <div class="uqu-author-chip">
          <span>👨‍💻</span>
          <div>
            <span class="ar-txt">إعداد وتطوير: <strong>${AUTHOR_CONFIG.name_ar}</strong></span>
            <span class="en-txt">Developed by: <strong>${AUTHOR_CONFIG.name_en}</strong></span>
          </div>
        </div>

        <a href="mailto:${AUTHOR_CONFIG.email}" class="uqu-author-email" title="Email Author">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span>${AUTHOR_CONFIG.email}</span>
        </a>

        <div class="uqu-copyright-text">
          <span class="ar-txt">جميع الحقوق محفوظة للمطور © ${AUTHOR_CONFIG.year} — متاح للنشر على GitHub</span>
          <span class="en-txt">All Rights Reserved to the Author © ${AUTHOR_CONFIG.year} — Ready for GitHub</span>
        </div>
      </div>
    </div>
  `;
}

// Toggle Language across entire app
function toggleUnifiedLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('logic_lab_lang', currentLang);
  applyUnifiedAppState();
  if (typeof onLanguageChange === 'function') {
    onLanguageChange(currentLang);
  }
}

// Toggle Dark / Light Theme
function toggleUnifiedTheme() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('logic_lab_theme', isDarkMode ? 'dark' : 'light');
  applyUnifiedAppState();
}

// Apply App State (Classes on <body> and <html dir>)
function applyUnifiedAppState() {
  // Theme class
  document.body.classList.toggle('dark-mode', isDarkMode);
  
  // Language class & dir
  if (currentLang === 'ar') {
    document.body.classList.remove('lang-en');
    document.body.classList.add('lang-ar');
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  } else {
    document.body.classList.remove('lang-ar');
    document.body.classList.add('lang-en');
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
  }

  // Update button texts
  const langTxt = document.getElementById('lang-btn-text');
  if (langTxt) langTxt.textContent = currentLang === 'ar' ? 'English' : 'العربية';

  const themeIcon = document.getElementById('theme-btn-icon');
  if (themeIcon) themeIcon.textContent = isDarkMode ? '☀️' : '🌙';

  const themeAr = document.getElementById('theme-btn-lbl-ar');
  if (themeAr) themeAr.textContent = isDarkMode ? 'الوضع الفاتح' : 'الوضع الداكن';

  const themeEn = document.getElementById('theme-btn-lbl-en');
  if (themeEn) themeEn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

// Author Info Modal
function openAuthorModal(e) {
  if (e) e.preventDefault();
  let modal = document.getElementById('authorModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'authorModal';
    modal.className = 'uqu-modal-overlay';
    modal.innerHTML = `
      <div class="uqu-modal-box">
        <div class="uqu-modal-header">
          <h3 style="color: #1C355E; font-size: 1.3rem; font-weight: 800;">
            <span class="ar-txt">معلومات المطور والحقوق</span>
            <span class="en-txt">Developer & Copyright Info</span>
          </h3>
          <button class="uqu-close-modal" onclick="closeAuthorModal()">&times;</button>
        </div>
        <div class="uqu-modal-body">
          <div style="text-align: center; margin-bottom: 1.2rem;">
            <div style="width: 70px; height: 70px; border-radius: 50%; background: #FAF6EE; border: 2px solid #8F7949; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; font-size: 2rem;">
              👨‍💻
            </div>
            <h4 style="font-size: 1.25rem; color: #1C355E; font-weight: 800;">
              <span class="ar-txt">${AUTHOR_CONFIG.name_ar}</span>
              <span class="en-txt">${AUTHOR_CONFIG.name_en}</span>
            </h4>
            <p style="color: #8F7949; font-weight: 700; font-size: 0.95rem;">
              <span class="ar-txt">${AUTHOR_CONFIG.title_ar}</span>
              <span class="en-txt">${AUTHOR_CONFIG.title_en}</span>
            </p>
          </div>

          <div style="background: #FAF6EE; border: 1px solid #E2D7BE; border-radius: 10px; padding: 14px; margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="font-weight: 700; color: #1C355E;"><span class="ar-txt">البريد الإلكتروني:</span><span class="en-txt">Email:</span></span>
              <a href="mailto:${AUTHOR_CONFIG.email}" style="color: #0284c7; font-weight: 700; text-decoration: none;">${AUTHOR_CONFIG.email}</a>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="font-weight: 700; color: #1C355E;"><span class="ar-txt">المقرر:</span><span class="en-txt">Course:</span></span>
              <span style="color: #555;">${AUTHOR_CONFIG.course_ar}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="font-weight: 700; color: #1C355E;"><span class="ar-txt">الترخيص:</span><span class="en-txt">License:</span></span>
              <span style="color: #16a34a; font-weight: bold;">MIT (Open Source)</span>
            </div>
          </div>

          <div style="font-size: 0.85rem; color: #64748b; background: #f8fafc; padding: 10px; border-radius: 6px; border: 1px dashed #cbd5e1;">
            💡 <span class="ar-txt">لتعديل هذه البيانات، يمكنك تحرير ملف <code>uqu-theme.js</code> في بداية الكود داخل الكائن <code>AUTHOR_CONFIG</code>.</span>
            <span class="en-txt">To edit this information, you can modify the <code>AUTHOR_CONFIG</code> object at the top of <code>uqu-theme.js</code>.</span>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  modal.style.display = 'flex';
}

function closeAuthorModal() {
  const modal = document.getElementById('authorModal');
  if (modal) modal.style.display = 'none';
}
