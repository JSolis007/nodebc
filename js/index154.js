const player = {
  name: null,
  energy: 100,
  lives: 3,
  loseEnergy: function(damage) { 
    if (this.energy - damage <= 0) { //if the damage kills the player
      this.loseLife();
      this.energy = 100; //resets energy level to 100
    } else {
      this.energy -= damage 
    }
  },
  recoverEnergy: function (energyUp) { 
    if (this.energy + energyUp > 100) { //caps energy level to max 100
      this.energy = 100;
    } else {
      this.energy += energyUp ;
    }
  },
  loseLife: function() { this.lives-- },
  recoverLife: function() { 
    if (this.lives > 99) {  //caps lives to max 99
      this.lives = 99;
    } else {
      this.lives++; 
    }
  }
};

player.name = 'Homer';
console.log(`${player.name} has ${player.energy} energy and ${player.lives} lifes\n`);

player.loseLife();
console.log(`${player.name} has ${player.energy} energy and ${player.lives} lifes\n`);

player.loseEnergy(10);
console.log(`${player.name} has ${player.energy} energy and ${player.lives} lifes\n`);

player.loseEnergy(5);
console.log(`${player.name} has ${player.energy} energy and ${player.lives} lifes\n`);

player.loseEnergy(15);
console.log(`${player.name} has ${player.energy} energy and ${player.lives} lifes\n`);

player.loseEnergy(20);
console.log(`${player.name} has ${player.energy} energy and ${player.lives} lifes\n`);

player.recoverEnergy(10);
console.log(`${player.name} has ${player.energy} energy and ${player.lives} lifes\n`);

player.loseEnergy(30);
console.log(`${player.name} has ${player.energy} energy and ${player.lives} lifes\n`);

player.loseEnergy(40);
console.log(`${player.name} has ${player.energy} energy and ${player.lives} lifes\n`);

player.loseLife();
console.log(`${player.name} has ${player.energy} energy and ${player.lives} lifes\n`);

player.recoverLife();
console.log(`${player.name} has ${player.energy} energy and ${player.lives} lifes\n`);

player.recoverLife();
console.log(`${player.name} has ${player.energy} energy and ${player.lives} lifes\n`);
