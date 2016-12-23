---
layout: post
title: ProjectSH for lazy people
introduction: How direnv lead me to write a new tool to complete it.
---

Have you ever need to change from one project to another? If you get yourself writing `cd ../../ [...]` just to go somewhere else to execute one command or cat a file or something else, I know your pain.

Recently, I found a project called `direnv`, an environment switcher for the shell, and things start make sense for me. When I go to a folder, direnv automagically execute a script to configure/initialize things, so I just need to start coding. Everything was beautiful until I start programming in projects using API + front-end as separated projects, now things start being annoying again.

# The Problem

normal people: open one terminal, open two tabs, on first tab open things from project 1, maybe tiled on tmux maybe not, on second tab open things from project 2. Hard lift is just switch between tabs.
Think this way, you are on tab 1, writing things to your front-end project using vim, so you realize that a migration is missing on your API and need to go to another project. It will be nice if we have something like:

```
$ goto project2

/* edit some things */
/* execute commands */

$ goto project1
```

Or if you are lazy like me: Imagine that you just woke up and will start programming, when you open the terminal, need to `cd` to your project folder.

# The Solution

Today, I write a solution for me (maybe only my problem). I just called [projectsh](https://github.com/StefanYohansson/projectsh), it's an easy jump between projects and it's easy to use (at least for me).

You just need to go into your project 1 folder and type:

```
$ cd /where/is/project1
$ projectsh --add project1
```

same for project2:

```
$ cd /where/is/project2
$ projectsh --add project2
```

now if you are on project1 or anywhere, you just need to run:

```
$ projectsh project2
```

and magically it will `cd` into project2 folder.
If you want to remove a project index, run:

```
$ projectsh --remove project1
```

If you are using direnv, it will be awesome, you will run projectsh to go into a folder and direnv auto load the environment (from .direnv file) for you. Now, it's time to work without run thousands of commands everytime.
