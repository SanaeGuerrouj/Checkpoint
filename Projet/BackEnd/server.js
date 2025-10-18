const express =require("express");
const mongoose = require("mongoose");
mongoose
	.connect(
		"mongodb+srv://sanaeguerrouj7_db_user:VrPuuSrXLcj0ZAHb@clusterbackend.yuh1aav.mongodb.net/"
	)
	.then(() => {
		console.log("connected successfully");
	})
	.catch((error) => {
		console.log("error with connecting with the DB ", error);
	});
	
const Article = require("./models/Articles");


const app = express();
app.use(express.json());
// Utilisateur dar demande Rout tjih res
app.get("/home",(req,res)=>{
    res.send("Hello from backendddd U visited Home Page")

})

app.get("/Contact",(req,res)=>{
    res.send("Hello from backendddd U visited Contact Page")

})

app.get("/Summ/:Number1/:Number2",(req,res)=>{
    // res.send("Hello Summ Page")
    console.log(req.params)
    const Num1 = req.params.Number1
    const Num2 = req.params.Number2
    const Total =Number(Num1) +Number(Num2)

res.send(`The Numbers are : ${Num1} And ${Num2} And total is ${Total}`)


})

// BodyParams
 
app.get("/sayHello", (req, res) => {
	console.log(req.body);

	// console.log(req.query);
	res.send(`Hello ${req.body.name}, Age is: ${req.body.age}`);

	// res.json({
	// 	name: req.body.name,
	// 	age: req.query.age,
	// 	language: "Arabic",
	// });
});


// Query Params

app.get("/Age", (req, res) => {
	console.log(req.query);
    res.send(`My age is ${req.query.age}`);


   
});

//Response peut etre sous forme de jason
app.get("/Jason", (req, res) => {
 
	// console.log(req.query);
	// res.send(`Hello ${req.body.name}, Age is: ${req.query.age}`);

	res.json({
		name: req.body.name,
		age: req.query.age,
		language: "Arabic",
	});
});







// Avant Nkhdem Serveur 
// SERVER READY pr Lisen L demande d user
app.listen(3000,()=>{
    console.log("I am Lisining In port 3000")
});


// ======= ARTICLES ENDPOINTS =====

app.post("/articles", async (req,res) => {
 
 const newArticle = new Article();
 	// newArticle.title = "Article1";
	// newArticle.body = "Helloo this is Article 2 Contenet";
	// newArticle.numberOfLikes = 100;
	// await newArticle.save();
	// res.send("Article 1 has been stored");


    //had les element raywslona m client ndirohom body params sum f postman
	const artTitle = req.body.articleTitle;
	const artBody = req.body.articleBody;
	 newArticle.title = artTitle;
	 newArticle.body = artBody;
	newArticle.numberOfLikes = 0;
	await newArticle.save();


 	res.json(newArticle);

});


app.get("/articles", async (req, res) => {
	const articles = await Article.find();
	console.log("the articles are", articles);

	res.json(articles);
});



// Trouver un article b id dialo  pathparam
app.get("/articles/:articleId", async (req, res) => {
	const id = req.params.articleId;

	try {
		const article = await Article.findById(id);
		res.json(article);
		return;
	} catch (error) {
		console.log("error while reading article of id ", id);
		return res.send("error");
	}
});


