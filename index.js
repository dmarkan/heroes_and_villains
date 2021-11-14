const superheroes = require('superheroes');
const supervillains = require('supervillains');
 
let mySuperHeroName = superheroes.random();
let mySuperVillainName = supervillains.random();

console.log("Hero: " + mySuperHeroName);
console.log("Villain: " + mySuperVillainName);
