import { defineConfig } from 'vite'; // Import only once
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hack2024/frontend/',  // Make sure this matches your GitHub repo name
});
