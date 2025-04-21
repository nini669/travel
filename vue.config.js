// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => ({
        ...options,
        name: 'css/fonts/[name].[hash:8].[ext]', // 输出到 css/fonts 目录
        publicPath: '../', // 从 CSS 文件出发，路径为 ../fonts/...
      }));
  },
  publicPath: './',
};