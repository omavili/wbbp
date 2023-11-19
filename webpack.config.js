const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
//const Nunjucks = require('nunjucks'); // used when the preprocessor is a function

const isProd = !process.argv.find((str) => str.includes('development'));

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'source-map' : 'inline-source-map',
  stats: 'minimal',

  output: {
    path: path.join(__dirname, 'dist'),
  },

  resolve: {
    // use aliases used in sources instead of relative paths like ../../
    alias: {
      '@views': path.join(__dirname, 'src/views/'),
      '@images': path.join(__dirname, 'src/assets/images/'),
      '@fonts': path.join(__dirname, 'src/assets/fonts/'),
      '@styles': path.join(__dirname, 'src/assets/styles/'),
      '@scripts': path.join(__dirname, 'src/assets/scripts/'),
    },
  },

  plugins: [
    new HtmlBundlerPlugin({
      // verbose: 'auto', // output information about the process to console in development mode only

      entry: {
        // define HTML templates here
        index: 'src/views/pages/home/index.html', // => dist/index.html
        sets: 'src/views/pages/sets/index.html',
        setdetail: 'src/views/pages/set-detail/index.html',
        faq: 'src/views/pages/content/faq.html',
        login: 'src/views/pages/login/login.html',
        password: 'src/views/pages/login/password.html',
        register: 'src/views/pages/register/register.html',
        registersuccess: 'src/views/pages/register/register-success.html',
        checkoutstep1child: 'src/views/pages/checkout/step-1-child.html',
        checkoutstep1set: 'src/views/pages/checkout/step-1-set.html',
        checkoutstep2: 'src/views/pages/checkout/step-2.html',
        checkoutstep3: 'src/views/pages/checkout/step-3.html',
        checkoutstep4: 'src/views/pages/checkout/step-4.html',
        checkoutsuccess: {
          import: 'src/views/pages/checkout/success.html',
          data: { pageClass: 'checkout--success' }, //Added to hide Header Title and Progress on Success Page
        },
        accountdetails: 'src/views/pages/account/index.html',
        accountpayments: 'src/views/pages/account/payment-methods.html',
        accountnewcard: 'src/views/pages/account/add-payment-method.html',
        accountsubscriptions: 'src/views/pages/account/subscriptions.html',
        accountshipments: 'src/views/pages/account/shipments.html',
        whatisearlylearny: 'src/views/pages/content/what-is-earlylearny.html',
        howitworks: 'src/views/pages/content/how-it-works.html',
        about: 'src/views/pages/content/about.html',
        contact: 'src/views/pages/content/contact.html',
        error404: './src/views/pages/error/404.html',
      },

      js: {
        // output filename of extracted JS from source script loaded in HTML via `<script>` tag
        // filename: 'assets/js/[name].[contenthash:8].js',
        filename: 'assets/js/[name].js',
        // inline: true; // inline compiled JS into HTML
      },

      css: {
        // output filename of extracted CSS from source style loaded in HTML via `<link>` tag
        // filename: 'assets/css/[name].[contenthash:8].css',
        filename: 'assets/css/[name].css',
        // inline: true; // inline compiled CSS into HTML
      },

      // render templates with the Nunjucks template engine
      preprocessor: 'nunjucks',
      // or you can use any template engine as a function like the following:
      //preprocessor: (content, { data }) => Nunjucks.renderString(content, data),
    }),
  ],

  module: {
    rules: [
      // styles
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },

      // fonts (load from `fonts` or `node_modules` directory only)
      {
        test: /[\\/]fonts|node_modules[\\/].+(woff(2)?|ttf|otf|eot|svg)$/,
        type: 'asset/resource',
        generator: {
          // group fonts by name
          filename: (pathData) => `assets/fonts/${path.basename(path.dirname(pathData.filename))}/[name][ext][query]`,
        },
      },

      // images (load from `images` directory only)
      {
        test: /[\\/]images[\\/].+(png|jpe?g|svg|webp|ico)$/,
        oneOf: [
          // inline image using `?inline` query
          {
            resourceQuery: /inline/,
            type: 'asset/inline',
          },
          // auto inline by image size
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 1024,
              },
            },
            generator: {
              // filename: 'assets/img/[name].[hash:8][ext]',
              filename: 'assets/img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  performance: {
    hints: false, // don't show the size limit warning when a bundle is bigger than 250 KB
  },

  devServer: {
    //open: true, // open browser
    compress: false,

    static: {
      directory: path.join(__dirname, './dist'),
    },

    // enable HMR
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true,
      },
    },

    // rewrite rules
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /./, to: '/404.html' },
      ],
    },
  },
};
