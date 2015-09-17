# Technology Stack [![Join the chat at https://gitter.im/dwyl/chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dwyl/chat/?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This document describes the full technology stack we are using in dwyl.

If you have ***any questions*** please
[***ask***](https://github.com/dwyl/technology-stack/issues)

## Overview

The following diagram is an overview of our stack:  

![dwyl-stack-lighter-blue](https://cloud.githubusercontent.com/assets/194400/9354261/e971fe58-4666-11e5-848f-67dc11d41bfb.jpg)
(_**click** the image **to enlarge**_)

<small>To edit/improve this diagram: https://github.com/dwyl/technology-stack/issues/1 </small>

We have produced a ***complete beginners guide*** for *each* of the components in our stack. (see below)

## Open Source Projects We Use

### For Us *By* Us

We ***craft code*** to [***scratch our own itch***](https://github.com/dwyl/start-here#our-approach-scratching-your-own-itch) and ***everything*** we do is ***always Open Source***

| Project | Use Case | Build | Coverage | Dependencies | Learn |
| --------|----------|:-----:|:--------:|:------------:|-------|
| **[hapi-auth-jwt2]** | Authorization | [![build][jwt2-bi]][jwt2] | [![cov][jwt2-cc]][jwt2] | [![deps][jwt2-dep]][jwt2] | [learn-jwt] |
| **[env2]** | Environment Variables | [![build][env2-bi]][env2] | [![cov][env2-cc]][env2] | [![deps][env2-dep]][env2] | [learn-env] |
| **[esta]** | ElasticSearch | [![build][esta-bi]][esta] | [![cov][esta-cc]][esta] | [![deps][env2-dep]][env2] | [learn-elasticsearch] |
| **[redis-connection]** | Redis Connection | [![build][rcon-bi]][esta] | [![cov][rcon-cov]][rcon] | [![deps][rcon-dep]][rcon] | [learn-redis] |

### Dependencies <small>(*projects built by people we trust*)</small>

+ **Node.js** - the most popular JavaScript runtime for easily building fast,
scalable network applications. Lightweight and efficient, perfect for
data-intensive real-time apps. http://nodejs.org/
+ **Hapi.js** - A rich web framework for building applications and services.
https://github.com/nelsonic/learn-hapi
+ **Socket.io** - a JavaScript library for realtime web applications.
It enables realtime, bi-directional communication between web clients and
server. Socket.io lets us send data to/from everyone connected to our app(s)
without having to refresh the web page. http://socket.io/
+ **Riot.js** - is the most ***light-weight*** user-interface (UI) framework
available which is compatible with IE 8/9 and has good
server-side rendering (*which means pages load faster for slow devices like budget smart phones*).
see: https://github.com/dwyl/learn-riot (*help wanted!*)
+ **Redis** - the most popular *in-memory* data store which is *essential*  
for building the ***fastest possible*** apps.
read more: https://github.com/dwyl/learn-redis
+ **ElasticSearch** - the most feature-rich search engine. we use
it to find things fast. Learn more: https://github.com/dwyl/learn-elasticsearch


### Development Dependencies

We *carefully* select and only use *well-maintained* "*pure*" JavaScript modules
in our development toolchain:

+ **Tape** for testing: https://github.com/substack/tape
+ **Istanbul** for Code Coverage: https://github.com/dwyl/learn-istanbul
+ **Chalk** for colors in test output (readability)
+ **Pre-commit** for ensuring all commits pass strict quality checks before being pushed to GitHub. see: https://github.com/dwyl/learn-pre-commit
+ **jshint** checks code style is consistent:
https://github.com/dwyl/learn-jshint
+ **CodeClimate** for tracking code quality:
https://github.com/nelsonic/learn-codeclimate
+ **CodeCov** for *detailed* test/code coverage stats
https://codecov.io/

### Continuous Integration

We use and *recommend* Travis-CI for Continuous Integration (CI).
If you or anyone on your team are *new* to Travis-CI,
checkout our beginners guide: https://github.com/dwyl/learn-travis

<br />
<br />
## tl;dr

Example Image Link Markdown:
```sh
[![Node.js Version][node-version-image]][node-version-url]
[node-version-image]: https://img.shields.io/node/v/listdirs.svg?style=flat
[node-version-url]: http://nodejs.org/download/
```

[hapi-auth-jwt2]: https://github.com/dwyl/hapi-auth-jwt2
[jwt2-bi]: https://travis-ci.org/dwyl/hapi-auth-jwt2.svg?branch=master
[jwt2-cc]: https://codeclimate.com/github/dwyl/hapi-auth-jwt2/badges/coverage.svg
[jwt2-dep]: https://david-dm.org/dwyl/hapi-auth-jwt2.svg
[learn-jwt]: https://github.com/dwyl/learn-json-web-tokens
[jwt2]: https://github.com/dwyl/hapi-auth-jwt2

[env2]: https://github.com/dwyl/env2
[env2-bi]: https://travis-ci.org/dwyl/env2.svg?branch=master
[env2-cc]: https://codeclimate.com/github/dwyl/env2/badges/coverage.svg
[env2-dep]: https://david-dm.org/dwyl/env2.svg
[learn-env]: https://github.com/dwyl/learn-environment-variables

[esta]: https://github.com/dwyl/esta
[esta-bi]: https://travis-ci.org/dwyl/esta.svg?branch=master
[esta-cc]: https://codeclimate.com/github/dwyl/esta/badges/coverage.svg
[esta-dep]: https://david-dm.org/dwyl/esta.svg
[learn-elasticsearch]: https://github.com/dwyl/learn-elasticsearch

[redis-connection]: https://github.com/dwyl/redis-connection
[rcon]: https://github.com/dwyl/redis-connection
[rcon-bi]: https://travis-ci.org/dwyl/redis-connection.svg?branch=master
[rcon-cov]: http://codecov.io/github/dwyl/redis-connection/coverage.svg?branch=master
[rcon-dep]: https://david-dm.org/dwyl/redis-connection.svg
[learn-redis]: https://github.com/dwyl/learn-redis
