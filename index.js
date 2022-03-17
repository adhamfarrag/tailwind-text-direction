const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(() => {
  return function ({ addUtilities }) {
    addUtilities({
      '.text-direction-rtl': { direction: 'rtl' },
      '.text-direction-ltr': { direction: 'ltr' },
      '.text-direction-initial': { direction: 'initial' },
      '.text-direction-inherit': { direction: 'inherit' },
    });
  };
});
