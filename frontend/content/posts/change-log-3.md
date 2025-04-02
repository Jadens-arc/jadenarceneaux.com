+++
title = 'Change Log #3'
date = 2025-03-28T14:26:26-07:00
draft = false
isFavorite = false
readTime=2
+++

Major code restructure lmao.

Soooo recently I decided to containerize this site with Docker. [jadenarceneaux.com](https://jadenarceneaux.com), [api.jadenarceneaux.com](https://api.jadenarceneaux.com), and my reverse proxy are now all stored in a single repository. This makes it so much easier to deploy new instances of my website. All I have to do is clone the repo, create the `.env` file based on the `.env.example` file, and run `docker compose up -d` to bring it up.

Also, a change worth noting is my switch from Nginx to Caddy for reverse proxy and file hosting. Honestly, I really liked Nginx but trying to get SSL cert generation to work was a huge pain. Certbot has its own Docker Image, and Nginx does too. The issue I'd run into is that Nginx would consume ports 80 and 443. Certbot would try to host some files for their Certificate Authority to verify my website and it couldn't because those ports were already in use. I'm sure there's a workaround, but I switched to Caddy because in addition to hosting my static file and acting as a reverse proxy for my web server, it also automatically handles SSL cert generation. It is literally the best thing ever.

You might be asking "So what's the point of doing all this". I really value my independence. That's the reason I have my own platform to begin with. I don't want to have someone else algorithm telling me what kind of content I need to make. There's also a feeling of security knowing I can do almost anything and never really be deplatformed. There's almost nothing anyone can do to take down this website. I own it and I built it from scratch. But, for the time being I still rely on a third-party server hosting provider. I rent a VPS from KnownHost. Theoretically, KnownHost could shut down the server I rent from them. Being able to quickly spin up a new instance of my website and point my domain name to the new IP address mitigates that. It ensures minimal downtime in a catastrophic event. In the absolute worst-case scenario, I can port forward my personal computer and host this out of my house. But for the time being, I'd prefer you guys not to have my IP address.

Also, it means that if any of you feel particularly inspired and want a website similar to mine you can literally fork the code, change my name to your name, and spin up your own identical blog with one command.

Also, stay on the lookout, new blog post about Docker coming soon.
