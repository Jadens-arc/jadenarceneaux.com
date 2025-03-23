+++
title = 'Privacy pt. 2: Actionables'
date = 2024-04-07T00:49:07-07:00
draft = false 
readTime = 8
+++
Right off the bat I want to say that it is impossible to live a 100% private life. The truth is that on some level someone has to know something about you for you to do anything. Privacy exists on a spectrum and it's 100% up to the individual to decide what they are comfortable with, at least it should be.

Even this website uses Google Analytics to gather audience statistics. It allows me as the creator to know how people view my content and what they try to get out of it. I have absolutely no problem with people using tools like UBlock Origin to block the fingerprinting or even disabling Javascript altogether. Good web design is stable functionality across all use cases and situations.

## Knowledge is power
Before I give any technical advice I'd advise anyone reading to educate themselves. You don't have to be an engineer but understanding the basics of how computers work beyond being a consumer is important. The best resource you have is the internet. Don't be afraid to Google, ask ChatGPT, or watch a YouTube video.

Some stuff you should know
- The basics of networking
  - You don't need a certification in cybersecurity. Just understand the basics of the server-client model
  - How does a computer load a website
    - Don't bother learning HTML or how to code or any of that nerd shit
    - Just focus on the general process of information traveling from your computer to a server and then back. That's more than enough
  - What's a router
  - What's an IP Address
- How a computer works
  - There are like 7 major parts, I promise it's not that hard

As daunting as it might sound, computers aren't magic and no part of them should feel entirely magical and beyond comprehension. Not saying you can't own a well-designed product but you should at least vaguely understand what's going on under the hood. Oftentimes obfuscated within a feeling of whimsey are serious technological and privacy concerns. Don't let yourself be blinded.

I'm reading a book called *Atomic Habits* and there's a line that really resonates, "Until you make the unconscious conscious it will direct your life and you will call it fate".

## Encryption

One of the two major pillars of data privacy and security. Fun fact anyone can intercept all the communication going to and from your device. But there's a reason why you're personal information *probably* hasn't been compromised yet. Data in transit is scrambled in a way only the receiver can unscramble. This scrambling process is known as encryption and unscrambling is known as decryption.

There are two kinds of encryption:
                |
----------------|----------------
**Symmetric:**  | Uses the same key for encrypting and decrypting information.
**Asymmetric:** | Uses separate keys for encrypting and decrypting information. The encryption key is known as the public key and the decryption key is the private key.

If you go to the [About page](/about) of this website you can find my personal public key. If you want to send me an encrypted message you can use this public key to encrypt your message. Then you can send the encrypted message to me using any medium you'd like (email, text, you could even spray paint it on the side of a building). Because I'm the only person on Earth with my private key, I'm the only person who can decrypt the message and read it.

Here's an example of encrypting some simple text using my personal public key

Plain Text       | PGP Encrypted
-----------------|-----------
Here's some text | hQIMA78aiZUKg/sPAQ/+JYkFT27xDyV8WBbtGivxZXxWQnTNhEX266teK7qbykQh ogBEfo02ajIfWdsWBnSL3BRnHG6EoxFiTmHBsrD+0FmXbKYwXZvcuctC1zAIbt8v O9VFDbU6iJmugS7JKOaWHtkcAyJUi2mzPgJdorQ/IDGIbNZUntWpA3paOFfZET2+ djednC/1qJCjJXAiPyVyqjwEmsy7mSi7JH/3YIZdrUYn5dIAQaMb9J7Ycfz+eLAS ohBPfXx2KtNEukNsDMq7vNWX0StjST7+VXq8d5+fjGCvXcNu659OSJIRFfLfmmup qCwyeZQrlUc+2LVeMXWkChi8j/QHwQBm2NnpCZKrK+9hXKGApuuXKsEpRd7hSnPs QTbyvyMy0Lh4qZ2Md27ROv8L8tshT8DZyAtJFGhAumeEr1hUdXkrgMI59e5BHKm8 /Njo21wRddSr8JG9C4u83ZtC2rmyuqoh8mJUgzlSHynid+phQwDl/9lHeyKtZoW3 uRGedWRLnB51YS8Tphg9ZxIk2A3tfUmd64MVZjrnzBp279vimmtvtvt12wXql+WI XMYVlUfaA6EGn16ie7/TloyrZLoeWg/wEFE8D/yRrPMA3NL/eklteoB4ylHaZHua Y+tsBkyl6rTMad18SV+SlYJKrauXDNM52VEgFFh7SiyTXy5UzdyT3BbqcY0/7hnS 6QHStfI9MGI7zfIPjuvG6u2D5xR+Jj07Rgzrk1ttAYdxnj+kDRTORrwPVE89W7M4 bzYJKIdfU1ONqN7l749WsBbuVFz36IYPUEswkzB9tyMPeh16ulL3sPqK5H19fCan WgRdFAaMLEeImaARlc+3HwW9PVz56seWUHLnKyzsVtt7jtpBr0d/xMZS0zt6CC0v mpv/5Sw7kuWcaXjxAgdRJndiz7muXUQW+1yBtlaXJAZWoxdBpaTdQRwB+LyLRK93 E6TfmBRP31Ii4bjLp181yrrSkIBkwRra66s0P71GOjhL9iFxeLCfkoFUWABWn6Gh tRuMWSudIJe2tUxvYoFB2D2RFUwQ7zrn2nSSwB8yMJ9FUIXahCm8sN7I1q+csqIR 2V1Bk82K+t7Gbjlua3bfYujuxOB7NPBFEGJi+9i8BpT+uG7vpoePtHI/OiFhSKlU jSYxWvgF0kotbvcz0mIlq5tQd87NXFtSzf0JhG+KzknEO+sS8fwXJyceuf9aJT5c Pf7XAyRqmqxMEivbPmTROS9Dl30AzjiOsQrSIytKRY4f32vAmTk374idYNu8xNuH xBo84Y+aWxJMRfPLeu36KNedKsQ6QM6uiCIuQF0APBFdP0s7PDeeQQyIkAvwzAcK zOdYF90+U7FBVp8b+o2W2N+sZiiXOFZhkX6Eafv0WTRfk2Cj197euhzTV/8zkCvc vhI3i3tMMxgP/sldE1qWa7rT8F6+FyU0P6Ycg9eccDjb0Rlsxszxzs7yTQnm0P1H 4FIV7GQ7HYsNWw7SOcYR7kp+FTD/pfENexKK2oS8urrDTRtfbHzQ5AYxwRrLLeK+ 5hGXHksreUBKPAmTyXHyFguFp06JDmw+/XBeOJyw3Zk6OluxcQ== =Zh3U


