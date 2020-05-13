//opdracht A
const addTheWordCool = function(array){
array.push("cool");
return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

//opdracht B
const amountOfElementsInArray = function(array){
    return array.length;

}
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); // 3


//opdracht C
const selectBelgiumFromBenelux = function(array){
    return array[0];
    //of return array.shift();
    //of return array.slice(0,1);
}

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie"

//opdracht D

const lastElementInArray = function(array){
    return array.pop();
    //of return array[array.length -1];
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

//opdracht E

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(array) {
return  array.slice(1,4);
//zoals je hieronder ziet muteert .slice methode niet de bestaande array, maar retourneert een nieuwe die we opslaan in een nieuwe variabele/
console.log("Nieuwe array:", newArray, "De onaangetaste array", array);
  return newArray;
}
const impeachTrumpSplice = function(array) {
	const removedElement = array.splice(0, 1);
  console.log(
    "removed element:",
    removedElement,
    "De mutated array, Trump is missing:",
    array
  );
  return array;
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//opdracht F
const stringsTogether = function(array){
    return array.join(" ");
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

//Opdracht G
const combineArrays = (array) => array1.concat(array2);
//bij toevoegen array3: array1.concat(array2, array3)
combineArrays([1,2,3], [4,5,6]) 
// resultaat: [1,2,3,4,5,6] 
