//ONJUISTE CODE:
fetch("https://swapi.co/api/people/1/")
  .then(response => response.json())
  .then(myJson => {
    document.body.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  });
//JUISTE CODE:
  fetch("https://swapi.dev/api/people/1/")
  .then(response => response.json())
  .then(myJson => {
    document.body.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })