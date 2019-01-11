import express  from 'express';
import path from 'path';
import open  from 'open';

import webpack from 'webpack';
import config from '../webpack.config';

/* eslint-disable no-console*/ // disables this rule for this file

const port = 5000;
const app = express();

const compiler = webpack(config);//This is how we config express with webpack

app.use(require('webpack-dev-middleware')(compiler,{//tell express that we want to use webpack
  noInfo:true,
  publicPath:config.output.publicPath
}));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));

});

app.get('/bundle.js', function(req,res){
  res.sendFile(path.join(__dirname,'../src/bundle.js'));
});

app.listen(port,function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:'+port);
  }

});
