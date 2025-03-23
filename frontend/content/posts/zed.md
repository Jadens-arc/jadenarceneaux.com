+++
title = 'Zed'
date = 2024-04-22T20:48:40-07:00
draft = false
readTime = 5
+++

Call me a follower. I'm trying out the Zed Editor for the first time, and these are my initial thoughts.

## Simplicity

Out of the box, Zed feels quite similar to Sublime Text. Very stripped down, all business, no fluff. Don't let that fool you; it is plenty powerful. The more you use it, the more its functionality seems to present itself to you. Sure, you can use it like a basic text editor with syntax highlights and contextual code completions. But eventually, you'll learn what makes Zed special.

## AI

The inlign assistant is one of my favorite features of Zed. At any moment, you can ask ChatGPT to generate whatever you need exactly where you need it. It's mindful of the surrounding code as well and will take advantage of existing functions and variables. You can also select any block of text and ask ChatGPT to modify it, which has been particularly useful for fixing spelling and grammar mistakes in these blog posts.

One of my biggest pet peeves when I first installed Zed was the lack of spell check. One of the biggest reasons I used to write these blog posts in Visual Studio Code was the Grammarly extension. Fortunately, I don't have to think about either of those things anymore.

I have yet to try the GitHub Copilot integration because I don't want to spend $10 a month to use a text editor, but I can only imagine it's great too.

## Speed

It just feels fast. Load times are extremely fast. Going from launching the app to being in a project writing code is nearly instant, even for larger projects. When typing and navigating through the UI, everything is very responsive. Something that developers often don't think about is the amount of latency we experience from the point of hitting a key to it actually being on screen. Most of this is caused by all kinds of language servers, syntax highlighters, and linters running while we're typing. Typing in Zed feels like cutting with an expertly sharpened knife; it's clean, it's satisfying, and it makes quick work of anything it encounters.

Vim commands are slow though. They run in Zed's command palette which has a noticeable delay.

## Vim Mode

In all honesty, if Zed didn't support Vim key binds, I wouldn't be using it. I can't imagine a world where I have to write code completely barehanded. Even better, it allows you to make custom key binds, which is the sole reason I don't use Xcode.

I do have some gripes with their implementation of Vim, though. First of all, it does not support markers, which is a shame and a big hit to productivity. It also has a strange behavior where if the inline autocomplete suggestions are displayed, the home row navigation stops working. The only way to move to a different character is to use the arrow keys or hit escape (or control + c) and then use h, j, k, or l as you normally would.

I've also experienced inconsistencies with the page-up and page-down features in Vim as well as with key bind multipliers (e.g. 10j to go down 10 lines).

I also have this random bug where my zero key will stop working. Everything else in the editor works fine except for that one key. The only way I've been able to resolve this is by turning Vim mode off and then turning it back on.

## Price Model

Zed is free and open-sourced, but to get the most out of it, you will have to pay. To be clear, it is still much cheaper than Sublime Text or any of the JetBrains stuff, but it isn't free.

To get support for ChatGPT, you must have an OpenAI developer account. Then you have to generate a new API key pair for Zed. Then you have to load your OpenAI account with credits to use the API. How much you pay depends purely on how much you use.

To get GitHub Copilot support, you must pay a flat $10 a month for an individual account.

On average, you'd be looking at $20 a month to get all the features of Zed, which is a pretty penny.

Things are only looking more bleak for the future. It's speculated that Zed's collaboration and chat features will one day be paywalled as well.

## Overall

Despite all its problems, I still love this app. The speed and simplicity are addicting, and combining that with Vim key binds just makes me never want to leave this editor. I find myself thinking about it whenever I use any other editor. Okay, I'm done glazing. It's not perfect but I see potential. With it being written in Rust, what's there not to love? Still, Zed has a long way to go before it's a serious competitor to Visual Studio Code, MacOS exclusivity being the least of their worries, but I see the vision and I'm here for it.
