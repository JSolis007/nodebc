const animals = ['dog', 'duck', 'cow'];
let animalCount = animals.unshift('cat');

console.log(animals); 
// [ 'cat', 'dog', 'duck', 'cow' ]

console.log(animalCount); // 4

animalCount = animals.unshift('elephant', 'dolphin');

console.log(animals);
// [ 'elephant', 'dolphin', 'dog', 'duck', 'cow', 'cat' ];

console.log(animalCount); // 6