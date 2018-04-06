const path = require('path')
const webpack = require('webpack')
const fs = require('fs')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const loadMinified = require('./build/load-minified')

const NODE_ENV = process.env.NODE_ENV

const setPath = function (folderName) {
  return path.join(__dirname, folderName)
}

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

const buildingForLocal = () => {
  return (NODE_ENV === 'development')
}

function deps () {
  const d = require('./package').dependencies

  d['gridy'] = 'github:darosh/gridy'
  d['gridy-games-lib'] = 'github:darosh/gridy-games-lib'

  return Object.keys(d).reduce((r, k) => {
    r[k] = d[k].startsWith('github') ? d[k] + ':' + require(path.join(k, 'package.json')).version : d[k]
    return r
  }, {})
}

function firebase () {
  try {
    return JSON.parse(fs.readFileSync('.firebase.json', 'utf8'))
  } catch (ignore) {
    return false
  }
}

// Not extracting CSS because its not compatible yet.
// https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/701
// Should be working soon.
// const extractCSS = new ExtractTextPlugin({
//   filename: "css/styles.[hash].css",//"[name].[contenthash].css",
//   disable: process.env.NODE_ENV === "development"
// });

const extractHTML = new HtmlWebpackPlugin({
  filename: 'index.html',
  inject: true,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true
    // more options:
    // https://github.com/kangax/html-minifier#options-quick-reference
  },
  template: setPath('/src/index.ejs'),
  environment: process.env.NODE_ENV,
  isLocalBuild: buildingForLocal(),
  serviceWorkerLoader: `<script>${loadMinified(buildingForLocal() ? './build/service-worker-dev.js' : './build/service-worker-prod.js')}</script>`,
  iconVersion: require('./package').iconVersion
})

const compileManifest = new HtmlWebpackPlugin({
  filename: 'static/manifest.json',
  inject: false,
  template: setPath('/src/manifest.ejs'),
  iconVersion: require('./package').iconVersion
})

const config = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'Tone': 'tone/Tone',
      'd3-color': resolve('plugins/dummy'),
      'd3-format': resolve('plugins/dummy')
    }
  },
  output: {
    globalObject: 'self'
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all' // Taken from https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
    }
  },
  resolveLoader: {
    modules: [setPath('node_modules')]
  },
  mode: buildingForLocal() ? 'development' : 'production',
  devtool: buildingForLocal() ? 'inline-source-map' : false,
  devServer: {
    historyApiFallback: true,
    noInfo: false
  },
  plugins: [
    extractHTML,
    compileManifest,
    // extractCSS,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + NODE_ENV + '"'
      },
      'process.APP_VERSION': JSON.stringify(require('./package').version),
      'process.APP_STORAGE_VERSION': JSON.stringify(require('./package').storageVersion),
      'process.APP_BUILD': JSON.stringify(new Date().toISOString()),
      'process.APP_DEPENDENCIES': JSON.stringify(deps()),
      'process.APP_FIREBASE': JSON.stringify(firebase())
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'static'),
      to: 'static',
      ignore: ['.*']
    }]),
    // service worker caching
    new SWPrecacheWebpackPlugin({
      cacheId: 'gridy-games',
      filename: 'service-worker.js',
      staticFileGlobs: ['dist/**/*.{js,html,css}', 'dist/**/icon-web.svg'],
      minify: true,
      logger: () => {
      },
      stripPrefix: 'dist/',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/ajax\.googleapis\.com\//,
          handler: 'cacheFirst'
        },
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
          handler: 'cacheFirst'
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
          handler: 'cacheFirst'
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // postcss: [require('postcss-cssnext')()],
          // options: {
          //     extractCSS: true
          // },
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      // {
      //   test: /\.css$/,
      //   use: extractCSS.extract({
      //     fallback: "style-loader",
      //     use: ["css-loader", "autoprefixer-loader"]
      //   })
      // },
      {
        test: /\.styl$/,
        use:
        /* buildingForLocal() ?
        extractCSS.extract({
          fallback: "style-loader",
          use: ['css-loader', 'autoprefixer-loader', 'stylus-loader']
        }) : */
          [
            {
              loader: 'style-loader', // creates style nodes from JS strings
              options: {sourceMap: false}
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
              options: {sourceMap: false}
            },
            {
              loader: 'postcss-loader', // creates style nodes from JS strings
              options: {sourceMap: false}
            },
            {
              loader: 'stylus-loader', // compiles Stylus to CSS
              options: {sourceMap: false}
            }
          ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]',
          // useRelativePath: buildingForLocal()
          useRelativePath: true
        }
      }
    ]
  }
}

if (process.env.npm_config_report) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  config.plugins.push(new BundleAnalyzerPlugin({
    defaultSizes: 'gzip'
  }))
}

module.exports = config
