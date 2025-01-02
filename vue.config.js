// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const path = require('path')
// 辅助函数 resolve，它接受一个路径参数 dir，并返回该路径相对于当前文件所在目录的绝对路径
function resolve(dir) {
  return path.join(__dirname, dir)
}

const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 正则表达式，用于匹配需要进行 gzip 压缩的文件类型
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
// 定义了一个变量 IS_PROD，它根据当前环境变量 NODE_ENV 的值来判断是否为生产环境
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)


const { defineConfig } = require('@vue/cli-service')
const { DefinePlugin } = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  configureWebpack: config => {
    // 定义一个空数组，用于存放Webpack插件
    const plugins = [
      new DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
      })
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),
    ]
    if (IS_PROD) {
      plugins.push(
        new CompressionWebpackPlugin({ // 使用CompressionWebpackPlugin插件进行gzip压缩
          filename: '[path].gz[query]', // 指定压缩后文件的名称格式
          algorithm: 'gzip', // 指定压缩算法为gzip
          test: productionGzipExtensions, // 指定要压缩的文件类型
          threshold: 10240, // 只有文件大小大于10KB才会被压缩
          minRatio: 0.8 // 只有压缩率达到0.8以上的文件才会被压缩
        })
      )
    }
    config.optimization = {
      runtimeChunk: 'single', // 将runtime代码单独提取为一个chunk
      splitChunks: { // 配置分割代码块的规则
        chunks: 'all', // 选择所有类型的chunk进行优化
        maxInitialRequests: Infinity, // 允许的最大初始请求数，Infinity表示无限制
        minSize: 20000, // 每个代码块的最小大小，小于该值的模块不会被提取
        cacheGroups: { // 定义缓存组
          vendor: { // 缓存组的名称为vendor
            test: /[\\/]node_modules[\\/]/,  // 匹配条件，node_modules目录下的模块
            name(module) { // 模块名称的生成规则
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1] // 获取模块名称
              return `npm.${packageName.replace('@', '')}` // 返回以npm.开头的模块名称，@符号替换为空字符串
            }
          }
        }
      }
    };
    // 将定义的插件数组合并到Webpack配置中的插件数组中
    config.plugins = [...config.plugins, ...plugins];
  },
  chainWebpack(config) {
    // 删除 webpack 中的预加载和预获取资源的插件
    // 这些插件通常会在项目中引入一些未使用的资源，对于一些性能要求较高的项目，可能希望移除这些插件以减少无用资源的加载。
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    // 将入口文件配置为包含了 Babel polyfill 的 main.js 文件
    config.entry.app = ['@babel/polyfill', './src/main.js']
    // 设置了一个别名 @，指向项目中的 src 目录
    // 在代码中引用文件时就可以使用 @ 代替 src
    config.resolve.alias
      .set('@', resolve('src'))
      .set('router', resolve('src/router'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('pages', resolve('src/pages'))
      .end()
    // 如果是开发环境，则调用 config.devtool('cheap-source-map') 方法来配置 devtool 选项，以生成方便调试的源映射文件
    config
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
    // 图片处理规则
    config.module
      .rule('images')
      .test(/\.(woff2?|eot|ttf|otf|png|jpe?g|gif|svg)(\?.*)?$/) // 匹配图片文件的文件名后缀
      .use('url-loader') // 使用 url-loader 加载器处理图片文件
      .loader('url-loader')
      .options({
        limit: 80000, // 小于 80000 字节的图片转换为 base64 编码的 Data URL
        esModule: false // 禁用 ES 模块语法
      })
    if (IS_PROD) {
      config.module
        .rule('images')
        .test(/\.(woff2?|eot|ttf|otf|png|jpe?g|gif|svg)(\?.*)?$/)
        .use('image-webpack-loader') // 用于优化图片文件
        .loader('image-webpack-loader')
        .options({
          mozjpeg: { progressive: true, quality: 65 },
          optipng: { enabled: false },
          pngquant: { quality: [0.65, 0.9], speed: 4 },
          gifsicle: { interlaced: false }
        })
    }
  }
})
