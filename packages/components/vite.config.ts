/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  test: {
    environment: 'happy-dom'
  },
  build: {
    rollupOptions: {
      external: ['vue', /\.less/, /\.css/],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: '../vorangeui/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: '../vorangeui/lib'
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'vorangeui'
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      outputDir: ['../vorangeui/es/src', '../vorangeui/lib/src'],
      tsConfigFilePath: '../../tsconfig.json'
    }),
    DefineOptions(),
    {
      name: 'style',
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle)

        for (const key of keys) {
          const bundler: any = bundle[key as any]
          this.emitFile({
            type: 'asset',
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.less/g, '.css')
          })
        }
      }
    }
  ]
})
