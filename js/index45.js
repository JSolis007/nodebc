let playerName = 'Patrik Laine is lame';
let teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let message = 'Winnipeg is the best Canadian city, Go Winnipeg';
let firstJets = teams.slice(-26, -22)
let firstJetsUppercase = firstJets[0].toUpperCase() + firstJets.slice(1);
let patrick = playerName.slice(0,-5);
let patrickUppercase = patrick.slice(0, 12).toUpperCase();
let theBest = message.slice(12, 20);
let go = message.slice(-13, -9);

/*Testing to see if variables are correct
console.log(patrick);
console.log(firstJets);
console.log(message.slice(12, 20));
console.log(message.slice(-13, -9));
*/


console.log(`${patrickUppercase} is ${theBest} ${firstJetsUppercase} player${go} ${firstJetsUppercase}!! `);