As you can see that data is pretty well scrambled. Without my private key, it would take millions of years to decrypt that encrypted text back into plain text.

When you load a website a special handshake takes place. The SSL handshake is the process of negotiating a key between an app/website and a server. Before any information is sent, they first agree on a key to secure it with. Fun fact: Symmetric encryption is used for SSL. Both the server and client can use one key for all communication in comparison to having two sets of public and private keys (4 keys total) for the server and the client.

### End-to-end encryption

The most common need for encryption is sending messages between two people. Not all mediums are created equally. I'm going to touch on each in order of worst to best

At the bottom are standard SMS text messages. If you have an iPhone these are the green bubble messages. Not only are they unsightly but they're also horrendously insecure. There is no encryption applied to these kinds of messages. Anyone can intercept and read them. If you needed one more reason to not talk to that person with an Android, let this be it. Anyone with a little bit of tech knowledge can read your messages to them.

Also for the love of god don't use SMS two-factor authentication. It's by far the worst and least secure method of 2FA. Use a TOTP code if possible.

Then you have point-to-point encryption. This is the way that most encryption on the internet is handled. When you send a message on Instagram it is encrypted, sent to Instagram's servers, and then decrypted. Then the message is re-encrypted and sent to the other person where their device decrypts it so they can read it. A lot is going on here. While yes, your message is protected from random people viewing it, there is a pretty big hole in this process. Instagram can read your messages. By breaking it up into two separate rounds of encryption Instagram can insert itself in the middle. Giving them full access to the unencrypted data in transit.

Personally, I don't want a random tech company reading my messages and doing who knows what with them.

This is where the final and most secure form of encryption comes in, **end-to-end** encryption. When you send a message using end-to-end encryption it is encrypted on your device and it is only decrypted on the receiver's device. Cutting out the middle man.

If you have an iPhone iMessage does this by default. But there are two reasons why I still wouldn't completely trust iMessage. The first one is just the way that iPhones work. When you send a text message on an iPhone, usually it will go through iMessage and be end-to-end encrypted, but depending on network conditions it might get sent as a regular SMS message, completely unencrypted. It doesn't even change the color of the bubble either, it will still be blue. The second reason is the fact that iMessage and iPhones as a whole are completely closed-source, we can't see the source code for these products. The only way we know iMessages are end-to-end encrypted is by trusting Apple's word.

## Open Sourced Software

The second pillar of data privacy is open-sourced software. This is software where all the code is published (usually on GitHub) for anyone to audit. A great example is this website. [You can find all the code here](https:/github.com/jadens-arc/jadens-arc.github.io). Even if you aren't a programmer using open-sourced software is still a good idea. You can trust that people who aren't motivated by finance and aren't associated with the application itself are going through every line of code to make sure nothing is awry. 

It is almost impossible to trust any software that isn't fully visible. If at all possible, I'd use open-source software. Here are some great open-source, privacy-respecting alternatives for people looking to move away from closed-source, proprietary apps. The best part of all these is that they are completely free.

App you probably know          | Open-source Alternative
-------------------------------|----------------------------------------
Adobe Photoshop                | Gimp
Google Chrome                  | Mozilla Firefox or Google Chromium
WhatsApp / iMessage / FaceTime | Signal or Session
Adobe Premier / Final Cut Pro  | Kdenlive
Google Docs / Microsoft Word   | Libre Office
Gmail                          | Tutanota
Visual Studio Code             | VSCodium or NeoVim for bonus points
Lastpass / Bitwarden           | KeePassXC
NordVPN                        | Mullvad VPN
Microsoft Window / MacOS       | Linux

This is all software that I personally use on an almost daily basis. I will admit there are tradeoffs to each alternative and the feature parity isn't exactly one-to-one. However, the privacy implications cannot be understated.

There are even open-sourced social media platforms like Mastodon, Odysee, or [opium.press](https://opium.press) although the user bases are a lot smaller than the giants.

| Bonus: use UBlock origin. Not only does it block ads but it also blocks the majority of fingerprinting and tracking across the internet.


## But what if you don't want to change up your entire workflow

Fortunately, if you don't want to completely learn new tools just to do the same thing, there are ways to protect your privacy using your existing software stack.

**Just be conscious**

Before you sign up for an account really think about if you need it. Really think about if it's the kind of company you want to have access to your life. It's okay to say no. You don't need the McDonald's rewards or the Bath and Bodyworks spam mail.

As the owner of a smart toothbrush, I too know the temptation, but we must be strong.

When you set up a new device take a second to configure the privacy settings. Also, take some time to go through the settings on your phone and the settings on the apps you use daily. Be wary of anything labeled "Targeted Advertising". Don't be afraid to disable things that make you uncomfortable. If it breaks the app, fuck the developers.

Across all things, the first step to living the life you want is to be mindful and intentional.


