+++
title = 'My Experience With LineageOS'
date = 2024-06-16T18:18:34-07:00
draft = false
readTime=5
isFavorite = true
+++

Don’t take this post seriously, this is just me being goofy and having fun. 

## Some Background
Recently, I embarked on a mini project. It started with my boss giving me her old OnePlus 8. Conveniently, the very next day the battery in my iPhone 11 Pro Max decided it wanted to see the world and pushed the screen off my phone. This meant that for the next two days, I got to become an Android user for the first time in almost 10 years. 

Right off the bat, the thing that nearly drove me insane was the fact that I couldn’t uninstall Netflix from the phone. There was so much junk and bloatware on the thing. But besides that, it felt very smooth. I didn’t bother with launchers or app icons but I didn’t have to, it looked great and felt great out of the box. It was my first time using a phone with a refresh rate over 60hz and that felt amazing. Then the very next day I installed Lineage OS. 

## What is LineageOS
Most versions of Android come with some level of tracking and telemetry. Most notably from Google themselves but there’s usually some spyware from the manufacturer of the Android flavor itself (on a Galaxy you’re tracked by Google and Samsung for example). “Degoogling” is the process of removing the stock installation of Android and installing a more privacy-respecting distribution. Some notable distros are GraphineOS, CalyxOS, and our bestie LineageOS. 

## Installing The OS
If you know me, you know I love Linux. To be so for real, I thought this would be exactly the same as installing a Linux distro; especially given the fact that Android is based on Linux. Boy was I wrong.

## ADB and Side-loading
This was my first time using the ADB command line program and holy shit that thing is cool. Being able to execute commands on a phone from my MacBook is the coolest thing of all time. That’s about where my enthusiasm ended. 

I honestly don’t remember exactly what I did to install it and I can’t be bothered to look it up so here are my loose instructions derived from what I remember from midnight on Thursday. 

There were so many settings I had to change on the phone. First getting into developer mode, then disabling OEM protection, and enabling ADB. 

Then there was getting the phone into fastboot mode. I don’t remember exactly what I did, but I do remember turning the phone off and on like 50 million times and having to perform the Konami code on the side buttons. 

Finally after hours of trying I managed to get the phone in a state where I could write an image to it. I tried following the instructions on LineageOS’ website but the partition that they told me to install was missing. So I ended up bouncing around between YouTube tutorials. 

Eventually, I learned that the best approach was to flash the recovery image to the recovery partition and then boot into recovery and use that to format the phone. Then I went into the ADB menu on the phone and ran `adb sideload` on my computer to load the OS. From there I just let it load, rebooted the phone, and it just worked.

## GAP(P)S
G Apps or Google Apps are apps distributed on Google’s Play Store. For my installation of Lineage OS, I decided to omit G Apps and install everything with the raw APK instead.

I don’t think there really was a comprehensive thought process behind that. In my head it was like “I want to degoogle the phone, why would I install the Google Play Store” so I didn’t. 

I did, however, install the F droid store after the phone booted up

## My outlook on Android

I really enjoyed using this phone for those couple of days. It was so fast with the lightweight OS and it did most of what I needed it to do. Honestly, as someone who's into privacy (as evidenced by previous posts) the idea of having a phone removed from the systemic profiteering of my data is so appealing. But in the end, I bought an iPhone 15 pro, why? The ecosystem. I have an Apple Watch, AirPods, a HomePod, an Apple TV, an iPad, AirTags on everything, and I'm literally writing this on my MacBook. My most used features in a phone are iMessage and FaceTime. I'm just trapped. This isn't a blog post anymore this is a cry for help. 

In all seriousness, while it might not be my daily driver it has made its way into my EDC (it's in my backpack 24/7). Sometimes it's nice to disconnect from everything. I can't go completely without a phone but it's relieving to leave behind TikTok, Instagram, and everything else that feels the need to notify me on a daily basis. That's compounded by the fact that I feel like I'm able to go through life without being watched. I love it. While it might not be for everyone I'd recommend anyone with a passion for tech and a spare phone to try to degoogle it. Phones that respect our privacy should be the rule, not the exception.

As [Ken Carson once said](https://www.youtube.com/watch?v=GDz0Y6-32sQ), "Anybody can be Batman, you just gotta get the gadgets".

