const propertiesNames = [
  'name',
  'price',
  'sold',
  'console'
];

const games = [];

games.push({
  name: 'Crash Bandicoot N. Sane Trilogy',
  price: 1060,
  sold: 20,
  console: 'PS4'
});

games.push({
  name: 'Lego Marvel Super Heroes',
  price: 700,
  sold: 25,
  console: 'XBOX'
});

games.push({
  name: 'Gta V',
  price: 1449,
  sold: 30,
  console: 'PS4'
});

games.push({
  name: 'Mortal Kombat Xl',
  price: 1190,
  sold: 34,
  console: 'PS4'
});

games.push({
  name: 'Gta V',
  price: 1250,
  sold: 60,
  console: 'XBOX'
});

games.push({
  name: 'Uncharted 4',
  price: 950,
  sold: 30,
  console: 'PS4'
});

games.push({
  name: 'Mortal Kombat Xl',
  price: 940,
  sold: 30,
  console: 'XBOX'
});

games.push({
  name: 'Need For Speed',
  price: 700,
  sold: 10,
  console: 'PS4'
});


games.push({
  name: 'Lego Batman',
  price: 1000,
  sold: 18,
  console: 'PS4'
});


games.push({
  name: 'Fifa 17',
  price: 1290,
  sold: 12,
  console: 'PS4'
});


games.push({
  name: 'Resident Evil 7',
  price: 1390,
  sold: 10,
  console: 'PS4'
});


games.push({
  name: 'Dragon Ball XX',
  price: 1390,
  sold: 25,
  console: 'XBOX'
});


games.map((game) => {
  console.log(`name: ${game[propertiesNames[0]]}
price: ${game[propertiesNames[1]]}
sold: ${game[propertiesNames[2]]}
console: ${game[propertiesNames[3]]}\n
  `);
});