 const express=require('express')
 require('./config');
 const newsModel=require('../demo-news app-backend/news');

 const app=express();
 app.use(express.json());

 app.post('/',async(req,resp)=>{
    let news=newsModel(req.body);
    let result=await news.save();
    resp.send(result);
 });

 app.listen(3001);
