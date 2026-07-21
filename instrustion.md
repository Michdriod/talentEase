# CLAUDE.md — TalentEase HR Services Website

## READ THIS FIRST

You are building a complete, production-ready marketing website for an HR
consulting firm. This file is the single source of truth. All written copy is
provided below — use it verbatim. Do not invent, rewrite, or "improve" copy.
Items marked TODO are client assets coming later; build with clean,
clearly-labeled placeholders that can be swapped in without refactoring.

---

## 1. PROJECT CONTEXT

**Business:** TalentEase HR Services
**Tagline:** People. Growth. Impact.
**Location:** Oyadiran Estate, Sabo – Yaba, Lagos, Nigeria
**What they do:** HR consulting for startups, small and medium businesses that
need professional HR support but cannot afford an in-house HR department.
**Website goal:** Establish credibility, explain services clearly, and convert
visitors into leads (contact form, phone, WhatsApp).
**Primary audience:** Founders, business owners, and operations leads at
growing Nigerian businesses.
**Brand tone:** Professional, warm, confident, people-centered.

---

## 2. TECH DECISIONS (final — do not change)

- Next.js (App Router) + TypeScript, configured for fully static export
  (hostable anywhere: Vercel, Netlify, cPanel).
- Tailwind CSS for all styling. No UI component library.
- lucide-react for icons.
- Google Fonts via Next font optimization: Sora (headings), Inter (body).
- Contact form via Web3Forms (static-friendly). Honeypot spam field, inline
  success/error states, mailto fallback on failure.
- No backend, no database, no CMS. All content lives in typed data files
  under `/data` so the client can edit content without touching components.
- Careers applications handled by an external Google Form — the site only
  links out to it.
- Videos are YouTube embeds (youtube-nocookie domain, lazy-loaded, 16:9).

---

## 3. DESIGN SYSTEM

### Brand colors (from client brand materials — use exactly)
| Token | Hex | Usage |
|---|---|---|
| Navy | `#0C2D4D` | Headings, dark sections, footer, primary text |
| Navy Dark | `#082138` | Footer base, deep contrast |
| Green | `#0E7A4A` | CTAs, accents, icons, stats, highlights |
| Green Dark | `#0A5C39` | CTA hover |
| Light | `#F6F9F7` | Alternating section backgrounds |
| White | `#FFFFFF` | Default background |

### Design rules
- Look and feel follows the client's print profile: white base, alternating
  light-tint and dark-navy sections, green as the action color.
- The brand uses diagonal/geometric shapes (navy + green diagonal bands,
  rounded diamond/rectangle photo frames). Echo these subtly in the hero and
  CTA sections using CSS shapes/clip-path — keep understated and clean.
- Buttons: solid green primary, navy outline secondary, rounded corners.
- Cards: white, rounded-2xl, subtle border, soft shadow. Service title bars
  may use the navy pill style seen in the profile.
- Max content width ~1280px, centered, generous whitespace.
- Mobile-first, fully responsive 320px+. Hamburger nav below md breakpoint.
- One h1 per page, semantic HTML, WCAG AA contrast.

---

## 4. ARCHITECTURE

- App Router, one route per page (Section 5).
- Shared layout: sticky Header, Footer, floating WhatsApp button on all pages.
- `/data` folder with typed files: site, services, process, team, clients,
  jobs, testimonials, videos. Components read from these — never hardcode
  copy in components. All content for these files is in Section 6.
- Reusable components: Header, MobileNav, Footer, WhatsAppButton, Button,
  SectionHeading, ServiceCard, ServiceDetail, ProcessSteps, StatCard,
  CTABanner, TeamCard, LogoGrid, JobCard, VideoEmbed, ContactForm,
  ContactInfoCard.
- Images in `/public`, descriptive names, alt text everywhere.
- Contact page reads an optional `?service=` query param to pre-select the
  service dropdown.

---

## 5. SITE MAP

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services (six services, anchor id per service) |
| `/careers` | Careers (vacancies + external Google Form link) |
| `/insights` | Insights (YouTube videos + articles placeholder) |
| `/contact` | Contact (form, details, map) |

---

## 6. FULL CONTENT (verbatim)

### 6.1 Site-wide (data: site)
- Name: TalentEase HR Services
- Tagline: People. Growth. Impact.
- Phone / WhatsApp: +234 810 041 9997
- Email: talenteasehr@gmail.com
- Address: Oyadiran Estate, Sabo – Yaba, Lagos
- Hours: Monday – Friday: 8:00am – 5:00pm
- LinkedIn: https://www.linkedin.com/company/talentease-hr-services/
- Instagram: https://www.instagram.com/talenteasehr
- Careers Google Form URL: TODO
- Web3Forms access key: TODO

