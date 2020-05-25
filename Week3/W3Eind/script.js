//set global values:
const adjustToDoListTamara = document.querySelector("#todoListTamara");
const submitButton = document.querySelector("#submitButton");

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
        adjustToDoListTamara.innerHTML += `<li class="listItem listItemFalse" id="toDo${e.id}"  > 
        <input type="checkbox" id="${e.id}${e.description}" class="checkbox" default=false> 
        <span contenteditable="true" id="sp${e.id}" onfocusout="textChange(event)">${e.description}</span> <img class="trash" id="${e.id}" src="trash-delete-icon.jpg"> </li>`;   
        
        })
    //iets doen voor alle items als done = true    
    const dataTrue = data.filter((e) => e.done === true);
    dataTrue.forEach((e) => {                   
        adjustToDoListTamara.innerHTML += `<li class="listItem listItemTrue" id="toDo${e.id}"> 
        <input type="checkbox" id="${e.id}${e.description}" label="${e.description}" class="checkbox" checked> 
        ${e.description} <img class="trash" id="${e.id}" src="trash-delete-icon.jpg"> </li>`;       
     
    })
    //event listener voor elk van de trashcans:    
    const trashButtons = document.querySelectorAll(".trash");
    trashButtons.forEach(e => e.addEventListener("click", event => {
        const logID = e.id;
        const apiUrlID = "https://wincacademydatabase.firebaseio.com/Tamara/tasks/"+ logID +".json";  
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
        const apiUrlID = "https://wincacademydatabase.firebaseio.com/Tamara/tasks/"+ logIDcb + ".json";
        const formData = `{"description": "${descriptionValue}", "done": true}`;  
        console.log(formData);
        async function changeData() {
            try {
        
                const data = await fetch(apiUrlID, {
                    method: 'PUT',
                    body: formData});
                    location.reload();
                } catch(error) {
                    console.log(error);
                }}
        changeData();
    }))
    textChange = (e) => {
        const logIDcb = e.target.id.slice(2); 
        console.log(logIDcb);
        const apiUrlID = "https://wincacademydatabase.firebaseio.com/Tamara/tasks/"+ logIDcb + ".json";
        let descriptionValue = e.target.innerHTML;
        console.log(descriptionValue);
                const formData = `{"description": "${descriptionValue}", "done": false}`;  
                console.log(formData);
                async function changeData() {
                    try {
                
                        const data = await fetch(apiUrlID, {
                            method: 'PUT',
                            body: formData});
                            location.reload();
                        } catch(error) {
                            console.log(error);
                        }}
                //changeData();
        }
} 

//het uitvoeren van de gedeclareerde async functie:
doSomethingWithData();

//een async function voor het posten van data:
const doSomethingWithPostedData = async function() {
    const data = await postData(); 
};
//de eventlistener voor het posten van data, het activeren van de eerder gedeclareerde async functie:
submitButton.addEventListener("click", event => {
    doSomethingWithPostedData();    
});
