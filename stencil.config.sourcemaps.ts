import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-component-library',
  sourceMap: true,
  minifyJs: true,
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
