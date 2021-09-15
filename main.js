const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let counter = 0;


  class Field {
      constructor(field){
        this.field = field;
        this.xPos = 0;
        this.yPos = 0;
        this.field[0][0] = pathCharacter;
      }

      play(){
        let playing = true;
        while (playing) {
        this.print();
        this.askQuestions();
          if (this.foundHat()) {
            console.log(`Congratulations, you've found your hat!`);
            playing = false;
            break;
          }
        this.field[this.yPos][this.xPos] = pathCharacter;
      }
    }

      askQuestions(){
        let direction = prompt("Which way?");
        switch (direction) {
          case 'r':
            this.xPos += 1;
            break;
          case 'l':
            this.xPos -= 1;
            break;
          case 'u':
            this.yPos -= 1;
            break;
          case 'd':
            this.yPos += 1;
            break;
          default:
            console.log('enter either of options (r: right, l: left, u: up, d: down)');
            this.ask();
            break;
        }
      }

      foundHat(){
        return this.field[this.yPos][this.xPos] == hat;
      }

      print(){
        let screen = this.field.map(row => row.join('')).join('\n');
        console.log(screen);
         //
         // for(let array of fieldArray){
         //   console.log(`${array.join('')}`);
         // }
      }

  }

  //Object instance to test:
  const myField = new Field([['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

  myField.play();
