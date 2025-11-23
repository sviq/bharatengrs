# Bharat Engrs – Next.js Static Website (Redesigned UI)

A fully static, SEO-optimized, blazing-fast website built using **Next.js**, **Tailwind CSS**, and a clean modular architecture.  
This project is a redesign of the existing site while keeping **same content** but with **new UI/UX layouts**.

---

## 🚀 Tech Stack

- **Next.js 14 (App Router)**
- **Tailwind CSS**
- **React Icons**
- **Static Rendering (no backend)**
- **Nodemailer (Contact form email)**
- **Sitemap & Robots.txt**
- **Two Layout Systems**
  - 12-Column Layout (Container)
  - Full-Width Banner Layout (No container)

---

## 📁 Folder Structure

```python
project-root/
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── products/
│   │   ├── gallery/
│   │   └── certificates/
│   ├── icons/
│   │   ├── whatsapp.svg
│   │   ├── scroll-top.svg
│   │   └── menu.svg
|   ├── banner/ # Full-width banner images
│   ├── favicon.ico
│   └── logo.png
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── layout.jsx       // MASTER LAYOUT (header/footer)
│   │   ├── page.jsx         // homepage
│   │   ├── sitemap.js
│   │   ├── seo/
│   │   │   ├── metadata.js
│   │   │   └── structured-data.js
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │
│   │   ├── about/
│   │   │   └── page.jsx
│   │   │
│   │   ├── products/
│   │   │   └── page.jsx
│   │   │
│   │   ├── our strength/
│   │   │   └── page.jsx
│   │   │
│   │   ├── applications/
│   │   │   └── page.jsx
│   │   │
│   │   ├── clients/
│   │   │   └── page.jsx
│   │   │
│   │   ├── inquiry/
│   │   │   └── page.jsx
│   │   │
│   │   ├── gallery/
│   │   │   └── page.jsx
│   │   │
│   │   ├── contact us/
│   │   │   └── page.jsx
│   │
│   ├── components/
│   │   ├── layouts/                 // CHILD LAYOUTS
│   │   │   ├── TwelveColumnLayout.jsx
│   │   │   └── FullWidthLayout.jsx
│   │   |
│   │   ├── common/
│   │       ├── Button.jsx
│   │       └── SectionTitle.jsx
│   │
│   ├── data/
│   │   ├── products.js
│   │   ├── clients.js
│   │   └── gallery.js
│   │
│   ├── lib/
│   │   ├── mailer.js     (Nodemailer configuration)
│   │   └── email-template.js
│   │
│   ├── styles/
│       └── globals.css
│
├── .env.local (email config)
├── tailwind.config.js
├── next.config.js
└── package.json

```

## 3. Features List (Scope)

**Static pages:**

- **Home**

- **About**

- **Products**

- **Our Strength**

- **Application**

- **Clients**

- **Inquiry**

- **Gallery**

- **Contact US (with email sending)**

## 4. Competitor List (India)

```
| Company                 | Website               | Category               |
| ----------------------- | --------------------- | ---------------------- |
| Accu-Panels Energy      | accupanels.com        | LT/HT Panels, MCC, PCC |
| SS Enterprises          | ssemzn.com            | Power control panels   |
| Vikas Controls          | vikascontrols.com     | MCC, APFC, AMF Panels  |
| India Electricals       | india-electricals.com | Distribution panels    |
| Domain Powers           | domainpowers.co.in    | LT/HT control panels   |
| MJM Control & Engineers | mjmcontrol.com        | MCC, DG Sync, APFC     |
| Elecmec Controls        | elecmeccontrols.com   | PCC, MCC, VCB Panels   |
| Industrial Electricals  | hvaccontrolpanels.com | Process control panels |

```

## 5. Developer Instructions Summary

- **Developer must follow:**

- **Build fully static pages using Next.js App Router.**

- **Use the folder structure exactly as defined.**

- **Use public/ for all images.**

- **SEO per page + sitemap + robots.txt mandatory.**

- **Implement contact form with working SMTP.**

- **UI must follow modern look (minimal, blue/white corporate theme).**

- **Keep content SAME as current website, just redesign UI.**

