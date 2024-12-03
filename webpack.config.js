//@ts-check

'use strict';

// 引入 Node.js 的 path 模块，用于处理和转换文件路径
const path = require('path');

//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/

/** @type WebpackConfig */
const extensionConfig = {
  // 指定打包目标为 Node.js 环境，VS Code 扩展运行在 Node.js 上下文中 文档：https://webpack.js.org/configuration/node/
  target: 'node',  
  
  // 设置打包模式为 'none'，保持源代码尽可能接近原始状态（在打包时我们将其设置为 'production'）
  mode: 'none', 

  // 指定扩展的入口文件，Webpack 将从此文件开始构建依赖图 文档：https://webpack.js.org/configuration/entry-context/
  entry: './src/extension.ts', 
  
  output: {
    // 指定打包输出的目录和文件名，打包后的文件将存储在 'dist' 文件夹中
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    // 指定输出库的格式为 commonjs2，适用于 Node.js 环境
    libraryTarget: 'commonjs2'
  },
  externals: {
    // 将 vscode 模块标记为外部依赖，不进行打包处理 文档：https://webpack.js.org/configuration/externals/
    vscode: 'commonjs vscode' 
    // 这里添加的模块也需要在 .vscodeignore 文件中添加
  },
  resolve: {
    // 配置模块解析，支持读取 TypeScript 和 JavaScript 文件 文档：https://github.com/TypeStrong/ts-loader
    extensions: ['.ts', '.js'] 
  },
  module: {
    rules: [
      {
        // 使用 ts-loader 处理所有 .ts 文件，排除 node_modules 目录
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  // 配置 source map 选项，使用 nosources-source-map 以隐藏源代码
  devtool: 'nosources-source-map',
  infrastructureLogging: {
    // 启用日志记录，便于问题匹配器使用
    level: "log", 
  },
};

// 导出配置对象
module.exports = [ extensionConfig ];