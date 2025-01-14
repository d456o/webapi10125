const express=require('express');
const app=express();
const productRouter=require('./api/v1/routes/product');
const mongoose=require('mongoose');

const morgan=require('morgan');
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
console.log(process.env.GOOGLE_USE);
//1012025
//const secure =require('./api/v1/middlewares/secure');
const mongoConnstr=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.gaeoa.mongodb.net/?retryWrites=true&w=majority&appName=cluster0`;
mongoose.connect(mongoConnstr).then(()=>{
    console.log('connected to mongo');
})
//app.use(secure);
app.use('/product',productRouter);

module.exports=app;


