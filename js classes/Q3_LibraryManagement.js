"use strict";

// Q3: Library Management System
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return `${this.title} is already issued.`;
        }
        this.isIssued = true;
        return `${this.title} has been issued successfully.`;
    }

    returnBook() {
        if (!this.isIssued) {
            return `${this.title} was not issued.`;
        }
        this.isIssued = false;
        return `${this.title} has been returned.`;
    }

    getDetails() {
        return `${this.title} by ${this.author} | ISBN: ${this.isbn} | ${this.isIssued ? "Issued" : "Available"}`;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN002"),
    new Book("Clean Code", "Robert C. Martin", "ISBN003", true)
];

console.log("Available books:");
books.filter(book => !book.isIssued).forEach(book => console.log(book.getDetails()));

function issueBookByISBN(isbn) {
    const foundBook = books.find(book => book.isbn === isbn);
    if (!foundBook) {
        console.log(`No book found with ISBN ${isbn}.`);
        return;
    }
    console.log(foundBook.issueBook());
}

issueBookByISBN("ISBN002");
console.log("\\nUpdated book list:");
books.forEach(book => console.log(book.getDetails()));
