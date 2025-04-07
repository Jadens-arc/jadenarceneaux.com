+++
title = 'Who doesn't follow me back: A saga of heartbreak, pain, and betrayal'
date = 2025-04-07T00:49:07-07:00
draft = false
isFavorite = false
readTime=5
+++

## Introduction

Call me needy, call me entitled, call me self-centered or vein, but I can't fucking stand when I follow someone on Instagram and they don't follow me back. It's even worse when someone follows me, I follow them back, and then they unfollow me hoping I don't notice. WELL BEST BELIEVE I SEE YOU WEIRDOS. So today we're going to do some light investigation into Instagram's API to figure out who doesn't follow me back.

## Getting Started

This all started by going onto the Instagram website. Why? so I can use inspect element to see all the requests the page is making to the server to get information. First I went to my account and clicked on the list of people I'm following. Right away I see Instagram request a route `[https://www.instagram.com/api/v1/friendships/12416222030/followers](https://www.instagram.com/api/v1/friendships/12416222030/followers)`. I'm pretty sure that big number right after friendships is my user ID or something. 

Here's where we encounter our first issue. Behind the scenes, there's a bunch more data that gets sent in this request. Primarily in the form of request headers and cookies. Mostly stuff like authentication credentials to verify that it's actually me logged in. While it would be easy enough to write a program to just make an empty request to that URL, it would completely fail without the correct tokens, and generating authentication tokens would take longer than an afternoon to figure out and is therefore entirely outside of the scope of this project and my attention span. Fortunately, I use a Firefox-based browser called Zed (which will probably get its own blog post in the future) and a feature of all Firefox-based browsers is the ability to right-click on a request in the network tools and use it as a fetch command in the console. It accomplishes that by reusing the tokens already generated for the browser. I like it, Picasso. 

This is what that fetch command looks like.

```javascript
    fetch("https://www.instagram.com/api/v1/friendships/12416222030/followers/?count=100&max_id=" + (next_max_id ? next_max_id : "") + "&search_surface=follow_list_page", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "X-CSRFToken": "4EwS1VARoYvR3hiLVCdOOC5aI65hBhpw",
            "X-IG-App-ID": "931943346612959",
            "X-ASBD-ID": "359341",
            "X-IG-WWW-Claim": "hmac.ARdQ2osvgr2BHWF-FgAdP_iS7jSg2hGcMi6ww2V0t1",
            "X-Web-Session-ID": "oksq:fs0eet:2pjvce",
            "X-Requested-With": "XMLHttpRequest",
            "Sec-GPC": "1",
            "Alt-Used": "www.instagram.com",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
        },
        "referrer": "https://www.instagram.com/jaden.svg/followers/",
        "method": "GET",
        "mode": "cors"
    })
```

And this is where we encounter our second issue. Pagination. When you load the list of people you follow Instagram doesn't just send back a complete list of every person you follow. It sends back like 10 people at a time. The idea is, that when you scroll to the bottom of that list it makes another request to load the next 10 people and so on. In the API you have to pass in the ID of the last person in your list when you load the next one so it knows where you left off and who to load next. That is so cruel and mean and bad and horrible because now we actually have to use our brains and write code.

So we write a function. It takes in two arguments; the ID of the person we last loaded and an accumulator, the total list of everyone we've loaded so far. Why do we need an accumulator? Because this function is recursive, after we load a list of people this function calls itself to start loading the next list. Why does this function need to be recursive? Why not just use a loop? Because the fetch command in JavaScript runs asynchronously and, while we could use `await` and make the overall function `async`, it gets messy and generally isn't the *right* way to handle asynchronous JavaScript code. 

So this is the final function, to recursively load everyone I follow.

```javascript
(function getFollowing(next_max_id, followers=[]) {
    fetch("https://www.instagram.com/api/v1/friendships/12416222030/following/?count=12&max_id=" + (next_max_id ? next_max_id : ""), {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "X-CSRFToken": "4EwS1VARoYvR3hiLVCdOOC5aI65hBhpw",
            "X-IG-App-ID": "931943346612959",
            "X-ASBD-ID": "359341",
            "X-IG-WWW-Claim": "hmac.ARdQ2osvgr2BHWF-FgAdP_iS7jSg2hGcMi6ww2V0t1",
            "X-Web-Session-ID": "oksq:fs0eet:2pjvce",
            "X-Requested-With": "XMLHttpRequest",
            "Sec-GPC": "1",
            "Alt-Used": "www.instagram.com",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
        },
        "referrer": "https://www.instagram.com/jaden.svg/following/",
        "method": "GET",
        "mode": "cors"
    })
        .then(data => data.json())
        .then(res => {
			followers = followers.concat(res.users.map(user => user.username))
			if (res.next_max_id) {
       			getFollowing(res.next_max_id, followers);         
            } else {
                console.log(followers.join("\n"));
            }
        });
})();
```

Thank the stars above that we can just reuse that code and change the URL to get everyone who follows me. 

