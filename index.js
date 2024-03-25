// Write your solution here!
 const cats = ["Milo", "Otis", "Garfield"];
 function destructivelyAppendCat(){
    cats.push('Ralph');
 }
 function destructivelyPrependCat(){
    cats.unshift('Bob');
 }
 function destructivelyRemoveLastCat(){
    cats.pop();
 }
 function destructivelyRemoveFirstCat(){
    cats.shift();
 }
 function appendCat(name){
    return [...cats,name]
 }
function prependCat(name){
    let copyCats = [name,...cats]
    return copyCats;
}
function removeLastCat(){
    let remainderCats = cats.slice(0,2);
    return remainderCats;
}
function removeFirstCat(){
    let remainderCats = cats.slice(1);
    return remainderCats;
}
