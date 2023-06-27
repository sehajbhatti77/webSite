const express=require("express")
require("./db/conn")
const User=require("./module/userSchema")
const app=express()
var hbs = require('hbs');
const path=require("path")
const port=process.env.PORT || 8000
const { body, validationResult } = require('express-validator');

app.use(express.urlencoded({extended:false}))
hbs.registerPartials(path.join(__dirname,"../views/partials"))
app.set('view engine', 'hbs');
app.use(express.static( path.join(__dirname,"../public")))
app.get("/",(req,res)=>{
  res.render("index")
})

app.post("/contact",[
  body('email',"Please enter valid email").isEmail()
],async(req,res)=>{
  const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const vld=await User.findOne({email:req.body.email})
        if(vld){
         return res.render("sorry user alrady exist with this email")
        }
  const user=new User(req.body)
  await user.save()
  res.render("index")
})
app.listen(port,()=>{
  console.log(`listing at port ${port}`)
})