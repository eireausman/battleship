const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const path = require(`path`);

module.exports = {
  // mode: `development`,
  mode: `production`,
  entry: {
    index: {
      import: `./src/index.js`,
      // dependOn: 'shared',
    },
    // // another: {
    // //   import: './src/another-module.js',
    // //   dependOn: 'shared',
    // },
    // shared: '',
  },
  output: {
    path: path.resolve(__dirname, `./dist`),
    filename: `[name].bundle.js`,
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `Battleship Game`,
    }),
  ],
  optimization: {
    runtimeChunk: `single`,
  },
  devtool: `inline-source-map`,
  devServer: {
    static: `./dist`,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [`style-loader`, `css-loader`],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: `asset/resource`,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: `asset/resource`,
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-env`],
          },
        },
      },
    ],
  },
};
