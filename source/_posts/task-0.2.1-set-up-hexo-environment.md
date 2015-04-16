title: "Task 0.2.1: Set up a Hexo dev environment"
description: "The steps I took to get Hexo running on my Windows machine."
date: 2015/4/15 00:00:01
categories:
- CMS
- Hexo
tags:
- Task
- Code example
---

These are the steps I followed to set up Hexo on my Windows 8.1 machine.

<!-- more -->

Install:

    npm install -g hexo-cli

from repository folder:

    hexo init

run npm:

    npm install

Add sublime project and add project file formats to .gitignore:

    *.sublime-project

    *.sublime-workspace

ran hexo server and says server is running at [http://0.0.0.0:4000/](http://0.0.0.0:4000/) but not found in browser. Hmmm.. Ahhhh, need to install first: [http://hexo.io/docs/server.html](http://hexo.io/docs/server.html) 

Still no luck - ahh, use [http://localhost:4000/](http://localhost:4000/) instead.

Quality cheese from the theme (template?). Don’t like the google search, want local version. RSS doesn’t exist on first serve.

Good start. Commit to git.

Hexo server doesn’t seem to refresh on file changes. hexo generate -w works. Wonder if I could implement browsersynch…

Bah! That was too easy. Just installed [https://github.com/hexojs/hexo-browsersync](https://github.com/hexojs/hexo-browsersync) and it works now. No need to knit myself :-)