title: "Task 0.1.0: Set git defaults"
description: "Setting default values in the git bash console."
date: 2015/4/1 00:00:03
categories:
- Version control
- Git
tags:
- Task
- Code example
---

I use the git cli (basically allows you to issue git commands via the console) and I used to repeat the same commands, like my username, quite often.

I also used to issue seperate commands for each task like adding, committing and pushing. These commands can be combined, which saves time in the long term...

The following code helps with both!

<!-- more -->

These commands set useful defaults for git on a Windows machine:

    git config --global user.name "YOUR NAME"

    git config --global user.email "YOUR EMAIL ADDRESS"

    git config --global credential.helper wincred

    git config --global credential.helper cache

    git config --global credential.username patrickgrey

This adds default details to the C:\Users\MyLogin\\.gitconfig file meaning I don’t have to type my username the whole time. I guess I could add password to the helper but I like to have a brake on my commits...

Here is an example combined add, commit and push command:

    git add -A && git commit -m "added new feature" && git push