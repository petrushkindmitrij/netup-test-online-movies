import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import checker from 'vite-plugin-checker';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@api': path.resolve('./src/api'),
      '@api/*': path.resolve('./src/api/*'),
      '@components': path.resolve('./src/components'),
      '@components/*': path.resolve('./src/components/*'),
      '@hooks': path.resolve('./src/hooks'),
      '@hooks/*': path.resolve('./src/hooks/*'),
      '@icons': path.resolve('./src/icons'),
      '@icons/*': path.resolve('./src/icons/*'),
      '@layouts': path.resolve('./src/layouts'),
      '@layouts/*': path.resolve('./src/layouts/*'),
      '@mocks': path.resolve('./src/mocks'),
      '@mocks/*': path.resolve('./src/mocks/*'),
      '@models': path.resolve('./src/models'),
      '@models/*': path.resolve('./src/models/*'),
      '@pages': path.resolve('./src/pages'),
      '@pages/*': path.resolve('./src/pages/*'),
      '@store': path.resolve('./src/store'),
      '@store/*': path.resolve('./src/store/*'),
      '@styles': path.resolve('./src/styles'),
      '@styles/*': path.resolve('./src/styles/*'),
      '@templates': path.resolve('./src/templates'),
      '@templates/*': path.resolve('./src/templates/*'),
      '@ui-kit': path.resolve('./src/ui-kit'),
      '@ui-kit/*': path.resolve('./src/ui-kit/*'),
      '@utils': path.resolve('./src/utils'),
      '@utils/*': path.resolve('./src/utils/*'),
    },
  },
  plugins: [
    react(),
    checker({ typescript: true }),
    viteStaticCopy({
      targets: [
        {
          src: 'fonts',
          dest: './assets',
        },
        {
          src: 'api',
          dest: '',
        },
      ],
    }),
  ],
});
