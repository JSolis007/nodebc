let mutants = [
  'Professor X',
  'Cyclops',
  'Iceman',
  'Angel',
  'Magneto',
  'Beast',
  'Phoenix',
  'Logan',
  'Gambit'
];

let result = '';
mutants.forEach(function(mutant) {
  (mutant === 'Iceman' || mutant === 'Logan' || mutant === 'Phoenix') ? (result += mutant + ' ')  : null;
});

console.log(result);