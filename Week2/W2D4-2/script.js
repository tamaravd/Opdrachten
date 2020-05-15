const eventButtons = document.querySelectorAll(".big-five-button");
const spottedAnimalsList = document.querySelector("#spotted-animals-list");
const removeTheFirst = document.querySelector(" #remove-first-item-button")
const removeAll = document.querySelector(" #remove-all-button" )

Array.from(eventButtons).forEach(e => e.addEventListener("click", event => {
    var spottedAnimal = e.innerHTML
    console.log("button clicked")
    spottedAnimalsList.innerHTML += " <li> "+ spottedAnimal + " </li>" +" \n";
}));


removeTheFirst.addEventListener("click" , event => {
    var child = spottedAnimalsList.children[0]
    var parent = spottedAnimalsList
    console.log(child)
    parent.removeChild(child);
});

removeAll.addEventListener("click", event => {
    
    spottedAnimalsList.innerHTML = " ";
} )