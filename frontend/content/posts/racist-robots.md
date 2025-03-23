+++
title = 'Racist Robots'
date = 2024-04-20T12:47:23-07:00
draft = false
readTime = 7
isFavorite = true
+++

First of all, I feel like as a baseline we have to acknowledge that racism is, in fact, a problem. It's not just people being intentionally mean to each other, it's unconscious biases slowly leaking into our outward expressions. And it's the accumulation of those expressions within the systems that drive society.

This is just a discussion I'd like to start based on some observations I've made. I don't have a concrete solution to any of them and I don't think there ever will be one. It's so subjective and such a slippery slope, but it is an absolute necessity for engineers and the people who rely on this technology to take into account. Now that that's out of the way, we can move to the meat of this discussion.

## Artificial Intelligence

Specifically, I want to talk about AI. It's important to understand the basics of how AI works if you want to follow along.

### What is it

Artificial intelligence gets its name from its ability to learn and adapt like a human. Most people are pretty familiar with the idea that computers follow a strict set of instructions known as code. It's the job of programmers to tell computers exactly what to do in every situation they could possibly face. This severely limits the application of technology in the world. It forces us to interact with technology using premeditated, stiff interfaces.

AI is useful because rather than telling the computer exactly what to do, instead, we construct a system that can learn and adapt. Then we let it figure out what to do on its own. AI is a subset of a much larger study of computer science known as machine learning.

This system capable of learning is known as a neural network. A web of millions of nodes, weights, and biases so complex that it is best treated as a [black box](https://en.wikipedia.org/wiki/Black_box). Forward propagation is the act of sending data through the neural network to get an output. Then, a loss, the degree to which the machine was incorrect, is calculated. Back propagation is the act of distributing the total loss back to the network so each node can minimize its loss. This is what it means to train a neural network. This process is arduous and very resource-intensive.

Let's say you want to train an AI to find a face in a picture. First, you show it an image with a face somewhere in it. Then you ask it where the face is. The first iteration will likely just be a random guess. Then you tell it where the face actually is. The loss is then calculated and through back propagation, each Node will adapt to get closer to the desired result. Then, this process repeats only with a different picture. And it repeats indefinitely until the AI can detect a face with a reasonable level of confidence. If you want to train it to detect all faces, then you must show it a wide array of different faces in different lighting conditions, environments, and poses. If you only train it on one person's face, it will only detect that person's face.

Now we can move on to the problems that arise when training goes awry.

## One of my projects

Yes, one of my very own children (weird apps) ended up being problematic. In my junior year of high school, I tried to make a program that would let me control my music by waving my hand around in the air. The idea was that I'd wave my hand to the left to skip a song and wave it to the right to rewind a song. This was during the pandemic when all my classes were online, so I was at my computer a lot. Anyway, being 16 and too lazy to hit skip on my keyboard, I didn't want to build and train my own neural network from scratch. So I did the next best thing, I found a Python library. I used OpenCV along with another library to track body parts. After building out an MVP, it really struggled to track my hand accurately, even in good lighting. At first, I thought it was my fault. After hours of testing and debugging, I still couldn't figure out why. After more research deeper into the model, I learned it was primarily trained on European people, which I happen to not be. This was heart-shattering for a 16-year-old me. Just like that, the whole project was abandoned. As comical as it might be, this is telling of a much larger issue.

What happens when larger institutions adopt this technology? Who's there to audit it and ensure a representative dataset? What does it mean to have a representative dataset?

## FaceApp

In 2017, FaceApp debuted a new feature, called the Hot button (later renamed to the Spark button). It was meant to be an instant way to beautify the user's face. Very quickly, people started to notice an interesting trend. It would make people visibly lighter. Many people called out FaceApp for their supposed favoritism of lighter-skinned people. But FaceApp had an interesting response. The creator of the app claimed it had to do with the way the neural network was trained. It was trained using user preferences. In a strange twist, it wasn't the technology or the creator who was racist, it was a reflection of the internal biases held within the app's users. The data was, in fact, representative of real preferences.

## Google Gemini

What happens when you over-correct for racial bias in your dataset?

In 2023, Google launched its competitor to OpenAI's ChatGPT, Google Gemini. Quickly, people noticed that when asking Google Gemini to generate historical images, it had a tendency to illustrate _less than accurate_ depictions of the diversity of the past.

{{< img
url="https://s3.us-west-1.amazonaws.com/jadenarceneaux.com/founding-fathers.jpeg"
description="Google Gemini when asked to generate an image of the founding fathers"
align="center"
size="75" >}}

It came from a place of good intentions. The thought process as described by a Google executive was to avoid "the traps" of traditional AI. As mentioned earlier, illustrating and acting out user biases and preferences is a characteristic of AI. For example, if you ask a standard AI model to generate a picture of a CEO, the person in the photo will typically be a Caucasian male. Having more diversity in that scenario might be attractive, but when you ask it to generate a picture of a 1940s German soldier, diversity might not be the expected output.

Trying to counteract biased training data introduces a whole other slippery slope of when to correct and by how much.

## The big questions

AI reflects the reality it's shown. So the question is, what do we show it? Do we show it an idealized version of the world with things working exactly as they should, or do we show it the truth?

There's the even bigger question of who should answer that question. Who do we trust to decide what AI, and subsequently we are and aren't shown? That's an incredible amount of power for the unelected officials that we call tech CEOs.

## My opinion

I think AI should see the world for what it is. Sure, it is nice to see more diversity in the results for respected professions, but the way to achieve that isn't by putting a band-aid over the truth. In a tool that is touted as a research magic wand, the goal should always be accuracy. The simple truth is that if we want minorities to be better represented in our search results, we need to do more to promote the representation of minorities in our society. This doesn't just mean pushing minorities to live up to standards set in place by "respectability politics", but instead challenging our standards and preconceived notions about minorities.

## Other random stuff

Ethical questions like this are also the reason why navigation apps don't have an option to route you around dangerous neighborhoods. Think about it, with all the crime rate statistics published every year, such a feature would be trivial for Apple or Google to implement in their respective navigation apps. But the consequences for doing so have far-reaching effects that could turn already under-served areas into complete ghost towns. The responsibility (and potential blowback) that comes from something like that is enough to scare off even the biggest companies in the world.

Shout out Chris for proofreading and giving me suggestions. Check out his [website](https://chrisrobles.dev/).

## Amendments
**May 14th, 2024.**

Despite the time that has passed, this post has managed to stay in the back of my mind. There are a few things I want to clarify and add to and if you have any suggestions please email me at contact@jadenarceneaux.com.

Racism is my symbol for a much larger ethical discussion about AI. There are much larger discussions to be had about the political, moral, and socioeconomic issues with AI. I picked racism because it's one of the most easily observable forms of bias in AI and it's the issue that I have the most personal experience with. All of these other issues are equally worth looking into and hearing the perspectives of people who have much more experience with them than I do.

This is a discussion that extends further than today's technology. This is a conversation that really should have been started during the mainstream adoption of search engines like Google and Yahoo. But it is sadly overlooked. There is something to be said about the fact that because these tools are run by businesses they are subsequently controlled by the free market. But how free is the market when access and presentation of information are skewed?

