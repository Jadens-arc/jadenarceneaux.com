+++
title = 'Great Command Line Utilities for Mid Linux Users'
date = 2025-09-04T17:20:16-07:00
draft = false
isFavorite = false
+++

Do you already have a basic understanding of how to navigate the command line? Do you want to get better? Come on ladies, come on ladies, one pound fish. 

## Concepts to Understand

Bash is just another programming language. Every command is just a line of code that gets run in an interactive shell. All of your usual computer science concepts still apply. Each command is just a function. Just like a function, it returns something. Sometimes two somethings. It has a return code, which basically just says whether or not it ran correctly, and the STDDOUT, which is a string that, if left unhandled, just gets displayed in your terminal. The latter is what you'd normally see whenever you run a command. 

### Redirection

You can use the output of one command as the input of another command. You can also send the output of a command to a file. It's really simple.

Here's an example of sending the output of an echo command to a file.

```javascript
echo "hello world" > out.txt
```

Here's an example of using the output of one command as the input to another command.

```javascript
ls | sort
```

This will output a sorted list of all the files and directories in your current directory.

## Standard Commands

> Ones you'll find on most distros

### `awk`

Dude, the power this command gives you is immense. AWK isn't just a command; it's a whole language. And a good one at that (I'm looking at you, Regex). I'm still learning more about this command. The most basic functionality of awk is breaking up an input into columns that you can reference individually.

For example, let's run `ls -lhtr`. This will display every filename and directory along with their permissions, size, and modification date. The output will look something like this...

```javascript
total 32K
drwxr-xr-x 2 jaden jaden 4.0K Mar  8 19:48 Videos
drwxr-xr-x 2 jaden jaden 4.0K Mar  8 19:48 Templates
drwxr-xr-x 2 jaden jaden 4.0K Mar  8 19:48 Public
drwxr-xr-x 2 jaden jaden 4.0K Mar  8 19:48 Pictures
drwxr-xr-x 2 jaden jaden 4.0K Mar  8 19:48 Desktop
drwxr-xr-x 2 jaden jaden 4.0K Mar 12 00:25 Downloads
drwxr-xr-x 2 jaden jaden 4.0K Mar 12 00:29 Music
drwxr-xr-x 6 jaden jaden 4.0K Mar 12 12:24 Documents
-rw-rw-r-- 1 jaden jaden    0 Mar 12 12:42 out.txt
```

Let's say we just wanted to get the size of each path. We can use the awk command to target the 5th column. Here's an example of the command we'd use

```javascript
ls -lhtr | awk '{print $5 }'
```

Which has the output of

```javascript
4.0K
4.0K
4.0K
4.0K
4.0K
4.0K
4.0K
4.0K
```

You can see that we're using the pipe to redirect the output of our `ls` command to the standard input of `awk`. Then we are using awk to parse the output. Inside the single quotes, we have our awk statement.

Let's dig a little deeper. 

Let's say our columns aren't separated by spaces. We can pass in the `-F` flag to awk followed by our new delimiter surrounded by parentheses. 

Let's use a more complex example. If you run the command, `xinput list` it will list every input device connected to your machine. The output will look something like this

```javascript
⎡ Virtual core pointer                    	id=2	[master pointer  (3)]
⎜   ↳ Virtual core XTEST pointer              	id=4	[slave  pointer  (2)]
⎜   ↳ Microsoft Surface Type Cover Keyboard   	id=7	[slave  pointer  (2)]
⎜   ↳ Microsoft Surface Type Cover Mouse      	id=9	[slave  pointer  (2)]
⎜   ↳ Microsoft Surface Type Cover Touchpad   	id=12	[slave  pointer  (2)]
⎣ Virtual core keyboard                   	id=3	[master keyboard (2)]
    ↳ Virtual core XTEST keyboard             	id=5	[slave  keyboard (3)]
    ↳ Video Bus                               	id=6	[slave  keyboard (3)]
    ↳ gpio-keys                               	id=10	[slave  keyboard (3)]
    ↳ gpio-keys                               	id=11	[slave  keyboard (3)]
    ↳ Microsoft Surface Type Cover Keyboard   	id=8	[slave  keyboard (3)]
```

> Yes, I'm running Linux on a Surface Pro right now. Don't worry about it

Let's say we just wanted to get the ID of each device. We can't just use spaces as our delimiter because of the varying number of spaces in the device names. 

How about instead we use "id=" as our delimiter to divide our sample data into two columns. Then we can just select the second column. In the end, our command would look like this

### `sed`

### `tr`

Short for translate, this command literally just replaces things. It's so simple

Let's say you have a file `test.txt`

```javascript
Jaden
Jaden2
Jaden3
Jaden4
JadenUnlimited
```

And you wanted a really simple way to turn this into comma-separated values

literally just cat the file, pipe the output to `tr`, and that's it.

Here's what that command would look like.

```javascript
cat test.txt | tr "\n" ","
```

This command isn't as crazy powerful as the other ones on this list, but it's super useful.

### `sort` & `uniq` 

Similarly to the last command `sort` and `uniq` have very simple functions that are very handy in a pinch.

Sort just sorts an input, either alphabetically or numerically

Uniq filters out repeated lines in an input.

Something fun I like to do to see all the typos I've made over the years is pipe the output  `history` into `sort` and `uniq`. I then get to see every which way I've mistyped the word Python.

### `grep`

This is perhaps the quickest way to search through any piece of text in Linux, both in the of runtime the command and ease of use

### `find`

Literally an essential. Especially for finding config files or navigating shitty code bases. Search for a file by name. Find all files that match the pattern. That's it. Simple. Easy, breezy, beautiful. 

### `ln`

### `cut`

### `xargs`

### `jq`

## Packages

### `nmap`

### `fzf`

### `tree`

### `htop`

### `lnav`
