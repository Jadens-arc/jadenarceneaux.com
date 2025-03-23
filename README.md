# [Jadenarceneaux.com](https://jadenarceneaux.com)
My blog/personal website.

## Build Instructions

> You MUST have docker installed on your machine

- Make a new `.env` file in the `backend` directory based on the `.env.example` file. This will be for the email server, rate limiter, and turnstile verification
- Update the Caddyfile with the correct domain name based on your `/etc/hosts` file
  > Note: the `frontend/content/contact.html` file has a reference to the api server defined by Caddy. Make sure to update the domain name in the file to match your Caddy configuration.
- Then just run `docker compose up -d`
