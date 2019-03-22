To be clear...this is a joke repo. I like it. I find it funny. I will keep it here public. Fun times. Good memories.

# schmeckle-converter
Convert Schmeckles to most currencies used on Earth.

### Installation

```sh
$ npm i schmeckle-converter --save
```

### Usage

First, you'll need an API key from https://currencylayer.com

Require schmeckle converter:
```sh
  const schmeckles = require('schmeckle-converter');
```

To convert currency to SHM:
The following will convert 25 AUD to SHM.
```sh
  const key = 'YOUR_API_KEY';
  schmeckles.convert(key, 25, "AUD").then( (data) => {
    // Do something converted data
    console.log(data)
  });
```
