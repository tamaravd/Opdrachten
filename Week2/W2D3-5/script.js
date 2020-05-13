const superheroes = [
    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "first_appearance": "All-American Comics #16",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
  },
  {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
  },
  {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
  },
  {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
  },
  {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
  },
  {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
  },
  {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
  },
  {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
  },
  {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "unknown"
    }
  ]
 
/* const names = superheroes.filter(n => "name");
//superheroes.map(n, eachName => console.log(eachName = superheroes.name));
const weergeven = names.map(n => superheroes["name"]);
console.log(weergeven); */

//opdracht 1
const names = superheroes.map(n => n.name);
console.log(names)

/* superheroes.forEach(name => {
    console.log(superheroes.name);
}); */

/* const superHeroesName = superheroes.map((naam) => {
    return naam.name
});
console.log(superHeroesName); */

//opdracht 2
const lichteHelden = superheroes
.filter(e => e.weight < 190)
.map(n => n.name);
console.log("dit zijn de helden onder 190 pond: "+ lichteHelden);

//opdracht 3
const twoHundredPoundsHelden = superheroes
.filter(e => e.weight =200)
.map(n => n.name);
console.log("dit zijn de helden die 200 pond wegen:" + twoHundredPoundsHelden);

//opdracht 4
const firstApp = superheroes
.map(n => n.first_appearance);
console.log(firstApp);

//opdracht 5
const dcComics = superheroes
.filter(n => n.publisher == "DC Comics")
.map(n => (" ") + n.name);
console.log("De helden met DC Comics als publisher: "+ dcComics);

//opdracht 5
const marvelComics = superheroes
.filter(n => n.publisher == "Marvel Comics")
.map(n => (" ") + n.name ) ;
console.log("De helden met Marvel Comics als publisher: "+ marvelComics);

//opdracht 6
const totalWeightDC = superheroes
.filter(n => n.publisher == "DC Comics")
.reduce((acc, v) => acc + v.weight, 0);

console.log("Totaal gewicht van alle DC Comics helden: " + totalWeightDC);
console.log(typeof totalWeightDC);
//nee 1 superheld heeft unknown als gewicht.

//opdracht 7
const totalWeightMarvel = superheroes
.filter(n => n.publisher == "Marvel Comics")
.reduce((acc, v) => acc + v.weight, 0);

console.log("Totaal gewicht van alle Marvel Comics helden: " + totalWeightMarvel);

//Bonus opdracht 8
/* const maxWeight = superheroes () => {

}
.filter(n => Math.max(n.weight)); */

const maxWeight = superheroes
.map(n => n.weight)
.reduce((acc, v) => v > acc ? v : acc);

const maxWeight2 = Math.max.apply(Math, superheroes.map(n => n.weight));

console.log(maxWeight);