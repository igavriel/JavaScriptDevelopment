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
**Webpack dev servers** - server from memory, hot reloading
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
Transpliling =  transpiling is a specific kind of compiling. 
Compiling is the general term for taking source code written in one language and transforming into another.
Transpiling is a specific term for taking source code written in one language and transforming into another language that has a similar level of abstraction.

**Babel** modern, standeads-based JS, 

**TypeScript**
    superset of JS (over ES6 and ES5)
    type safty for JS
    safer refactory

|TypeScript                      | Babel                               |
|--------------------------------|-------------------------------------|
|autocomplete                    | wrtie standard JS                   |
|readability                     | leverage full JS ecosystem          |
|safer refactoring               | user experimental feature easier    |
|additional non-standard feature | no type defs, annotations requiered |


* babel configured from .babelrc file 
* addind a Babel section in the package.json file

deploy to node or electron support to es
ES5                     vs Transpiled ES6
faster - no transpile  -

Bundle
----------------------------
Bundle js for browser support
* CommonJS (CJS) popular by node  
    * var jquery = require('jquery');

* ES6 Modle - (ES6 = ES2015)
    * import jQuery from 'jquery';
    * standard
    * static anayzable
        * improve autocomplete
        * refactoring
        * tree shaking = dead code illimination
    * easy to readability  
        * named imports
        * default export (of my module for others to read)

**Require JS** - first popular bundler
**browserify** - (simple) original, first npm packager for the web, plugin based
**Rolup** -(performance) tree shaking support, faster reload, quite new, great for library
**JSPM** - (runtime loader and buildin packege manager) uses SystemJS - universal modle loader, load module on run time, install from npm, uses rollup

**Webpack** - (comprehensive)
    * JS, CSS, images, fonts, html and more
    * bundle splitting
    * built in hot reloading web server
    * webpack2 offer tree shaking

sorcemaps = pdb

-----------------------------------------
Linting
-----------------------------------------
Linting is the process of running a program that will analyse code for potential errors
