# spark

[![Build Status][travis-image]][travis-url]

[travis-url]: https://travis-ci.org/tlvince/spark
[travis-image]: https://img.shields.io/travis/tlvince/spark.svg

> IdeaMVC

## Installation

This project was bootstrapped with [Create React Native App][].

First ensure you have Node >=6.11.3 and Yarn >=1 installed. Clone the `spark` repo then run `yarn`.

[Create React Native App]: https://github.com/react-community/create-react-native-app/

## Usage

Then you're ready to roll! Try out the npm/Yarn run scripts:

* `npm start`: runs the app in development mode.

Note, you'll need ports 3000, 19000 and 19001 open for the development server, e.g.:

```shell
iptables -A INPUT -p tcp --match multiport --dport 3000,19000,19001 -j ACCEPT
```

See the Create React Native App [user guide][] for further usage.

[user guide]: https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md

## Author

© 2017 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the Apache-2.0 license.
