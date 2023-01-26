'use strict';

console.log("Hello World")

document.write('<h1>Arrays</h1>')


const meet = ['ARBYS', 'BEEF',"CHICKENSTRIPS", 'Jr'];{
    console.log(meet);
let start = 3;
let deleteItem = 1;
meet.splice(start, deleteItem);
document.write(meet[1]);
}


meet.push('MCDONALDS');


for(let i=0; i<5; i++){
 console.log(meet[i]);
}

const animals = ['Goat ', 'Chick ', 'Cow ', 'rooster '];{
    console.log(animals);
}


animals.push('Mcchiken');

for(let i=0; i<animals.length; i++){
    document.write(animals[i]);
}