### 6.2 Services (data: services) — six, in this order

1. **Outsourced HR Management** — FLAGSHIP
   - Short: "End-to-end HR support at an affordable cost."
   - Full: "We provide end-to-end HR support, from recruitment and onboarding
     to employee management, HR policies, performance management, and
     compliance — giving businesses access to expert HR services at an
     affordable cost."

2. **Recruitment & Talent Acquisition**
   - Short: "Find and hire the right people for every role."
   - Full: "At TalentEase HR, we solve this problem through a strategic
     recruitment approach focused on sourcing, assessing, and selecting
     competent professionals for every role. Our services include job
     description development, candidate sourcing, screening, interviews,
     reference checks, and hiring recommendations. Through strategic talent
     acquisition, skill assessment, and cultural fit analysis, we help
     businesses build high-performing teams that drive growth and results."

3. **Employee Leasing (Outsourcing)**
   - Short: "Skilled professionals without the in-house burden."
   - Full: "We provide skilled outsourced professionals across HR, Finance,
     Administration, Project Management, and other support functions, using
     efficient resource management and process optimization to boost
     operational capacity and help businesses focus on core growth. Our
     outsourcing model helps businesses optimize operations, reduce overhead
     costs, improve productivity, and access skilled professionals without
     the burden of full in-house management."

4. **Fractional HR (Retainership)**
   - Short: "Senior-level HR expertise on retainer."
   - Full: "Our fractional HR Services give businesses access to senior-level
     HR expertise without the financial commitment of employing a full time
     HR manager. We support organizations in attracting and retaining top
     talent, developing HR policies and procedures, ensuring compliance with
     employment regulations, managing employee relations, implementing
     performance management system and providing strategic HR advisory
     services."

5. **Learning & Development**
   - Short: "Training that improves performance and productivity."
   - Full: "We help organizations improve employee performance and workplace
     productivity through impactful learning and development solutions. Our
     training solutions are designed to equip employees and leaders with the
     practical skills, knowledge, and competencies required for improved
     performance and professional growth. We provide staff training,
     leadership development programs, employee engagement workshops and
     performance improvement sessions tailored to organizational needs and
     business objectives."

6. **HR Strategy & Advisory**
   - Short: "Align your people practices with business goals."
   - Full: "At Talent Ease HR, we help organizations build stronger people
     systems through strategic HR advisory and workforce solutions. Our HR
     strategy and advisory services provide practical guidance to help
     businesses align their people practices with organizational goals. We
     support clients with HR structure development, workforce planning,
     performance management systems, policy development, employee engagement
     strategies, and organizational growth support to improve overall
     business performance and workplace effectiveness."

### 6.3 Process (data: process) — four steps
1. "Understand Your Needs" — "We start by learning about your business,
   challenges, and HR requirements to understand how we can best support you."
2. "Develop a Tailored HR Solution" — "We create a customized HR approach
   that aligns with your business goals and workforce needs."
3. "Implement HR Services" — "We provide the required support, from talent
   sourcing and onboarding to employee management, HR policies, and other
   people-related solutions."
4. "Provide Ongoing Support" — "We continue to work with you as a trusted HR
   partner, ensuring your HR processes remain effective and your team
   continues to grow."

### 6.4 Client portfolio (data: clients) — logos TODO, names confirmed
- Proud To Be Me
- M+Azeezco International Ltd
- ATIS Group Limited
- Pristine Cleaning and Maintenance Services
- Waveswift Media
- Myckel Couture
- Creative Team Media

Portfolio intro text (verbatim): "We are proud to have earned the trust of
organizations across various sectors by consistently delivering professional,
reliable and results-driven services."

### 6.5 Global elements

**Header:** logo left (TODO image; interim text logo — "Talent" navy, "Ease"
green, "HR" navy) · nav: Home, About, Services, Careers, Insights, Contact ·
CTA button "Book a Consultation" → /contact · sticky, shadow on scroll ·
mobile hamburger.

**Footer (dark navy):** 4 columns — (1) logo + tagline + short description;
(2) Quick Links (all pages); (3) six service names → /services#anchor;
(4) phone, email, address, hours, LinkedIn + Instagram icons. Bottom bar:
"© {current year} TalentEase HR Services. All rights reserved."

