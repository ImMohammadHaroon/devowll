# Devowll

React + Vite + Tailwind CSS website for Devowll.

## Setup

1. Install dependencies.

```bash
npm install
```

2. Start the development server.

```bash
npm run dev
```

## Environment Variables

Create a `.env` file with the following values when using EmailJS and deployment metadata:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_SITE_URL`

## Deployment

Deploy on Vercel using the included `vercel.json` SPA rewrite configuration.

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Add any required environment variables in the Vercel dashboard.
4. Deploy the project.

## Notes

- Compress production images before adding them to `src/assets/images`.
- Run `npm run build` before deployment to verify the production bundle.