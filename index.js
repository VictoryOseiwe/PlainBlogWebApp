import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const postArray = []

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// getting request from my server to render each page
app.get("/", (req,res) => {
    res.render("index.ejs",{postArray: postArray})
})
app.get("/about", (req,res) => {
    res.render("about.ejs")
})
app.get("/contact", (req,res) => {
    res.render("contact.ejs")
})
app.get("/idea", (req,res) => {
    res.render("mainIdeaBehindThisBlog.ejs")
})
app.get("/post", (req,res) => {
    res.render("post.ejs")
})

// rendering a post on my server and also store using an array

app.post("/submit",(req, res) => {
    const {title, content} = req.body;
    
    postArray.push({title, content})
    console.log(postArray)
    res.redirect("/")
})

app.listen(port, () => {
    console.log('server started')
});