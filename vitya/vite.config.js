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
        base: '/private/app/vitya/' // changes things like <img src="***" />, worked only in prod build, not going to pursue in dev, since we aren't going to use vue anyway
      }
    }
  })],
}