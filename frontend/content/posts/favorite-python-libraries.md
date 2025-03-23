+++
title = 'My Favorite Python Libraries'
date = 2024-05-08T07:06:38-07:00
draft = false
readTime=3
+++

## TL;DR

1. Tkinter - GUI's
2. Pyautogui - mouse and keyboard automation
3. Flask - web servers

## Why

### Obligatory Yap Session

There's one unifying aspect to each of these libraries: conciseness. Throughout my time writing Python, I've learned that what matters isn't just ease of use. It's about getting straight to the heart of a problem and directly crafting a solution. Good Python code is the direct manifestation of an idea, not a technical document. It might not be the best tool for teaching the low-level aspects of computer science or crafting intricate, efficient systems, but it is excellent for quickly bringing an idea to life and iterating on it. Python is the Swiss Army knife of computing, and these are some useful accessories to keep in your back pocket.

### TKinter

I've tried GTK, QT, PyGame, Electron, Tauri, and a whole bunch of other desktop GUI frameworks. TKinter by far is the easiest to pick up and make something functional with. If you're ever in a pinch and you just need a simple GUI to put a face to a function, this is the library.

> I'm not going to lie, the programs that you end up with using this library are low-key ugly, but people have made forks of it to try to address that.

Here's a simple program that creates a button to open YouTube

```python
import tkinter as tk
import webbrowser

def open_youtube():
    webbrowser.open('http://www.youtube.com')

root = tk.Tk()
root.title("Open YouTube")

open_button = tk.Button(root, text="Open YouTube", command=open_youtube)
open_button.pack(pady=20)

root.mainloop()
```

### Pyautogui

Automate mouse movements and keypresses. Need I say more? This is perfect for automating basically any random task that doesn't have an API. My favorite thing to do is to use this to automate sending text messages (MacBook thing) or Instagram DMs. I've also used this professionally to create development tools to test our access control systems' kiosks by simulating the input of an RFID badge scanner.

Here's a simplified version of that program

```python
from pyautogui import typewrite, press
from time      import sleep
from sys       import argv

# Badge RFID code is passed in as a command line argument
user_input = argv[1]

print("Scanning...")

sleep(2)
typewrite(user_input)
press("Enter")
```

### Flask

Flask is the simplest way to create a web server. If you're familiar with full-stack development in Python, you might have heard of Django. Django is great; it's lightweight and packs a punch, including built-in user authentication, database management, etc. The reason I'm recommending Flask over Django isn't that one is necessarily better than the other—they're both great. From my experience, Django has far more boilerplate code than Flask and has a much more defined project structure. Flask allows you to create a simple API for a project without completely restructuring it. Django is great when your whole project is centered around full-stack web development, and you want a myriad of features out of the box. Flask is great when you just need a web server to have a small API or a single-page web app.

Here's a very simple API endpoint to take in a name encoded in JSON and return "Hi" + name. Although it might be a simple program, starting a web server, declaring a route, and handling JSON encoding and decoding in only 11 lines is impressive and great for making MVPs for smaller projects.

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/greet', methods=['POST'])
def greet_person():
    data = request.get_json()
    name = data.get('name', 'there')  # Default to 'there' if name not provided
    return jsonify({'message': f'Hi {name}'})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8080)
```
