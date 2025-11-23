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

## 📁 Complete Production-Ready Folder Structure

```
project-root/
│
├── public/                                    # Static assets (served at root)
│   ├── images/
│   │   ├── hero/                             # Hero section images
│   │   │   ├── hero-main.jpg
│   │   │   └── hero-bg.jpg
│   │   ├── about/                            # About page images
│   │   │   ├── company-image.jpg
│   │   │   └── team-image.jpg
│   │   ├── products/                         # Product images
│   │   │   ├── product-1.jpg
│   │   │   ├── product-2.jpg
│   │   │   └── ...
│   │   ├── services/                         # Service images
│   │   │   ├── service-1.jpg
│   │   │   └── ...
│   │   ├── gallery/                          # Gallery images
│   │   │   ├── gallery-1.jpg
│   │   │   ├── gallery-2.jpg
│   │   │   └── ...
│   │   ├── clients/                          # Client logos/images
│   │   │   ├── client-1.png
│   │   │   ├── client-2.png
│   │   │   └── ...
│   │   └── certificates/                     # Certificate images
│   │       ├── cert-1.jpg
│   │       └── ...
│   │
│   ├── icons/                                # SVG icons
│   │   ├── whatsapp.svg                      # WhatsApp icon
│   │   ├── scroll-top.svg                    # Scroll to top icon
│   │   ├── menu.svg                          # Mobile menu icon
│   │   ├── close.svg                         # Close icon
│   │   └── logo-icon.svg                     # Logo icon variant
│   │
│   ├── banner/                               # Full-width banner images
│   │   ├── about-banner.jpg
│   │   ├── products-banner.jpg
│   │   ├── services-banner.jpg
│   │   └── ...
│   │
│   ├── favicon.ico                           # Site favicon
│   ├── logo.png                              # Main logo
│   ├── logo-white.png                        # White logo variant
│   ├── robots.txt                            # SEO robots file
│   └── og-image.jpg                          # Open Graph default image
│
├── src/
│   │
│   ├── app/                                  # Next.js App Router directory
│   │   ├── layout.jsx                        # Root layout (header/footer wrapper)
│   │   ├── page.jsx                          # Homepage (/)
│   │   ├── globals.css                       # Global styles + Tailwind imports
│   │   ├── sitemap.js                        # Dynamic sitemap generator
│   │   ├── robots.js                         # Dynamic robots.txt generator
│   │   │
│   │   ├── api/                              # API routes (serverless functions)
│   │   │   └── contact/
│   │   │       └── route.js                  # Contact form email handler
│   │   │
│   │   ├── about/
│   │   │   ├── page.jsx                      # About page (/about)
│   │   │   └── layout.jsx                    # Optional: page-specific layout
│   │   │
│   │   ├── products/
│   │   │   └── page.jsx                      # Products listing page (/products)
│   │   │
│   │   ├── services/
│   │   │   └── page.jsx                      # Services page (/services)
│   │   │
│   │   ├── clients/
│   │   │   └── page.jsx                      # Clients page (/clients)
│   │   │
│   │   ├── gallery/
│   │   │   └── page.jsx                      # Gallery page (/gallery)
│   │   │
│   │   ├── contact/
│   │   │   └── page.jsx                      # Contact page (/contact)
│   │   │
│   │   ├── inquiry/
│   │   │   └── page.jsx                      # Inquiry page (/inquiry) [optional]
│   │   │
│   │   └── certificates/
│   │       └── page.jsx                      # Certificates page (/certificates) [optional]
│   │
│   ├── components/                           # React components
│   │   │
│   │   ├── layouts/                          # Layout components
│   │   │   ├── PrimaryLayout.jsx             # 12-column container layout
│   │   │   ├── BannerLayout.jsx              # Full-width banner + 12-column content
│   │   │   └── Container.jsx                 # Reusable container wrapper
│   │   │
│   │   ├── header/                           # Header components
│   │   │   ├── Header.jsx                    # Main header component
│   │   │   ├── Navbar.jsx                    # Navigation bar
│   │   │   ├── MobileMenu.jsx                # Mobile menu drawer
│   │   │   └── Logo.jsx                      # Logo component
│   │   │
│   │   ├── footer/                           # Footer components
│   │   │   ├── Footer.jsx                    # Main footer component
│   │   │   ├── FooterLinks.jsx               # Footer navigation links
│   │   │   ├── FooterContact.jsx             # Footer contact info
│   │   │   └── SocialLinks.jsx               # Social media links
│   │   │
│   │   ├── hero/                             # Hero section components
│   │   │   ├── Hero.jsx                      # Main hero component
│   │   │   └── HeroContent.jsx               # Hero text content
│   │   │
│   │   ├── products/                         # Product-related components
│   │   │   ├── ProductCard.jsx               # Individual product card
│   │   │   ├── ProductGrid.jsx               # Product grid layout
│   │   │   └── ProductModal.jsx              # Product detail modal (optional)
│   │   │
│   │   ├── services/                         # Service-related components
│   │   │   ├── ServiceCard.jsx               # Individual service card
│   │   │   ├── ServiceGrid.jsx               # Service grid layout
│   │   │   └── ServiceList.jsx               # Service list view
│   │   │
│   │   ├── gallery/                          # Gallery components
│   │   │   ├── GalleryGrid.jsx               # Gallery grid layout
│   │   │   ├── GalleryItem.jsx               # Individual gallery item
│   │   │   └── GalleryModal.jsx              # Image lightbox modal
│   │   │
│   │   ├── clients/                          # Client-related components
│   │   │   ├── ClientGrid.jsx                # Client logo grid
│   │   │   ├── ClientCard.jsx                # Individual client card
│   │   │   └── ClientSlider.jsx              # Client logo slider (optional)
│   │   │
│   │   ├── forms/                            # Form components
│   │   │   ├── ContactForm.jsx               # Contact form
│   │   │   ├── InquiryForm.jsx               # Inquiry form
│   │   │   ├── FormInput.jsx                 # Reusable input field
│   │   │   ├── FormTextarea.jsx              # Reusable textarea
│   │   │   └── FormButton.jsx                # Form submit button
│   │   │
│   │   ├── common/                           # Common reusable components
│   │   │   ├── Button.jsx                    # Primary button component
│   │   │   ├── SectionTitle.jsx              # Section heading component
│   │   │   ├── CompanyStats.jsx              # Statistics display component
│   │   │   ├── Breadcrumb.jsx                # Breadcrumb navigation
│   │   │   ├── LoadingSpinner.jsx            # Loading indicator
│   │   │   └── ErrorMessage.jsx              # Error message display
│   │   │
│   │   └── floating/                         # Floating UI components
│   │       ├── WhatsAppButton.jsx            # WhatsApp floating button
│   │       └── ScrollToTop.jsx               # Scroll to top button
│   │
│   ├── data/                                 # Static data files
│   │   ├── products.js                       # Products data array
│   │   ├── services.js                       # Services data array
│   │   ├── clients.js                        # Clients data array
│   │   ├── gallery.js                        # Gallery images data
│   │   ├── certificates.js                   # Certificates data
│   │   ├── navigation.js                     # Navigation menu items
│   │   └── company-info.js                   # Company contact info, address, etc.
│   │
│   ├── lib/                                  # Utility libraries
│   │   ├── meta.js                           # SEO metadata helper functions
│   │   ├── email.js                          # Nodemailer configuration & email sending
│   │   ├── email-template.js                 # Email HTML templates
│   │   ├── validations.js                    # Form validation utilities
│   │   └── utils.js                          # General utility functions
│   │
│   └── styles/                               # Additional styles (if needed)
│       └── components.css                    # Component-specific styles
│
├── .env.local                                # Environment variables (email config)
├── .env.example                              # Example env file template
├── .gitignore                                # Git ignore rules
├── tailwind.config.js                        # Tailwind CSS configuration
├── next.config.js                            # Next.js configuration
├── postcss.config.js                         # PostCSS configuration
├── package.json                              # Dependencies & scripts
├── README.md                                 # Project documentation
└── jsconfig.json                             # JavaScript/JSX path aliases (optional)

```

