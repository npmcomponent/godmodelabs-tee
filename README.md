*This repository is a mirror of the [component](http://component.io) module [godmodelabs/tee](http://github.com/godmodelabs/tee). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/godmodelabs-tee`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# tee

  `tee(1)`
  
[![Build Status](https://travis-ci.org/godmodelabs/tee.png?branch=master)](https://travis-ci.org/godmodelabs/tee)

## Usage

```javascript
var tee = require('tee');

src
  .pipe(tee(
    dest1,
    dest2,
    dest3
  ))
  .pipe(somewhereElse)
```

## Installation

```bash
$ npm install tee-1
# or
$ component install godmodelabs/tee
```

## API

### tee(destination, ...)

Creates a new through Stream that pipes all incoming data to each
`destination`-Stream.

Emits `close` when all piped to streams closed.

## License

(MIT)
