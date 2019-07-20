# Templates client

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malcodeman/templates-client/blob/master/LICENSE)

Single-page websites for all kinds of things.

![Screenshot](docs/images/screenshot.png)

## Getting started

First, clone and run the api:

```
git clone https://github.com/malcodeman/templates-api.git templates-api
cd templates-api
yarn install && yarn start
```

Next, you can clone and run the frontend:

```
git clone https://github.com/malcodeman/templates-client.git templates-client
cd templates-client
yarn install && yarn start
```

.env.development.local:

```
REACT_APP_API_URL = "http://localhost:4000/api/"
```

## License

[MIT](./LICENSE)
