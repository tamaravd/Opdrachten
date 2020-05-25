//linkjes voor het ophalen van de data van firebase:
const apiUrl = "https://wincacademydatabase.firebaseio.com/Tamara.json";
const apiUrlTasks = "https://wincacademydatabase.firebaseio.com/Tamara/tasks.json";

//ophalen van data uit de firebase:
async function getData() { 
    try {
        const data = await fetch(apiUrl, { method: "GET" });
            const result = await data.json(); 
            console.log(result.tasks);
            console.log("Before (the raw result):", result.tasks);
            //omzetten id object in een array key (aangeleverd door Winc alleen result aangepast in result.task)
            let tasks = Object.keys(result.tasks).map(key => ({
            id: key,
            description: result.tasks[key].description,
            done: result.tasks[key].done
            })); 
            console.log("After the tasks array", tasks);
            return tasks;

        }   catch(error) {
            console.log(error);
    }
};
//posten van data naar de firebase:
async function postData() {
    const descriptionValue = document.querySelector("#inputField").value;
    const formData = `{"description": "${descriptionValue}", "done": false}`; 
    try {
        const result = await fetch(apiUrlTasks, {
            method: 'POST',
            body: formData});
            const data = await result.json();
            location.reload();
            console.log('Success:', data);

        }   catch(error) {
            console.error('Error:', error);
        }
};   

