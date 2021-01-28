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

const newList = mutants.filter(mutant => { return (mutant !== 'Magneto' && mutant !== 'Iceman' && mutant !== 'Gambit');});

console.log(newList);