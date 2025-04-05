# [jadenarceneaux.com](https://jadenarceneaux.com)
My blog/personal website. Checkout my projects and read some of my thoughts on tech and the world at large. Feel free to fork the repo and make your own website or contribute to the open source project.

## Technology Stack

- Hugo: Static site generation
- Express.js: Backend API server
- Caddy: Web server and automatic HTTPS
- Docker: Containerization and orchestration

## Build Instructions

> You MUST have docker installed on your machine

- Make a new `.env` based on the `.env.example` file. This will be for the email server, rate limiter, turnstile verification, as well as the domain names you'd like to host on
- Run `docker compose up -d` to build and start all containers

## Credits
- [Archie Theme](https://github.com/athul/archie) for Hugo template and styling
- [Feather Icons](https://github.com/feathericons/feather)
