import MyPlugin from 'vite-plugin-starter'
import vue from '@vitejs/plugin-vue'
export default {
  plugins: [
    vue(),
    MyPlugin(),
  ],
}
