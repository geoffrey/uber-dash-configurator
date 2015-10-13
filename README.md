uber-dash-configurator
===

Simple utility to generate an `AWS Lambda script` to use with a `AWS IoT rule` connected to a new `Amazon Dash button`.
The utility let you connect with Uber in order to get a `token`. It also let you choose a `pickup and a dropoff location` as well as the `product` you wish to order from your button.
In order to not require dependencies and make the script more lean and easy to setup on AWS Lambda, I had to use node's `https` module to post requests to uber.


Development
===
```
npm install
npm start
```

Tests
===
WIP

Contribute
===
Feel free to visit the [issue page](https://github.com/geoffrey/uber-dash-configurator/issues) and send pull-requests, I will look into them ASAP.


License
===
The MIT License (MIT)

Copyright (c) 2015 Geoffrey Tisserand

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
