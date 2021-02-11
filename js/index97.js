
// for (let i = 10000; i >= 0; i--) {
//   (i % 10 === 0 && i !== 10000 && i !== 0) ? console.log(`** ${i} **`) :  console.log(i);
// }



let num =0;
for(let i=100; i >= 0; i--) {
    if(i % 10 == 0 && i !== 100 && i !== 0) {    
      console.log(`**${i}**`); 
    } else {        
      console.log(i); 
    }
}