<div align="center">

# Technology Stack

The software and systems we use to build the **`dwyl`** platform.

![la-rel-easter-KuCGlBXjH_o-unsplash](https://user-images.githubusercontent.com/194400/184178915-302f5a0e-96ab-46c9-9731-ca82affefc7e.jpg "La-Rel Easter - Child stacking blocks") 
<!-- Photo Credit: https://unsplash.com/photos/KuCGlBXjH_o -->
</div>

- [Technology Stack](#technology-stack)
- [Why?](#why)
- [What?](#what)
  - [The `PETAL` Stack](#the-petal-stack)
    - [**`Phoenix`**](#phoenix)
      - [`Phoenix` the "Most Loved" Framework in 2022](#phoenix-the-most-loved-framework-in-2022)
    - [**`Elixir`**](#elixir)
      - [`Elixir` is `#2` in 2022](#elixir-is-2-in-2022)
    - [**`Tailwind CSS`**](#tailwind-css)
    - [**`Alpine.js`**](#alpinejs)
    - [**`LiveView`**](#liveview)
  - [_Beginner_ Tutorials?](#beginner-tutorials)
  - [Database?](#database)
    - [We _Prefer_ `PostgreSQL`](#we-prefer-postgresql)
        - [List of Organizations Using PostgreSQL](#list-of-organizations-using-postgresql)
  - [Operating System?](#operating-system)
  - [Continuous Integration](#continuous-integration)
  - [Deployment](#deployment)
      - [Application Server](#application-server)
      - [SSL/TLS Encryption](#ssltls-encryption)
- [tl;dr](#tldr)
  - [Why Try a "New Stack"?](#why-try-a-new-stack)
      - [Why Try Something New When We're _Already_ Good with the "Old"...?](#why-try-something-new-when-were-already-good-with-the-old)
  - [Making Difficult Decisions](#making-difficult-decisions)
      - [_Most_ "_Application Architects_" will pick one of these 3 options:](#most-application-architects-will-pick-one-of-these-3-options)
    - [Toast Knife Analogy](#toast-knife-analogy)
    - [Focussing on Long-term Benefits](#focussing-on-long-term-benefits)
      - [Further Reading on Long-term Thinking](#further-reading-on-long-term-thinking)
    - [*Contextualising* Technology Adoption (_Mini History Lesson_)](#contextualising-technology-adoption-mini-history-lesson)
    - [Does it _Scale_?!?](#does-it-scale)
    - [What About _Full Stack `JavaScript`_?](#what-about-full-stack-javascript)
    - [Alternative Databases?](#alternative-databases)
  - [Radical Simplicity](#radical-simplicity)
  - [Other Tech/Tools?](#other-techtools)
  - [How to Propose `NEW` Tech/Tools?](#how-to-propose-new-techtools)

# Why?

As a ***team of people*** 
using technology 
to **_make_ digital products**, <br />
it's _essential_ to **be _unambiguous_**
about the **stack/tools** we use, <br />
**so that _everyone_** is **clear** 
what we _all_ need to master.<br />

<!--
to make product(s) that are 
**functional, fast, beautiful, useable and reliable**!
-->

> _If **anything** is **unclear** or you have **any questions** please_
[***ask***](https://github.com/dwyl/technology-stack/issues).

# What?

This document + diagrams _describe_ 
the full "**`PETAL`**" Technology Stack
we use for **`dwyl`** products/projects.

Each element in our stack was _carefully_ selected based
on its individual merits. <br />
When _assembled_ into a seamless "machine",
the stack is _unrivaled_ for **developer productivity**
and ***world-class quality***!

## The `PETAL` Stack

![dwyl-technology-stack-diagram-PETAL](https://user-images.githubusercontent.com/194400/184719877-a6112c04-7cd9-441f-a293-e6b133d4b67c.png)

"PETAL" is an acronym<sup>1</sup> 
for the following elements:

### **`Phoenix`**

**`Phoenix`** is a Web Application Framework 
that does not compromise
on speed, reliability or maintainability!
**`Phoenix`** is the "_successor_"
to the incredibly popular "Ruby-on-Rails" framework.
Built _from scratch_ by highly experienced engineers
who worked on/with Rails. It _solves_
all of the speed/socket/scaling/concurrency, issues
people felt when building/using Rails apps.
The list of ***benefits*** Phoenix has over
(_virtually every_) other Web Frameworks is _extensive_.<br />
Please see:
[dwyl/**learn-phoenix-framework**#our-**top-10-reasons**-why-phoenix](https://github.com/dwyl/learn-phoenix-framework#our-top-10-reasons-why-phoenix) <br />

#### `Phoenix` the "Most Loved" Framework in 2022

`Phoenix` tops the list of "Most Loved" Frameworks 
on the 2022 StackOverflow Community Survey ❤️ 

https://survey.stackoverflow.co/2022/#section-most-loved-dreaded-and-wanted-web-frameworks-and-technologies

![stackoverflow-most-loved-framework-phoenix](https://user-images.githubusercontent.com/194400/184833098-0e9cd055-9e4f-4c93-96ed-4411e1a8154c.png)


### **`Elixir`**

**`Elixir`** is the _functional_ programming language 
used by the **`Phoenix`** framework. 
**`Elixir`** is a _beautiful_ language
written _from scratch_ to be 
***friendly, concise and efficient***.
***Yes***, `Elixir` not as 
["_mainstream_"](https://github.com/dwyl/learn-elixir/issues/102#issuecomment-1105416646)
as `JavaScript`, `Java`, `C#` or `PHP`,
but the adoption is _growing rapidly_ and most importantly
many _experienced_ developers are gravitating towards and
describing it as their ["most wanted"](https://github.com/dwyl/the-book#you-will-learn-in-demand-tech-toolsskills)
Also a language's popularity has more
to do with the intellectual inertia people/companies have because
they allow existing (_legacy_) codebases to dictate future development;
i.e.
[***sunk cost bias***](http://www.investopedia.com/terms/s/sunk-cost-trap.asp).
see: [dwyl/**learn-elixir#key-advantages**](https://github.com/dwyl/learn-elixir#**key-advantages**)

#### `Elixir` is `#2` in 2022

`Elixir` is the 2<sup>nd</sup> 
"Most Loved" programming language:

https://survey.stackoverflow.co/2022/#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages

![stackoverflow-survey-elixir](https://user-images.githubusercontent.com/194400/184831055-7f22484b-4c2b-472a-bf09-9165ef5fc7f9.png)

This is a good measure of how much people _enjoy_ working
in the language. 
And as we all know people who _enjoy_ their work 
are _better_ at doing it! 
### **`Tailwind CSS`**

**`Tailwind`** is the most _sane_ way 
of creating a _beautiful_ web app UI
that can _easily_ be extended by a team of people
without fear of one person's change "_breaking_" another feature.
Unlike "_traditional_" CSS which - _as it's name implies_ - encourages
"_cascading_" of styles, `Tailwind` 
makes the style of each component _specific_
and _local_ to that component.
see: 
[dwyl/**learn-tailwind**](https://github.com/dwyl/learn-tailwind)

### **`Alpine.js`**

**`Alpine.js`** is a lightweight library for enhancing interactions
in a web application. It's declarative, responsive and easy to learn.
`Alphine.js` plays well with `LiveView` for progressive enhancements.
see: 
[dwyl/**learn-alpine.js**](https://github.com/dwyl/learn-alpine.js)

### **`LiveView`**

**`LiveView`** is a radically simplified way
of building realtime web apps with significantly less code.

<br />

## _Beginner_ Tutorials?

We have _crafted_ a "***Complete Beginner's Guide***"
for each element in the stack, so that we:
+ ***Document our collective learning***
`while` we are building projects. <br />
(_because as humans 
we **forget fast** 
unless we **capture** it **immediately**_!)
+ ***Share*** our knowledge with other people so we can
  + Help to train (_potential_) new team members
  as quickly/effectively as possible.
  + ***Collectively iterate*** on our knowledge 
  and "_level-up_" as a _team_!
  + "Onboard" the client team (_who may want/need_) to
  support/maintain the codebase/project 
  if/when we _seamlessly_ "hand over".
  + Inform the wider community 
  of both technical _and_ non-technical
  people ("stake holders") who are _generally_
  interested in _understanding_ the project.
  + Enlighten other teams/organisations/agencies/etc. we aren't in
  _direct_ contact with that there is a "_more fun_" way of building software!
+ Make _everyone's_ life easier/better
by having a "launch pad" for
[_rapid_ learning](https://youtu.be/hOZnP4dZYK0 "Matrix Easter Egg ;-)")!

We have written several **_beginner_ tutorials** 
for learning **`Phoenix LiveView`**:

1. Counter: 
[dwyl/phoenix-liveview-**counter**-tutorial](https://github.com/dwyl/phoenix-liveview-counter-tutorial)
2. Todo List: 
[dwyl/phoenix-liveview-**todo-list**-tutorial](https://github.com/dwyl/phoenix-liveview-todo-list-tutorial)
3. Stop watch: 
[dwyl/phoenix-liveview-**stopwatch**](https://github.com/dwyl/phoenix-liveview-stopwatch)
4. Chat: 
[dwyl/phoenix-liveview-**chat**-example](https://github.com/dwyl/phoenix-liveview-chat-example)

And we have built a fully working MVP version of our App:
[dwyl/**mvp**](https://github.com/dwyl/mvp)


## Database?

The _reason_ we do not _specify_ our Database 
in the "PETAL" Acronym is
that **`Phoenix`** allows us 
to use **_any_ Relational Database**.

By _abstracting_ the data layer using "Ecto" the application is "_decoupled_"
from the database. <br />
This means that if a client _asks_ us to deploy to MySQL or
Microsoft SQL Server <br />
(_e.g. because they already have in-house capability
  for maintaining one of these databases_) <br />
we can easily accommodate that 
without re-writing _any_ of the `Phoenix` app!

### We _Prefer_ `PostgreSQL`

<img width="500" alt="postgres logo" 
src="https://cloud.githubusercontent.com/assets/194400/22939394/6cc00918-f2d6-11e6-8400-77886d70b520.png"/>

Our "_standard_" (_preference_) @dwyl is for `Postgres`.
see: 
[dwyl/**learn-postgresql**](https://github.com/dwyl/learn-postgresql)
<br />
Postgres is the most "_mature_" Open Source Relational Database.
It's ***100% Free*** (_including all **"advanced"** features_)
and has been deployed and ***battle-tested*** in ***every*** environment
from `AWS` to "Bare Metal" and `Google Cloud` to `Microsoft Azure`!


> _**Many** well-known/successful apps rely
on `Postgres` as their `main` database_. <br />
> _**NOT** that you should adopt a particular technology
based on who `else` is using it,_ <br />
> _but it's **good to know** that **plenty** of teams
are getting **excellent results** with `Postgres`!_

##### [List of Organizations Using PostgreSQL](https://github.com/dwyl/learn-postgresql/issues/31)

We have used _most_ of the "_popular_" Relational Databases.
e.g: `MySQL`, `Microsoft SQL Server`, 
`Oracle` and `Aurora`, etc; 
all
[RDBMS](https://en.wikipedia.org/wiki/Relational_database_management_system)
have their pros/cons. <br />
The ***reason*** we like/use **`Postgres`** 
is because the ***community*** is _superb_. 
There is a great "_bank_" of _answered_ questions on
[StackOverflow](http://stackoverflow.com/questions/tagged/postgresql)
and new questions get answered _fast_.
## Operating System?

A _"traditional"_ 
[**LAMP** stack](https://en.wikipedia.org/wiki/LAMP_(software_bundle))
includes the **Linux** Operating System
in the _name_. <br />
The "**PETAL**" stack runs 
on _any_ (_desktop/server_) Operating System <br />
and can be deployed to any "_cloud_" infrastructure provider. <br />

While we have a _strong_ preference 
for `Unix` (e.g. `FreeBSD`) or
`Linux` (_e.g. `Ubuntu` or `CentOS`_) we know that <br />
_both_ `Phoenix` and `Postgres` run
on almost _any_ environment including
Microsoft Windows Desktop & Server.

## Continuous Integration

We are using `GitHub` actions 
for Continuous Integration / 
Continuous Deployment.

For an example of this,
including automatic deployment to **Fly.io**
see: 
[`.github/workflows/ci.yml`](https://github.com/dwyl/mvp/blob/main/.github/workflows/ci.yml)

## Deployment

We make a point of deploying our work as _soon_ as
there is _something_ worth showing 
to the target audience of "_end users_"
so that we can get ***feedback*** as early as possible.

Lately we have been using 
[**Fly.io**](https://github.com/dwyl/learn-devops/issues/72#issuecomment-917442712)
for deploying our Apps.
The experience is superb. ❤️

#### Application Server

The Phoenix Application Server is hosted on (_a minimum of_)
Two Linux Servers. <br />
(_often many more which send **messages**
one another to distribute load as a cluster_). <br />
The "_cluster_" is managed by Erlang's "Supervisor".
The Erlang Supervisor 
is the "_Gold Standard_" in infrastructure management,
having been used by Telecoms companies 
for over 20 years in production
with some Telcos reporting 99.9999999% 
("_nine nines_") of "_up-time_".

> It's _far_ more likely that the _infrastructure_ provider (_e.g. AWS/Azure_)
will have a fault in their network/datacenter than an Erlang server "crashing".

#### SSL/TLS Encryption

All communication is over secure/encrypted channel
(_by default at all times_) <br />
to protect the data/privacy
of people using the applications we make. <br />

We recommend using the "Let's Encrypt" service for SSL Certificates
it's ***100% Free*** (and _provided by a Non-Profit foundation_) <br />
to help you get started, we wrote a
***step-by-step setup guide*** for apps deployed to Heroku:
[SSL-certificate-step-by-step-setup-instructions.md](https://github.com/dwyl/learn-heroku/blob/master/SSL-certificate-step-by-step-setup-instructions.md)



<br /> <br /> <hr />


# tl;dr

There is _no shortage_ of options available for
Technology Stack! <br />
See: https://www.google.com/search?q=technology+stack&tbm=isch <br />
So, _how_ did we _arrive_ at the conclusion that `PETAL`
was "_the **one**_" for us...? <br />
We _already_ had a _really_ good
[Node.js Stack](https://github.com/dwyl/technology-stack/blob/main/legacy)
which worked well for us and our clients. so . . .


## Why Try a "New Stack"?

#### Why Try Something New When We're _Already_ Good with the "Old"...?

Our _reasoning_ for
_considering_ an alternative approach/stack for building web apps
was fueled by our
[_curiousity_](https://www.goodreads.com/quotes/tag/curiosity)
and
["_shoshin_"](https://en.wikipedia.org/wiki/Shoshin). <br />

> "_The important thing is not to **stop questioning**. <br />
> **Curiosity** has its own reason for existence._" <br />
> ~ Albert Einstein <br /> 
<!--
> ~ "Old Man's Advice to Youth: 
> '**Never Lose** a Holy ***Curiosity***.'" <br />
> LIFE Magazine (2 May 1955) p. 64”
-->

In November 2016 we (_once again_) 
**questioned our _assumptions_**,
***re-examined*** and
[***surveyed***](https://github.com/dwyl/learn-elm/issues/10)
the "landscape" of "_emerging trends_" in web app development.
We were ~~pleasantly surprised~~ ***delighted*** to see the _amazing progress_
made by the people in the `Elixir` / `Phoenix` community!
Please see: 
[dwyl/learn-phoenix-framework#**questions**](https://github.com/dwyl/learn-phoenix-framework#questions)

## Making Difficult Decisions

One of the most "_difficult decisions_" you will make in your "_career_" is
which technologies and tools you will use
to deliver the desired solution/benefit to the "_end users_".

Most people have the Tech/Tools decision made _for_ them
by the company/organisation/boss they work for
(_e.g: `Java` -> `Spring`, 
`Ruby` -> `Rails` 
or `PHP` -> `WordPress` or `Laravel`, etc._)
This is because most companies 
_already_ have an _existing_ app in "production",
which you have been hired to extend.

Occasionally you will get the chance 
to build an app from "_scratch_"  
however _most_ of the time someone `else` (_the "Architect"_)
will make the decision for what "_stack_" to use on your behalf,
so you will _still_ be stuck with someone _else's_ choices.
If you are _incredibly lucky_ the "Architect(s)"
will have done their homework: surveyed the latest industry
trends and investigated the "_new and promising_" technologies
e.g: Stack Overflow
["Most Wanted" list](https://github.com/dwyl/the-book#most-wanted-programming-languages).


#### _Most_ "_Application Architects_" will pick one of these 3 options:

1.  ***Go with what you (already) know***, use _existing_ stack
with a minor variation because it's "easy to deploy" with
the existing infrastructure and will not get questioned by the "Executives",
DevOps team or "Compliance" department. This is the easy choice
and nobody ever got "_fired_" for sticking with what they know "_works_".

2.  Buy the whizz-bang all-in-one solution sold to them by the "Consultant"
from "Big Vendor XYZ" (_outsource the thinking to a sales person who last
  wrote code in the 90's ... seems like a great idea ... NOT!_)

3. Be "Bold" and try "***Popular Framework XYZ***" 
and hire an _external_
team to build the new magic app. 
Then attempt to "_up-skill_" the _internal_
team to _maintain_ the code written by the consultants.

None of these choices is _optimal_, 
all have different levels of risk/reward.
The "_hardest_" choice to make 
is the one where you try something _totally_ different.
The _reality_ is that very few people
have the time/resources/mindset/inclination 
to take a step back
and open their minds 
to the idea that there _might_ 
be a "_better tool_" for the job 
than the one they are _currently_ using.

### Toast Knife Analogy

Imagine Want to Make Yourself Some **Toast**. <br />
The "_user story_" for this would be:

> `As a` **peckish person** <br />
> `I want` a slice of tasty toast <br />
> `So that` I can have some crunch for my brunch!

> ( _let's assume that you bought a loaf of bread from a baker <br />
to reduce the options for solutions for simplicity <br />
i.e. not baking from scratch!_ )

The "_traditional_" way to "_solve_" 
the challenge of making toast: <br />

1. Cut bread with bread knife
2. Put sliced bread in toaster
3. Turn on toaster for pre-determined amount of time
4. Wait patiently for toaster to make toast


But ... what if instead the "_old_" way we just described,
someone invented a way 
to _toast_ the bread `while` slicing it...?!

![b4df5698-914e-4dd2-b271-9c00881b6599-274-0000001c8c73f018_tmp](https://cloud.githubusercontent.com/assets/194400/22363833/07798ad6-e465-11e6-9d92-44898a774148.png)
![9f9fc56d-b22a-4e77-b60f-f3619254023b-274-0000001ce1dcb22a_tmp](https://cloud.githubusercontent.com/assets/194400/22363837/0d860594-e465-11e6-9dcd-292f441983b0.png)

Simply by using the "***New Tool***" for the job - 
_in this case the
["**Toast Knife**"](https://youtu.be/3ttzWuaPGMo?t=1m1s)_ - 
you can
simplify the process to a ***single step***! <br />
This is the power of being _open_ to considering "New" Tools/Technologies! <br />
Get the ***same result*** in **fewer** than half the "**steps**"!

### Focussing on Long-term Benefits

The _short-term_ cost of learning a new stack
(_programming language or framework_) is time,
We contend that the 1 week learning time 
(_depending on the focus of learners_)
will pay for itself within 1 month
(_often sooner if the team is large/distributed because the **structure**
  offered by Phoenix means everyone working on the project
  has a disciplined approach to adding new features_)

#### Further Reading on Long-term Thinking

+ https://hbr.org/2012/08/thinking-long-term-in-a-short
+ https://hbr.org/2011/03/capitalism-for-the-long-term

### *Contextualising* Technology Adoption (_Mini History Lesson_)

In **1996** Nokia introduced the
["***Communicator***"](https://en.wikipedia.org/wiki/Nokia_Communicator)
and was a **_incredible_ revolutionary innovation**!
**Internet, Email and _Fax_** in your ***Pocket***!! <br />

![nokia-communicator](https://cloud.githubusercontent.com/assets/194400/23014351/89c07b64-f426-11e6-8c5a-f93b71a3aa53.jpg) <br />

Nokia continued to _dominate_ the mobile phone industry/market for the next
***decade*** producing the _best-selling_
[**5110**](https://en.wikipedia.org/wiki/Nokia_5110)
and 
[**3310**](https://en.wikipedia.org/wiki/Nokia_3310)
some of us are old enough to remember! <br />
But by being "_ahead_" Nokia was _unable_ to see the "_contender_"
coming "_out of nowhere_" to challenge their position.

In 2006 _nobody_ was making/buying "smart" mobile phones
with glass touch screens that ran "apps" ... <br />
in 
[January 2007 Steve Jobs introduced the iPhone](https://www.youtube.com/results?search_query=Steve+Jobs+iPhone+Introduction+2007)
and _literally_ changed the industry!

![Steve Jobs introduces iphone](https://cloud.githubusercontent.com/assets/194400/22934275/4bc76090-f2c6-11e6-9b90-91226e39ea09.png)

The dominant/incumbent mobile phone maker **Nokia** had
[***49% market share in 2007***](http://www.bbc.co.uk/news/technology-23947212)
_mocked_ Apple's lack of features, poor battery life and high price. <br />
By 2013 Nokia had 3% Market Share (_for new device sales_) and was sold off "for parts" to Microsoft
while Apple was the [most valuable company](https://www.statista.com/statistics/263264/top-companies-in-the-world-by-market-value/)
in history!

> _Many **people still buy** "**feature phones**"
(the polite name for a device that does not have any
  "smart" functionality!) <br />
but few people can **convincingly** argue that the **reason**
they **don't have** a smart phone is because they **don't want** one; <br />
[**over 90% 16-24 year olds own a smart phone**](https://www.ofcom.org.uk/about-ofcom/latest/media/media-releases/2015/cmr-uk-2015) and that number is expected to reach 100% by 2025 ... <br />
ask someone in their 20's if they would go "**back**"
to using a non-smart phone
and see what they say ... "**No Way**!!" <br />
they laugh uncomfortably and
admit that: "**My Smartphone is my Life**!" <br />
We feel **exactly** the same about "**old technology**".
Sure the "**old way still works**",
but if you can **inexpensively switch** <br />
to something **demonstrably better** in **every aspect**,
why would you stick with the "feature phone" of web frameworks...?_ <br />
_It's like taking the Bus to work when there's a perfectly
good teleporter right next to the bus stop!! Madness._

We are not _suggesting_ that _everyone_
is going to _suddenly_ flock to the "**PETAL**" stack
the way people adopted smart phones.
This is merely an _illustration_ that when a technology
has a _specific/measurable_ advantage to it's users
the adoption _can_ be _fast_.

In the case of programming languages or application frameworks,
moving one framework to another is a _much_ more difficult decision.

But one thing is for _sure_ we are going to use the "_smart phone_"
even if other people insist on using the "brick".


### Does it _Scale_?!?

If you are new to web development,
_please focus on **`UX`** 
and forget about "**scale**"_! <br />

> _Unless you work somewhere that
  **already** has "**millions of users**" and <br />
your team **cannot consider** anything that
does not support a million concurrent connections...!_ <br />

> _But let's face it, **most** people have 
[**imaginary scaling issues**](https://twitter.com/ThePracticalDev/status/800752571497545729)
not **real** ones. <br />
discussing "scalability" **`before`** 
you have **10,000 paying customers** 
is a waste of time!!_ <br />

Stop worrying about "scalability"
and instead **focus** on building something **useful** <br />
**focus** on **User Experience** not ("backend") **scalability**!

The _good_ news is that 
**`Phoenix`** "***scales***" _really well_! <br />
see: 
[phoenixframework.org/blog/the-road-to-2-million-websocket-connections](https://www.phoenixframework.org/blog/the-road-to-2-million-websocket-connections)

Forget about "_scaling_" until you have _made_
[***something people want***](http://paulgraham.com/good.html)
and are _paying_ for! <br />
Then _use_ the pile of cash you got from your product
to hire "_engineers_" to make it _available_ to more people!!

<br /> <br />

<!--
### _No JavaScript_ in "PETAL"...?

![no-javascript](https://cloud.githubusercontent.com/assets/194400/22939705/88d3e524-f2d7-11e6-91c6-47513f6b4fa7.jpg)

This not the place to "diss" JavaScript;
_plenty_ of people have written blog posts/tweets "_ranting_"
about the
["_State of Web Development_"](https://medium.com/@wob/the-sad-state-of-web-development-1603a861d29f).
<br />
e.g: Douglas Crockford (_the authority on JS_) recently gave a presentation on
The **Post JavaScript _Apocalypse_**: https://youtu.be/6Fg3Aj9GzNw <br />
(_in which he describes all the "features" of JS that are "**unnecessary**"..._)
<br />
Or Max Ogden (_a prominent JS developer_) who created
a website dedicated to the "Callback Hell" issue: http://callbackhell.com <br />
why do we even _need_ to have an _expression_ for that?
why can't ***elegant*** asynchronous control flow
be the **_only_ way** to write code?


The **fact** is: we _only_ use JavaScript because it is the
["***Lingua Franca***"](https://en.wikipedia.org/wiki/Lingua_franca)
that _all_ web browsers "_understand_".<br />
It's _definitely_ not because it's a
"_better_" language than Python, Julia or Lisp;
we write JS out of _necessity_ not _choice_. <br />

With Elm we no longer _need_ to write our Client-side
(_progressive enhancement_) code in JavaScript!
We can write in a beautiful/functional language <br />
and "_compile_" it to JS for running in Browsers.
The JS that is produced by the Elm compiler
is almost _always_ more efficient/faster <br />
than "_hand-written_" JS,
so _why_ would we waste our _time_ with writing JavaScript...?!

> _If you aren't `.ready()` to try something (way) **more productive**
than **JavaScript**, `.then` please just **ignore** `this`! <br />
We have written this "Technology Stack" description for **ourselves**
and not because we want to "**convince**" anyone. <br />
But ... we wanted to put down our thoughts
in `case` anyone is
["**on the fence**"](https://en.wikipedia.org/wiki/Sitting_on_the_fence)!
If you're in any doubt, ***Just Do it***._

![just-do-it-nike-log](https://cloud.githubusercontent.com/assets/194400/22940322/63db1308-f2d9-11e6-8d84-e024b00e37a4.png)

-->

### What About _Full Stack `JavaScript`_?

We still think that 
"***Full Stack `JavaScript`***"
is a ***compelling proposition***
_especially_ for people who are just starting out!
It allows you to write _one_ programming language
on both the client and server; we get it!
However we have learned from years of experience
that it requires **a _lot_ more code and _maintenance_**
than **`PETAL`** for an **_inferior_ result**
in terms of UX/performance and developer productivity.

### Alternative Databases?

If we were to _consider_ an alternative to `SQL`, we
would use `RethinkDB`:
https://rethinkdb.com <br />
But we are _relieved_ that the `Phoenix` team
is _focussed_ on PostgreSQL because that _eliminates_ <br />
the "ambiguity" or "discussion" of "_which database_" to use!
Postgres is a _fantastic_ "_general purpose_" <br />
store that has a _rich_ ("_structured_") query language
that lets you JOIN data!! <br />
Also, now that [`Citus DB` is Open Source](https://www.citusdata.com/blog/2016/03/24/citus-unforks-goes-open-source)
we _know_ that `Postgres` 
can _easily_ handle ***billions*** of writes per day!

## Radical Simplicity

> “_If it takes an hour to figure out what’s going on, well,<br />
> that’s an hour that wasn’t spent 
> doing something else more useful and interesting_." <br />
> ~ 
> [Rachel Kroll](https://rachelbythebay.com/w/2021/09/05/clever/)

Please read:
https://www.radicalsimpli.city <br />
In the site/manifesto
[Stephan](https://www.linkedin.com/in/stephanjschmidt/)
makes the case that Apps in 2021 
have gotten far too complex:

![radical-simplicity-complexity](https://user-images.githubusercontent.com/194400/185086864-1e1dd075-18a8-45ff-9b51-84f9e17fe116.png)

He advocates for a return to basics:

![image](https://user-images.githubusercontent.com/194400/185088113-b40f169f-71c7-4139-b984-cf518e4bc0f4.png)

No need for microservices message queues or other 
complex tech that is only relevant to 0.1% of mega scale companies:
![image](https://user-images.githubusercontent.com/194400/185088279-241c2d23-3986-4820-9b59-7acb6f9b8235.png)

We agree. 

<br />

If by some luck our product reaches the point where
we _need_ mega scale 
(_millions of `people` creating billions of `items`_)
we know that our chosen stack will scale just fine.

Before then the complexity will only slow us down
and reduce the chances of success.

## Other Tech/Tools?

We have written about 
our choice of programming language _extensively_ in:
[learn-elixir/issues/102](https://github.com/dwyl/learn-elixir/issues/102).

Our use of **`Elixir`** is for a very specific reason:
we are building fault-tolerant realtime systems.
For the type of App we are building, 
`Erlang/OTP` is the _undisputed_ king
on the server side.
We _could_ use almost any other language/framework,
but it would be a _lot_ more work for an inferior result.

If we need to build a **_specific_ feature** 
requested by a person _using_ our product,
then we will **100%** consider a technology 
that enables us to deliver it.

## How to Propose `NEW` Tech/Tools?

The way to _propose_ a specific tech/tool
is simple:
[open an issue](https://github.com/dwyl/technology-stack/issues)
describe how the tech/tool
will help us build a _specific_ feature
that has been requested by a person using our product.

_Proactively_ create a **`new` repo**
in the dwyl org
to capture your own learning 
of the tech/tool you are proposing.
e.g: 
[dwyl?q=learn](https://github.com/dwyl?q=learn&type=all&language=&sort=)

Once you have invested the time 
to learn the tech/tool beyond **`"hello world"`**
and are confident that it will help us
achieve a specific end-goal,
then _please_ make the case for it. 

  [![HitCount](https://hits.dwyl.com/dwyl/technology-stack.svg?style=flat-square)](http://hits.dwyl.com/dwyl/technology-stack)
