

class Book {
    constructor(id, title, category, copies, minCopies, expiresAt = null) {
        this.id = id
        this.title = title
        this.category = category
        this.copies = copies
        this.minCopies = minCopies
        this.expiresAt = expiresAt
    }



}

class library {
    constructor() {
        this.library = []
    }

    validateBook(book) {
        const error = []
        if (typeof (book.id) !== "string" || book.id == "") error.push("bed id")
        if (typeof (book.title) !== "string" || book.title == "") error.push("bed title")
        if (typeof (book.category) !== "string" || book.category == "") error.push("bed category")
        if (typeof (book.copies) !== "number" || book.copies < 0) error.push("bed copies")
        if (typeof (book.minCopies) !== "number" || book.minCopies < 0) error.push("bed minCopies")
        if ((!(typeof (book.expiresAt) == "string" && book.expiresAt != "")) && book.expiresAt !== null) error.push("bed expiresAt")
        if (error = []) return "the book valid"
        return error
    }

    normalizeBook(book) {

    }
    addBook(book) {
        if (!(this.validateBook(book) = "the book valid")) {
            return this.validateBook(book)
        }
        for (let i of this.library) {
            if (i.id == book.id) return "id already exists"
        }
        this.library.push(book)
        return "adding book"
    }
    removeBook(bookid) {
        let newBooks = this.library.filter((book) => {
            if (book.id !== bookid) return true
        })
        if (this.library.length == newBooks.length) return "id does not exist"
        this.library = newBooks
        return "removed"
    }
    updateCopies(bookid, delta) {
        for(let book of this.library){
            if (book.id == bookid) {
                if (book.copies + delta > 0) {book.copies = book.copies + delta}
                else{book.copies = 0}
            }
        }
    }


}