import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-component-library',
  minifyJs: true,
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://stenciljs.com/',
      prerenderConfig: './prerender.config.ts',
    },
  ],
  preamble: 'hello ryan\nwhat is up my dude?'
};
