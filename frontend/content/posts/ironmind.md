+++
title = 'What is Brainfuck + Ironmind'
date = 2024-02-21T16:45:57-08:00
draft = false
tags=["project", "rust", "brainfuck"]
readTime = 4
+++

## What is Brainfuck
It's an Esolang (Esoteric Programming Language). These languages are designed to be as hard to read and write as possible. They're mostly jokes but they are also a very useful tool for learning the absolute fundamentals of computer science.

Brainfuck works by performing operations on a Turing machine. It has 8 main instructions

|
---------|------------------------------
&plus;   | Increment current cell by one
&minus;  | Decrement current cell by one
&GT;     | Move to the right cell 
&LT;     | Move to the left cell
&period; | Print current cell casted to ASCII character
&comma;  | Get character input from user
&lbrack; | Start a loop
&rbrack; | End a loop

When the instruction parser reaches the `]` it will check the value of the current cell. If the value of the current cell pointed at by the head is zero then the program flows like normal on to the next instruction. If the value is anything other than zero then the instruction parser will jump back to the start of the loop indicated by the `[`.

An (inefficient) hello world program in Brainfuck would look like this.

```brainfuck
myfile.bf
++++++++++++[>++++++<-]>.           H
>++++++++++[>++++++++++<-]>+.       e
>+++++++++[>++++++++++++<-]>..      l (printed twice)
>++++++++++[>+++++++++++<-]>+.      o
>++++[>+++++++++++<-]>.             (comma)
>++++[>++++++++<-]>.                (space)
>++++++++[>+++++++++++<-]>-.        W
>++++++++++[>+++++++++++<-]>+.      o
>++++++++++[>+++++++++++<-]>++++.   r
>+++++++++[>++++++++++++<-]>.       l
>++++++++++[>++++++++++<-]>.        d
>++++[>++++++++<-]>+.               (exclamation)
>+++[>+++<-]>+.                     (new line)
```

## Turing Machine
But what is a Turing Machine in the first place? It's an abstract model of computation first thought of by Alan Turing. It serves as the basis for understanding what can and can't be computed algorithmically. It revolves around a tape, which is a one-dimensional array of memory and a head that points to a specific cell on the tape and can modify it. The head can also move across the tape to different cells. The head's behavior is guided by a set of instructions (a program) to perform such actions. It is said that any system that is Turing Complete can compute any algorithm that any other Turing Complete machine can. The hardware that makes up computers is Turing Complete and many things around us that you might not suspect are also Turing Complete including water (additional hardware needed), Microsoft Powerpoints, and Minecraft Redstone. All of these things can theoretically perform any computation a normal computer can (with varying degrees of speed and reliability).

Brainfuck brings us right to the edge of computation. Any algorithm you can implement in a normal programming language can be implemented in Brainfuck. 


## What is Ironmind
[Ironmind](https://github.com/jadens-arc/Ironmind) is a project to interpret Brainfuck instructions and visualize the execution of the program. For anyone looking to understand exactly what's happening inside the machine while their Brainfuck program is running this tool is for you. It allows you to set through your program state by state or jump to any given state of your program.

It's written in Rust and prioritizes memory safety and efficiency. 

You can see how it works on 
[GitHub](https://github.com/jadens-arc/Ironmind)


[![Crates.io](https://img.shields.io/crates/l/ironmind)](https://opensource.org/licenses/MIT)
[![Crates.io](https://img.shields.io/crates/d/ironmind)](https://crates.io/crates/ironmind)
[![Crates.io](https://img.shields.io/github/actions/workflow/status/jadens-arc/Ironmind/rust.yml)](https://github.com/Jadens-Arc/Ironmind)
[![ironmind](https://snapcraft.io/ironmind/badge.svg)](https://snapcraft.io/ironmind)


## Installation Instructions
### Cargo
`cargo install ironmind`

### Homebrew
First `brew tap jadens-arc/tap`

Then `brew install ironmind`

### Snapcraft
`snap install ironmind`


## Usage

### Run Program

```shell
ironmind myfile.bf
```
Output:
```
Hello, World!
```

### Visualize Execution

```shell
ironmind -v myfile.bf
```
Output:
![visualizer](https://s3.us-west-1.amazonaws.com/jadenarceneaux.com/visualizer.png)

## Build Instructions
### System Dependencies
- Rust
- Cargo

### Rust Dependencies (These install automatically)
- Clap for processing command line arguments and flags
- Cursive for TUI

### Build Notes
- Cursive is a wrapper around the ncurses linux library
  - If this library isn't present on your machine then it must be installed before ironmind can be built
  - On debian systems ncurses can be installed using ``` sudo apt install libncurses5-dev libncursesw5-dev ```

### Run for Debugging / Testing
```shell
git clone https://github.com/Jadens-arc/Ironmind
cd Ironmind
cargo run myfile.bf
```
To run automated tests run
```shell
cargo test
```
Tests are found in ```src/tests```

### Compiling Executable
```shell
git clone https://github.com/Jadens-arc/Ironmind
cd Ironmind
cargo build --release
```
The executable will be found at ```target/release/ironmind```

Run using ```./ironmind```

Feel free to move it to a ```Bin/``` directory if you want

If you do move it, you can use   ```ironmind myfile.bf``` anywhere on your system


Also, I found [this really cool](http://www.99-bottles-of-beer.net/language-brainfuck-101.html) BrainF*ck program from 2005 that outputs 99 Bottles of Beer by Andrew Paczkowski

Definitely worth checking out

