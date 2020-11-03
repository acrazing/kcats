# moedux

A decentralized state manager for react.

## Features

The API is almost like `redux`, which is the industry standard, but, it
improved the experience of `redux` with the following changes:

- Decentralized the state declaration, you do not need `compose` anymore
- Strong typed, all the API with full TypeScript supports
- Out of the box, no middlewares, no toolkit, no reselect

Something else:

- Full-featured: supports `SSR`, `hook`, `class`
- Action is async natively, likes `mobx`

## Usage

You can get example usage in example directory:

- server side [example/server](./src/example/server.tsx)
- client side [example/client](./src/example/client.tsx)

## License

```
The MIT License (MIT)

Copyright (c) 2020 acrazing

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
```
