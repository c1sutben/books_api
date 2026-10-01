import Database from "better-sqlite3";

const db = new Database("./data/books.db");

export const getBookByAuthor = (author) => db.prepare("SELECT * FROM books WHERE author = ?").all(author);

export const getBookByYear = (year) => db.prepare("SELECT * FROM books WHERE publishYear = ?").all(year);


export default db;