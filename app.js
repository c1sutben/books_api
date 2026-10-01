import express from "express";
import * as db from "./data/db.js";
import { title } from "node:process";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/api/books/author/:author", (req, res) => {
  const book = db.getBookByAuthor(req.params.author);

  if(!book){
    return res.status(404).json({ message: "No books found for this author" });
  }

  return res.json(book);
});


app.get("/api/books/year/:year", (req, res) => {
  const book = db.getBookByYear(req.params.year);

  if (!book) {
    return res.status(404).json({ message: "No books found for this year" });
  }

  return res.status(200).json(book);
});

app.post("/api/books", (req,res)=>{
    const {author, title, publishYear, copies} = req.body
});


app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
