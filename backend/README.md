# api.jadenarceneaux.com
## Overview

This is the API for [my personal website](https://jadenarceneaux.com). It provides various endpoints to interact with the site's data.

## Getting Started

To get started with the API, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/jadenarceneaux/api.jadenarceneaux.com.git
    ```
2. Install dependencies:
    ```bash
    cd api.jadenarceneaux.com
    npm install
    ```
3. Start the server:
    ```bash
    npm start
    ```

## Endpoints

### POST /forms/contact
- Receives data from contact form on my website
- Validates Recaptcha
- Emails me with form data

