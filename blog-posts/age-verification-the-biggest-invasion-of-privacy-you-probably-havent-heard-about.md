+++
title = "Online Age Verification: The biggest threat to our privacy you probably haven't heard about"
date = 2026-03-24T07:04:49-07:00
draft = false
+++

Protecting kids online matters, but how we do it matters just as much. California's [Assembly Bill No. 1043](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB1043) and Colorado's [Senate Bill 26-051](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB1043) both aim to solve this problem through a similar solution. Instead of requiring individual apps to verify user age as is so common internationally in countries like the Philippines, both bills shift the responsibility to operating system providers. To quote the California bill, operating system providers must now "provide an accessible interface at account setup that requires an account holder, as defined, to indicate the birth date, age, or both, of the user of that device." This age information must then be exposed to developers. The legislation refers to this as "providing a signal" regarding the users' age to applications, but as far as I can tell this just seems like an age API that developers can reference. Both go into effect on January 1, 2027.

## Cracks in the Floor

### Privacy 
This raises some important concerns worth considering. The first and most obvious is data privacy. This is the first time personal information has been legally required to be shared with applications on a device. It *tries* to address privacy concerns by consolidating age data into age brackets: under 13, 13 to 16, 16 to 18, and 18+. It directly calls these age brackets "nonpersonally identifiable." But when this information is consumed alongside standard device info (IP addresses, operating system version, etc.), it becomes another data point painting an even clearer picture of who exactly is using a device at a given moment. Not to mention that operating systems can log age requests and collect information about user habits.

### What about Servers

Yeah, this makes no mention of Linux, Virtual Machines, or Servers. 

## Fears for the future

Behind all of this is the looming cloud of increasing government surveillance on our devices. Nowhere is this more apparent than [Senate Bill S8102A](https://www.nysenate.gov/legislation/bills/2025/S8102/amendment/A) in New York. This hasn't made it to the Senate floor yet, but if passed, it would require thorough age verification, not just age reporting. The bills from California and Colorado make no mention of verifying age data self-reported by users, only that it must be requested and shared. In contrast, the New York bill requires "age assurance at the point of device activation," meaning operating system providers must, to the best of their ability, validate the age that users that input. It doesn't mandate a single technology, but it does reference zero-knowledge proof methods and device-based digital wallets. 

### The Slope 

And that's the heart of the concern. In its current state, the legislation from Colorado and California isn't entirely unreasonable. The self-reporting nature of it means that parents can set up protections for their kids out of the box without needing to constantly monitor their internet behavior. That's genuinely good. But what happens next? What happens when that isn't enough? What happens when kids inevitably lie about their age and we feel the need to verify the age of every person using a computer, as the New York bill proposes? What does this say about the future of computers?

## My Opinion
**WE** shouldn't have to surveil the masses to make sure **YOUR** kids are safe online. 
