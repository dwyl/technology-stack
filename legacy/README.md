# `JavaScript` / `Node.js` Stack

<!-- We refer to our Node.js Stack as "Classic". -->
We have deployed our **`Node.js`** stack for _many_ clients
and internal apps and achieved good results! <br />
It works well and we have not had any issues with "_performance_"
or "_scaling_" deploying to AWS.
> For an example of app built using our Node.js Stack <br />
see: https://github.com/TheScienceMuseum/collectionsonline <br />

There's no "_reason_" to "_rewrite_"
any of our _existing_ projects to _any_ other "_stack_". <br />
**`Node.js`** works perfectly well 
and will continue to be supported 
for the lifetime 
of the project(s)

> See: "***tl;dr***" section below if you are _interested_
in ***why*** we decided to "_evolve_" 
to "***PETAL***" for ***new*** projects...

## Overview

The following diagram is an overview of our **`Node.js`** stack:  

![dwyl-stack-with-postgres](https://cloud.githubusercontent.com/assets/194400/18927934/e5a9d0a4-85b5-11e6-9c59-4d5052d09053.png)

> <small>Note: To edit/improve this diagram: https://github.com/dwyl/technology-stack/issues/1 </small>

We have produced a ***complete beginners guide*** 
for *each* of the components in our stack. (see below)

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
~~scalable~~ simple network applications. Lightweight and efficient, perfect for
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

We *carefully* select and only use *well-maintained* 
"*pure*" JavaScript modules
in our development toolchain:

+ **Tape** for testing: https://github.com/dwyl/learn-tape
+ **Istanbul** for Code Coverage: https://github.com/dwyl/learn-istanbul
+ **Pre-commit** for ensuring all commits pass strict quality checks
`before` being pushed to GitHub. see: https://github.com/dwyl/learn-pre-commit
+ **GoodParts** "_linting_" and checking code style is _consistent_:
https://github.com/dwyl/goodparts
+ **CodeCov** for *detailed* test/code coverage stats
https://github.com/dwyl/learn-istanbul#tracking-coverage-as-a-service
+ **CodeClimate** for tracking code quality:
https://github.com/dwyl/learn-codeclimate


  [![HitCount](https://hits.dwyl.com/dwyl/technology-stack-node.svg?style=flat-square)](http://hits.dwyl.com/dwyl/technology-stack)
