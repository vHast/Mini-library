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
let idCounter = 0;

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

  // Now we should create the new elements under booksList which would be a div

  let newPhysicalBook = document.createElement("div");
  newPhysicalBook.setAttribute("id", idCounter)
  newPhysicalBook.classList.add("main-book");
  document.getElementById("booksList").appendChild(newPhysicalBook);

  // Now we add the different elements for the book

  // **Addition of the book NAME
  let newPhysicalBookName  = document.createElement("p");

  let nodeName = document.createTextNode(name);
  newPhysicalBookName.appendChild(nodeName);

  // **Addition of the book AUTHOR
  let newPhysicalBookAuthor = document.createElement("p");

  let nodeAuthor = document.createTextNode(author);
  newPhysicalBookAuthor.appendChild(nodeAuthor);

  // ** Addition of the book YEAR
  let newPhysicalBookYear = document.createElement("p");

  let nodeYear = document.createTextNode(year);
  newPhysicalBookYear.appendChild(nodeYear);

  // ** Addition of the BOOK REMOVAL BUTTON
  let newButton = document.createElement("button");

  newButton.innerHTML = "Remove";
  newButton.classList.add("removal-button");
  newButton.setAttribute("onClick", removeBook()) // Wont work if there is no function defined


  document.getElementById(idCounter).appendChild(newPhysicalBookName);
  document.getElementById(idCounter).appendChild(newPhysicalBookAuthor);
  document.getElementById(idCounter).appendChild(newPhysicalBookYear);
  document.getElementById(idCounter).appendChild(newButton)
  
  // Form values reset
  form.reset();

  // We increase the value of idCounter in order to set a unique ID for the next book
  idCounter++;

  // This function will return the value of each input fields that have been put
};

// Book removal functionality

const list = document.getElementById("booksList")

const removeBook = () => {
  if (list.hasChildNodes()) {
    list.removeChild(list.children(idCounter));
  };
}