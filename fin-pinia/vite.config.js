import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve : {
    alias : [
      // __dirname
      // vite의 절대 경로가 변경이 가능 => nodejs에서 절대경로 __dirname을 제공
      { find : '~', replacement : `${__dirname}/src`},
      { find : "comp", replacement : `${__dirname}/src/components`}
    ]
  },
  server : {
    port : 5500
  }
})

// typescript, composition api