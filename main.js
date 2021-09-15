const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


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
