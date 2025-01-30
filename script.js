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

    library.unshift(newBook);


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
    const authorText=document.createTextNode(`Book author: ${book.author}`);
    bookAuthor.appendChild(authorText);

    const bookGenre=document.createElement("p");
    const genreText=document.createTextNode(`Genre:${book.genre}`);
    bookGenre.appendChild(genreText);

    const bookPages=document.createElement("p");
    const pagesText=document.createTextNode(`Pages ${book.pages}`);
    bookPages.appendChild(pagesText);

    const bookRead=document.createElement("input");
    bookRead.setAttribute("type","checkbox");
    bookRead.setAttribute("id","read");
    if (book.read) {
        bookRead.setAttribute("checked", "checked");
        bookDiv.classList="read-book";
    }
    bookRead.addEventListener("change",function(){
        bookDiv.classList=bookRead.checked?"read-book":"book";
    })
    

    const bookLabel=document.createElement("label");
    bookLabel.setAttribute("for","read");
    const labelText=document.createTextNode(`Have you read this?`);
    bookLabel.appendChild(labelText);

    const removeButton=document.createElement("button");
    removeButton.classList.add("remove");
    const removeButtonText=document.createTextNode("X");
    removeButton.appendChild(removeButtonText);
    removeButton.addEventListener("click",function(){
        bookDiv.remove();
    })


    bookDiv.appendChild(removeButton)
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookGenre);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookLabel);
    bookDiv.appendChild(bookRead);
    bookContainer.appendChild(bookDiv);


    
    })
}

const submition= document.getElementById("bookForm")
submition.addEventListener("submit",function(event){
    addBookToLibrary(event)
    showBooks();
    this.reset();
    bookDialogue.close();

    
})

const openDialogueBtn=document.getElementById("open-dialog-button");
const closeDialogueBtn=document.getElementById("close-dialog-button");
const bookDialogue=document.getElementById("book-dialog");

openDialogueBtn.onclick = function() {
    bookDialogue.showModal();
}

closeDialogueBtn.onclick = function() {
    bookDialogue.close();
}
