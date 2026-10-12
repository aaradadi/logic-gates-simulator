# ⚡ مختبر البوابات المنطقية التفاعلي | جامعة أم القرى (UQU)
### Interactive Logic Gates & Light Bulb Simulator

مشروع تعليمي تفاعلي متكامل لمحاكاة **البوابات المنطقية الرقمية (Digital Logic Gates)** ومصابيح الإضاءة ومفاتيح الدوائر الكهربائية، مصمم بهوية وألوان **جامعة أم القرى**.

---

## 🌟 مميزات المشروع

1. **محاكاة حية للمصابيح الكهربائية (Light Bulbs):**
   * إضاءة تفاعلية تحاكي الجهد الكهربائي ($1 = \text{HIGH}$ / $0 = \text{LOW}$).
   * محاكاة جميع البوابات الأساسية والشاملة: `AND`, `OR`, `NOT`, `NAND`, `NOR`, `XOR`, `XNOR`.
2. **محاكاة دائرة الجمع النصفي (Half Adder):**
   * إضافة تعليمية مبنية على دمج بوابتي `XOR` و `AND` لحساب الجمع الثنائي ($1 + 1 = 10_2$) مع مصباحين للناتج والحمل (`SUM` & `CARRY`).
3. **عرض شرائح متطابق مع الفيديو التعليمي (16:9 Presentation Mimic):**
   * شرائح أكاديمية بتصميم الفيديو الأصلي (قاعدة، رمز قياسي، وجدول حقيقة تفاعلي).
4. **ثنائي اللغة بالكامل (Bilingual: Arabic / English):**
   * زر تبديل فوري بين العربية والإنجليزية مع دعم كامل لاتجاه الصفحة (`RTL` و `LTR`).
5. **الوضع الفاتح والداكن (Light & Dark Theme):**
   * متوافق مع كافة الأجهزة وشاشات العرض.
6. **هوية جامعة أم القرى المعتمدة:**
   * الألوان الرسمية: الذهبي الملكي (`#8F7949`)، الكحلي الوقور (`#1C355E`)، والعاجي الرملي (`#FAF6EE`).

---

## 📁 هيكلية الملفات

```text
LOGIC GATE/
├── index.html               # المختبر والمحاكي التفاعلي الرئيسي
├── slides_video_mimic.html  # عرض الشرائح التقديمي (PPT Mode)
├── uqu-theme.js             # ملف التحكم بالهوية، معلومات المؤلف، والتنقل
├── uqu-style.css            # ملف التنسيقات العامة وألوان هوية جامعة أم القرى
└── README.md                # دليل التثبيت والنشر والتوثيق
```

---

## 👨‍💻 أين وكيف تعدل معلوماتك الشخصية وحقوق الملكية؟

جميع بياناتك البرمجية والحقوقية مركزية وموجودة في **ملف واحد فقط**:
👉 **[`uqu-theme.js`](file:///Users/asem-arwasmac/Downloads/بناء%20المحتوى%20448-1/LOGIC%20GATE/uqu-theme.js)** في الأسطر الأولى داخل الكائن `AUTHOR_CONFIG`:

```javascript
const AUTHOR_CONFIG = {
  // الاسم باللغتين العربية والإنجليزية
  name_ar: "عاصم",                   // ✏️ عدل اسمك هنا
  name_en: "Asem",                   // ✏️ عدل اسمك بالإنجليزية

  // البريد الإلكتروني الرسمي للتواصل
  email: "asem@uqu.edu.sa",          // ✏️ عدل إيميلك هنا

  // المسمى أو الصفة الأكاديمية
  title_ar: "جامعة أم القرى - كلية الحاسب الآلي ونظم المعلومات",
  title_en: "Umm Al-Qura University - College of Computer & Information Systems",

  // المقرر الدراسي
  course_ar: "مقرر تصميم المنطق الرقمي (Digital Logic Design)",
  course_en: "Digital Logic Design Course",

  year: "2026",
  github: "https://github.com/asem-arwasmac/logic-gates-simulator"
};
```
بمجرد تعديل هذا الملف، ستتغير معلوماتك تلقائياً في:
- أسفل كل صفحة (Footer).
- نافذة **"عن المشروع والحقوق" (About & Author Modal)**.
- الروابط التفاعلية للبريد الإلكتروني.

---

## 🚀 طريقة النشر الفوري على GitHub و GitHub Pages

المشروع مبني بـ HTML/CSS/JS نقية وبدون أي تبعيات خارجية معقدة، وهو جاهز 100% للرفع والنشر عبر **GitHub Pages**:

### الخطوات:

1. **إنشاء مستودع جديد على GitHub:**
   * افتح [GitHub](https://github.com) وأنشئ مستودعاً جديداً باسم: `logic-gates-simulator`.

2. **رفع الملفات عبر الطرفية (Terminal):**
   ```bash
   cd "/Users/asem-arwasmac/Downloads/بناء المحتوى 448-1/LOGIC GATE"
   git init
   git add .
   git commit -m "Initial commit: UQU Logic Gates Simulator & PPT Mimic"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/logic-gates-simulator.git
   git push -u origin main
   ```

3. **تفعيل الموقع مجاناً (GitHub Pages):**
   * اذهب إلى صفحة المستودع على GitHub ➔ **Settings** ➔ **Pages**.
   * اختر الـ Branch: **`main`** والمجلد **`/ (root)`** ثم اضغط **Save**.
   * سيصبح مشروعك متاحاً للعالم فوراً على الرابط:
     `https://<YOUR-USERNAME>.github.io/logic-gates-simulator/`

---

## 📜 الترخيص (License)
هذا المشروع مرخص تحت رخصة **MIT Open Source License**.
جامعة أم القرى © 2026
