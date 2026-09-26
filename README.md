# Lovi Labs Website

![Lovi Labs](public/assets/lovilabs-logo.png)

**Building digital experiences through Web, Marketing, Design & AI**

This repository contains the Lovi Labs company website. It is a custom Next.js website with a Sanity content management system, a Resend-powered contact form, GitHub Actions checks, and Vercel deployment.

The visual design and page structure live in this repository. Team members and portfolio projects are managed through Sanity, so normal content updates do not require code changes.

## Quick Links

- Live site: configured in the Vercel project
- [Sanity Studio](https://lovilabs.sanity.studio)
- [GitHub repository](https://github.com/reshika1219/lovilabs)
- [Sanity project](https://www.sanity.io/)
- [Resend](https://resend.com/)

## Technology

- Next.js 16 App Router
- React 19
- JavaScript
- Custom CSS design system
- GSAP and CSS transitions
- Sanity CMS for Team and Portfolio content
- Resend for contact email delivery
- Vercel for hosting and deployments
- GitHub Actions for continuous integration
- Inter and Outfit through `next/font`

## Requirements

Install these before working on the project:

- Node.js 22 or newer
- npm 10 or newer
- Git
- A Sanity account for content management
- A Resend account if contact form delivery is needed

Check the local versions:

```bash
node --version
npm --version
git --version
```

## Local Setup

Clone the repository and enter the project directory:

```bash
git clone https://github.com/reshika1219/lovilabs.git
cd lovilabs
```

Install the lockfile-defined dependencies:

```bash
npm ci
```

Create the local environment file. This template is committed to GitHub specifically so every contributor can copy it:

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in the values described below. Then start the website:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Never commit `.env.local`. It is ignored by Git. `.env.example` contains no private credentials and is intentionally tracked.

## Commands

| Command | Purpose |
|---|---|
| `npm ci` | Install the exact versions in `package-lock.json` |
| `npm run dev` | Start the Next.js development server on port 3000 |
| `npm run build` | Create and validate a production build |
| `npm run start` | Serve the production build locally |
| `npm run studio` | Start Sanity Studio locally on port 3333 |
| `npm run studio:deploy` | Deploy Sanity Studio to `lovilabs.sanity.studio` |

Run `npm run build` before opening a pull request or deploying manually.

## Environment Variables

Copy `.env.example` to `.env.local`. The same values must be added to Vercel under the appropriate Production and Preview environments.

| Variable | Required | Used by | Description |
|---|---:|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes | Website | Public Sanity project ID: `oyy58ymy` |
| `NEXT_PUBLIC_SANITY_DATASET` | Yes | Website | Sanity dataset, normally `production` |
| `NEXT_PUBLIC_SITE_URL` | Yes in production | Website SEO | Public site origin, for example `https://www.example.com` |
| `SANITY_STUDIO_PROJECT_ID` | Yes for Studio | Sanity Studio | Project ID used by local Studio commands |
| `SANITY_STUDIO_DATASET` | Yes for Studio | Sanity Studio | Dataset edited by Studio, normally `production` |
| `RESEND_API_KEY` | Yes for email | Contact API | Private Resend API key; never expose or commit it |
| `CONTACT_TO_EMAIL` | Yes for email | Contact API | Inbox that receives website enquiries |
| `CONTACT_FROM_EMAIL` | Yes for email | Contact API | Verified sender, for example `Lovi Labs <hello@yourdomain.com>` |

The two `NEXT_PUBLIC_*` values are safe to use in browser builds because they identify the Sanity project but do not grant write access. The Resend key is private and must only exist in local ignored files or Vercel environment variables.

Set `NEXT_PUBLIC_SITE_URL` to the real production origin in Vercel. It is used to generate canonical metadata, `robots.txt`, and `sitemap.xml`.

## Sanity Content Management

Sanity is the content backend. It provides the editing interface, stores images, and delivers published content to the Next.js website.

### Open the editor

Use the deployed editor for normal content work:

1. Open [lovilabs.sanity.studio](https://lovilabs.sanity.studio).
2. Sign in with an account that has access to the Lovi Labs Sanity project.
3. Choose **Team Member** or **Project**.
4. Create or edit a record.
5. Enable **Show on website**.
6. Set the display order.
7. Click **Publish**.
8. Refresh `/team` or `/portfolio` on the website.

The Team page supports a name, role, initials fallback, profile image, LinkedIn URL, display order, and visibility. The Portfolio page supports a project name, category, summary, project URL, image, display order, and visibility.

Only published records marked visible are displayed. The Team and Portfolio routes are dynamic, so new published records do not require a new code change.

### Run Studio locally

For schema or Studio development:

```bash
cp .env.example .env.local
npm run studio
```

Open [http://localhost:3333](http://localhost:3333). To authenticate the Sanity CLI for deployment:

```bash
npx sanity login
npm run studio:deploy
```

The Studio configuration is in `sanity.config.js`. Schemas are in `sanity/schemaTypes/`.

## Resend Contact Form

The contact form submits to the Next.js route at `/api/contact`. The server validates the fields, rejects the hidden honeypot field when it is filled, and sends the message through Resend.

### Configure Resend

1. Create or sign in to a [Resend account](https://resend.com/).
2. Create an API key.
3. Verify the Lovi Labs sending domain in Resend before production use.
4. Set `CONTACT_FROM_EMAIL` to an address on that verified domain.
5. Set `CONTACT_TO_EMAIL` to the inbox that should receive enquiries.
6. Add all three Resend variables to Vercel Production and Preview environments.
7. Redeploy Vercel after changing environment variables.

For temporary testing, Resend may allow its test sender, but production email should use a verified company domain. Do not place a Resend API key in GitHub, browser code, README files, or screenshots.

The form requires a name, valid email address, selected service, and message of at least 10 characters. It returns a clear validation message when a field is invalid.

## Deployment

The GitHub repository is connected to Vercel. A push to `main` starts a production deployment. Pull requests and other branches should use Preview deployments.

### Vercel setup

In Vercel, open **Project Settings -> Environment Variables** and add:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=oyy58ymy
NEXT_PUBLIC_SANITY_DATASET=production
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=lovilabsco@gmail.com
CONTACT_FROM_EMAIL=Lovi Labs <hello@your-verified-domain.com>
```

Apply the variables to Production and Preview as appropriate. After adding or changing variables, redeploy the affected environment. Local `.env.local` values are not automatically copied to Vercel.

### GitHub Actions

The workflow at `.github/workflows/ci.yml` runs on pushes to `main` and pull requests targeting `main`. It:

1. Checks out the repository.
2. Installs Node.js 22.
3. Runs `npm ci`.
4. Runs `npm run build`.

Open the repository's **Actions** tab to check the result. A failed CI build should be fixed before merging or deploying.

## Project Structure

```text
src/
├── app/
│   ├── about/              About page
│   ├── api/contact/        Server-side contact endpoint
│   ├── contact/            Contact page and form
│   ├── portfolio/          CMS-backed portfolio page
│   ├── services/           Services page
│   ├── team/               CMS-backed team page
│   ├── globals.css         Global design system
│   ├── home.css            Home page styles
│   ├── layout.js           Site shell and metadata
│   └── page.js             Home page
├── components/             Shared React components
├── hooks/                  Client-side interaction hooks
└── lib/
	├── content.js          Sanity queries and fallbacks
	└── sanity.js           Sanity client and image builder
sanity/
└── schemaTypes/            Sanity Team Member and Project schemas
public/assets/              Logos and visual assets
.github/workflows/ci.yml    GitHub Actions build check
sanity.config.js            Sanity Studio configuration
sanity.cli.js               Sanity CLI configuration
next.config.mjs             Security headers and Next configuration
```

## Routes

| Page | Route | Content source |
|---|---|---|
| Home | `/` | Code-managed layout and service preview |
| About | `/about` | Code-managed company content |
| Services | `/services` | Code-managed service catalogue and process |
| Portfolio | `/portfolio` | Sanity Projects, with a Coming Soon fallback |
| Team | `/team` | Sanity Team Members |
| Contact | `/contact` | Code-managed contact details and API-backed form |

The design system, page structure, and CSS remain code-managed. Sanity is intentionally limited to content that the company needs to update regularly.

## Security Rules

- Never commit `.env.local`, API keys, or private credentials.
- Use Vercel environment variables for production secrets.
- Use a verified Resend sender domain in production.
- Give Sanity editors only the access they need.
- Do not expose a Sanity write token in the website.
- Review contact submissions and Resend delivery logs if email delivery fails.
- Keep dependencies updated and investigate high-severity production audit findings.
- Run `npm run build` before publishing significant changes.

## Troubleshooting

### `npm: command not found`

Install Node.js 22 or newer, then restart the VS Code terminal. Confirm with `node --version` and `npm --version`.

### Sanity Studio asks you to log in

Run:

```bash
npx sanity login
```

Then retry `npm run studio` or `npm run studio:deploy`.

### Published Sanity content is not visible

Confirm that the record is published, its visibility toggle is enabled, the correct project and `production` dataset are configured, and that you are checking the matching route: Team content appears on `/team` and Project content appears on `/portfolio`.

### Contact form says the service is not configured

Confirm that `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` are present in the Vercel environment used by the deployment. Redeploy after adding them.

### Contact email is rejected by Resend

Verify the sender domain in Resend and make sure `CONTACT_FROM_EMAIL` uses that verified domain. Check the Resend logs for the exact delivery error.

### Vercel deployment fails

Open the deployment build logs, reproduce the failure locally with `npm ci && npm run build`, and check the GitHub Actions result for the same commit.

## Launch Checklist

- [ ] Real Team Member records and profile images published
- [ ] Real Project records and images published
- [ ] Contact recipient and verified sender configured
- [ ] Resend API key added only to Vercel
- [ ] Production and Preview environment variables configured
- [ ] GitHub Actions build is green
- [ ] Latest Vercel deployment is Ready
- [ ] `/`, `/team`, `/portfolio`, and `/contact` tested on the deployed URL
- [ ] Contact form test email received
- [ ] Custom domain connected after the deployed URL is approved

## Company Links

- [TikTok](https://www.tiktok.com/@lovi_labs)
- [Facebook](https://web.facebook.com/profile.php?id=61594162310188)
- [LinkedIn](https://www.linkedin.com/company/lovi-labs)
- [WhatsApp](https://wa.me/94717995000)
- Email: lovilabsco@gmail.com

Copyright 2026 Lovi Labs. All rights reserved.
