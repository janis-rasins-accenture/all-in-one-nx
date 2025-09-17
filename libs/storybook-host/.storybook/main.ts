import type { StorybookConfig } from '@storybook/react-vite';
import reactNativeWeb from 'vite-plugin-react-native-web';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';

const config: StorybookConfig = {
  stories: ['../../**/*.mdx', '../../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    enableCrashReports: false,
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [
        react({
          babel: {
            plugins: ['react-native-reanimated/plugin'],
          },
        }),
        nxViteTsPaths(),
        reactNativeWeb(),
      ],
      build: {
        commonjsOptions: { transformMixedEsModules: true },
      },
      optimizeDeps: {
        include: ['sb-original/default-loader', 'sb-original/image-context'],
      },
    }),
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
