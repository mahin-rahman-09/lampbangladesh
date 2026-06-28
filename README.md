# Lamp Bangladesh Website

Static website for Lamp Bangladesh, hosted on GitHub Pages.

## Folder Structure

```
lampbangladesh/
├── index.html
├── about.html
├── offerings.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── logo.png        ← upload your logo here
└── README.md
```

## Logo Setup

1. Name your logo file **`logo.png`**
2. Upload it to **`assets/images/logo.png`**
3. It will automatically appear in the navbar and as the browser favicon on all 4 pages
4. The footer shows a white-filtered version of the same file

> If the logo image fails to load (e.g. wrong filename), the site gracefully falls back to an "L" lettermark so the nav never breaks.

## Deploy to GitHub Pages

1. Create a new repo named **`lampbangladesh`** on GitHub
2. Push all files maintaining the folder structure above
3. Go to **Settings → Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose **`main`** branch, **`/ (root)`** folder → click **Save**
6. Your site will be live at: `https://mahin-rahman-09.github.io/lampbangladesh/`

## Custom Domain (optional)

If you want to point `lampbangladesh.com` to the GitHub Pages site:
1. Add a file named `CNAME` at the root containing just: `lampbangladesh.com`
2. In your domain registrar (wherever lampbangladesh.com is registered), add these DNS records:
   - `A` records pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or a `CNAME` record: `www` → `mahin-rahman-09.github.io`
3. Back in GitHub Pages settings, enter your custom domain and enable **Enforce HTTPS**
