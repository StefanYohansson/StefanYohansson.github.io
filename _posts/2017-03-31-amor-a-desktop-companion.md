---
layout: post
title: AMOR - a desktop companion
introduction: When you have memory and a lot of free time
comments: true
---

Hi,

I am a crazy person, don't judge me. Recently, a friend point me out to this software called AMOR. Just for curiosity, "Amor" in portuguese (my main language) means love. <i class="em em-love_letter"></i>

So what the heck is this software? well, let's explain by paste git description here: "**A**musing **M**isuse **O**f **R**esources animation that sits on top of the curent window". Now you know that is a waste of resource, maybe you'd closed the tab, but if you don't do it yet, here are some screenshot:

<blockquote class="imgur-embed-pub" lang="en" data-id="4O0rPqc"><a href="//imgur.com/4O0rPqc">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

<blockquote class="imgur-embed-pub" lang="en" data-id="iQfyRoD"><a href="//imgur.com/iQfyRoD">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

<blockquote class="imgur-embed-pub" lang="en" data-id="X9MUH1M"><a href="//imgur.com/X9MUH1M">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

Yeah, it's cute AND (^) damn it just take 6MiB from your computer.

<blockquote class="imgur-embed-pub" lang="en" data-id="RUI1UNO"><a href="//imgur.com/RUI1UNO">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

AMOR is an old software and only have themes from initial release, so I decide to add some themes for me (and some friends). From this initiative born the first theme: Hatsune Miku from Vocaloid Project (screenshots). Craft your theme is an easy task (I was thiking on something like a lot of xmls and pain) but it's just cut some spritesheet (program use separate pngs), create actions with some sprites and define a scene sequence, so your companion will execute random action from sequence array every time.

[Git repo](https://cgit.kde.org/amor.git)

build instructions:

```
$ git clone git://anongit.kde.org/amor.git
$ cd amor
$ git apply <my-hatsune-patch-here>
$ mkdir build
$ cd build
$ cmake ..
$ make
$ sudo make install
```

[Working patch for Hatsune Miku](https://gist.github.com/StefanYohansson/7980c45feb015ba1193d3d2c3a99540e)

AMOR is available on package manager for Ubuntu, Arch and Debian (maybe others), but this way only allow you to use default themes, no Hatsune for you yet. I'm working on a fork to add import theme feature in runtime.

That's all folks.
