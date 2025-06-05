import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ["7780-2804-14d-328c-537f-5cdd-289e-bbb2-2912.ngrok-free.app"],
  },
})

