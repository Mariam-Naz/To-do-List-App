const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+'/date.js');

const items = ['JS','GIT','EJS'];
const workItems = [];

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine','ejs');
app.get("/",function(req,res){
    let day = date.getDate();
    let  itemLenght = items.length;
    res.render('list',{listTitle:day , nI: items, itemL : itemLenght});
    
});

app.get('/work',function(req,res){
    let  workItemLenght = workItems.length;
    res.render('list',{listTitle:'Work List' , nI: workItems, itemL : workItemLenght}); 
});

app.get('/about',function(req,res){
    res.render('about');
})

app.post("/",function(req,res){
  if(req.body.list=='Work'){
      let item =req.body.newItem;
      workItems.push(item);
      res.redirect('/work');
  }else{
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/")
  }
});

app.listen(3000,function(){
    console.log("Server started at port 3000");
});

