+++
title = 'Distributing Ironmind + Rust Continuous Integration' 
date = 2024-03-30T09:35:13-07:00
draft = false
readTime = 11
+++
> Featuring Cargo, Snap, and Homebrew 

Believe it or not, I'd like people to use my software, especially [Ironmind](https://github.com/Jadens-arc/Ironmind). I'm finally reaching a point in the project where I feel content with it.

So it's time to share it with the world.

## Unit Tests

### Cargo Test

The first step was setting up automated unit tests to build and test my project each time I merged with the master branch. Fortunately, Rust's build system, Cargo, makes this super easy. To read the documentation for it [click here](https://doc.rust-lang.org/rust-by-example/cargo/test.html) but to paraphrase, tests work off of Cargo's existing module system. Tests go into the `src/tests/` directory. When `cargo test` is run the compiler will first run the `mod.rs` file in the directory. Like other rust modules, supplementary files can be stored around the `mod.rs` file. 

Inside the `mod.rs` you must expose a public module called tests configured as test using macros.

Like this...

```rust
// src/tests/mod.rs

#[cfg(test)]
pub mod tests {
    // tests go in here
}
```

Inside this tests module, you expose each test as a public function along with a call to the test macro.

Something like...
Each function proceeds with the test macro will get called when `cargo test` runs making it very easy to organize multiple tests. Test function can return a Result or just panic. A panic or an Err variant Result type will both indicate a failure. In the documentation they use panics but I prefer using Results because you're able to provide more information as to why a test failed.

```rust
// src/tests/mod.rs

#[cfg(test)]
pub mod tests {
    #[test]
    pub fn test_a() {
        // this test
    }

    pub fn test_b() -> Result<(), String> {
        // that test
    }
}
```

