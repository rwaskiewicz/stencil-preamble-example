import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-component-library',
  minifyJs: true,
  outputTargets: [
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'dist-custom-elements',
    },
    { type: 'dist-hydrate-script' },
    {
      type: 'dist'
    },
    {
      type: 'www',
      // serviceWorker: null,
    },
  ],
  preamble: 'hello ryan\nwhat is up my dude?'
};
