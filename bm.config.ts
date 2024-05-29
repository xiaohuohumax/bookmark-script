import { defineConfig } from '@xiaohuohumax/bookmark-script';
import { name, author, version } from './package.json';

import path from 'node:path';
import fs from 'node:fs';

const banner = `/**
 * [name] [version]
 * [description]
 * Copyright (c) 2020-present ${author}
 * Power by ${name} ${version}
 * @license MIT
 */`;

export default defineConfig(() => {
  return {
    banner,
    outDir: 'dist/public',
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '#': path.resolve(import.meta.dirname, ''),
    },
    bmBuildOptions: {
      htmlTemple: fs.readFileSync(path.resolve(import.meta.dirname, 'index.html'), 'utf-8')
    },
    scans: [{
      root: 'src/public'
    }],
    cdn: 'https://cdn.jsdelivr.net/gh/xiaohuohumax/bookmark-script/dist/public/',
    cdnTimeout: 5
  };
});