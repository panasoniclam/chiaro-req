const express = require('express');
const app = express();
app.use(express.static('public'));
app.set("view engine","ejs");
app.set("views","./views");

//setup request
const request = require('request');
const cheerio = require('cheerio')


app.get('/',(req,res,next)=>{
    request("https://vnexpress.net",(err,res,body)=>{
        if(err){
            console.log(err) //not fount or connect found
            res.render("trangchu",{html:"co loi xay ra"})
        }else{
            $ = cheerio.load(body)
            const ds = $(body).find("a.icon_commend")
            // ds.each((i,e)=>{
                // console.log($(this).text())
                // console.log(e["attribs"]["href"])
                  
            }
            
            // console.log(ds)
        //   res.render("tranchu",{html:body})
        } 
      
    })
    
})
const server = require('http').Server(app)
server.listen(8080,()=>console.log('connetc'))