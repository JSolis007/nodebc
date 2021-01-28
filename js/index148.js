const superhero = {
  name: 'Batman',
  secretName: 'Bruce',
  sidekick: ['Robin', 'Alfred', 'Gordon'],
  strength: 70  
};

console.log(
  `Name: ${superhero.name}\n
Secret Name: ${superhero.secretName}\n
Sidekick: ${superhero.sidekick}\n
Strength: ${superhero.strength}\n
  `);

console.log(superhero.speed, '\n');

superhero.speed = 80;
console.log(superhero.speed, '\n');
