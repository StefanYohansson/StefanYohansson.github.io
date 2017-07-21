---
layout: post
title: Why so complicated javascript?
introduction: When all you want is build a project
comments: true
---

## Scenario

Javascript is a language changing a lot over time. Recently, a wave of tools show up in a scenario where always all you needed to do was include some files and use it.

If you already know these tools and what they are used for, you probably don't need to read this post. I'm not listing all pros and cons for every new tool, but I'll try to justify why we need it.

## So why change this simple workflow?

Because javascript evolved from build simple DOM manipulations on a website to build complex applications. This new use case for the language requested a lot from the syntax and project organization.

Thinking this way, people start to use an approach used for all languages. Start from an entry point and let the program decide what will be used and what not.

A decade ago we have a lot of programs wrote this way:

```html
<!-- html slice -->
<script src="lib1.js"></script>
<script src="lib2.js"></script>
<script src="app.js"></script>
```

```js
// app.js slice
var lib = new Lib1();
lib.doSomething();
var x = lib.get('x');
```

The problem is: all the libraries are imported on the global website/application. It'll easily expose your architecture and it could generate a lot of variable/object override.

Using application mindset:

```html
<!-- html slice -->
<script src="bundle.js"></script>
```

```js
// app.js slice
import Lib1 from 'lib1.js';

const lib = new Lib1();
lib.doSomething();
var x = lib.get('x');
```

so what we got now? **Bundles**. These bundles are built reading an entry point (app.js for previous example) and including on the bundle only javascript pieces **imported** and **used**. Using `import` we can include only the modules we want on current file scope (vendors or local files).

### NPM

npm is a dependency manager for javascript. Recently it isn't the unique, but it's the "default" when you install node. So why I need npm? because it'll handle all the vendor libraries for you. "In the old times", we used to copy and paste all vendors/third parties on our code tree, but projects/libraries start to use lot of libraries and today if we follow what we always did, we will finish the project with tons of duplicated dependencies of dependencies on our final bundle.

> The problem: bundle size that implies on final performance.

### Webpack

Webpack is used for generate the bundle, but not to parse/transpile the new syntax. It'll match file types based on your configuration and pipe the matching files to plugins, these plugins will parse and extract to outputs (**bundles**) defined in webpack config.

> The problem: include and use only what is necessary.

### Babel

Babel will parse and transpile the new javascript syntax. Without any loader/config babel only receive code and return the same code.

```
code -> code
```

but you can add a `stage-n` (*n* can be 3, 2, 1, 0) loader or any other plugin and it'll recognize supported syntax for this loader and transpile to "old javascript" for compatibility with browsers that doesn't support what you want.

Now, you can use the new syntax that enables to you write less code and do more.

```js
function saveForm(object) {
  if (object && (!object.name || !object.email)) {
    return false;
  }

  // save logic
}
```

Without the object check `ìf (object &&`, you can pass an `undefined` or `null` by mistake and receives an `TypeError: object is undefined`. This function can be replaced by:

```js
function saveForm({ name, email }) {
  if (!name || !email) {
    return false;
  }
}
```

It'll assign specified object keys to a local variables, plus do all the validations. Neat right?

> The problem: Old javascript can be improved to prevent basic mistakes, so why not?

### More easy

But all this complication can be resumed for the contributors and end users.

This stack can be setup and started for development or production with 3 commands.

- Install dependencies

```
npm install
```

- Start development server

```
npm start
```
To start development server for contributors, here you can include more tools like `hot reload` to reload application on save, `browser sync` to synchronize actions between browsers.

- Build production artifacts

```
npm build
```
To generate a folder with artifacts in order to serve it to end users. Generally, you just need to point your apache/nginx to this folder and open it.
