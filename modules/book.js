import { db } from "./sqlite.js"

export async function createBook(book) {
        const query = db.prepare("INSERT INTO books (id, title, author, year, loaned) VALUES (?, ?, ?, ?, ?)")

        const BookObject = {
            id: book.id,
            title: book.title,
            author: book.author,
            year: book.year,
            loaned: book.loaned
        }

        return query.run(BookObject.id, BookObject.title, BookObject.author, BookObject.year, BookObject.loaned)
}

export async function getBooks() {
    const query = db.prepare("SELECT * FROM books")
    const data = query.all()
    return data
}

export async function loanBook(id) {
    const query = db.prepare("UPDATE books SET loaned = ? WHERE id = ? AND loaned = 0")
    return query.run(1, id)
}

export async function returnBook(id) {
    const query = db.prepare("UPDATE books SET loaned = ? WHERE id = ? AND loaned = 1")
    return query.run(0, id)
}

export async function removeBook(id) {
    const query = db.prepare("DELETE FROM books WHERE id = ? AND loaned = 0")
    return query.run(id)
}

export async function getBooksById(id) {
    const query = db.prepare("SELECT * FROM books WHERE id = ?")
    return query.get(id)
}

export async function getBooksByTitle(title) {
    const query = db.prepare("SELECT * FROM book WHERE title = ?")
    return query.get(title)
}