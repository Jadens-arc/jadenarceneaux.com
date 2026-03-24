+++
title = 'How to configure the model used by the Gemini CLI in Zed'
date = 2025-09-08T00:00:00-07:00
draft = false
isFavorite = false
+++

[tl;dr](#how-to-set-the-model-used-for-gemini-cli-in-zed)

## Introduction

One of the biggest limitations holding me back from fully adopting Gemini 2.5 Pro in Zed is the pricing. The model uses a lot of tokens, and those tokens are pretty expensive. Plus, the pay-as-you-go model means it's very easy to rack up a huge bill. In one day, I managed to spend like $6 worth of API tokens. Which, by the way, is in addition to the $16 a month I pay to have access to Gemini 2.5 on the web.

Then, like a month ago, they added support for the Gemini CLI. Finally, I can just sign into my Google Account in Zed and use the Gemini access I pay for in my Google Workspace. No longer do I have to pay for expensive API tokens and keep track of my usage.

But, there's one small problem. Unlike every other model in Zed, Gemini CLI doesn't have a dropdown to select the model you want to use. It's supposed to "intelligently" switch between models based on your requests. Except, it's painfully obvious when it switches between 2.5 Pro and 2.5 Lite, the latter being literally awful at everything. 

Here's how you fix their shortcomings.

## How to set the model used for Gemini CLI in Zed 

1. In your `settings.json`, add this at the top level:
``` json
{
  //... other settings
  "agent_servers": {
    "gemini": {
      "args": ["-m", "2.5 pro"]
    }
  }
  //... other settings
}
```
2. Done

Boom, unlimited 2.5 Pro at a fixed price. I really wish this were documented better
