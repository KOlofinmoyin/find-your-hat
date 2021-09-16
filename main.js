const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

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
        this.askQuestion();

          if (!this.isInBounds()) {
            console.log(`Game-Over: You're out of bounds!`);
            playing = false;
            break;
          }else if (this.inHole()) {
            console.log(`Game-Over: You're in a hole!`);
            playing = false;
            break;
          }else if (this.foundHat()) {
          console.log(`Congratulations, you've found your hat!`);
          playing = false;
          break;
          }
        this.field[this.yPos][this.xPos] = pathCharacter;
      }
    }

      askQuestion(){
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
            this.askQuestion();
            break;
        }
      }

      foundHat(){
        return this.field[this.yPos][this.xPos] === hat;
      }

      inHole(){
        return this.field[this.yPos][this.xPos] === hole;
      }

      isInBounds(){
        return (
          this.yPos >= 0 &&
          this.yPos < this.field.length &&
          this.xPos >= 0 &&
          this.xPos < this.field[0].length
        );
      }

      print(){
        let screen = this.field.map(row => row.join('')).join('\n');
        console.log(screen);
         //
         // for(let array of fieldArray){
         //   console.log(`${array.join('')}`);
         // }
      }

      static generateField(height, width, percentage = 0.1){
          const field = Array(height).fill(0).map(element => Array(width));

          for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
              const prob = Math.random();
              field[y][x] = prob > percentage ? fieldCharacter : hole;
            }
          }

          const hatPosition = {
              x: Math.floor(Math.random() * width),
              y: Math.floor(Math.random() * height)
            }

            while (hatPosition.y === 0 && hatPosition.x === 0) {
              hatPosition.y = Math.floor(Math.random() * height);
              hatPosition.x = Math.floor(Math.random() * width);
            }
            field[hatPosition.y][hatPosition.x] = hat;
            return field;
          }

  }

  //Object instance to test:
  // const myField = new Field([['*', '░', 'O'],
  //   ['░', 'O', '░'],
  //   ['░', '^', '░'],
  // ]);
  //
  // myField.play();

  const myField = new Field(Field.generateField(10, 10, 0.2));

  myField.play();
