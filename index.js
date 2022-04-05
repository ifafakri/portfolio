const express=require('express')
const app=express()
app.use(express.static('public'))
app.use(express.static('./node_modules'))
app.use(express.static('./views/style'))
app.use(express.static('./node_modules/font-awesome'))
const handlebars=require('express-handlebars')





app.set('port',process.env.PORT || 3000)
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get('/home',(req,res)=>{


 res.render('home')


})



// 404 error page


app.use(

(req,res)=>{
res.status(404)
res.type('html')


res.render('404')


}

)




app.listen(app.get('port'))

