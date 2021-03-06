---
author: Song Wang
title: SongWang.io
date: '2017-09-02T01:36:10-04:00'
description: the website about Song Wang
color: 'HSLA(267, 31%, 46%, 1.00)'
tags:
 - gatsby
 - styled components
 - react, redux
 - graphql, relay
 - netlify-cms
---

Source: [wangsongiam/songwang.io](https://github.com/wangsongiam/songwang.io)


## Development

### Tech Stack
* Gatsby.js (extends Webpack)
* React.js
* GraphQL, Relay
* Styled components
* Netlify-CMS

### Data flow
All the data are stored in markdown files and hosted on GitHub. In production, data will be pulled into GraphQL layer and queried to the front-end by Relay.

### Netlify-CMS as a Service

I use Netlify-CMS for content managing. It’s still being developed the time I am writing. But it is a cool way to manage all the writings and on the cloud which I believe would be a big deal in the future. 

### Github as a Service

All of my source files are hosted on Github and used by other third party services like Netlify. Also, the comment section is connected to the same repository’s issue page, which is a good solution for serverless/static websites.


Although I experienced with React and Webpack before, It was a frustrating ordeal to work with the alpha version to me. I was frequently asking, reporting and fixing the problem as long as I can those days, yet still, failed uncountable times, sometimes couldn't figure how to make things work for days. But thanks to the community from both React and Gatsby, I was able to make my site work in my preferred way before the Beta version was released. It took over three weeks which is way more than I thought at the beginning, but it was a valuable learning experience, and I am happy with both my site and my contribution to the communities.

## Design

Two things I care the most on this site are simplicity and performance. 

For simplicity, I designed with only two colors, one as the main color for all the words, one for hovering color; I kept things as simple and straightforward as possible; Also, each UI element and Styling block are modular and composed by Javascript, could also be reused if necessary.

For performance, I avoid using any animation or transitions, no drawing and keyframes make loading easy and fast.

## Contents
### Projects
I added the portfolio the last into my website; even it could be the most important one for me to get hired. But it comes with a benefit that I could be much more comfortable building it since I am much more familiar and comfortable with the layout(trust me I quit many times when I was not comfortable with the things I built). 

Not surprisingly, I finished it fast and neat, aligned with the rest of the sections. It was not a lot of work since I had most of the styling components built(thanks to Styled Component) in my theme. 

### Blogs
Blog was one of the first thing I care about when I started building websites. As many other programmers, I have moments wanting to put the ideas and thinkings into words and let the world be known. 

I gave a few try on another static website generator Jekyll before, and I liked them a lot, but since React came in, I couldn’t resist writing modular components and styles in Javascript and quit it.  I like my decision cause by looking back to the Jekyll project’s source codes, I can honestly my current codes are cleaner, leaner, and most of all, more modular  and reusable. 

### Notes
I started this section after seeing this guy’s [TIL](http://ricostacruz.com/til/) site. It’s pretty neat to have a list to show a few of line of things without dive into a blog, not only logging the commands and small procedures on a specific tech fields for later reviewing, but share some of the pain efforts and save others programmers some times if possible. Also, I wrote a bunch of words for myself and myself only, I can just leave it there and search it later, tracking my minds. It’s always nice to memorizes thing somewhere for later. 

### External links
It’s a trivial thing comparing to others, I was thinking about keeping one awesome link a time with a name for later referencing, yet only find myself not a reviewing kinda guy. I might just commented it out from the frontend and just save the data. 
