# Lovi Labs — Digital Solutions

![Lovi Labs](public/assets/lovilabs-logo.png)

**Building digital experiences through Web, Marketing, Design & AI**

Lovi Labs is a digital solutions company focused on transforming ideas into impactful digital experiences. We help businesses build and strengthen their digital presence through modern websites, web applications, UI/UX design, social media marketing, and AI-powered solutions.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Vanilla CSS with custom design system
- **Animations**: GSAP-inspired custom hooks + CSS transitions
- **Fonts**: Inter & Outfit (via next/font)
- **Deployment**: Vercel-ready

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## ✏️ Content Management

The website uses Sanity for editable Team and Portfolio content. The frontend keeps its existing layout and styling, while published content is managed through Sanity Studio.

1. Create a Sanity project at [sanity.io](https://www.sanity.io/).
2. Copy `.env.example` to `.env.local` and add the project ID to both project ID variables.
3. Run `npm run studio` to open the editor.
4. Run `npm run dev` in another terminal to view the website.

Use `npm run studio:deploy` when you are ready to host the editor online. Team members are managed under **Team Member** and projects under **Project**. Only records marked **Show on website** are displayed.

## 🗂 Project Structure

```
src/
├── app/            # Pages (Home, About, Services, Portfolio, Team, Contact)
├── components/     # Reusable UI components
└── hooks/          # Custom React hooks
```

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services preview, pillars, CTA |
| About | `/about` | Mission, values, philosophy |
| Services | `/services` | 7 service cards, process steps |
| Portfolio | `/portfolio` | CMS-managed project showcase, with Coming Soon fallback |
| Team | `/team` | CMS-managed team member cards |
| Contact | `/contact` | Contact form, WhatsApp, socials |

## 🎨 Brand Colors

| Color | Hex |
|-------|-----|
| White | `#FFFFFF` |
| Black | `#0A0A0A` |
| Navy | `#003087` |
| Cyan | `#00BFFF` |

## 🔗 Connect With Us

- [TikTok](https://www.tiktok.com/@lovi_labs)
- [Facebook](https://web.facebook.com/profile.php?id=61594162310188)
- [LinkedIn](https://www.linkedin.com/company/lovi-labs)
- [WhatsApp](https://wa.me/94717995000)
- Email: lovilabsco@gmail.com

## 📜 License

© 2026 Lovi Labs. All rights reserved.
