//Select HTML element with ID "animalname" && "animaldetails" and assign each a variable

const animalList = document.getElementById("animalname");
const animalDetails = document.getElementById("animaldetails");

// Fetch Data from the Server using HTTP GET request to server

fetch("http://localhost:3000/characters")// fetch a list of characters
    .then(Response => Response.json())//extract JSON Data from the response recieved from the server
    .then(characters => {// Callback fucntion executing the JSON Data available
        characters.forEach(character => {
            const animalName = document.createElement("p");// Creates a new "<p>" element
            animalName.textContent = character.name;//Sets the text content of <p> element to the name of current character
            animalName.addEventListener("click", () => {//Ensures when <p> element is clicked, the code inside the callback fucntion will execute

                //Display the Animals details
                fetch(`http://localhost:3000/characters/${character.id}`)// Fetch the details of a specific animal character
                    .then(response => response.json)
                    .then(theAnimalDetails => {
                        //update the details of the animals onto the page
                        animalDetails.innerHTML =
                            `<h2>${theAnimalDetails.name}</h2>
                <img src="${theAnimalDetails.image}" alt="${theAnimalDetails.name}">
                <p>Votes: <span id="vote-count">${theAnimalDetails.votes}</span></p>`;

                //Start adding the votes
                const voteButton =document.createElement("button");// Create a <button> element and assign to voteButton Variable
                voteButton.textContent = "VOTE";//Set the text content of vote button to "VOTE"
                voteButton.addEventListener("click", () => {//Add a click event listner to the voteButton

                    //Start updating the votes of the animal selected
                    fetch(`http://localhost:3000/characters/${character.id}`,)

                })

                    })

            })
        });



    })