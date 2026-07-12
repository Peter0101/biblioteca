import { DatabaseSync } from "node:sqlite"

export const db = new DatabaseSync("bookdatabase.db")

db.exec(`CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    year INTEGER NOT NULL,
    loaned BOOLEAN NOT NULL
)`)