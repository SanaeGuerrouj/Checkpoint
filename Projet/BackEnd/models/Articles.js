const mongoose = require("mongoose");
// Schema t3tini architecture d pg b7al ila kona nchofo tbleau dial had pg  f Bd (had le cas fichier)
// chno raykono les element dialo
// Hd le cas article (title body number0Like) cas login(nom email pssworld..)
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: String,
	body: String,
	numberOfLikes: Number,
});

const Article = mongoose.model("Article", articleSchema);   
// model("Article=smiya dial tableu f BD", articleSchema=shema dial les emelment l y3mro had tableau);

module.exports = Article;

