# Tailwind CSS Text Direction Plugin

This plugin adds utilities to use `direction` with Tailwind CSS.

## Why not relying on `dir="auto"`

Because not always the case that developers want to flip everything in their page. Previously I used to rely on a mix of `i18n` (I mainly use Vue and Svelte) and binding custom `.rtl: { direction: rtl }` class. But since tailwind strted supporting `rtl:` then I thought it's a good idea to rely on a plugin to handle text direction.

I still find `text-direction-...` is a long name. But it's one of the things I like about tailwind. Readable without any issues.

## Installation

Add this plugin to your project:

```bash
# Install using npm
npm install --save-dev tailwind-text-direction

# Install using yarn
yarn add -D tailwind-text-direction
```

## Usage

```js
// tailwind.config.js
  plugins: [
    require('tailwind-text-direction')
  ],
```

And that's it. Now you can have use:

- `text-direction-rtl`
- `text-direction-ltr`
- `text-direction-inherit`
- `text-direction-initial`

