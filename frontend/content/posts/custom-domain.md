+++
title = 'Using a custom domain name with Gmail for free'
date = 2024-10-16T19:46:49-07:00
draft = false
isFavorite = false
readTime = 3
+++

Despite what Google might advertise with Google Workspace, there is a free alternative to get a custom domain with Gmail. Although it does take some technical know-how


Receiving mail to a custom domain **must** be done before you can send mail from a custom domain

## Receiving mail to a custom domain
This is by far the easiest process

Go to whatever domain provider you have and configure email forwarding. Forward all emails going to a specific address to your Gmail address.

For this tutorial, I'll use Squarespace.

1. Head to [account.squarespace.com/domains](https://account.squarespace.com/domains)
2. Click on the domain you'd like to configure
3. On the left-hand side click "Email"
4. Click "Add Rule"
    1. Set "Forward from" to whatever custom email you'd like to use
    2. Set "Forward to" to your Gmail address
    3. Click "Save"
 
That's it! All emails to that custom email address will be forwarded to your Gmail inbox. 



## Sending mail from a custom domain 

### For the Gmail website and app
1. Head to [mail.google.com](https://mail.google.com) on a desktop
2. Click on settings (the little gear)
3. Click "See all settings"
4. Go to the "Accounts and Imports" tab
5. Under the "Send mail as" row click "Add another email address"

This should bring up a popup window.

6. Under "Email address" enter the email address of the custom domain you want to use (make sure "Treat as an alias" is checked)
7. Click "Next" then configure the SMTP server as follows
    1. SMTP server is "smtp.gmail.com"
    2. Port is 587
    3. Username is the email address you use to sign into Google
    4. Password needs to be an [app specific password](#setting-up-an-app-specific-password-for-google). Copy and paste in the password
8. An email will be "sent" to the custom domain to confirm that email can be sent from Google's SMTP server. If you configured email forwarding in the last section then this confirmation email will just come to your Gmail Inbox. Just click on the link provided.
 
Done! That's it. You should be able to send email from Gmail with your custom domain.
 
### For the iOS Mail App
Although you might have added the alias in Gmail, you will not be able to send emails from this address in the iOS mail app. This is where things get annoying. Also iOS 18 changed up a lot of the process so I won't be able to hold your hand as much.
 
1. Get to the settings app
2. Go to mail settings (it's in a different location on iOS 18 so if you can't find it just search it)
3. Click on "Mail Accounts"
4. Click "Add Account"
5. Click "Other", then "Add Mail Account". We're going to have to configure the SMTP server manually.
	1. Set name to your name (or not)
    2. Set email to your custom email address
    3. Set password to an [app specific password](#setting-up-an-app-specific-password-for-google)
    4. Set the description to literally whatever you want it doesn't matter
    5. Click "Next"
    6. Under Incoming Mail Server
        1. Host Name is imap.gmail.com
        2. User Name is your full Gmail address
        3. Password should autofill to your app-specific password from earlier, if not just paste it in
    7. Outgoing Mail Server
        1. Host Name is smpt.gmail.com
        2. User Name is your full gmail address
        3. Password should autofill to your app-specific password from earlier, if not just paste it in

That's it. Now you can send and receive emails to your custom email address from your iPhone.

> Pro Tip: In the mail accounts list click on the account you just added. Click "Account Settings" then click "Advanced". Changed "Move Discarded Messages Into" from Deleted Mailbox to Archive Mailbox. This means that when you swipe right on an email it will archive it rather than delete it. 

## Setting up an App Specific Password for Google
> Google has a tendency to change stuff with the account manager so some stuff might be different in the future
1. Head to [myaccount.google.com](https://myaccount.google.com)
2. Go to the "Security" tab
3. Under the "How you sign in to Google" section click on "2-Step Verification"
4. Scroll to the bottom and click on "App passwords"
5. Type in something (literally anything) for "App name" then click "Create"
6. Copy the app password
