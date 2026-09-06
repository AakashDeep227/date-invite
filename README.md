# Date Invite ❤️

A playful multi-page date-invite website built with React + Vite and deployable for free on GitHub Pages.

## 1. Run locally

```bash
npm install
npm run dev
```

Open the localhost URL Vite prints in the terminal.

## 2. Create the GitHub repository

Create a repository named **date-invite** (or rename `base` in `vite.config.js` to match your repository name).

Then push this project to the `main` branch.

## 3. Enable GitHub Pages

In the repository:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

The included `.github/workflows/deploy.yml` will build and deploy automatically whenever you push to `main`.

## 4. Your URL

For a repository called `date-invite`, the site will be:

`https://YOUR_GITHUB_USERNAME.github.io/date-invite/`

The app uses `HashRouter`, so client-side routes work correctly on static GitHub Pages hosting.
