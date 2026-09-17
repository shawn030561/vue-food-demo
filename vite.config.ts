import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 同时绑定 IPv4/IPv6，避免 Windows 下 localhost 解析为 ::1 导致无法访问
    host: true,
    port: 5174,
  },
});
