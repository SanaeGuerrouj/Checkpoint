// Create Server
const http =require("http")
 require('dotenv').config();

const server =http.createServer((req,res)=>{
    res.end("Hello from Backend holaaa siiiii")

})
 server.listen(process.env.PORT,() =>{
    console.log("server runnin at port 3000")
 }
)