---

## 📋 Detailed File & Folder Explanations

### **Root Level Files**

| File | Purpose |
|------|---------|
| `package.json` | NPM dependencies, scripts (dev, build, start, export) |
| `next.config.js` | Next.js configuration (image domains, static export settings) |
| `tailwind.config.js` | Tailwind CSS theme, colors, custom utilities |
| `postcss.config.js` | PostCSS config for Tailwind processing |
| `.env.local` | Environment variables (SMTP credentials, API keys) |
| `.env.example` | Template showing required env variables |
| `.gitignore` | Files/folders to exclude from Git |
| `jsconfig.json` | Path aliases (`@/components`, `@/lib`, etc.) |

---

### **`/public` Directory**

**Purpose:** Static assets served at the root URL. Files here are directly accessible.

| Folder/File | Purpose |
|-------------|---------|
| `images/` | All image assets organized by category |
| `icons/` | SVG icons for UI elements |
| `banner/` | Full-width banner images for page headers |
| `favicon.ico` | Browser tab icon |
| `logo.png` | Main company logo |
| `robots.txt` | Search engine crawler instructions (can be dynamic via `robots.js`) |
| `og-image.jpg` | Default Open Graph image for social sharing |

---

### **`/src/app` Directory (Next.js App Router)**

**Purpose:** Next.js 14 App Router pages and layouts. Each folder = a route.

