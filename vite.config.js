import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// 飞书多维表格插件规范：相对路径打包，产物输出到 dist。
// 使用 singlefile 插件把所有 JS 内联进单个 index.html，方便上传与审核。
export default defineConfig({
  base: './',
  plugins: [viteSingleFile()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 10000
  }
});
