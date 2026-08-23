# Jiaheng Xiao — Academic Website

A proposal-led academic website focused on AgenticCity Computing, intelligent mobility, and human behaviour modelling.

## Edit the content

Most text, links, publications, research themes, education, and experience live in `data/site.ts`. Page sections are separated into files in `components/`. Global visual styles live in `app/globals.css`.

## Preview locally

Use Node.js 22 or newer, then run `npm install` and `npm run dev`. Open the local URL shown in the terminal.

## Publish with GitHub Pages

Create a GitHub repository, push this folder to the `main` branch, then open **Settings → Pages** and set **Source** to **GitHub Actions**. The included workflow will build and publish the site automatically.

Before publishing, replace any placeholder links in `data/site.ts` and review which PDFs you want to make public in `public/files/`.