| File/Folder | Purpose |
|-------------|---------|
| `layout.jsx` | **Root layout** - wraps all pages (includes Header & Footer) |
| `page.jsx` | **Homepage** - main landing page (`/`) |
| `globals.css` | Global styles + Tailwind directives (`@tailwind base/components/utilities`) |
| `sitemap.js` | Dynamic sitemap generation (exports all routes) |
| `robots.js` | Dynamic robots.txt generation (optional, if not using static file) |
| `api/contact/route.js` | Serverless API route for contact form email sending |
| `about/page.jsx` | About page route (`/about`) |
| `products/page.jsx` | Products listing page (`/products`) |
| `services/page.jsx` | Services page (`/services`) |
| `clients/page.jsx` | Clients showcase page (`/clients`) |
| `gallery/page.jsx` | Image gallery page (`/gallery`) |
| `contact/page.jsx` | Contact form page (`/contact`) |
| `inquiry/page.jsx` | Product inquiry page (`/inquiry`) [optional] |
| `certificates/page.jsx` | Certificates page (`/certificates`) [optional] |

**Note:** Each `page.jsx` can have its own `layout.jsx` for page-specific layouts.

---

### **`/src/components` Directory**

**Purpose:** Reusable React components organized by feature/type.

#### **`layouts/`**
- `PrimaryLayout.jsx` - 12-column container layout (max-width, centered)
- `BannerLayout.jsx` - Full-width hero banner + 12-column content below
- `Container.jsx` - Reusable container wrapper with consistent padding

#### **`header/`**
- `Header.jsx` - Main header component (includes Navbar, Logo, MobileMenu)
- `Navbar.jsx` - Desktop navigation menu
- `MobileMenu.jsx` - Mobile hamburger menu drawer
- `Logo.jsx` - Logo component with responsive variants

#### **`footer/`**
- `Footer.jsx` - Main footer component
- `FooterLinks.jsx` - Footer navigation links section
- `FooterContact.jsx` - Footer contact information
- `SocialLinks.jsx` - Social media icon links

#### **`hero/`**
- `Hero.jsx` - Main hero section component (uses BannerLayout)
- `HeroContent.jsx` - Hero text content (title, description, CTA)

#### **`products/`**
- `ProductCard.jsx` - Individual product card (image, title, description)
- `ProductGrid.jsx` - Grid layout for product cards
- `ProductModal.jsx` - Modal for product details (optional)

#### **`services/`**
- `ServiceCard.jsx` - Individual service card component
- `ServiceGrid.jsx` - Grid layout for services
- `ServiceList.jsx` - List view for services (optional)

#### **`gallery/`**
- `GalleryGrid.jsx` - Responsive image grid layout
- `GalleryItem.jsx` - Individual gallery image item
- `GalleryModal.jsx` - Lightbox modal for full-size images

