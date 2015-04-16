title: "Task 0.2.2: Build a Hexo Theme"
description: "I take an existing Theme, tear it down and rebuild it."
date: 2015/4/15 00:00:02
categories:
- CMS
- Hexo
tags:
- Task
- Code example
---

I took an existing Hexo theme, tore it down and completely rebuilt it to learn how they work.

<!-- more -->

**Adding a new theme:**

    git clone https://github.com/ppoffice/hexo-theme-hueman.git themes/hueman

Modify theme setting in _config.yml to hueman.

Easy to change theme but going back to landscape it no longer works! Ran hexo clean and then server again and now fixed.

**Templating engine:**

Jade is built for Node and is on github. EJS is on google code which is shutting down!!!  Not sure HAML is open source or runs on nodejs. Like the look of the built in swig engine. Can’t find any examples of that and all examples seem to be built on EJS. Found EJS on github so could use that… 

[https://github.com/mde/ejs](https://github.com/mde/ejs) [http://ejs.co/](http://ejs.co/) 

[https://github.com/hexojs/hexo/wiki/Themes](https://github.com/hexojs/hexo/wiki/Themes) 

[http://fuzzytolerance.info/blog/2014/06/03/from-octopress-to-hexo/](http://fuzzytolerance.info/blog/2014/06/03/from-octopress-to-hexo/) 

[http://jr0cket.co.uk/hexo/index.html](http://jr0cket.co.uk/hexo/index.html) 

[http://jr0cket.co.uk/hexo/customising-the-hexo-theme.html](http://jr0cket.co.uk/hexo/customising-the-hexo-theme.html) 

[http://blog.gluwer.com/2013/06/static-site-generators---a-road-to-hexo/](http://blog.gluwer.com/2013/06/static-site-generators---a-road-to-hexo/) 

**Building a new theme:**

Using yeoman generator "generator-hexo-theme" to scaffold and play. Archives link doesn’t work! Not convinced about that. May just simplify one of the existing themes… generated one uses tabs in code too! Boooo.

**Plugins:**

Want to add SASS: [https://github.com/celsomiranda/hexo-renderer-bourbon](https://github.com/celsomiranda/hexo-renderer-bourbon)