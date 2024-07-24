### 技术栈

涉及的技术栈均采用当前最新的版本和语法：

- 使用 vite5 构建项目（不使用 create-react-app、umi 等脚手架）；
- 使用 @vitejs/plugin-react 配置转换 ES6、React等语法；
- React 版本 V18.3.1，全部采用函数化 Hooks 特性开发项目组件；
- 采用 React-router-dom v6 工具 配置项目路由；
- 采用 Recoil + Hooks 实现项目数据状态管理；
- 封装 Axios 库实现与后台 http 请求交互；
- UI 库采用流行的 ant-design-mobile@5.37.1 组件库；
- 完整项目实现及模块结构拆分；

### 目录结构

```
├── build                   // vite配置
│   ├── plugin.ts           // vite插件配置
├── dist                    // 打包输出目录
├── public                  // 项目公开目录
├── src                     // src开发目录
│   ├── api                 // 接口业务文件
│   ├── assets              // 静态资源
│   ├── components          // 公共组件
│   ├── context             // 全局context文目录
│   ├── hooks               // 公共hooks
│   ├── layouts             // 页面布局组件
│   ├── libs                // 工具库/http库/通用函数
│   ├── router              // 项目路由配置
│   ├── store               // 全局公共recoil状态管理
│   ├── types               // 自动导入类型声明文件
│   ├── views               // 具体业务页面
│   ├── App.tsx             // 项目入口App组件
│   └── main.tsx            // 项目入口文件
├── .env                    // 环境配置
├── .env.dev                // 环境配置
├── .env.local              // 环境配置
├── .env.prod               // 环境配置
├── .env.test               // 环境配置
├── .eslintignore           // eslint忽略文件
├── .eslintrc-auto-import.json  // eslint全局变量
├── .eslintrc.js            // ESLint配置
├── .gitignore              // git 忽略配置
├── .npmrc                  // npm安装默认定义
├── .prettierignore         // prettier检测忽略文件
├── index.html              // 入口html
├── package.json            // npm包依赖
├── pnpm-lock.yaml          // npm包版本文件
├── postcss.config.js       // postcss配置
├── prettier.config.js      // prettier配置
├── README.md               // 项目说明
├── tailwind.config.js      // tailwindcss配置
├── tsconfig.json           // ts配置
└── vite.config.ts          // vite配置
```

## CLI 构建命令

### 初始化依赖配置

```bash
pnpm install
```

### 开发环境 启动运行

```bash
pnpm dev
```

### 生产环境 打包构建

```bash
pnpm build  //生产环境 打包构建

pnpm build:report // 图形化分析打包文件大小；
```

## More
