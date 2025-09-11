// Create Server
const http =require("http")
const PORT =3000


const server =http.createServer((req,res)=>{
    res.end("Hello from Backend")

})
 server.listen(PORT,() =>{
    console.log("server runnin at port 3000")
 }
)

// Connect MangoDB
const mongoose = require("mongoose");
mongoose
	.connect(
        // "mongodb+srv://sanaeguerrouj7_db_user:BUHBiAi0vzh3wdDz@cluster0.m4eop5z.mongodb.net/"
		"mongodb://localhost:27017"
 	)
	.then(() => {
		console.log("connected successfully");
	})
	.catch((error) => {
		console.log("error with connecting with the DB ", error);
	});