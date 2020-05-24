//Als gebruiker wil ik een takenlijst zien

//Als gebruiker wil ik een inputveld zien waarin ik mijn taak in kan vullen.

//Als gebruiker kan ik op een button drukken met de tekst "Add Task" waardoor je ingevulde taak toegevoegd wordt aan de lijst.

//Als gebruiker zie ik wanneer ik op de add button knop heb geklikt, de taak verschijnen in mijn takenlijst.

//Taak verwijderen: Als gebruiker kan ik in de takenlijst op een icoontje klikken van een prullenbak, rechts naast de taak, 
//waardoor de taak uit mijn takenlijst wordt verwijderd

//🚀  Extra requirements: 

//- Taak doorstrepen: Als gebruiker kan ik in de takenlijst op een checkbox klikken, links naast de taak, 
//waardoor de tekst van de taak doorgestreept wordt en ik mijn taak kan afstrepen.

//set global values:
const adjustToDoListTamara = document.querySelector("#todoListTamara");
const submitButton = document.querySelector("#submitButton");
const style = document.getElementById('style'); 

//async function om iets te doen met de opgehaalde data, het laten zien van alle data in een list item 
//met een checkbox ervoor en een trash button erachter per item.
//afhankelijk van of de done true of false is, laat je het item doorgestreept zien; de done true staat onderaan de lijst
//het zou nog leuk zijn om deze lijst nog aan te passen op prioriteit en deze te sorteren.
//in de async function wordt de data geitereerd om daarna per item nog meer te kunnen doen.
//het declareren van de variabelen zitten binnen de async function en de list items worden daar aangemaakt,
//dus zitten de eventlisteners voor de button en de trashcan in dezelfde functie.
const doSomethingWithData = async function() {
    const data = await getData();
    //iets doen voor alle items als done = false
    const dataFalse = data.filter((e) => e.done === false);
    dataFalse.forEach((e) => {
        adjustToDoListTamara.innerHTML += `<li style="list-style-type:none; font-size:20px; line-height: 2.5; margin-left: -40px" class="listItem" 
        id="toDo${e.id}" > 
        <input type="checkbox" style="transform:scale(1.5)" id="${e.id}${e.description}" class="checkbox" default=false> 
        ${e.description} <img class="trash" id="${e.id}" src="trash-delete-icon.jpg" height=20px> </li><hr  style="width:400px; color: black; align: center" size=1>`;   
        
        })
    //iets doen voor alle items als done = true    
    const dataTrue = data.filter((e) => e.done === true);
    dataTrue.forEach((e) => {                   
        adjustToDoListTamara.innerHTML += `<li style="list-style-type:none; text-decoration:line-through; font-size:20px; line-height: 2.5; margin-left: -40px" class="listItem" id="toDo${e.id}"> 
        <input type="checkbox" style="transform:scale(1.5)" id="${e.id}${e.description}" label="${e.description}" class="checkbox" checked> 
        ${e.description} <img class="trash" id="${e.id}" src="trash-delete-icon.jpg" height=20px> </li><hr style="width:400px; color: black; align: center" size=1>`;       
     
    })
    //event listener voor elk van de trashcans:    
    const trashButtons = document.querySelectorAll(".trash");
    trashButtons.forEach(e => e.addEventListener("click", event => {
        const logID = e.id;
        const apiUrlID = "https://wincacademydatabase.firebaseio.com/Tamara/tasks/"+ logID +".json";
        console.log(apiUrlID);
     
        const deleteData = async function() {
            const result = await fetch(apiUrlID, {
                method: 'DELETE'});
            location.reload();
        }
        deleteData();
    }))
    //event listener voor elk van de checkboxen, hierdoor wijzigt de data met put method naar de externe database:
    const checkBoxen = document.querySelectorAll(".checkbox");
    checkBoxen.forEach(e => e.addEventListener("click", event => {
        const logIDcb = e.id.substring(0, 20);
        const descriptionValue = e.id.slice(20);
        const formData = `{"description": "${descriptionValue}", "done": true}`;  
        console.log(formData);
        const changeData = async function() {
        try {
            const apiUrlID = "https://wincacademydatabase.firebaseio.com/Tamara/tasks/"+ logIDcb + ".json";
            console.log(apiUrlID);
            const data = await fetch(apiUrlID, {
                method: 'PUT',
                body: formData});
                location.reload();
            } catch(error) {
                console.log(error);
            }}
        changeData();
               
    }))
} 

//het uitvoeren van de gedeclareerde functie:
doSomethingWithData();

//een async function voor het posten van data:
const doSomethingWithPostedData = async function() {
    const data = await postData();
    console.log("Before (the raw result):", data); 
    data.forEach(e => {
        adjustToDoListTamara.innerHTML += `<li id="toDo${e.id}"> ${e.description} <img class="trash" id="${e.id}" 
        src="trash-delete-icon.jpg" height=20px> </li>`;
    })    
};
//de eventlistener voor het posten van data, het activeren van de eerder gedeclareerde async functie:
submitButton.addEventListener("click", event => {
    doSomethingWithPostedData();    
});

//geprobeerd om de tekst bij aanklikken te kunnen veranderen. maar dan kom ik in de knoei
/* setTimeout(myFunction = () => {
    const text = prompt("do you want to change the text?")   
}, 6000)  */
