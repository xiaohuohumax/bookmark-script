import { defineConfig, scanScript } from '@xiaohuohumax/bookmark-script';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import postcss from 'rollup-plugin-postcss';
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

const htmlFile = path.resolve(__dirname, 'index.html');

export default defineConfig(() => {
  return {
    banner,
    plugins: [
      typescript({
        check: false,
      }),
      postcss({
        plugins: [
          cssnano(),
          autoprefixer(),
          postcssImport()
        ]
      }),
      alias({
        entries: {
          '@': path.resolve(__dirname, 'src'),
          '#': path.resolve(__dirname, '')
        }
      }),
      json()
    ],
    bmBuildOptions: {
      personalToolbarFolder: true,
      htmlTemple: fs.readFileSync(htmlFile, 'utf-8')
    },
    bms: scanScript({
      root: 'src/public',
      optionPrefix: '#',
      folderFileName: 'bmf.txt'
    }),
  };
});