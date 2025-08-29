+++
title = 'Programming with AI'
date = 2025-08-28T08:55:29-07:00
draft = false
isFavorite = false
+++

- You ever beat a dead horse?
- Me? Never?
- Gurt: Yo

AI is the buzzword of the decade, and the possibility of it revolutionizing the tech industry is on the forefront of every dude who says, "I'm more of an ideas guy (derogatory) than an engineer". 

## The Current State of Things
I feel like everyone already knows the limitations of AI-assisted development at this point, especially if you work in the industry. But if for some reason you don't, then here's the rundown.

Context windows (the amount of text you can give to a model before it starts to forget) are still too small to contain any large codebases, but you can build simple projects just fine. There are ways to work around this, like using a microservice architecture or breaking down the codebase into smaller modules. But it's a huge limitation for big companies that already have large codebases.

The actual quality of responses vary from model to model.

## My Experience

ChatGPT 5 has an "it just works" quality to its responses but is limited to a relatively small context window. Everything it generates can be dropped right into your codebase, assuming you gave it a comprehensive prompt that includes any dependencies and relevant external code. And assuming you can even fit the external code into the context window.

Google's Gemini 2.5 Pro has a much, much, much larger context window, but the code it generates tends to be more verbose and requires more tweaking and debugging to get it to work. One score for Gemini, though, is that it's very helpful for debugging. You can just give it errors, and it will tweak the code to fix them. Sometimes it will even give you commands to run in your terminal to test the code, learn about the environment, and fix the underlying problem.

I'm not going to lie, I haven't tried Claude or Grok too heavily; the latter in particular just doesn't seem like the most... serious competitor.

> Side note: I have a Tesla, and recently they installed Grok on every Tesla. Bro. It's so buns. And it's like every personality you put it in either wants to flirt with you or call you a slur. Neither of which I want while I'm driving.

## Is it Actually Useful

Yes and no.

When it comes to developing anything that interfaces with an unknown, like an undocumented library or an API you're not familiar with, it's really good. I've personally used it to debug a router API and command-line interface, and it was literally giving me commands to run on the router to figure out what was wrong with it. Commands that would have taken me minutes, potentially hours, to Google or find in the documentation.

But can it write code? Can it implement features?

Yes, it can.

When given the right prompt, with all the considerations for how your problem exists in the real world, and with detailed implementation instructions, it can write code that is pretty damn good.

But I think to fully understand what this means for the industry and determine if it really is useful, you have to take a step back and think about what it is I *actually* do for a living.

## What is Programming

A lot of people think that programming is just non-stop typing on a keyboard. Lines and lines of code pouring out of my fingers at all hours of the day. Just a monkey, in the zone, building exactly what the company needs.

But truth be told, most of my job isn't that. A large part of it is just sitting in a chair, staring at a screen, trying to understand what the problem is, and then thinking about how to practically solve the problem at hand. It's figuring out what constraints actually exist, who this feature is intended for, what they actually want, and what's the best way to implement it. Which is deeper than just "what's the most efficient and fastest way to implement it." "Good code" goes far beyond Big O. It's understanding the goals, direction, and timeline of the team. "Will this piece of code need to be expanded upon in the future? Will it need to be reused (which means more than just a function call lmao)? How often will this code need to be used? How does this fit into the larger architecture for the project, and how does it fit into the overall vision of the product?".

It's hard to articulate to people who have never experienced this feeling before, but when you work on a codebase intimately for a long time, you start to understand "the vibe" of the project. You can feel if a piece of code is congruent with the rest of the project. A lot of new developers or even experienced developers new to a project struggle with this. They focus heavily on the technical aspects of the problem, often leaning on documentation or tutorials. They might produce functional code, but anyone senior to them will tell them it's not good enough. There's something palpable about code written by someone who hasn't fully grasped the subtleties of the project.

You absolutely can put all of that into a prompt. But by the time you've figured out all those considerations, once you've figured out how to articulate the nuances of the problem, you've already done all the hard work. 

The truth is, writing code is easy. It always has been.

## Writing Code is Easy

I type 100 words per minute, I use Vim key-binds to navigate my IDE, and I use every autocomplete extension and linter under the sun. When I know what I want to write, I can bang out a couple hundred lines of code in a couple of minutes.

Programming has never been about being a code monkey; it's about problem-solving, it's about translating nuance into something concrete. It's about being decisive and being able to communicate your decisions with others and own up to them if something goes wrong. 

For good programmers who know the syntax of the language they're using, AI in its current state is nothing more than a powerful research tool and some cool autocomplete. It doesn't eliminate the real heavy lifting of actually conceptualizing a problem and understanding the solution.

For a while, I've had this thought in my head, "this is what it must have felt like when compilers came out," and I think I'm kinda right. Compilers were a massive time-saver for ancient programmers. It removed the need to manually type an gargantuan amount of code and gave rise to key abstractions like functions and classes. Building on top of that, high-level languages like Python removed the need to manually deal with things like memory management and datatypes. 

AI has the potential to be the next evolution of that, one step closer in bridging the gap between our thoughts and our implementations. But what is also worth noting is the diminishing returns of abstractions. Compilers and low-level languages, being the first step in this evolution, made the most significant impact on the way we write code. High-level languages like Python have made it easier to write code, but they haven't eradicated the need for low-level languages in the same way that compilers did for assembly. AI has the potential to do the same thing for high-level languages, but it's important to remember that it won't completely replace them. 

What that does mean is that programmers will get to spend more time solving problems and reviewing code written by AI rather than writing code by hand, but writing code was never the hard part. It's the thinking.


{{< img
url="https://s3.us-west-1.amazonaws.com/jadenarceneaux.com/thinker.jpg"
description="The thinker"
align="center">}}
