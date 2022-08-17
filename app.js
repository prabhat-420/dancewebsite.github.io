const express1=require('express');
const path=require('path');
const app=express1();
const port=8000;



app.use('/static',express1.static('static'))


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


app.get('/',(req,res)=>{
    const param={}

   res.status(200).render('home.pug',param);

});

app.get('/contact',(req,res)=>{
    const param={}

   res.status(200).render('contact.pug',param);

});

app.listen(port,()=>{
    console.log(` this server is successfully runing on port  ${port}`);
});