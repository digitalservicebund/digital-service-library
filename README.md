<p align="center">
  <img src="https://github.com/digitalservice4germany/digital-service-library/blob/main/public/images/logo_200px.jpeg?raw=true" alt="Digital Service 4 Germany Logo"/>
</p>

# digital-service-library

Component Library for and by DigitalService4Germany

[![Documentation](https://img.shields.io/badge/Documentation-blue.svg)](https://digitalservice4germany.github.io/digital-service-library/?path=/story/docs-readme--page)
[![version](https://img.shields.io/npm/v/@digitalservice4germany/digital-service-library.svg)](https://www.npmjs.com/package/@digitalservice4germany/digital-service-library)
[![codecov](https://codecov.io/gh/digitalservice4germany/digital-service-library/branch/main/graph/badge.svg?token=2FTXQ46IS0)](https://codecov.io/gh/digitalservice4germany/digital-service-library)
[![Issues](https://img.shields.io/github/issues/digitalservice4germany/digital-service-library)](https://github.com/digitalservice4germany/digital-service-library/issues)
[![MIT License](https://img.shields.io/npm/l/starwars-names.svg)](http://opensource.org/licenses/MIT)

## Requirements

* React
* TailwindCSS

## Installation

```bash
npm install --save @digitalservice4germany/digital-service-library
```

### Configure TailwindCSS

The library expects an existing TailwindCSS setup in your project. Please change your `tailwind.config.js` in two places.

1. add the preset `require("@digitalservice4germany/digital-service-library").TailwindConfig`
2. add the path to the library's components `"./node_modules/@digitalservice4germany/digital-service-library/dist/esm/index.js"` to your array of content paths

Afterwards your config might look like this:

```js
module.exports = {
  presets: [
    require("@digitalservice4germany/digital-service-library").TailwindConfig,
  ],
  content: [
    "./app/**/*.{ts,tsx}",
    "./node_modules/@digitalservice4germany/digital-service-library/dist/esm/index.js",
  ],
};
```

## Usage

```tsx
import { Button } from "@digitalservice4germany/digital-service-library";

<Button secondary small>Hello button!</Button>
```

## Development

### Yeoman Generator

Basic scaffolding tool to create a component skeleton. Setup:

```bash
cd generator-storybook
npm install
sudo npm link
```

If neccessary install `yo`:

```bash
sudo npm install -g yo
```

Run the generator:

```bash
yo storybook:component ComponentName
```
