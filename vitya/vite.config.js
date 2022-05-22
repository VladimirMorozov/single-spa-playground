import vue from '@vitejs/plugin-vue'

export default {
  build: {
    minify: false,
    rollupOptions: {
      input: 'src/main.js',
      output: {
        format: 'system',
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      },
      preserveEntrySignatures: true
    },
  },
  base: 'http://localhost:3000',
  plugins: [vue({
    template: {
      transformAssetUrls: {
        base: '/src'
      }
    }
  })],
}