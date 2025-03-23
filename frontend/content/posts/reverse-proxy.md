+++
title = 'Reverse Proxies Explained: The Underrated Third Wheel of Web Development'
date = 2025-02-27T18:20:36-08:00
draft = false
isFavorite = false
readTime=4
+++
## Introduction

By far, the worst part of my job is setting up new workstations for new developers. There's the easy stuff, like installing Linux and getting all their tools and IDEs set up. But then comes the challenge of getting a development web server up and running. It would usually take damn near the entire programming team putting our noggins together to try to get Apache up and running with the PHP-fpm on a new developers machine. I think this was largely caused by the fact that not a single one of us had any functional idea as to what the hell Apache was actually doing. Our main strat was just copying the config files from our existing machines and then spending the entire day figuring out why that didn't work. Recently, in an effort to change the hosting of my blog, I had to set up reverse proxying through NGINX. Lowkey, I was dreading it the whole time, but it literally took me like 2 minutes to figure out. I think for the first time in my life, I actually know why NGINX and Apache exist, and I hope to share my insights so you guys can understand it too. 

## What is a "Reverse Proxy"

It maps one port (an external port) to another port (an internal port) or to some static files. That's it. It just kinda sits between the end user and your server/runtime.

> If you don't know what a port it, you're cooked, I'm not explaining it

For example, the API I wrote in Node.js has an Express.js server running on port 3000, but it's bound to my loopback address (meaning you can only access the port from the device itself). Then, NGINX has a server configured to pass through port 3000 to port 443 (the port for HTTPS traffic). Here's an example for NGINX.

```apache
server {
	server_name api.jadenarceneaux.com;

	location / {
		proxy_pass http://localhost:3000;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;
	}

	error_log /var/log/nginx/api.jadenarceneaux.com.error.log;
	access_log /var/log/nginx/api.jadenarceneaux.com.access.log;

	listen 443 ssl; # managed by Certbot
	ssl_certificate /etc/letsencrypt/live/yuh.pem; # managed by Certbot
	ssl_certificate_key /etc/letsencrypt/live/aye.pem; # managed by Certbot
	include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
	ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}
```

If you're anything like me, you're probably asking yourself at this point, "Why not just host the server on port 443 directly? Wouldn't that be more straightforward?". And honestly, you'd kinda be right. There's nothing stopping you from raw dawging your server if that's what you like, but it's not recommended. First of all, a reverse proxy makes handling SSL certificates a whole lot easier.  You literally just run one command, and Certbot generates the certificates, adds them to your websites configs, and handles the whole SSL handshake thing for you. Also, reverse proxies add a layer of security between the outside world and your server. However, the main reason is that not all web servers function like Node.

## PHP-FPM

Expanding on that last statement. Express is cool because its server typically responds in plain text over an HTTP connection. The PHP-FPM is a little different. It's still a runtime for PHP that has an internal server. However, unlike Express, which uses HTTP, it uses a protocol called FastCGI, a high-speed protocol to allow web servers to communicate with applications. In addition to providing a bridge between the external port 443(HTTPS) and the internal port 9000(FastCGI), Apache also plays a role in converting a FastCGI response to a regular HTTP response. Here's an example of an Apache config that can do so. 

> Node: In this example, there's an `index.php` file in the document root. 

```apache
<VirtualHost *:443>
	ServerName yuh.local
	ServerAdmin webmaster@localhost
	DocumentRoot /home/jaden/Documents/yuh

	SSLEngine on
	SSLCertificateFile /etc/apache2/ssl/yuh.crt
	SSLCertificateKeyFile /etc/apache2/ssl/aye.key

	ErrorLog ${APACHE_LOG_DIR}/error.log
	CustomLog ${APACHE_LOG_DIR}/access.log combined

	<Directory /home/jaden/Documents/yuh>
		AllowOverride All
		Require all granted
		DirectoryIndex index.php
		CGIPassAuth On
	</Directory>


	<FilesMatch \.php$>
		SetHandler "proxy:unix:/run/php/php7.7-fpm.sock|fcgi://localhost"
	</FilesMatch>
</VirtualHost>
```

## Other Things

In addition to doing all of that, reverse proxies can also handle things like load balancing, routing traffic a URL to one of multiple servers depending on server load. Oh yeah, and it can just host static HTML files if that's what you need, lmao.
 