**Floating WhatsApp button:** fixed bottom-right green circle → WhatsApp chat
with +2348100419997.

### 6.6 Home page — sections in order

1. **Hero** — eyebrow pill "People. Growth. Impact." · H1: "Build Stronger
   Teams. Grow With Confidence." · sub: "TalentEase HR gives startups and
   growing businesses access to professional, affordable HR support — from
   recruitment to compliance — without the cost of an in-house HR
   department." · buttons: "Book a Free Consultation" (/contact), "Explore
   Our Services" (/services) · hero image placeholder right (TODO) with
   subtle diagonal brand shapes in background.
2. **Client trust bar** — "Trusted by organizations across sectors" + logo
   grid from clients data (grayscale, color on hover).
3. **Who We Are teaser** — H2 "Who We Are" · text: "We are a people-focused
   HR consulting firm committed to helping businesses build stronger, more
   efficient, and sustainable workplaces. Our team operates as an extension
   of your leadership because we believe that every organisation thrives when
   its people and processes work in harmony." · link "Learn more about us →"
   (/about).
4. **The HR Gap (dark navy section)** — H2 "Why HR Can't Be an Afterthought"
   · intro bullets:
   - "Research consistently identifies poor management, weak leadership, and
     lack of operational structure as major contributors to small business
     failure."
   - "And this is true because startups struggle with unclear HR processes,
     talent gaps, weak organizational structure, and low employee engagement,
     which can and will impact productivity and scalability."
   · four large green stat cards:
   90% — Poor Management / Leadership
   63% — Weak Workforce Structure
   52% — Employee Turnover & Retention Issues
   19% — Poor Onboarding / Integration
5. **Services preview** — H2 "Our Premium Services" · subtitle: "Our approach
   is simple: delivering tailored HR solutions that prioritise your business,
   discover talents, foster people growth, create lasting impact." · grid of
   six service cards (short text); flagship card gets "Flagship" badge ·
   cards link to /services#{anchor}.
6. **Process** — H2 "How We Work With You" · four steps from 6.3.
7. **Why Choose Us** — H2 "The TalentEase Difference" · lead: "Our commitment
   to delivering professional, affordable, and personalized HR solutions
   gives your business access to expert HR support — without the cost of an
   in-house HR department." · four cards: Affordable expertise · Tailored,
   people-centered solutions · An extension of your leadership · Built for
   growing businesses.
8. **Testimonials** — render ONLY if testimonials data is non-empty
   (currently empty → hidden).
9. **CTA banner (green)** — H2 "Ready to build a stronger team?" · sub:
   "Let's fix it. Together." · button "Get in Touch" → /contact.

### 6.7 About page
- Hero strip: H1 "Who We Are" + tagline.
- **Our Story (verbatim):** "TalentEase HR Services was born from a simple
  belief: every business, regardless of its size, deserves access to
  exceptional HR support. We saw many growing organizations struggling with
  hiring, managing people, and building strong workplace cultures — not
  because they lacked ambition, but because they couldn't justify the cost of
  a full-fledged HR department. We founded TalentEase to bridge that gap by
  making professional HR services accessible, practical, and affordable. From
  finding the right talent to supporting employees throughout their journey,
  we're committed to helping businesses build thriving teams while they focus
  on growing with confidence."
- **Mission (highlighted card):** "To empower businesses with accessible,
  affordable, and people-centered HR solutions that help them build stronger
  teams and achieve lasting growth."
- **What We Do (verbatim):** "We help startups and growing businesses build
  effective people structures and employee engagement systems that support
  business growth and operational efficiency. Our talent strategy and
  engagement solutions are designed to help businesses develop the right
  workforce structure, improve employee performance, and build a strong
  workplace culture from the early stages of growth. By simplifying people
  management processes, we enable businesses to focus on growth while
  maintaining a productive and compliant workforce."
- **Who We Serve** — three cards: Startups · Small Businesses · Medium
  Businesses.
- **Problems We Solve** — three cards:
  1. "Lack of Dedicated HR Support" — "We help businesses that need
     professional HR expertise but cannot afford the cost of hiring a
     full-time HR manager or setting up an internal HR department."
  2. "Challenges with Hiring and Managing Talent" — "We support organizations
     in finding the right candidates, improving employee management, and
     creating effective people processes that help teams perform better."
  3. "Limited HR Structure and Processes" — "We help businesses establish
     practical HR systems, policies, and practices that improve efficiency,
     employee experience, and long-term growth."
- **Our Portfolio** — reuse portfolio intro (6.4) + logo grid.
- **Meet the Team** — grid of four team cards (photo, name, role, bio — all
  TODO placeholders).