#### **`clients/`**
- `ClientGrid.jsx` - Grid of client logos
- `ClientCard.jsx` - Individual client card (logo + name)
- `ClientSlider.jsx` - Carousel slider for clients (optional)

#### **`forms/`**
- `ContactForm.jsx` - Contact form with validation
- `InquiryForm.jsx` - Product inquiry form
- `FormInput.jsx` - Reusable styled input field
- `FormTextarea.jsx` - Reusable styled textarea
- `FormButton.jsx` - Form submit button with loading state

#### **`common/`**
- `Button.jsx` - Primary button component (variants: primary, secondary, outline)
- `SectionTitle.jsx` - Section heading with optional subtitle
- `CompanyStats.jsx` - Statistics display (years of experience, projects, clients)
- `Breadcrumb.jsx` - Breadcrumb navigation component
- `LoadingSpinner.jsx` - Loading indicator
- `ErrorMessage.jsx` - Error message display component

#### **`floating/`**
- `WhatsAppButton.jsx` - Floating WhatsApp button (bottom-right)
- `ScrollToTop.jsx` - Scroll-to-top button (appears on scroll)

---

### **`/src/data` Directory**

**Purpose:** Static data arrays/objects for products, services, clients, etc.

| File | Purpose |
|------|---------|
| `products.js` | Array of product objects (id, name, description, image, specs) |
| `services.js` | Array of service objects (id, name, description, icon) |
| `clients.js` | Array of client objects (id, name, logo, website) |
| `gallery.js` | Array of gallery image objects (id, src, alt, category) |
| `certificates.js` | Array of certificate objects (id, name, image, issuedBy) |
| `navigation.js` | Navigation menu items array |
| `company-info.js` | Company details (name, address, phone, email, social links) |

---

### **`/src/lib` Directory**

**Purpose:** Utility functions and configurations.

| File | Purpose |
|------|---------|
| `meta.js` | SEO metadata helper functions (generateMetadata, getPageMetadata) |
| `email.js` | Nodemailer configuration & email sending function |
| `email-template.js` | HTML email templates for contact/inquiry forms |
| `validations.js` | Form validation functions (email, phone, required fields) |
| `utils.js` | General utilities (format phone, format date, etc.) |

---

### **`/src/styles` Directory**

**Purpose:** Additional CSS files if needed (most styling via Tailwind).

| File | Purpose |
|------|---------|
| `components.css` | Component-specific styles (if not using Tailwind classes) |

---

## 🎯 Key Architecture Decisions

1. **App Router Structure:** All routes in `/src/app` using Next.js 14 App Router conventions
2. **Component Organization:** Components grouped by feature/type for maintainability
3. **Static Data:** All content data in `/src/data` for easy updates
4. **SEO:** Per-page metadata + dynamic sitemap + robots.txt
5. **Layouts:** Two layout systems (PrimaryLayout & BannerLayout) for design flexibility
6. **Floating UI:** Separate floating components for WhatsApp & scroll-to-top
7. **Email:** Serverless API route for contact form (Nodemailer)
8. **Image Optimization:** All images via `next/image` from `/public` directory

---

## 📝 Naming Conventions

- **Files:** PascalCase for components (`ProductCard.jsx`), camelCase for utilities (`meta.js`)
- **Folders:** kebab-case for routes (`contact-us/`), camelCase for components (`productCard/`)
- **Components:** PascalCase (`Button.jsx`, `Header.jsx`)
- **Data files:** camelCase (`products.js`, `company-info.js`)
- **Routes:** kebab-case in URLs (`/contact-us`, `/our-strength`)

---

## ✅ Next Steps

1. Initialize Next.js 14 project with App Router
2. Install dependencies (Tailwind, React Icons, Nodemailer)
3. Create folder structure as defined above
4. Set up Tailwind configuration
5. Create root layout with Header & Footer
6. Build components starting with common ones (Button, SectionTitle)
7. Create data files with content
8. Build pages one by one
9. Implement SEO metadata per page
10. Set up email functionality
11. Add floating UI components
12. Test static export (`next build` + `next export`)


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

