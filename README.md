# Website Boilerplate

A modern, database-free boilerplate for building fast business websites with **Next.js** and **Tailwind CSS**, auto-deployed to **Infomaniak** via GitHub Actions.

> **This is a GitHub Template Repository.** Click the green **"Use this template"** button above to create your own project from it.

---

## What's Inside

| Feature       | Details                                               |
| ------------- | ----------------------------------------------------- |
| **Framework** | Next.js (App Router) with static export               |
| **Styling**   | Tailwind CSS v4 with utility-first approach           |
| **Fonts**     | Geist Sans & Geist Mono via `next/font`               |
| **Deploy**    | GitHub Actions → Infomaniak via SSH (on version tags) |
| **SEO**       | Pre-rendered HTML, meta tags, semantic markup         |
| **Dark Mode** | Automatic via `prefers-color-scheme`                  |
| **Database**  | None — fully static, zero infrastructure              |

---

## Quick Start

### 1. Create Your Project

Click the green **"Use this template"** button at the top of this repository, then:

- Name your new repository
- Choose public or private
- Click **"Create repository from template"**

### 2. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
cp .env.example .env.local    # configure your site URL
npm install
```

### 3. Start Developing

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Customize Your Site

### Set Your Site URL

Copy `.env.example` to `.env.local` and replace the placeholder URL:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This is used for canonical URLs, OpenGraph tags, sitemap, and robots.txt.

### Swap Metadata

Edit **`app/layout.js`** and replace the placeholder values:

```js
export const metadata = {
  title: 'Your Company — Your Tagline',
  description: 'Your company description for search engines.',
};
```

### Edit Content

| What          | Where                        |
| ------------- | ---------------------------- |
| Hero section  | `app/components/Hero.js`     |
| Features grid | `app/components/Features.js` |
| Contact form  | `app/components/Contact.js`  |
| Navigation    | `app/components/Header.js`   |
| Footer        | `app/components/Footer.js`   |
| 404 page      | `app/not-found.js`           |
| Sitemap       | `app/sitemap.js`             |
| Robots        | `app/robots.js`              |
| Global styles | `app/globals.css`            |

### Add Pages

Create a new route by adding a directory with a `page.js`:

```
app/
├── about/
│   └── page.js      ← /about
├── services/
│   └── page.js      ← /services
└── page.js           ← / (home)
```

Remember to add new pages to `app/sitemap.js` for SEO.

---

## Deployment Setup (Infomaniak)

The project includes a GitHub Actions workflow that **automatically builds and deploys** your site when you push a version tag.

### 1. Add Secrets to GitHub

Go to your repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**, and add:

| Secret Name       | Value                                                                    |
| ----------------- | ------------------------------------------------------------------------ |
| `SSH_PRIVATE_KEY` | Your private SSH key (the full content of `~/.ssh/id_rsa` or equivalent) |
| `SERVER_HOST`     | Your Infomaniak server hostname (e.g., `ssh.example.com`)                |
| `FTP_USER`        | Your Infomaniak SSH/FTP username                                         |

> **Tip:** Generate a dedicated SSH key pair for deployment:
>
> ```bash
> ssh-keygen -t ed25519 -C "deploy@github-actions" -f ~/.ssh/deploy_key
> ```
>
> Add the **public key** to your Infomaniak hosting panel, and paste the **private key** as the `SSH_PRIVATE_KEY` secret.

### 2. Deploy

```bash
# Tag a release
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions will:

1. Install dependencies (`npm ci`)
2. Lint the code (`npm run lint`)
3. Build the static site (`npm run build`)
4. Deploy the `out/` folder to your Infomaniak server via SSH

---

## Available Scripts

| Command         | Description                                            |
| --------------- | ------------------------------------------------------ |
| `npm run dev`   | Start the development server on port 3000              |
| `npm run build` | Build the static export to `out/`                      |
| `npm run lint`  | Run ESLint on the codebase                             |
| `npm start`     | Start a production server (not used for static export) |

---

## Project Structure

```
├── .editorconfig             # Editor formatting rules
├── .env.example              # Environment variables template
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD pipeline
├── .nvmrc                    # Node.js version pin
├── .prettierrc               # Prettier code formatting
├── app/
│   ├── components/
│   │   ├── Header.js         # Navigation bar
│   │   ├── Hero.js           # Hero section
│   │   ├── Features.js       # Features grid
│   │   ├── Contact.js        # Contact form
│   │   └── Footer.js         # Site footer
│   ├── globals.css           # Tailwind + custom styles
│   ├── layout.js             # Root layout & metadata
│   ├── not-found.js          # Custom 404 page
│   ├── page.js               # Home page
│   ├── robots.js             # robots.txt generation
│   └── sitemap.js            # sitemap.xml generation
├── public/                   # Static assets
├── AGENTS.md                 # AI agent guidelines
├── CLAUDE.md                 # AI agent guidelines
├── LICENSE                   # MIT license
├── next.config.mjs           # Next.js config (static export)
└── package.json
```

---

## License

This project is licensed under the [MIT License](LICENSE).
