# 🔖 bookmark-script 🔖

**实用书签脚本集合 Bookmarklets**

## 🔖 书签脚本

已经构建好的书签脚本 [favorites.html](./dist/favorites.html) 直接导入浏览器即可使用

## 📦 自己构建

```shell
npm i
npm run build
```

推荐先阅读 [bookmark-script-builder](https://github.com/xiaohuohumax/bookmark-script-builder/tree/main/packages/bookmark-script#readme) 介绍文档

## 📄 目前包含书签脚本

+ [Github仓库信息显示](./src/public/github.com/showReposInfo/index.ts)
+ [VIP视频解析](./src/public/vip/video/index.ts)
+ [阿里巴巴矢量图标一键下载](./src/public/www.iconfont.cn/downloadIcons/index.ts)
+ [显示当前时间](./src/public/common/clock/clock.ts)

## 🔗 Cli

本项目基于 **[bookmark-script-builder](https://github.com/xiaohuohumax/bookmark-script-builder)** Cli构建

## 🌳 打包结果目录说明

```text
dist
 └── public
     ├── favorites-network.html   // CDN版可导入书签
     ├── favorites.html           // 离线版可导入书签
     └── 常用脚本
         ├── ....
         └── 显示当前时间(1.0.0)    // 脚本
             ├── bookmark-network.txt // CDN版本
             ├── bookmark.txt         // 离线版本
             └── console.js           // 控制台版本(CDN引入脚本)
```

## 更新日志

[日志](./CHANGELOG.md)

## 最后

玩的开心 🎉🎉🎉🎉
