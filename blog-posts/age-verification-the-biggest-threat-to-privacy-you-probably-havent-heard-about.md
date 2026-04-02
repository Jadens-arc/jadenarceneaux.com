+++
title = "Online Age Verification: The biggest threat to privacy you probably haven't heard about"
date = 2026-04-01T00:04:49-07:00
draft = false
+++

Protecting kids online matters, but how we do it matters just as much. California's [Assembly Bill No. 1043](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB1043) and Colorado's [Senate Bill 26-051](https://leg.colorado.gov/bill_files/110990/download) both aim to solve this problem through a similar solution. Instead of requiring individual apps to verify user age, as is so common internationally in countries like the Philippines, both bills shift the responsibility to operating system providers. To quote the California bill, operating systems (iOS, macOS, Windows, Android) must now "provide an accessible interface at account setup that requires an account holder, as defined, to indicate the birth date, age, or both, of the user of that device." This age information must then be exposed to developers. The legislation refers to this as "providing a signal" regarding users' age to applications, but as far as I can tell, this is just an age API that developers can reference. Both go into effect on January 1, 2027.

## Concerns

### Privacy 
This raises some important concerns worth considering. The first and most obvious is data privacy. This is the first time personal information has been legally required to be shared with applications on a device. It *tries* to address privacy concerns by consolidating age data into age brackets: under 13, 13 to 16, 16 to 18, and 18+. It directly calls these age brackets "nonpersonally identifiable." But when this information is consumed alongside standard device info (IP addresses, operating system version, etc.), it becomes another data point painting an even clearer picture of who exactly is using a device at any given moment. Not to mention that operating systems can log age requests and collect information about user habits.

### Linux?

These bills target "operating system providers," but who is the provider of open-source operating systems, like most Linux distributions? Commercial Linux distributions backed by a company, like Red Hat Enterprise Linux and Ubuntu, are likely to be forced into compliance, but this puts community-made operating systems in a gray area. This is especially true since, unlike macOS and Windows, most Linux distributions do not have centralized account systems. They typically have users and groups to dictate file permissions, but nothing similar to a Microsoft or iCloud account.

### Virtual Machines?

There's no mention of virtual machines in this legislation. It seems to be worded such that the host machine is responsible for collecting and reporting age information. What happens inside virtual machines isn't regulated, and should someone use a VM to circumvent age protections, there is nothing stated to prevent that.

To be clear, servers **are** directly excluded from this set of rules. In the California bill, "users" are defined as "a child that is the primary user of the device," which a server generally wouldn't be. However, as someone who was running Linux virtual machines at the ripe age of 13, that feels a little flimsy.


## Fears for the Future

Behind all of this is the looming threat of increasing government surveillance on our devices. Nowhere is this more apparent than [Senate Bill S8102A](https://www.nysenate.gov/legislation/bills/2025/S8102/amendment/A) in New York. This hasn't made it to the Senate floor yet, but if passed, it would require thorough age verification, not just age reporting. The bills from California and Colorado make no mention of verifying age data self-reported by users, only that it must be requested and shared. In contrast, the New York bill requires "age assurance at the point of device activation," meaning operating system providers must, to the best of their ability, validate the age users input. It doesn't mandate a single technology, but it does reference zero-knowledge proof methods and device-based digital wallets. 

### The Slope 

The real concern isn't what these bills do, it's what comes next. In its current state, the legislation from Colorado and California isn't entirely unreasonable. The self-reporting nature means that parents can set up protections for their kids out of the box without needing to constantly monitor their internet behavior. That's genuinely good. But what happens next? What happens when that isn't enough? What happens when kids inevitably lie about their age and we feel the need to verify the age of every person using a computer, as the New York bill proposes? What does this say about the future of computers?

## My Opinion

There are genuine harms worth protecting children from online. But a problem that affects some kids shouldn't justify surveilling every adult.

**We** shouldn't have to surveil the masses to make sure **your** kids are safe online. This legislation sets the stage for that exact outcome, and it's important that we monitor how this develops. Especially when we have viable alternatives.

## Alternatives

### Device Level Protection

Screen Time and Android Family Link already exist. The difference is that these are parent opt-in rather than government-mandated. Some may be quick to point out the various ways children have found workarounds to those protections. Those same loopholes are still present in the government-mandated solutions. But this strategy keeps it up to the user's discretion.

### Education

This is the cold hard truth. We can't protect kids from everything, not least of all their own curiosity. They will figure out workarounds for any barriers we put in front of them.

Parents need to be educated about what tools currently exist to protect their kids. Most importantly, children need to be educated about what's out there and why they should avoid it. Fundamentally, we all need to be educated about manipulation, misinformation, unhealthy comparison, oversharing, and addiction. Turning 18 doesn't make you immune to that. Digital literacy isn't just an assembly about cyberbullying. It could be teaching kids about targeted advertising, manipulative design patterns (infinite scroll, engagement bait, etc), evaluating sources, and managing their privacy. Yes, this does include some potentially uncomfortable conversations, but that comes with the territory.
