import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express()

let titles = ["avvakaya badda", "o"]
let contents = ["salaar", "pLorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, in cupiditate repellat fugit labore excepturi veniam consequatur. Laborum reprehenderit incidunt culpa fuga doloremque tempore voluptatum accusantium repudiandae ipsa esse. Quia."]

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs", {
        "title":titles,
        "content": contents
    })
})

app.get("/upload", (req, res) => {
    res.render("upload.ejs")
})

app.get("/content", (req, res) => {
    res.render("content.ejs")
})

app.get("/:title", (req, res) => {
    res.render("content.ejs", {title:req.params.title ,content: req.params.content})
})

app.post("/", (req, res) => {
    titles.push(req.body.title_name);
    contents.push(req.body.content_info)
    res.redirect("/")
})

app.listen(2000, () => {
    console.log("2000 OK");
})