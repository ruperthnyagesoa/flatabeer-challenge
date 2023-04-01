// Code here
const beerHeading = document.querySelector (".beer-details h2");
const beerPic = document.querySelector("#image");
const beerDesc = document.querySelector(".description textarea");
const updateDescButton = document.querySelector(".description button");
const reviewInput = document.querySelector(".review-form textarea");
const submitReviewButton = document.querySelector("#submit");
const reviewDisplay = document.querySelector(".reviews");
const sideListBeers = document.querySelector("#list-of-beers")
let mainBeerDisplay;
let beerArray = [];
let reviewArray = [];


//Dom content loaded - run main functions
document.addEventListener('DOMContentLoaded', () => {
    getBeers('http://localhost:3000/beers/');   
    updateReviewListener();
    updateDescriptionListener(); 
});


//Get existing beers from the Database
const getBeers = async (url) => {
    const response = await fetch(url);
   beerArray = await response.json();
   mainBeerDisplay = beerArray[0];
    renderBeers(mainBeerDisplay);
    renderBeerMenu(beerArray);
};

//Event listener on the update Beer description button which triggers an update to the db
function updateDescriptionListener() {
    updateDescButton.addEventListener('click', () => {
        updateDb();
        alert("Description updated");
    })
}

//Function to update the description in the db and return it to be rendered on screen
function updateDb() {
    const updateDescription = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            "description": `${beerDesc.value}`
          })
        };
        fetch(`http://localhost:3000/beers/${mainBeerDisplay.id}`, updateDescription)
            .then(function(response) {
            return response.json();
            })
            .then(function(updatedDesc) {
                renderBeers(updatedDesc);
            })
}

//Function to add an event listener to the review button so a user can add a review on the UI
function updateReviewListener() {
    submitReviewButton.addEventListener('click', (event) => {
        event.preventDefault();
        updateDbReview();
        reviewInput.value = '';
    })
}

//Function to update a review in the db and return it to be rendered on screen
function updateDbReview() {
    reviewArray.unshift(`${reviewInput.value}`)
    const updateReview = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            "reviews": reviewArray
          })
        };
        fetch(`http://localhost:3000/beers/${mainBeerDisplay.id}`, updateReview)
            .then(function(response) {
            return response.json();
            })
            .then(function(updatedReviews) {
                renderBeers(updatedReviews);
            })
}

//Render information for the first beer from DB on UI
const renderBeers = (beer) => {
    beerHeading.innerHTML = beer.name;
    beerPic.src = beer.image_url;
    beerDesc.innerHTML = beer.description;
    createReviews(beer);
}

//Function to render the review information on the UI
function createReviews(beer) {
    reviewArray = beer.reviews;
    reviewDisplay.innerText = '';
    reviewArray.forEach(item => {
        const htmlReviews = createHtml(item);
        reviewDisplay.innerHTML += htmlReviews;
    })
}

//Create html for the review
function createHtml (review) {
    return `<li>${review}</li>`;
}

//Function to take all of the beer names and place it on the menu list on the UI and to add an event listener to the beer menu
function renderBeerMenu(array) {   
    sideListBeers.innerText = '';
    array.forEach(item => {
        const htmlMenu = createHtmlBeerMenu(item);
        sideListBeers.innerHTML += htmlMenu;
    })
    array.forEach(item => {
        menuEventListener(item);
    })
}

//Function to create the beer menu HTML
function createHtmlBeerMenu(beer) {
    const makeId = createUniqueId(beer);
    return `<li id="${makeId}"> <a href='#'>${beer.name}</a></li>`;
}

//Event listener for when an item in the beet menu is displayed to update the main UI
function menuEventListener(item) {
    const makeId = createUniqueId(item);
    const getIdentifier = document.querySelector(`#${makeId}`);
        getIdentifier.addEventListener('click', () => {
            mainBeerDisplay = item;
            renderBeers(mainBeerDisplay);
        })
}

//Reusable function to extract a unique ID to attach to each beer menu list item
function createUniqueId (item) {
    const removeSpace = item.name.replace(/ |:/g, '');
    const makeId = removeSpace.substring(0,4)+item.id;
    return makeId;
}