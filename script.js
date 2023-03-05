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
  
  // We get all the values from the interested inputs
  let name = form.fname.value;
  let author = form.lname.value;
  let year = form.yname.value;

  // We create a function to create an object with those values
  let newBook = {
    nameBook : name,
    authorBook : author,
    yearBook : year
  }

  // We push the object to the array
  myLibrary.push(newBook);

  // Now we should create the new elements under booksList which would be a li

  let elementOne = document.createTextNode(`${name}`);
  let elementTwo = document.createTextNode(`${author}`);
  let elementThree = document.createTextNode(`${year}`);

  // We reset the form
  form.reset();

  console.log(myLibrary);

  // This function will return the value of each input fields that have been put
};
