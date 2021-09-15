const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let counter = 0;

while(counter < 3){
  let direction = prompt("Which way?");
  
  class Field {
      constructor(field){
        this.field = field;
      }

      print(fieldArray=this.field){
         for(let array of fieldArray){
           console.log(`${array.join('')}`);
         }
      }
  }

  //Object instance to test:
  const myField = new Field([['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  myField.print();
  counter++;
}
