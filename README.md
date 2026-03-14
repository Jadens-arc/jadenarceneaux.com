# [jadenarceneaux.com](https://jadenarceneaux.com)
My blog/personal website. Checkout my projects and read some of my thoughts on tech and the world at large. Feel free to fork the repo and make your own website or contribute to the open source project.

## Technology Stack

- Hugo: Static site generation (deployed to Vercel)
- Express.js: Backend API server (deployed to Vercel)

## Deployment

The repo contains two Vercel projects:

- **Frontend** (`frontend/`): Hugo static site, built and deployed by Vercel on push
- **Backend** (`backend/`): Express.js API server, runs as a Vercel serverless function

### Environment Variables

Set these in the Vercel dashboard for each project. See `.env.example` for reference.

**Backend project:** `SMTP_SERVER`, `SMTP_PORT`, `SMTP_EMAIL`, `SMTP_PASSWORD`, `RECEIVER_EMAIL`, `TURNSTILE_SECRET_KEY`, `RATE_LIMIT`

**Frontend project:** `API_ADDRESS` (the domain of your backend, used at Hugo build time)

## Local Development

### Frontend
```
cd frontend && hugo server
```

### Backend
```
cd backend && npm install && npm test
```

## Credits
- [Archie Theme](https://github.com/athul/archie) for Hugo template and styling
- [Feather Icons](https://github.com/feathericons/feather)
