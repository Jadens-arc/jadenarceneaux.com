+++
title = 'Change Log #2'
date = 2025-02-26T12:21:39-08:00
draft = false
isFavorite = false
readTime = 4
+++
The biggest update yet. 

TL;DR

- Switched hosting from GitHub Pages to KnownHost VPS
- Switch from Google Analytics to Cloudflare Analytics
- New API for handling contact form submissions
    - Captcha and rate limiter for preventing bots and spam

First of all, I've made a massive change in hosting providers for this website. Previously it was hosted using GitHub pages. A free service offered by GitHub to host static sites. I used a GitHub action to compile my Hugo project into HTML on every push. Handling form submissions was a little awkward, I had to use a third-party form handling API, Formspree. It also made it awkward to debug issues. 

I finally moved to manually hosting everything. I got a cheap VPS from Knownhost and set up NGINX to serve my static files. Then, I reconfigured my domain's DNS setting to point to my new server. Then it was just using Certbot to generate some SSL certificates to enable HTTPS. Migrating the front end of my website was honestly a piece of cake. 

What was really powerful was everything I was able to do on top of that. Or more accurately, what I was able to do under the hood with the backend. The first order of business was handling my own form submission. For that, I created [api.jadenarceneaux.com](https://api.jadenarceneaux.com). A simple Express.js server running through NGINX. Currently, it only has one route `/forms/contact` to handle submissions on my contact form.

Initially, it just validated the data on the form and then connected to the Gmail SMTP server with my Gmail login to email the form contents to me. This was bad for a few reasons. 

The first and most immediately apparent one was bot entries. Within like 30 seconds of deploying this I had bots filling out the form and sending junk to my email. The obvious solution, use a Captcha. First I experimented with Google Recaptcha but it honestly seemed like a privacy nightmare for my users so I ended up opting for Cloudflare Turnstile. I also implemented a rate limiter so people can't spam my email. 

The second and arguably worse problem was the fact that for this setup to work I had to have my Gmail credentials on the server. For small blogs like this, it's not a question of if, but when this server will get hacked. At some point, I'm going to forget this website exists entirely and stop updating it. At that point, it'll become the local Russian playground. So not having my Gmail credentials on the server is a big deal to me lmao. I ended up opting to use a Mailgun mail server to send automated emails. This just involved adding a couple of TXT records to the DNS settings for my domain name and setting up a user on the email server. One cool feature of Mailgun is the ability to limit an email address to only send to one receiver. Currently, the only email address on the whitelist is my own. This means that even if someone steals my STMP credentials they can't send emails to random people from my email address. How lovely. 

While I was looking into Cloudflare Turnstile I discovered their web analytics. Previously, I had been using Google Analytics but knowing how awful Google is with data privacy I decided to switch to Cloudflare Analytics as well.

I finally feel like my website is in the exact place I want it to be. Everything is under my control. I've thought about making a Docker container for both the website and the API. That'd make it easier to spin up another instance of my website if something ever happens to my VPS. Unfortunately that'd also add overhead to actually running the servers themselves. I'm using the cheapest plan from my hosting provider which is 1 CPU core and 1GB of RAM. I don't exactly have an abundance of processing power to spare. That's also the reason I don't have any kind of MySQL database running to store form submissions. 

Both the [website](https://github.com/Jadens-arc/jadens-arc.github.io) and the [API](https://github.com/Jadens-arc/api.jadenarceneaux.com) are open-sourced and can be found on [my GitHub](https://github.com/Jadens-arc). Feel free to check the code out or even use it in your own projects. Thanks for reading. I love you <3


**Tiny Changes**
- Color matched scrollbar on FireFox
- Fixed links to public key
- Refactored codebase for newest Hugo version


> All this work just for it to look the exact same to the end user
