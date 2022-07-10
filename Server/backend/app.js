const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

const productRoutes=require('./api/routes/Product')
const ordersRoutes=require('./api/routes/Orders')
const usersRoutes=require('./api/routes/User');
const postRouter=require('./api/routes/Posts');
const checkAuth=require('./api/routes/CheckAuth');
const emailRouter=require('./api/routes/Email')

const db='mongodb://localhost:27017/Credadda';


// connecting to mongo db
mongoose.connect(db).then(()=>{
    console.log('connection successful');
}).catch((err)=>console.log('Error'))
mongoose.Promise=global.Promise;

const morgan=require('morgan');
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Handeling cors error

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')  //wildcard
    res.header('Access-Control-Allow-Headers','*');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Methods','POST','GET','PATCH','DELETE')
        return res.status(200).json({});
    }
    next();
})

// Routes to handel request
app.use('/products',productRoutes)
app.use('/orders',ordersRoutes);
app.use('/users',usersRoutes);
app.use('/post',postRouter);
app.use('/checkauth',checkAuth);
app.use('/email',emailRouter)

//Error handeling
//if no paths matched

app.use((req,res,next)=>{
    const error=new Error('No matching paths')
    error.status=404;
    next(error);
})

// if methods not matched

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
})

module.exports=app;