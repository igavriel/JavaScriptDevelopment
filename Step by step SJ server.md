[javascript-development-environment](https://app.pluralsight.com/player?course=javascript-development-environment&author=cory-house&name=javascript-development-environment-m4&clip=5&mode=live)

-----------------------------------------
NODE JS latest version - recommanded NodeJS
-------------------------------------------
default packages for npm - package.json
[bit.ly/jsdevpackagejson](bit.ly/jsdevpackagejson)

open command line on root and run 
> npm install

node security check  ---> vulnerabilities install globally
> npm install -g nsp

test  vulnerabilities
> nsp check

build a script
> node [path]
> node buildScripts\srcServer.js

-----------------------------------------
**development web servers**
---------------------------
**http-servers** - simple http no config, only root folder as parameter
**live-servers** - lightweight, hot reloading (every save the server update)
**Express** - highly configurable, use as production as well, alternative: koa and hapi
**budo** - hot reloading
**Webpack dev servers** - server from memort, hot reloading
**Browsersync** - free web server - sync between several browsers, browser and device testing

-----------------------------------------
**Share work-in-progress** (in the public web)
----------------------------------------------
**localtunnel** - hole in the firewall, expose local tunnel to the web
    npm install localtunnel -globally
    start your app
    lt --port 3000

**ngrok** - hole in the firewall, security
    sign up
    install ngrok
    install authtoken
    start your app
    ./ngrok http 80

**now **- no hole in firewall, upload site to the web, usefull to nodejs
    npm install -g now
    create start script (express for example)
    now    <-- deploy

**surge** - static html and css files, no hole in firewall
    npm install -g surge  <-- provide email and password
    surge

-----------------------------------------

**automation**
--------------
**Grunt** - the original
    config over code, file oreinted
**Gulp**
    im memory stream, no write to disk - fast
    pipe output to the following step as input
**npm scripts**
    declared in package.json
    world largest package manager
    use tools directly
    no need for seperate plugins
    enter code here

-----------------------------------------

-----------------------------------------

**Transpliling**
----------------
**Babel** modern, standeads-based JS, 

**TypeScript**
    superset of JS (over ES6 and ES5)
    type safty for JS
    safer refactory

TypeScript |vs| Bable
autocomplete                    | wrtie standard JS
readability                     | leverage full JS ecosystem
safer refactoring               | user experimental feature easier
additional non-standard feature | no type defs, annotations requiered
