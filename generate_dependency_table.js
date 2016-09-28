/**

| Project | Used For | Build | Coverage | Dependencies | Learn |
| --------|----------|:-----:|:--------:|:------------:|-------|
| **[hapi-auth-jwt2]** | Authorization | [![build][jwt2-bi]][jwt2] | [![cov][jwt2-cc]][jwt2] | [![deps][jwt2-dep]][jwt2] | [learn-jwt] |

**/
var baseurl = 'https://github.com/dwyl/';
var pkg = require('./package.json');
var deps = Object.keys(pkg.dependencies);

// MANUALLY UPDATE package.json "lean" object when ever a new dependency is added
var learn = Object.keys(pkg.learn);

// table header:
table = ['| Project | Used For | Build | Coverage | Dependencies | Learn |'];
// table row alignment:
table.push('| --------|----------|:-----:|:--------:|:------------:|-------|');

// loop through the list of dependencies and add a line
deps.forEach(function (d) {
  table.push(row(d));
});

function row (d) {
  return '| ' + [
    repo_link,
    used_for,
    build_status,
    coverage,
    dependencies,
    learn_link
  ].map(function(fn) {
    return fn(d);
  }).join(' | ') + ' |';
}


function repo_link (d) {
  return '[**' + d + '**](' + baseurl + d +')'
}

function used_for (d) {
  console.log(d, learn[d], pkg.learn[d].use);
  return pkg.learn[d] && pkg.learn[d].use ? pkg.learn[d].use : 'please update in package.json';
}

function build_status (d) {
  return '[![Build Status](https://travis-ci.org/dwyl/' + d
    + '.svg?branch=master)](https://travis-ci.org/dwyl/' + d + ')';
}

function coverage (d) {
  return '[![Test Coverage](https://img.shields.io/codecov/c/github/dwyl/' + d
   + '.svg?maxAge=2592000)](https://codecov.io/github/dwyl/' + d + '?branch=master)';
}

function dependencies (d) {
  return '[![dependencies Status](https://david-dm.org/dwyl/' + d
  + '/status.svg)](https://david-dm.org/dwyl/' + d + ')';
}

function learn_link (d) {
  return pkg.learn[d] && pkg.learn[d].link ? pkg.learn[d].link : 'please update in package.json';
}


function end () {
  return '---';
}


console.log(table.join('\n'));
// Write the Learn Section to package.json based on latest dependencies list
