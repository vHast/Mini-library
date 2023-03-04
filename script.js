// Need to store all book names inside the myLibrary array

let myLibrary = []

mainButtonContent = document.querySelector('#first-btn');
mainFormContent = document.querySelector("#main-form")

showButton = () => {
  mainButtonContent.style.display = "none"
  mainFormContent.style.display = "flex"
}

const testNames = () => {
  console.log(document.getElementById('bookName'));
}
// Function to add the books, should be added to a button or 

const addBook = () => {
  let title = document.getElementById('bookName');
  let author = document.getElementById('bookAuthor');
  let year = document.getElementById('bookYear');

  console.log(title, author, year);
};
