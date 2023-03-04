// We initialize the listeners for the buttons and forms

mainButtonContent = document.querySelector('#first-btn');
mainFormContent = document.querySelector("#main-form")

// This will modify the CSS in order to display certain elements of the DOM, will hide the main button and then show the main form

showButton = () => {
  mainButtonContent.style.display = "none"
  mainFormContent.style.display = "flex"
}

const testNames = () => {
  console.log(document.getElementById('bookName'));
}

// Need to store all book names inside the myLibrary array

let myLibrary = []


// Function to add the books, should be added to a button or 

const addBook = (form) => {
  
  let name = form.fname.value;
  let author = form.lname.value;
  let year = form.yname.value;
  
  let newBook = {
    nameBook : name,
    authorBook : author,
    yearBook : year
  }

  myLibrary.push(newBook)
  form.reset();
  console.log(myLibrary);

  // This function will return the value of each input fields that have been put

};
