<p align="center">
  <img src="https://github.com/digitalservice4germany/digital-service-library/blob/main/public/images/logo_200px.jpeg?raw=true" alt="Digital Service 4 Germany Logo"/>
</p>

# digital-service-library

Component Library for and by DigitalService4Germany

[![Documentation](https://img.shields.io/badge/Documentation-blue.svg)](https://digitalservice4germany.github.io/digital-service-library/?path=/story/docs-readme--page)
[![version](https://img.shields.io/npm/v/@digitalservice4germany/digital-service-library.svg)](https://www.npmjs.com/package/@digitalservice4germany/digital-service-library)
[![Issues](https://img.shields.io/github/issues/digitalservice4germany/digital-service-library)](https://github.com/digitalservice4germany/digital-service-library/issues)
[![MIT License](https://img.shields.io/npm/l/starwars-names.svg)](http://opensource.org/licenses/MIT)

## Installation

```
npm install --save @digitalservice4germany/digital-service-library
```

## Usage

### React

```js
import { Button } from "@digitalservice4germany/digital-service-library";
// it is enough to add the css file only once in your app.jsx
import "@digitalservice4germany/digital-service-library/index.css";
```

### Remix

You can either use your own tailwind configuration or use the one we ship with the component library.

Just add the css in your root.tsx file:

```js
import type { LinksFunction } from "remix";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/@digitalservice4germany/digital-service-library@latest/dist/cjs/index.css",
    },
  ];
};
```

Then you can use the styled components as usual in your code.

```js
import { Button } from "@digitalservice4germany/digital-service-library";

<Button label="Hello Button" />;
```

## Yeoman Generator

Basic scaffolding tool to create a component skeleton. Setup:

```
  cd generator-storybook
  npm install
  sudo npm link
```

If neccessary install `yo`:

```
  sudo npm install -g yo
```

Run the generator:

```
  yo storybook:component ComponentName
```