The tests for Ironmind are quite long, too long to fit in this blog post but you can find them [here on my GitHub](https://github.com/Jadens-arc/Ironmind/blob/main/src/tests/mod.rs). 

### GitHub Automation

It's as simple as adding a `.github/workflows/rust.yml` file to the root of your project

If you're using GitHub you can click on the Actions tab on the web interface and configure actions for Rust. GitHub will automatically generate this file for you. The best part is the fact that every almost Cargo project uses the `cargo test` command to run unit tests. Which means every `rust.yml` file is exactly the same.

If you'd rather create it yourself or you don't feel like using the GitHub web interface just copy this into the aforementioned path...

```yml
name: Rust

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

env:
  CARGO_TERM_COLOR: always

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Build
      run: cargo build --verbose
    - name: Run tests
      run: cargo test --verbose
```

### Unit Tests Conclusion

Now whenever you push or merge with master these automated unit tests will run and alert you if anything goes wrong.

## Publishing to Cargo

I'm going to start with the easiest package manager to publish to

Go to [crates.io](https://crates.io) and log in with your GitHub account

Go to [crates.io/me](https://crates.io/me) and generate a new API token for your device

Run `cargo login` and paste your API key

Then you have to make sure your Cargo project meets the requirements to be published

It must have all of the following must be defined in the `cargo.toml` file
- License or license file
- Description
- Homepage
- Repository
- Readme

Here's the `cargo.toml` for Ironmind

```toml
[package]
name = "ironmind"
version = "0.3.15"
edition = "2021"
authors = ["Jaden Arceneaux <contact@jadenarceneaux.com>"]
description = "A Brainf*ck interpreter and code execution visualizer built in Rust"
license = "MIT"
readme = "README.md"
repository = "https://github.com/Jadens-arc/Ironmind"
keywords = ["BrainFuck"]
# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
clap = { version = "4.4.10", features = ["derive"] }
cursive = "0.20.0"
```

Then all you have to do is run `cargo publish` and congrats your project is published. 

Users can run `cargo install <your program>`. It'll download your source code along with the dependencies, compile them into one executable on the user's system, and move it to their bin directory. It is worth mentioning that almost no other package manager works like this. Most of them require the publisher to compile it on their system and upload the executable to a repository. Conceptually, you shouldn't base your understanding of package managers off of Cargo. It gets away with this because it is both a package manager and a build system. 

I feel like this is the point where I have to give the obligatory warning to not publish superfluous software. Your project should be somewhat unique and provide value to someone other than yourself. Don't publish your Hello World program. No one's going to stop you, but you should be considerate. Think of the children.

Strap in buds, it only gets steeper from here

### Publishing to Homebrew

Homebrew is far more traditional. 

Except for the fact that, like everything else in Apple's universe, the terminology is weird.

For this, you only need to know two of them

| Word    | Definition       |
|---------|------------------|
| Tap     | A repository     |
| Formula | A program        |

A Tap is a literal repository hosted on GitHub that specifies Formulas available for installation. You can name your tap whatever you want so long that it starts with "homebrew-". Each Formula is declared in a dedicated ruby file. The naming convention is `<your project>.rb`. Create a new repository and define your ruby file for your Formula.

Then you're going to want to compile your program using `cargo build --release`. The executable found at `target/release/<your project>` is what you will distribute to users. You're going to want to compress this executable into a tar.gz file. This can be done using `tar -cvzf <your project>.tar.gz <your projects executable>`.

Then you're going to want to upload this tarball somewhere so that you can provide a URL to it for Homebrew. DO NOT JUST PUT IT IN YOUR REPOSITORY. Instead, use the Releases feature on GitHub. On the GitHub web interface, On the right sidebar, under the Releases header, click Create a new release. Attach your compressed executable to the release and set the Tag, Title, and Description. Publish the release. Copy the link to the compressed executable and save it for later ;)

You're also going to want to get the SHA256 hash of your compressed executable so Homebrew can verify the installation. There's some kind of way to do this automatically but I don't remember what it was. So instead run `shasum --algorithm=256 <your compressed executable>` and save that hash for later as well
 
Inside the ruby file, you must declare a class that inherits from the Formula class. Inside that class, you must define a few values.
- Description
- Homepage
- URL (Link to that compressed executable from earlier, I told you to save it)
- SHA256 (The hash from earlier)
- License 

Then you're going to want to define the install method. Inside that method, you're going to want to call `bin.install` and pass in the name of the executable you want to move into the bin directory (this is just the name of your project).

Then you're going to want to define your test block. Homebrew uses this to verify that your program runs. You just call `system` and pass in the path of your executable preceded with the bin directory (use `#{bin}` to insert the bin directory into the string).


Here's what Ironmind.rb looks like

```ruby
class Ironmind < Formula
  desc "A BrainF*ck interpreter written in Rust"
  homepage "https://crates.io/crates/ironmind/"
  url "https://github.com/Jadens-arc/Ironmind/releases/download/v0.3.15/ironmind.tar.gz"
  sha256 "9a8bfa2d9dec6c9c941bf34156c3d3dd427c5f50153e387666f142f259777fc3"
  license "MIT"

  def install
    bin.install "ironmind"
  end

  test do
    system "#{bin}/ironmind"
  end
end
```

Commit these changes and push them to the repository for your tap and now users can add your tap and install the Formulae defined in it

[My tap](https://github.com/Jadens-arc/homebrew-tap) is in a repository called jadens-arc/homebrew-tap

To add my tap run 
```shell
brew tap jadens-arc/tap
```

To install Ironmind run
```shell
brew install ironmind
```

## Publishing to Snap

If you know me IRL, you know that I shit on Snap for being bloated. I stand on that, it's bloated, just run `lsblk` and see for yourself. But it is also really convenient. For beginners and for professionals I'd honestly recommend Ubuntu and it's piles of ~~shit~~ tools including Snap. If you're a beginner it makes it easy to get into Linux. If you're a developer new to a job it makes it really quick to get a workstation set up and get up and running wherever you are. Regardless of who you are, you get excellent documentation and mountains of StackOverflow answers.

Snap works by creating isolated environments for your code to run in, hence the need for loopback devices. By default, snaps only have access to the files they're distributed with and cannot access very much at the system level. 

Publishing to Snap only requires one file to start with. A `snapcraft.yaml` file in the root of your project. 

### Snapcraft.yaml

You can generate it by creating a new directory outside of your project and using `snapcraft init`. Then inside that directory, there will be another directory called snap and in that directory, you'll have your `snapcraft.yaml` file. Copy it to the root of your project.

After declaring the basic information from name to description you must specify the grade of your project. This gives snap insight into the development status of your project. There are only two options:
- `devel` for projects still in development
- `stable` for complete projects ready to be installed 

Then you specify the confinement strategy for your project. There are three options `devmode`, `classic`, and `strict`. Ideally, all software should be published in strict mode. This means the software will only have access to a limited number of interfaces needed for it to function. Devmode is for snap in development, allowing developers new to snap the ability to quickly iterate on designs. Snaps published in devmode must be installed using the `--devmode` flag and they cannot be published as `stable`. Classic confinement is for programs that **legitimately** need full access to the system. These packages must be installed using the `--classic` flag (e.g. `snap install code --classic` for VSCode)

Then you specify the architectures to build for when the package is published. While you can install Snapcraft on a Mac this is only to develop Snap packages. There is no support for installing them.

Under `parts -> <your app>` you configure the build instructions for your package. Under `build-packages`, you specify any system dependencies needed for your app to build.  Under `source` you specify the repository to build from. Under `plugin` you specify the build plugin for your program. For Ironmind we use the Rust plugin which builds our project using Cargo. To see all available plugins run `snapcraft list-plugin`

Under `apps -> <your app>` you first set the command which is the path to the executable binary.

The final step is to configure the [interfaces](https://snapcraft.io/docs/interface-management) your app needs to run. This allows your app to leave the isolated environment it is installed in.



```yaml
name: ironmind # you probably want to 'snapcraft register <name>'
base: core22 # the base snap is the execution environment for this snap
version: '0.3.15' # just for humans, typically '1.2+git' or '1.3.2', I like to match this to my cargo.toml version
summary: Brainf*ck interpreter and code execution visualizer # 79 char long summary
description: |
  Built in Rust.
  Written by Jaden Arceneaux 

grade: stable # must be 'stable' to release into candidate/stable channels
confinement: strict # use 'strict' once you have the right plugs and slots

architectures:
- build-on: amd64
- build-on: arm64
- build-on: armhf

parts:
  ironmind:
    build-packages:
      - libncurses5-dev
      - libncursesw5-dev
    source: https://github.com/Jadens-arc/Ironmind.git
    # See 'snapcraft plugins'
    plugin: rust

apps:
  ironmind:
    command: bin/ironmind
    plugs:
      - home
      - removable-media
      - desktop
```

### Publishing Application
From the command line, you want to run 
``` shell
snapcraft login
```

``` shell
snapcraft register <your app>
```

``` shell
snapcraft
```

This will authenticate your account, register your application with the Snap store, and generate a Snap Package from your `snapcraft.yaml` file.

To test it out, you can run `snap install ./<your app>.snap`

Then run
```
snapcraft upload <path to your app>.snap
```

From there you can go to [snapcraft.io](https://snapcraft.io/) to manage your package. 

Using the web interface you can connect your Snap package to a GitHub repository such that each time a merge into master occurs snap will automatically build and distribute your package

## Conclusion
I really hope this helps someone. If you'd like to suggest any corrections or adjustments feel free to email me at contact@jadenarceneaux.com

I hope you all have a lovely day.