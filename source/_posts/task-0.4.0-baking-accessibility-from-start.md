title: "Task 0.4.0: Baking Accessibility in from the start"
description: "In this task I wanted to learn how best to bake in accessibility to my design and content from the very beginning and then ensure that accessibility remained central to my future work."
date: 2015/4/16 00:00:00
categories:
- Accessibility
tags:
- Big long article
- Task
---

### Strategy

In this task I wanted to learn how best to bake in accessibility to my design and content from the very beginning and then ensure that accessibility remained central to my future work.

<!-- more -->

I found the [WebAIM Introduction to Web Accessibility](http://webaim.org/intro/) very useful in terms of [defining the problems people with disabilities face](https://www.youtube.com/watch?v=yx7hdQqf8lE) and outlining how to approach improving accessibility.

From a strategic point of view, it requires:

* [awareness if the issues people face](http://webaim.org/intro/#people),

    * to maintain this awareness, I understand I need to keep on top of standards, assistive technologies and my website change.

* leadership

    * Strategic decisions have to be made based on awareness.

    * An easy decision for me to make but on larger projects the argument has to be made based on the fact that [accessibility is beneficial to organisations](http://webaim.org/intro/#short), users and that it is a legal requirement!

* policy & procedures

    * My policy is to implement from the beginning and design for accessibility in all new additions to the site.

    * My procedures are based on updated awareness to implement what is required and then test before making it public.

### Implementation

I thought the best way to technically Implement accessibility features was to audit the basic site I have created and see how each part could be enhanced using the following techniques (again these are from [WebAIM Introduction to Web Accessibility](http://webaim.org/intro/)):

* Design with accessibility in mind, not only things like contrast but also [a site has to be usable to be accessible](http://www.smashingmagazine.com/2015/02/23/bbc-iplayer-accessibility-case-study/).

* Providing an appropriate document structure.

* Offering a ‘skip to main content’ link.

    * Interestingly, this is becoming redundant as screen readers offer better navigation options

    * Also, there have been [major problems in webkit browsers implementing the skip to main content technique](http://a11yproject.com/posts/skip-nav-links/), even requiring a [skip to content polyfill](http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/)!

* Facilitating keyboard access to all parts of the site.

* ARIA to fill in where standard element semantics aren’t available.

    * From [a good getting started guide for ARIA](http://a11yproject.com/posts/getting-started-aria/):

        * "To create accessible applications, basic principles of semantic HTML, keyboard support, and color contrast should still be the primary focus of developers. ARIA may be used to “fill in the blanks" where web page information isn’t understood or available to a screen reader via HTML alone.”

    * [About ARIA landmark roles](http://rawgit.com/w3c/aria-in-html/master/index.html)

        * Landmark

            * Identify large content areas used for navigation

        * Document

            * Structural description for a section. Only use if semantics not covered by HTML element

        * Widget

            * Describe common interactive items that lack semantic equivalents

        * States and properties:

* Properties describe relationships between elements and don’t generally change. States reflect user interaction, changed with JavaScript.

    * [Another good ARIA landmark article](http://alistapart.com/column/wai-finding-with-aria-landmark-roles) says:

        * "The [Accessible Rich Internet Applications (ARIA)](http://www.w3.org/TR/wai-aria/) suite from the W3C’s [Web Accessibility Initiative (WAI)](http://www.w3.org/WAI/) is one piece of the web accessibility puzzle. Now, the first rule of ARIA usage is—I am not making this up—we do not use ARIA (unless we need to). Before you set out to use it, you should already have a solid authoring craft: careful, semantic treatment of content; proper use of attributes and textual alternates; sensitivity to contrast and font sizes. Support for accessibility leads to well-crafted HTML and vice versa… ARIA is a gap-filler for HTML semantics."

* All links should make sense out of context

* Appropriate Alt text

* Don’t rely on colour alone to convey meaning

* Clear, easy to read content

* Don’t rely on Javascript to make page work

* Make sure JavaScript event handlers aren’t device dependent (e.g. mouse) - so keyboard, mouse and touch.

* Headers for data tables

* Accessible forms

* Media captions and/or transcript

The benefit of having a purely text based site without CSS or Javascript at this stage of development is that it allows me to easily see the structure and all elements.

Once I had implemented these techniques, I started testing. 

I found the following resources useful:

* [http://a11yproject.com/checklist.html](http://a11yproject.com/checklist.html) 

* [The free NVDA screen reader](http://www.nvaccess.org/)

* Chrome plugin: [https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en)

* [http://validator.w3.org/nu/](http://validator.w3.org/nu/) 

* [http://wave.webaim.org/](http://wave.webaim.org/) 

There are [a wide range of approaches to accessibility testing](http://www.w3.org/wiki/Accessibility_testing) but I hope the above will get me some of the way there.

In summary:

* Accessibility should be a core part of your development process

* Develop procedures so that it is built into your initial development process and everything that is added afterwards!