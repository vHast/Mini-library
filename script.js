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

let myLibrary = [];
let idCounter = 0;

// Function to add the books, should be added to a button or 

const addBook = (form) => {
  
  // We get all the values from the interested inputs
  let name = form.fname.value;
  let author = form.lname.value;
  let year = form.yname.value;

  // We create a function to create an object with those values
  let newBook = {
    idBook : idCounter,
    nameBook : name,
    authorBook : author,
    yearBook : year
  }

  // We push the object to the array
  myLibrary.push(newBook);

  for (let i = 0; i < myLibrary.length; i++) {

    if(myLibrary[idCounter] != undefined) {

    // Creation of the div element
    let newBookArray = document.createElement("div");
    newBookArray.setAttribute("id", idCounter);
    newBookArray.classList.add("main-book");
    document.getElementById("booksList").appendChild(newBookArray);

    // Adding different elements for the book
    let targetBook = myLibrary[idCounter]; // Defining the object which we want to take the data from
    console.log(targetBook);

    // * Book name
    let newBookName = document.createElement("p");
    let nodeNewBook = document.createTextNode(targetBook.nameBook);
    newBookName.appendChild(nodeNewBook);

    // * Book author
    let newBookAuthor = document.createElement("p");
    let nodeNewBookAuthor = document.createTextNode(targetBook.authorBook);
    newBookAuthor.appendChild(nodeNewBookAuthor);

    // * Book year
    let newBookYear = document.createElement("p");
    let nodeNewBookYear = document.createTextNode(targetBook.yearBook);
    newBookYear.appendChild(nodeNewBookYear);

    // * Removal button
    let removalButton = document.createElement("button");

    removalButton.innerHTML = "Remove";
    removalButton.classList.add("removal-button");
    removalButton.setAttribute("onclick", removeBook(idCounter));

    // removalButton.setAttribute("onClick", removeBook()) // Wont work if there is no function defined

    document.getElementById(idCounter).appendChild(newBookName);
    document.getElementById(idCounter).appendChild(newBookAuthor);
    document.getElementById(idCounter).appendChild(newBookYear);
    document.getElementById(idCounter).appendChild(removalButton);

    // We increase the value of idCounter in order to set a unique ID for the next book
    idCounter++; // * We could also set the attribute for the ID for each newPhysicalBook element with setting the element attribute

    }
  }

  // Form values reset
  form.reset();

  // This function will return the value of each input fields that have been put

};

// * Book removal functionality (WILL ADD LATER), the idea is for a FOR loop that iterates the array and removes the book and removes the HTML element with the ID of said element 

 const list = document.querySelector("#booksList");
 console.log(list);

 const removeBook = (id) => {
  targetRemoval = document.getElementById(id);
  console.log(targetRemoval);
  };