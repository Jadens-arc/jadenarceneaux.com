+++
title = 'Project Photoprism'
date = 2024-02-24T09:04:56-08:00
draft = false
tags = ["linux", "project"]
readTime = 3
+++

For the past two years, I've been doing photography as a hobby. I have an amazing Canon M200 that I love taking pictures on. Not only does it take beautiful, vibrant, 24-megapixel photos but it also captures all that information almost completely uncompressed using Canon's raw format. The only downside is that it generates so much data and requires so much storage. The issue of storage has been ongoing. It started with me using Google Photos, but then they changed their pricing model to not offer free unlimited storage. Then I put everything on a one-terabyte Samsung T7 SSD (yes I know about the read/write limitations of SSDs). Then I got a Western Digital MyCloud and the hard drive crashed (thank god for that SSD). Unfortunately, I still lost some photos and Western Digital discontinued the product a few months later. So I've been in this purgatory. I have a lot of old pictures in Google Photos and a lot of new ones on my SSD. Neither places seem particularly stable so I've started working on something that will hopefully be better.


## Photoprism
The decentralized, open-sourced, solution. With my Raspberry Pi 3B+ and A Seagate 4TB hard drive, I've set out to solve this problem myself. 

So far, things have been going well. I used my PC to move all of the photos from my SSD onto the hard drive and then I used Google Takeout to pull all of my photos from Google Photos. Currently, my Raspberry Pi is in the process of indexing all of my photos. The setup process was pretty easy too. I used BalenaEtcher to flash a copy of [PhotoPrismPi](https://docs.photoprism.app/getting-started/raspberry-pi/microsd-image/) onto the SD card and it booted right up. The SSL certs for the web interface were a little strange. Initially, my web browser wouldn't allow me to access the web interface due to an invalid SSL key. But when I tried to access it the next day it worked just fine. It likely just had to regenerate those certs. Other than that it's been a smooth process.

I'm not going to lie using it can be pretty slow but Photoprism recommends using a Raspberry Pi 4 and up for that exact reason. Currently, it's been running for a little over two days now and has indexed 2,444 raw images. Which is extremely impressive. Unfortunately, that's only a fourth of the photos from my camera and none of the photos from Google Photos so I expect this process will likely take at least a week to complete.

After indexing is complete there are a couple of hardware upgrades I want to make. First is getting a newer Raspberry Pi and second is getting another hard drive so I can have data redundancy.

I'll keep you guys updated on how things are going :)

## Updates
**Feb 27, 2024**

I installed [Tailscale](https://tailscale.com/) on my Raspberry Pi. It's a really handy VPN services that allows connected devices to act like they're on the same LAN. This gives me the ability to access all my pictures from anywhere without port forwarding. I really need to upgrade my hardware now :(

