+++
title = 'Kitty'
date = 2024-03-03T21:13:02-08:00
draft = false
tags=["mac", "configs", "neovim"]
readTime = 2
+++

While on a quest to have the best Neovim setup possible, I hit a roadblock.

For those of you who don't know, I have a 2020 M1 MacBook Air. For as long as I've had a Mac, I've been using the default terminal application. It's not the best, but it's cute enough, and it does most of what I need it to do. But it has one fatal flaw. It doesn't support true colors. Which means it doesn't work with the majority of Neovim themes.

Initially, I tried to ignore it and just go with one of the few themes that supported the default terminal. But the allure of a truly beautiful Neovim setup was too strong, so I gave in.

Trying out [Kitty](https://sw.kovidgoyal.net/kitty/) initially was underwhelming. Just felt like any other terminal. Things really opened up to me the moment I hit `command + ,` to see the settings. I was greeted by pages of configs launched in Vim instead of a dedicated GUI. Upon reading the documentation, I was even more surprised.

- The window management is lovely and truly a strong competitor with Tmux.
- The CLI, kitten,  that comes with Kitty is extremely helpful
Built-in support for downloading, previewing, and installing themes is so handy
- The fact that I can easily change the app icon to something other than the ugly default one is amazing
- and I can match my terminal theme to Neovim theme :D
  - [catppuccin](https://github.com/catppuccin/catppuccin) on top!

I did encounter one issue with it not working correctly with NCurses. I'm not sure what exactly caused this. The application I was trying to use was an application I wrote so it very well could be my fault. But it was easily resolved by modifying the `kitty.config` and setting `term xterm-256color`.

Currently, I'm using Neovim inside Kitty to write this blog post and I have to say it's very smooth, very responsive, and overall just looks beautiful. 

![Image of my setup](https://s3.us-west-1.amazonaws.com/jadenarceneaux.com/neovim.webp)

The ability to natively split windows is so handy for having an editor window open and my server logs and other notes off to the side.

Overall, I'm impressed. If you're a Mac user who regularly uses the terminal, I'd highly recommend giving Kitty a try.

> Yes I know a lot of this is "rice" but it's nice and it brings me joy
