import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express()

let titles = ["avvakaya badda", "o"]
let contents = ["salaar", "p"]

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs", {
        "title":titles,
        "content": contents
    })
})

function renderMain(i){
    app.get("/", (req, res) => {
        res.render("content.ejs", {
            "title":titles[i],
        "content": contents[i]
        })
    })
}

app.listen(3000, () => {
    console.log("3000 OK");
})