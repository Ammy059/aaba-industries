
const express=require('express');
const app=express();
app.get('/',(req,res)=>res.send('Aaba Industries API'));
app.listen(5000);
