# [Jadenarceneaux.com](https://jadenarceneaux.com)
My blog/personal website.

## Build Instructions

> You MUST have docker installed on your machine

- Make a new `.env` based on the `.env.example` file. This will be for the email server, rate limiter, turnstile verification, as well as the domain names you'd like to host on
- Then just run `docker compose up -d`

## Good Commands to Know

- `docker compose up -d`: Start the containers in detached mode
- `docker compose restart [service]`: Restart a specific service
- `docker compose down`: Stop and remove the containers
- `docker compose down -v`: Stop and remove the containers and volumes
- `docker compose logs`: View the logs of the containers
- `docker compose ps`: List the running containers
