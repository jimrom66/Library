const library=[];


function book(title,author,genre,pages,read){
    this.title=title;
    this.author=author;
    this.genre=genre;
    this.pages=pages;
    this.read=read;
    this.summary= function(){
        return `${this.title} by ${this.author} is a ${this.genre} book.It contains ${this.pages} pages.`
    }
}

function addBookToLibrary(event){
    event.preventDefault();

    const title= document.getElementById("title").value;
    const author=document.getElementById("author").value;
    const genre=document.getElementById("genre").value;
    const pages=document.getElementById("pages").value;
    const read = document.getElementById("read").checked; // Get the 'read' checkbox value

    const newBook= new book(title, author, genre, pages, read);

    library.push(newBook);


}

function showBooks(){
    const bookContainer=document.querySelector(".container");
    bookContainer.innerHTML = "";
    library.forEach((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add("book");

    const bookTitle = document.createElement('h3');
    const titleText = document.createTextNode(book.title);
    bookTitle.appendChild(titleText);

    const bookAuthor=document.createElement("p");
    const authorText=document.createTextNode(book.author);
    bookAuthor.appendChild(authorText);

    const bookGenre=document.createElement("p");
    const genreText=document.createTextNode(book.genre);
    bookGenre.appendChild(genreText);

    const bookPages=document.createElement("p");
    const pagesText=document.createTextNode(book.pages);
    bookPages.appendChild(pagesText);

    const bookRead=document.createElement("p");
    const readbox=document.createTextNode(`Status: ${book.read ? 'Read' : 'Not Read'}`);
    bookRead.appendChild(readbox);

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookGenre);
    bookContainer.appendChild(bookPages);
    bookContainer.appendChild(bookRead);

    
    })
}

const submition= document.querySelector(".submit")
submition.addEventListener("click",function(event){
    addBookToLibrary(event)
    showBooks()
})