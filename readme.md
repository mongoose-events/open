# mongoose-events-open
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![NSP Status][nsp-image]][nsp-url]

a mongoose event handler that handles the open event

## table of contents
* [installation](#installation)
* [usage](#usage)
    * [basic](#basic)
    * [with a logging service](#with-a-logging-service)
* [license](#license)

## installation
```javascript
npm install mongoose-events-open
```

## usage
### basic
```javascript
var openEvent = require( 'mongoose-events-open' )
var db

db = mongoose.connection
db.on( 'open', openEvent.bind( db ) )
```

### with a logging service
```javascript
var openEvent = require( 'mongoose-events-open' )
var db

// logging service needs to have a .log( arg1[, arg2[, ...] ] ) method
var logger = require( 'your-logger' )

db = mongoose.connection
db.on( 'open', openEvent.bind( db, logger ) )
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/mongoose-events/open/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/mongoose-events/open?branch=master
[mit-license]: https://raw.githubusercontent.com/mongoose-events/open/master/license.txt
[npm-image]: https://img.shields.io/npm/v/mongoose-events-open.svg
[npm-url]: https://www.npmjs.com/package/mongoose-events-open
[nsp-image]: https://nodesecurity.io/orgs/mongoose-events/projects/defb6836-e8af-44b4-9ced-b0f6a03edd69/badge
[nsp-url]: https://nodesecurity.io/orgs/mongoose-events/projects/defb6836-e8af-44b4-9ced-b0f6a03edd69
[travis-image]: https://travis-ci.org/mongoose-events/open.svg?branch=master
[travis-url]: https://travis-ci.org/mongoose-events/open
