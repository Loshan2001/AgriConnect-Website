# AgriConnect — Research Website

AI-Based Integrated Onion Crop Monitoring System  
**SLIIT Research Project 2026**

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

This generates a static export in the `out/` folder, ready to deploy to GitHub Pages.

### Deploy to GitHub Pages

1. Push the project to a GitHub repository
2. Run `npm run build` — this creates the `out/` folder
3. In your repo settings → Pages → set source to **GitHub Actions** or upload the `out/` folder contents to the `gh-pages` branch

Or use this GitHub Actions workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Customisation

### Update team member names
Edit `/components/Team.tsx` — find the `team` array and replace the `name`, `initials`, and `role` fields.

### Update supervisor name
In the same file, update the `supervisor` object.

### Link real documents
In `/components/Documents.tsx`, update the `href` field for each document card to point to your actual PDF/PPTX files.

### Change the university name
Search for "SLIIT" across the project to update all references.

## Project Structure

```
agriconnect/
├── app/
│   ├── globals.css       # Global styles + DM Sans font
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page
├── components/
│   ├── Navbar.tsx        # Sticky navigation
│   ├── Hero.tsx          # Hero + stats bar
│   ├── Components.tsx    # 4 AI component cards
│   ├── Documents.tsx     # Document links grid
│   ├── Technology.tsx    # Tech stack + architecture
│   ├── Team.tsx          # Team member cards
│   └── Footer.tsx        # Footer
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Tech Stack
- **Framework**: Next.js 14 (App Router, static export)
- **Styling**: Tailwind CSS + inline styles
- **Font**: DM Sans (Google Fonts)
- **Deployment**: GitHub Pages compatible
