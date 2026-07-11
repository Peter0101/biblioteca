import { DatabaseSync } from "node:sqlite"

const db = new DatabaseSync("bookdatabase.db")

db.exec(`CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    year INTEGER NOT NULL
)`)

export function saveBook(book) {
    const query = db.prepare("INSERT INTO books (id, title, author, year) VALUES (?, ?, ?, ?)")

    const BookObject = {
        id: book.id,
        title: book.title,
        author: book.author,
        year: book.year
    }

    query.run(BookObject.id, BookObject.title, BookObject.author, BookObject.year)
}