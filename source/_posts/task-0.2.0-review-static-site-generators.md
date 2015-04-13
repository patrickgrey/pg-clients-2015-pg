title: "Task 0.2.0: Review static site generators"
date: 2015/4/1 00:00:04
---

I’ve used Wordpress a fair bit but like the performance of static sites (and the cheap hosting!) So, having decided to go static, my first job was selecting a static site generator.

<!-- more -->

I was keen on a node.js generator (can’t find any io.js) to keep my stack as simple as possible. However, there were other considerations:

* Is the generator well maintained?

* How long has it survived?

* What kind of support does it have?

* Is it flexible enough to allow me to do all the funky stuff I want to do other than blogging?

* Is blogging and then deploying easy?

[https://staticsitegenerators.net/](https://staticsitegenerators.net/) & [https://www.staticgen.com/](https://www.staticgen.com/) were useful for initial comparisons.

Shortlist (with very quick, and probably unfair, notes):

* [http://roots.cx/](http://roots.cx/) 

    * Node.js!

    * Not built for blogs and recommends against it!

    * According to site, well sponsored

    * Like the development workflow

    * source maps

    * Carrot also sponsors the shipping solution - a little too tied into one company? > ship & netlify

* [http://wintersmith.io/](http://wintersmith.io/)

    * Not update frequently

* [http://www.metalsmith.io/](http://www.metalsmith.io/)

    * Node.js

    * Tempting but a lot of work!

    * Lots of plugins but does that mean I need to build most of the system myself?

    * Lack of documentation but has tutorials:

        * [https://azurelogic.com/posts/building-a-blog-with-metalsmith/](https://azurelogic.com/posts/building-a-blog-with-metalsmith/)

        * [http://www.robinthrift.com/posts/metalsmith-part-1-setting-up-the-forge/](http://www.robinthrift.com/posts/metalsmith-part-1-setting-up-the-forge/) 

* [http://hexo.io/](http://hexo.io/) 

    * Nearly missed this one!!

    * Nodejs

    * Well maintained

    * Blog aware

    * Yeoman theme generator: [https://github.com/tcrowe/generator-hexo-theme](https://github.com/tcrowe/generator-hexo-theme) 

    * Looking good, time to read the docs…

    * Getting excited… want to start building… must read rest of docs.

* [http://assemble.io/](http://assemble.io/)

    * Node.js

    * Has Yeoman generator - although not updated in a while

    * Active github

    * Seems at an early stage - too early, I’m out

    * Not blog aware!

    * Might come back to this one.

* [https://middlemanapp.com/](https://middlemanapp.com/)

    * Uses Ruby, heavily! So, not for me.

* [https://github.com/es6rocks/harmonic](https://github.com/es6rocks/harmonic)

    * At too early a stage but I like the look of it.

* [http://jekyllrb.com/](http://jekyllrb.com/)

    * The Daddy of generators

    * I’m familiar with it

    * Has Yeoman generator (2 very good ones in fact)

    * But, depends on Ruby.

* [http://octopress.org/](http://octopress.org/)

    * About to undergo major re-release

    * I tried in the past and prefered the extra flexibility Jekyll gave

After a morning reviewing, I decided to go with Hexo. It is blog friendly, node.js and looks wide open for customisation.