import express from 'express'
import bodyParser from 'body-parser';
const port = 4000;
const app= express()




app.use(express.static('public'))  // static files are in the public folder
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res,next)=>{
    res.render('index.ejs')
    next()
})


app.post('/item',(req,res)=>{
console.log(req.body);

})

app.listen(port,()=>{
    console.log(port);
})


