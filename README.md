# Technology Stack

This document describes the full "Technology Stack"
we use for dwyl products and services (clients).

_If **anything** is **unclear** or you have **any questions** please_
[***ask***](https://github.com/dwyl/technology-stack/issues).

# "PETE" Stack

"PETE" is an acronym<sup>1</sup> for the following elements:

+ **Phoenix** is a Web Application Framework without compromise.
Phoenix is the "_successor_"
to the incredibly popular "Ruby-on-Rails" framework.
Built _from scratch_ by highly experienced engineers
who worked on/with Rails. It _solves_
all of the maintainability, speed/scaling/concurrency, issues
people felt when building/using Rails apps.
The list of ***benefits*** Phoenix has over
(_vertually every_) other Web Frameworks is _extensive_.  <br />
Please see:
[github.com/dwyl/learn-phoenix-framework#our-**top-10-reasons**-why-phoenix](https://github.com/dwyl/learn-phoenix-framework#our-top-10-reasons-why-phoenix) <br />

+ **Elixir** is the _functional_ programming language used to
build using the Phoenix framework. Elixir is a _beautiful_ language
written _from scratch_ to be ***friendly, concise and efficient***.
***Yes***, Elixir not a "_popular_" as JavaScript, Java, C# or PHP,
but its' adoption is growing rapidly and most importantly its'
what many _experienced_ developers are gravitating towards and
described as their ["most wanted"]()
Also a language's popularity has more
to do with the intellectual inertia people/companies have because
they allow existing (_legacy_) codebases to dictate future development;
i.e.
[***sunk cost bias***](http://www.investopedia.com/terms/s/sunk-cost-trap.asp).
see: [github.com/dwyl/learn-elixir#key-advantages](https://github.com/dwyl/learn-elixir#**key-advantages**)

+ **Tachyons** is the most _sane_ way of creating a _beatiful_ web app UI
that can _easily_ be extended by a team of people
without fear of one person's change "_breaking_" another feature.
Unlike "_traditional_" CSS which - _as it's name implies_ - encourages
"_cascading_" of styles, Tachyons makes the style of each component _specific_
and _local_ to that component.
see: https://github.com/dwyl/learn-tachyons

+ **Elm** is a front-end developer's _dream_
made _reality_ by a community of unbelievably
intelligent and dedicated developers.
Elm has [**_considerably_ better performance**](http://elm-lang.org/blog/blazing-fast-html-round-two)
than similar/alternative front-end frameworks e.g: Angular, Ember, React, Vue.js etc. so the "performance" discussion is moot.
However the _reason_ we love elm is _nothing_ to do
with "_benchmarks_" and everything to do with the _experience_ of writing/reading/maintaining
an app built with elm; _that experience is like
a **reassuring hug** from a loved one_.
When you discover elm things that used to be _difficult_ or "_error-prone_" become easy and reliable.
See: [github.com/dwyl/learn-elm#why](https://github.com/dwyl/learn-elm#**why**)




<sup>1</sup><small>Thanks [Jimmy](https://github.com/jruts) for coining the "PETE" acronym. He's the guy we go to for _naming_ and other [_hard things_!](https://twitter.com/codinghorror/status/506010907021828096) ;-)</small>

## Database?

The _reason_ we do not _specify_ our Database in the Acronym is
that Phoenix allows us to use **_any_ Relational Database**.

By _abstracting_ the data layer using "Ecto" the application is "_decoupled_"
from the database. This means that if a client _asks_ us to deploy to MySQL
Microsoft SQL Server (_e.g. because they already have in-house capability
  for maintaining one of these databases, we can easily accomodate that!_)

### We _Prefer_ PostgreSQL

Our "_standard_" (_preference_) @dwyl is for PostgreSQL.
PostgreSQL is the most "_mature_" Open Source Relational Database,
_many_ well-known/successful apps rely on PostgreSQL for their database.

https://github.com/dwyl/learn-postgresql/issues/31



### No JavaScript in "PETE"?

This not the place to "diss" JavaScript,
plenty of people have written blog posts/tweets "_ranting_"
about the "state of JavaScript"<sup>2</sup>.




+
+ The **Post JavaScript _Apocalypse_**: https://youtu.be/6Fg3Aj9GzNw (_desribes all the features of JS that are "noise"..._)
+

<br /> <br />

# Node.js Stack

We refer to our Node.js Stack as "Classic".
We have deployed this stacked for several of our clients and internal apps.
It works _really_ well and we have not had any "_scaling issues_".

## Overview

The following diagram is an overview of our stack:  

![dwyl-stack-with-postgres](https://cloud.githubusercontent.com/assets/194400/18927934/e5a9d0a4-85b5-11e6-9c59-4d5052d09053.png)

> <small>Note: To edit/improve this diagram: https://github.com/dwyl/technology-stack/issues/1 </small>

We have produced a ***complete beginners guide*** for *each* of the components in our stack. (see below)

## Open Source Projects We Use

### For Us *By* Us

We ***craft code*** to [***scratch our own itch***](https://github.com/dwyl/start-here#our-approach-scratching-your-own-itch) and ***everything*** we do is ***always Open Source***

| Project | Used For | Build Status | Test Coverage | Dependency Status | Tutorial |
| --------|----------|:-----:|:--------:|:------------:|-------|
| [**env2**](https://github.com/dwyl/env2) | Loading Environment Variables | [![Build Status](https://travis-ci.org/dwyl/env2.svg?branch=master)](https://travis-ci.org/dwyl/env2) | [![Test Coverage](https://img.shields.io/codecov/c/github/dwyl/env2.svg?maxAge=2592000)](https://codecov.io/github/dwyl/env2?branch=master) | [![dependencies Status](https://david-dm.org/dwyl/env2/status.svg)](https://david-dm.org/dwyl/env2) | [learn-environment-variables](https://github.com/dwyl/learn-environment-variables) |
| [**esta**](https://github.com/dwyl/esta) | ElasticSearch CRUD | [![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)](https://travis-ci.org/dwyl/esta) | [![Test Coverage](https://img.shields.io/codecov/c/github/dwyl/esta.svg?maxAge=2592000)](https://codecov.io/github/dwyl/esta?branch=master) | [![dependencies Status](https://david-dm.org/dwyl/esta/status.svg)](https://david-dm.org/dwyl/esta) | [learn-elasticsearch](https://github.com/dwyl/learn-elasticsearch) |
| [**goodparts**](https://github.com/dwyl/goodparts) | Consistent Code (Linting & Style) | [![Build Status](https://travis-ci.org/dwyl/goodparts.svg?branch=master)](https://travis-ci.org/dwyl/goodparts) | [![Test Coverage](https://img.shields.io/codecov/c/github/dwyl/goodparts.svg?maxAge=2592000)](https://codecov.io/github/dwyl/goodparts?branch=master) | [![dependencies Status](https://david-dm.org/dwyl/goodparts/status.svg)](https://david-dm.org/dwyl/goodparts) | [goodparts#why](https://github.com/dwyl/goodparts#why) |
| [**hapi-auth-jwt2**](https://github.com/dwyl/hapi-auth-jwt2) | Authentication & Sessions | [![Build Status](https://travis-ci.org/dwyl/hapi-auth-jwt2.svg?branch=master)](https://travis-ci.org/dwyl/hapi-auth-jwt2) | [![Test Coverage](https://img.shields.io/codecov/c/github/dwyl/hapi-auth-jwt2.svg?maxAge=2592000)](https://codecov.io/github/dwyl/hapi-auth-jwt2?branch=master) | [![dependencies Status](https://david-dm.org/dwyl/hapi-auth-jwt2/status.svg)](https://david-dm.org/dwyl/hapi-auth-jwt2) | [learn-json-web-tokens](https://github.com/dwyl/learn-json-web-tokens) |
| [**hapi-error**](https://github.com/dwyl/hapi-error) | Human-Friendly Error Messages | [![Build Status](https://travis-ci.org/dwyl/hapi-error.svg?branch=master)](https://travis-ci.org/dwyl/hapi-error) | [![Test Coverage](https://img.shields.io/codecov/c/github/dwyl/hapi-error.svg?maxAge=2592000)](https://codecov.io/github/dwyl/hapi-error?branch=master) | [![dependencies Status](https://david-dm.org/dwyl/hapi-error/status.svg)](https://david-dm.org/dwyl/hapi-error) | [hapi-error#why](https://github.com/dwyl/hapi-error#why) |
| [**hapi-login**](https://github.com/dwyl/hapi-login) | User Login | [![Build Status](https://travis-ci.org/dwyl/hapi-login.svg?branch=master)](https://travis-ci.org/dwyl/hapi-login) | [![Test Coverage](https://img.shields.io/codecov/c/github/dwyl/hapi-login.svg?maxAge=2592000)](https://codecov.io/github/dwyl/hapi-login?branch=master) | [![dependencies Status](https://david-dm.org/dwyl/hapi-login/status.svg)](https://david-dm.org/dwyl/hapi-login) | [learn-hapi](https://github.com/dwyl/learn-hapi) |
| [**hapi-postgres-connection**](https://github.com/dwyl/hapi-postgres-connection) | Postgres Connection Pooling | [![Build Status](https://travis-ci.org/dwyl/hapi-postgres-connection.svg?branch=master)](https://travis-ci.org/dwyl/hapi-postgres-connection) | [![Test Coverage](https://img.shields.io/codecov/c/github/dwyl/hapi-postgres-connection.svg?maxAge=2592000)](https://codecov.io/github/dwyl/hapi-postgres-connection?branch=master) | [![dependencies Status](https://david-dm.org/dwyl/hapi-postgres-connection/status.svg)](https://david-dm.org/dwyl/hapi-postgres-connection) | [learn-postgresql](https://github.com/dwyl/learn-postgresql) |
| [**hapi-redis-connection**](https://github.com/dwyl/hapi-redis-connection) | Simplify Redis Connection | [![Build Status](https://travis-ci.org/dwyl/hapi-redis-connection.svg?branch=master)](https://travis-ci.org/dwyl/hapi-redis-connection) | [![Test Coverage](https://img.shields.io/codecov/c/github/dwyl/hapi-redis-connection.svg?maxAge=2592000)](https://codecov.io/github/dwyl/hapi-redis-connection?branch=master) | [![dependencies Status](https://david-dm.org/dwyl/hapi-redis-connection/status.svg)](https://david-dm.org/dwyl/hapi-redis-connection) | [learn-redis](https://github.com/dwyl/learn-redis) |
| [**hapi-register**](https://github.com/dwyl/hapi-register) | User Registration | [![Build Status](https://travis-ci.org/dwyl/hapi-register.svg?branch=master)](https://travis-ci.org/dwyl/hapi-register) | [![Test Coverage](https://img.shields.io/codecov/c/github/dwyl/hapi-register.svg?maxAge=2592000)](https://codecov.io/github/dwyl/hapi-register?branch=master) | [![dependencies Status](https://david-dm.org/dwyl/hapi-register/status.svg)](https://david-dm.org/dwyl/hapi-register) | [learn-hapi](https://github.com/dwyl/learn-hapi) |
| [**hapi-riot**](https://github.com/dwyl/hapi-riot) | Server-side (Fast) Rendering of Riot Tags | [![Build Status](https://travis-ci.org/dwyl/hapi-riot.svg?branch=master)](https://travis-ci.org/dwyl/hapi-riot) | [![Test Coverage](https://img.shields.io/codecov/c/github/dwyl/hapi-riot.svg?maxAge=2592000)](https://codecov.io/github/dwyl/hapi-riot?branch=master) | [![dependencies Status](https://david-dm.org/dwyl/hapi-riot/status.svg)](https://david-dm.org/dwyl/hapi-riot) | [learn-riot](https://github.com/dwyl/learn-riot) |

> <small>Note: to update this table, use the script: `generate_dependency_table.js`</small>

### Dependencies <small>(*projects built by people we trust*)</small>

+ **Node.js** - the most popular JavaScript runtime for easily building fast,
scalable network applications. Lightweight and efficient, perfect for
data-intensive real-time apps. http://nodejs.org/
+ **Hapi.js** - A rich web framework for building applications and services.
https://github.com/dwyl/learn-hapi
+ **Socket.io** - a JavaScript library for realtime web applications.
It enables realtime, bi-directional communication between web clients and
server. Socket.io lets us send data to/from everyone connected to our app(s)
without having to refresh the web page. http://socket.io/
+ **Riot.js** - is the most ***light-weight*** user-interface (UI) framework
available which is compatible with IE 8/9 and has good
server-side rendering (*which means pages load faster for slow devices like budget smart phones*).
see: https://github.com/dwyl/learn-riot
+ **Redis** - the most popular *in-memory* data store which is *essential*  
for building the ***fastest possible*** apps.
read more: https://github.com/dwyl/learn-redis
+ **ElasticSearch** - the most feature-rich search engine. we use
it to find things fast. Learn more: https://github.com/dwyl/learn-elasticsearch


### Development Dependencies

We *carefully* select and only use *well-maintained* "*pure*" JavaScript modules
in our development toolchain:

+ **Tape** for testing: https://github.com/dwyl/learn-tape
+ **Istanbul** for Code Coverage: https://github.com/dwyl/learn-istanbul
+ **Pre-commit** for ensuring all commits pass strict quality checks before being pushed to GitHub. see: https://github.com/dwyl/learn-pre-commit
+ **GoodParts** "_linting_" and checking code style is _consistent_:
https://github.com/dwyl/goodparts
+ **CodeCov** for *detailed* test/code coverage stats
https://github.com/dwyl/learn-istanbul#tracking-coverage-as-a-service
+ **CodeClimate** for tracking code quality:
https://github.com/dwyl/learn-codeclimate

### Continuous Integration

We use and *recommend* Travis-CI for Continuous Integration (CI).
If you or anyone on your team are *new* to Travis-CI,
checkout our beginners guide: https://github.com/dwyl/learn-travis

<br />
<br />
