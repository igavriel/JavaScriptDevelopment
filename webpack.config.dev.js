import path from 'path';

export default {
  debug: true,
  // compilation vs quality
  devtool: 'inline-source-map',
  // web pack list of all file its bundle
  noInfo: false,
  // ignore hot reload
  // __dirname - magic path word
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  // target web or node or electron
  target: 'web',
  // where to create the bundle - 
  // simulate the file existance
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  // optional plugins
  plugins: [],
  // how to handle different file types
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