- CTA banner (reuse).

### 6.8 Services page
- H1 "Our Premium Services" · intro: "From finding the right talent to
  supporting employees throughout their journey, our services are designed to
  help your business build a thriving team — while you focus on growing with
  confidence."
- Flagship banner first: Outsourced HR Management in a distinct dark-navy
  feature block, "Our Flagship Service" badge, full description, CTA button.
- Detailed block per remaining service: icon, title, full description (6.2
  verbatim). Each block has stable anchor id and "Request this service"
  button → /contact?service={name}.
- "How We Work" process section (reuse) + CTA banner (reuse).

### 6.9 Careers page
- H1 "Careers" · intro: "We connect talented professionals with growing
  businesses. Browse current openings below — or join our talent network to
  be considered for future roles."
- Vacancies from jobs data (empty → empty state): "There are no open roles
  right now, but we're always happy to meet great talent. Send your CV to
  talenteasehr@gmail.com or join our talent network below."
- Persistent card: "Apply / Join Our Talent Network" → button opens Google
  Form URL (TODO) in new tab. Note: "You'll be redirected to a short Google
  Form where you can apply for roles and attach your CV."

### 6.10 Insights page
- H1 "Insights & Resources" · sub: "Practical HR knowledge for growing
  businesses — from employee retention to building strong workplace
  cultures."
- Videos: responsive grid of YouTube embeds from videos data (empty →
  "Videos coming soon.").
- Articles: three static placeholder cards labeled "Coming soon":
  1. "Why Employees Quiet Quit — And How to Fix It"
  2. "The True Cost of Hiring the Wrong Person"
  3. "5 HR Policies Every Growing Business Needs"

### 6.11 Contact page
- H1 "Contact Us" · sub: "Tell us about your HR needs — we'll get back to you
  within one business day."
- Two columns:
  - Form (left): Name*, Email*, Phone, Company, Service of interest
    (dropdown: six services + "Other"; pre-select via ?service= param),
    Message*. Honeypot. Success: "Thank you! We'll be in touch shortly."
    Error: mailto fallback.
  - Info cards (right): Phone (tel: link), Email (mailto: link), Address,
    Hours, LinkedIn + Instagram icons.
- Below: keyless Google Maps embed for the address.

---

## 7. SEO, ACCESSIBILITY, PERFORMANCE

- Root metadata: default title "TalentEase HR Services | HR Consulting for
  Growing Businesses"; template "%s | TalentEase HR Services"; description:
  "TalentEase HR Services provides accessible, affordable, people-centered HR
  solutions for startups and growing businesses — recruitment, employee
  leasing, fractional HR, learning & development, and HR advisory."
- Unique metadata per page; sitemap + robots routes (static-export
  compatible); OG image placeholder /public/og-image.jpg (TODO).
- Semantic landmarks, labeled form fields, visible focus states, alt text.
- Lazy-load iframes and below-fold images; reserve image dimensions.
- Targets: Lighthouse Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.

---

## 8. BUILD PHASES — in order, verify each before continuing

1. Foundation: scaffold, fonts, Tailwind brand tokens, static export config,
   Header, Footer, WhatsAppButton, primitives, full /data layer from
   Section 6.
2. Home page: all nine sections from 6.6, responsive.
3. About + Services: 6.7 and 6.8; anchors work from home cards.
4. Careers + Insights + Contact: 6.9–6.11, empty states, working form.
5. Polish: metadata, sitemap, robots, favicon placeholder, Lighthouse pass,
   cross-browser + mobile check, final static export.

---

## 9. DEFINITION OF DONE

- All six routes render, linked from header and footer.
- All copy matches this document verbatim.
- Responsive 320px → 1440px, working mobile nav.
- Contact form submits via Web3Forms with success/error states; ?service=
  pre-selection works.
- Careers apply button opens Google Form in new tab.
- WhatsApp button opens chat with +2348100419997.
- No TypeScript errors, no console errors, clean static export.
- Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.

---

## 10. CLIENT ASSETS PENDING (TODO — placeholders, never block progress)

1. Logo image + favicon (exists in brand profile — to be extracted)
2. Four team member photos, names, roles, bios
3. Seven client logo files (names confirmed in 6.4 — extract from profile)
4. Google Form URL for job applications
5. Web3Forms access key
6. YouTube video IDs
7. Two to three client testimonials
8. Hero / About photography (brand profile images may be reused)
9. OG share image (1200×630)