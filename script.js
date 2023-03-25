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

  console.log(myLibrary.length > 0);


  for (let i = 1; myLibrary.length >= i; i++) {
    
    // Creation of the div element
    let newBookArray = document.createElement("div");
    newBookArray.setAttribute("id", i);
    newBookArray.classList.add("main-book");
    document.getElementById("booksList").appendChild(newBookArray);

    // Adding different elements for the book
    let targetBook = myLibrary[idCounter]; //Defining the object which we want to take the data from
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
    let nodeNewBookYear = document.createTextNode(targetBook.yearBook)
    newBookYear.appendChild(nodeNewBookYear);

    // * Removal button
    let removalButton = document.createElement("button");

    removalButton.innerHTML = "Remove";
    removalButton.classList.add("removal-button");
    // removalButton.setAttribute("onClick", removeBook()) // Wont work if there is no function defined

    document.getElementById(i).appendChild(newBookName);
    document.getElementById(i).appendChild(newBookAuthor);
    document.getElementById(i).appendChild(newBookYear);
    document.getElementById(i).appendChild(removalButton);

  }

  // Now we should create the new elements under booksList which would be a div

  /* let newPhysicalBook = document.createElement("div");
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
  */

  // Form values reset
  form.reset();

  // We increase the value of idCounter in order to set a unique ID for the next book
  idCounter++; // * We could also set the attribute for the ID for each newPhysicalBook element with setting the element attrbitue

  // This function will return the value of each input fields that have been put
};

// * Book removal functionality1 (WILL ADD LATER )

/* const list = document.getElementById("booksList")

const removeBook = () => {
  if (list.hasChildNodes()) {
    list.removeChild(list.children(idCounter));
  };
} */