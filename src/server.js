'use strict';

const express=require('express');

const notFoundHandler=require('./error-handlers/404');
const errorHandler=require('./error-handlers/500');
const validator=require('./middleware/validator')

const logger=require('./middleware/logger');


const app=express();

app.use(express.json());
app.use(logger);




app.get('/person',validator,(req,res)=>{
    let name=req.query.name;
    res.status(200).json({name:name});
});


const start=(port)=>{
    app.listen(port,()=> console.log(`Server is up on ${port}`));

}

app.use('*',notFoundHandler);
app.use(errorHandler);

module.exports={
    app:app,
    start:start
};

