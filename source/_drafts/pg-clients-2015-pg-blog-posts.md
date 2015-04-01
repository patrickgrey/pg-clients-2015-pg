# ![image alt text](image_0.png)* * *


# Patrick Grey blog posts

## 01 April 2015 - Why start a new personal website?

### wee-article

**strategy**

A good date to start a new website…

The old website helped me learn about responsive design and performance but it just didn’t DO much. I didn’t have goals for it other than being a place to display my previous work. Blogging was also a little clumsy to get online, deterring me from writing.

The purpose of my new site is to get more work by:

* raising my profile via (short, focussed) blogging and,

* using the site as a platform to demo the processes and technologies that are required for many of today’s web development tasks.

I will develop this site in public, iterating to add new features and blogging as I go, as long as minor things like work, life and beer don’t get in the way…

## 01 April 2015 - Iteration 0: The Plan!

### wee-article

**planning**

For each iteration I want some high level goals broken down into small tasks that I can work on in my spare time, blogging about the more interesting ones. Here is iteration 0 - I doesn’t even result in a public website!!

* Iteration 0

    * Aim is to have a basic website up that has a solid workflow.

    * It has 5 technical goals:

        * Accessibility

        * Offline first

        * Mobile first responsive

        * High performance

        * Foundation for progressive enhancement.

    * It should provide contact, services and a blog.

    * GA should be built in from the start.

* Tasks 0

    * 0.1: Setup repository

    * 0.2: Create a static site

        * 0.2.0: Review static site generators.

        * 0.2.1: Get basic site up

        * 0.2.2: Build basic template.

    * 0.3: Add CI development flow

        * [http://24ways.org/2014/developing-robust-deployment-procedures/](http://24ways.org/2014/developing-robust-deployment-procedures/)

            * Try alternative deployment techs

    * 0.4: Testing: [http://blog.codeship.com/casperjs-examples/](http://blog.codeship.com/casperjs-examples/) 

## 01 April 2015 - Task 0.1.0: Set up git repository

### task

**git**

Set up config in git cli for the first time!!

git config --global user.name "YOUR NAME"

git config --global user.email "YOUR EMAIL ADDRESS"

git config --global credential.helper wincred

git config --global credential.helper cache

git config --global credential.username patrickgrey

This adds default details to the C:\Users\MyLogin\.gitconfig file meaning I don’t have to type my username the whole time. I guess I could add password to the helper but I like to have a brake on my commits...

## 01 April 2015 - Task 0.2.0: Review static site generators

### task

**hexo.io, Node.js, web development**

I’ve used Wordpress a fair bit but like the performance of static sites (and the cheap hosting!) So, having decided to go static, my first job was selecting a static site generator.

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

## 01 April 2015 - Task 0.2.1: Set up Hexo Site

### task

**hexo, web development, testing**

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

hexo server doesn’t seem to refresh on file changes. hexo generate -w works. Wonder if I could implement browsersynch…

Bah! That was too easy. Just installed [https://github.com/hexojs/hexo-browsersync](https://github.com/hexojs/hexo-browsersync) and it works now. No need to knit myself :-)

## 01 April 2015 - Task 0.2.2: Build basic layout

### task

**hexo**

First clarify the difference between Themes and templates. Templates are the page components that are part of a theme.

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

WAnt to add SASS: [https://github.com/celsomiranda/hexo-renderer-bourbon](https://github.com/celsomiranda/hexo-renderer-bourbon)

<table>
  <tr>
    <td></td>
  </tr>
</table>


