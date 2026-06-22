# Yelden Digital Marketing Ltd Website

A professional Next.js + Tailwind CSS website for Yelden Digital Marketing Ltd.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Free deployment on Vercel

## Pages

- Home
- About
- Services
- Industries
- Portfolio
- Contact

## How to run locally

1. Install Node.js LTS from https://nodejs.org
2. Open this folder in VS Code.
3. Open Terminal in VS Code.
4. Run:

```bash
npm install
npm run dev
```

5. Open:

```bash
http://localhost:3000
```

## Images

Image folders are already created:

```txt
public/images/home
public/images/portfolio
public/images/services
public/images/about
```

Put images there.

Then open:

```txt
data/images.ts
```

Add paths like this:

```ts
export const portfolioImages = [
  "/images/portfolio/project-1.jpg",
  "/images/portfolio/project-2.png",
];
```

Supported formats:

```txt
jpg, jpeg, png, webp, avif, svg, gif
```

Note: A deployed website cannot automatically scan a folder by itself. This project uses a clean data file so the image paths are easy to maintain.

## Contact Form

The form sends to:

```txt
ali@yeldendigital.co.uk
```

It uses FormSubmit.

Important:
The first time you test the form, FormSubmit will send an activation email to ali@yeldendigital.co.uk. Open that email and confirm it.

## Deploy free on Vercel

1. Create a GitHub account if you do not have one.
2. Create a new GitHub repository.
3. Upload this project to GitHub.
4. Go to https://vercel.com
5. Sign in with GitHub.
6. Click Add New Project.
7. Select this repository.
8. Keep default settings.
9. Click Deploy.

## Connect GoDaddy domain to Vercel

1. In Vercel, open the project.
2. Go to Settings > Domains.
3. Add:

```txt
yeldendigital.co.uk
www.yeldendigital.co.uk
```

4. Vercel will show DNS records.
5. Open GoDaddy > My Products > Domains > DNS.
6. Add the DNS records Vercel gives you.
7. Wait 10 minutes to 24 hours.

## Recommended DNS usually looks like this

Vercel may ask for:

```txt
A record
Host: @
Value: 76.76.21.21

CNAME
Host: www
Value: cname.vercel-dns.com
```

Always use the latest values shown in Vercel.

## Cost

- Website builder: £0
- Hosting: £0
- SSL: £0
- Domain: whatever GoDaddy charges for the domain
