+++
title = 'Change Log #4'
date = 2026-03-14T00:00:00-07:00
draft = false
isFavorite = false
+++

## I gave in.

I'm on Vercel now, and it's kinda awesome. No more debugging deployments or SSH-ing into servers to push changes, I just push my commits and Vercel monitors the GitHub repo to deploy them. Most importantly, I no longer have to spend $5 a month renting a Virtual Private Server (VPS). The Vercel free tier is amazing.

Also live development is kinda amazing too. I can just push my changes to a separate branch and Vercel automatically picks up that branch and starts hosting the preview on a unique dev URL with no input from me. 

It wasn't entirely smooth sailing, however. One of the major steps was getting my domain name migrated over. No worries, Vercel has a one click setup to set your domains name servers. Except that completely broke my MX records which meant, I couldn't receive emails to my custom Google Workspace email address. 

Contact@jadenarcenaux.com was down for about 30 minutes yesterday.

I've also done some work to clean up the code and remove all the old docker stuff. 
