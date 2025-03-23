+++
title = 'What is Opium.press'
date = 2024-02-21T06:54:19-08:00
draft = false
tags=["project", "php"]
readTime=2
+++
The shallow answer is a social media platform written in PHP using the Symfony framework. It's hosted using the Google Cloud Platform in a single VM instance. The production database is MariaDB.

But that still leaves the question of why it exists. 

I made it with the intent of having a place to publish my music reviews and allow other people to publish whatever else they wanted to write. By far I'm the most active on my Instagram which isn't convenient for posting large blocks of text but by having Opium.Press I can share a single link

When I started planning out Opium.Press I realized there were a lot of issues with other platforms that I felt like I could address.

The biggest of them being addiction. I wanted to see what would happen if you made a platform that was designed to be the least addicting.

That influenced every decision that I made throughout the project.

- The monochromatic color scheme and lack of photos and videos are designed to limit visual stimulation while still being effective at communicating information.
- The 3-day embargo forces users to really consider the impact of what they choose to share and limits the impact of impulse
- The fact that posts and accounts aren't deletable further reinforces the previous point
- The choice to paginate timelines rather than implement infinite scroll forces the user to know exactly how deep they are and limits "doom scrolling"
- The choice of chronological timelines over target feeds limits echo chambers
- No instant gratification systems (likes, thumbs up, etc) that reduce emotional dependency on the platform
- The strong focus on simplicity and privacy
  - No selling data
  - No bloated frameworks like React or Angular
  - Only minimal tracking for audience analytics 
  - The entire website can function without Javascript for users of TOR or other hardened browsers
  - The whole platform is free and open source and can be audited or forked by anyone

The result is a platform that almost feels cold and scary. Users are forced to deeply consider the impact of what they share and how it might be interpreted. They are eerily aware that everything they write will be there forever and will always follow them.

It's a really great place to express things you're confident in and feel like other people would appreciate. To this day I still write music reviews on there and I would really appreciate if you read them

## Links
- [Opium.press](https://opium.press)
- [GitHub](https://github.com/jadens-arc/opium.press)
- [My Music Reviews](https://opium.press/writer/jonah)