```javascript
(function getFollowers(next_max_id, followers=[]) {
    fetch("https://www.instagram.com/api/v1/friendships/12416222030/followers/?count=100&max_id=" + (next_max_id ? next_max_id : "") + "&search_surface=follow_list_page", {
        "credentials": "include",
         "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "X-CSRFToken": "4EwS1VARoYvR3hiLVCdOOC5aI65hBhpw",
            "X-IG-App-ID": "931943346612959",
            "X-ASBD-ID": "359341",
            "X-IG-WWW-Claim": "hmac.ARdQ2osvgr2BHWF-FgAdP_iS7jSg2hGcMi6ww2V0t1",
            "X-Web-Session-ID": "oksq:fs0eet:2pjvce",
            "X-Requested-With": "XMLHttpRequest",
            "Sec-GPC": "1",
            "Alt-Used": "www.instagram.com",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
        },
        "referrer": "https://www.instagram.com/jaden.svg/followers/",
        "method": "GET",
        "mode": "cors"
    })
        .then(data => data.json())
        .then(res => {
			followers = followers.concat(res.users.map(user => user.username))
			if (res.next_max_id) {
       			getFollowers(res.next_max_id, followers);         
            } else {
                console.log(followers.join("\n"));
            }
        });
})();
```

Once we have both lists printed out into the console we can use a random list comparison website to see who doesn't follow me back. So now we have the complete list of everyone who doesn't follow me back. Keep in mind that a lot of these accounts are businesses, artists, etc so the expectation is a little different. 

> There's a part of me that wants to automate this. Make a program to pull who I follow and who follows me back every day, compare it to the previous day, and email me the difference. It would be a fairly simple project other than generating auth tokens when they expire. But alas that would not fit in my attention span for this project so this is what we have for now. 

## WALL OF SHAME

If you're on the list, I've probably unfollowed you by now. 

```html
00piumlab
1avarocks
2hollis
888jbbq
_.louvly
_.melanieee._07
_702temo
_775.sofia
__.liberty_
_g0rec0re_
alyssajoordan
alyssaskarg
analogdope
anjalitwellness
anothersadgothstudios
archivepdf
artsdistrictlv
ashley.moose
atlyniix
bangkokstreetlv
be____well
bear.trak
betterdayscaffe
beverlytheater
blackspadetattoo
blonded
breakthrubevnv
brewit601
brook3_ann
carlie_.v
cathedral_vegas
centralonline
charli_xcx
cherrysmoothskin
christi.tanaka
chromakopia
clayartsvegas
climbrefuge
customsbycosmo
d.17w07
d_torrescurry
dartmoor_otters_butterflies
desertvalleygallery
destroylonely
dissectpodcast
dollyonlin3
donttellvegas
downtownsummerlin
dtlv
evie.lupine
faintinggoatsoap
feliciathegoat
fergusonsdowntown
fillingearthy
firstfridaylv
foamwonderland
fortheculturelv
franciaboi_
gpstephan
gracie.urquiaga
gysselleee
hautehadeel
heroinehoneyband
heymakerco
hottoddy_productions
imemmajean_
indyclover_lasvegas
itsluanaq
jenkramermagic
jennailsit19
jojoruski
judwilhite
jxsmine.gray
kalpiiico
karaokicandles
katiee_reynolds_
kayla_lorusso
kedrenajohnson
keem
kencarson
kendricklamar
kiara.ayala05
kyrenemariee
lasvegascarmeets
leslie12221
liluzivert
linlin.x0x0
liquidredlv
ll.kehlani
lyndsierussell24
lyrik.u
mackickinback
maddenc.26
maddiie.l
madmonklv
makana.flatt
marcoarment
marketinthealley
marwablues_
mffn_starr
miamnnn_
miandyucandle
mikela.lia
molly_plait
momoka.utsumi
mothershipcoffee
msalazar_123
mxdd1e.xlove
noblesart
omishapema
onionringsworldwide
opium_00pium
osamason
paisleyyred
pastel_ghost
pglang
pharrell
photosbyziii
playboicarti
popclubbb
prettypetals_by_lucy
prettypetalz_
psivision
publicuslv
raeganspoetry
realvegaslocals
reviewjournal
robertsspambcimbored
roscoesofficial
rxsi.bel
sabrinacarpenter
sacredkev.ink
sake.lv
scumfuckflowerboy
sharedowntown
shinso0ra
shiva_kittusamy
shopdesertshadow
sighnejat
sincity.delivered
snacksnacksnv
snowstrippers
soapmanwun
some_crumb
sophiaa.knudson
stuckonpottery
summerlin
teaspoonlasvegas
techalleyevents
thebandazalea
thegoodwich
therogersfoundation
thewritersblocklv
thuggerthugger1
tivolivillagelv
traderjoes
trinitydisneyedition
uncommons.lv
unlvplots
unrcomputerscience
uw.0nline
vegasissues
vegastoolbox
vi_mulligan17
vy.productions
wetheurban
woogietheboogie__
writers
xvarrd
xxquisitelee
ye
ziarecords
```

Oh and for anyone wondering, the credentials I showed off in the fetch requests are all randomly generated and not my actual Instagram creds. And even if they were they're definitely expired by now, I did this like a month ago and I'm just now getting around to writing about it. 
