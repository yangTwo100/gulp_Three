const gulp = require('gulp')
const server = require('gulp-webserver')
const sass = require('gulp-sass')
const webpack = require('webpack-stream')
const watch = require('gulp-watch')
const proxy = require('http-proxy-middleware')

//复制html文件
gulp.task('copyhtml',()=>{
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dev/'))
})

//打包sass文件
gulp.task('packsass',()=>{
  return gulp.src('./src/css/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dev/css'))
})

gulp.task('copyicons', () => {
  return gulp.src('./src/icon/**/*')
    .pipe(gulp.dest('./dev/icon'))
})

gulp.task('copylibs', () => {
  return gulp.src('./src/libs/**/*')
    .pipe(gulp.dest('./dev/libs'))
})

//打包js文件
gulp.task('packjs',()=>{
  return gulp.src('./src/js/*.js')
  .pipe(webpack({
    mode:"development",
    entry:{
      app:['@babel/polyfill', './src/js/app.js']
    },
    output:{
      filename:'app.js'
    },
    module:{
      rules:[
        {
          test:/\.html$/,
          use:[ 'string-loader' ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        }
      ]
    }
  }))
  .pipe(gulp.dest('./dev/js'))
})

//服务器
gulp.task('server',()=>{
  return gulp.src('./dev')
  .pipe(server({
    host:'localhost',
    port:3000,
    livereload: true,
    middleware:[
      proxy('/api',{
        target:'https://www.zhihu.com',
        changeOrigin: true
      })
    ]
  }))
})

//监听
gulp.task('watch',()=>{
  gulp.watch('./src/css/sass/*.scss',['packsass'])
  gulp.watch('./src/js/**/*',['packjs'])
  watch('./src/*.html',()=>{
    gulp.start(['copyhtml'])
  })
})

//打包所有
gulp.task('default',['copyhtml','copylibs','packsass','server','copyicons','watch','packjs'],()=>{
  console.log("all works!")
})
