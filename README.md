# Tattler

A helper class that wraps an async function to be called later and returns a promise that resolves with the result of that former function when the said function is called.

```js
import Tattler from 'tattler'

const promiseFunction = () => { /* promise */ }

const tattler = new Tattler(promiseFunction)

tattler.wait.then((functionOutput) => {
  /* do something with the output */
})

/***
 * You can pass the mimic function on and use it normally when
 * it is called, it will resolve tattler.wait with the result
 */

passThePromiseFunctionAlong(tattler.mimic)
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project is an [npm](https://npmjs.com) module.

Before installing, [download and install node.js](https://nodejs.org/en/download/).

### Installing

Run `npm install`

```bash
npm install -s tattler
```

Or using yarn

```bash
yarn add tattler
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/jdtzmn/tattler/tags).

## Authors

* **Jacob Daitzman** - *Initial work* - [jdtzmn](https://github.com/jdtzmn)

See also the list of [contributors](https://github.com/jdtzmn/tattler/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [PurpleBooth](https://github.com/PurpleBooth/) for this README.md template