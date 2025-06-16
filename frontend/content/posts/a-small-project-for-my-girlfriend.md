+++
title = 'A Small Project for My Girlfriend'
date = 2025-06-14T12:25:13-07:00
draft = false
isFavorite = false
readTime = 3
+++

Sorry for not posting in a minute. I've been busy, and I have a few big posts lined up in the queue. But for now, I want to talk about one of my most recent personal projects.

It started with the perfect storm of events. The first was that I finally set up Proxmox on my home server. This allowed me to do much better virtualization of my self-hosted services. Previously, I was using Docker to host multiple containers, but that was messy, and port conflicts were aplenty. The second factor was a request from my girlfriend. She loves having bedtime stories read to her every night, and she asked if I could read a few to her.

That's when my genius kicked into action, and I realized I could automate this. And it'd be the perfect excuse for me to do a deep dive into hosting my own LLM. This is my first time working with AI since I was a junior in high school, trying to make a neural network classifier (shoutout The Sentdex). 

So the hunt was on.

I decided that I wanted to self-host everything, including the language model. I didn't want to make just another ChatGPT wrapper. That felt lazy. And the thought of OpenAI/Microsoft being able to read everything I was generating just killed the intimacy of it for me. Also, self-hosting a language model just felt like it had so much swag and aura around it, so I couldn't resist. 

That's when I found [Ollama](https://ollama.com/), which quite literally reduced self-hosting a model down to a single command. After setting up an Ubuntu server virtual machine on my home server, I ran `curl -fsSL https://ollama.com/install.sh | sh`, and from there I could install any language model of my choosing. I ended up going with the Google Gemma 3 1 billion parameter model. It was the latest and greatest thing at that moment, so it was a no-brainer. 

Just like that, I had a simple REST API set up that I could make requests to and get coherent responses from. After that, it was a matter of tweaking the prompt until I could get the perfect stories to generate.

Then came the matter of, you know, getting it to actually read the stories and preferably do it in my voice. So then I shopped around for different libraries for AI Text-to-Speech. Eventually, I found [Coqui TTS](https://pypi.org/project/TTS/) for Python. Which simplified text-to-speech to a few lines of code. I just had to import the library, declare the engine, pass in a sample of my voice for it to clone, and give it the text to read out. Everything is ran locally, and should output high-quality WAV files of my voice transcribing said text.

This is when I entered *Dependancy Hell*. Everything refused to work together. My Python version didn't work with Torch, which is a dependency of TTS, and Torch itself was too new for TTS. To make matters worse, a lot of this stuff relies on system-level dependencies and drivers that my M1 MacBook Air just didn't support. This made debugging on my laptop impossible, and I had to work on everything through a remote connection to my server. After many days of trial and error, uninstalling and reinstalling dependencies, and learning how to use pyenv, I managed to get everything to work with each other. 

Except for the fact that the TTS library gave me a British accent. I still haven't figured that one out, but my girlfriend likes the accent, so I guess it's staying.

After like two weeks of hard (shmedium) work, I finally have a working program to generate bedtime stories and read them in my voice. 

Then I ran it a couple of times and realized it was generating the same story over and over. I tried adjusting the temperature and top p value; I damn near became a expert trying to figure this out. Then I realized the model I was using was so small that it didn't have a diverse set of data to rely on, so it was generating the same tokens over and over again. So I upped the model to the  Google Gemma 3 4 billion parameter version. This solved all my problems; it's way smarter and able to generate more original stories. 

After that, I built out a simple web interface to showcase all the stories and a cronjob to run the story generator every day. Currently, it takes a few hours to generate a story, which is why the cronjob is necessary. Here's the final(ish) application along with one of the stories it generated.

{{<audio
url="https://s3.us-west-1.amazonaws.com/jadenarceneaux.com/output-2025-06-08-00-14-27.wav"
align="center"
size="100"
>}}

![image](https://s3.us-west-1.amazonaws.com/jadenarceneaux.com/Screenshot+2025-06-14+at+12.09.00%E2%80%AFPM.png)

You can find the [code on my GitHub](https://github.com/Jadens-arc/Good-Night-Sleep-Tight/). It's not perfect but it works for my extremely limited application.