import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  boardSize: number = 100;
  playerPosition: number = 1;
  snakes: { [key: number]: number } = { 16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 };
  ladders: { [key: number]: number } = { 1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100 };

  constructor() { }


  rollDice():number{
    return Math.floor(Math.random()*6)+1;
  }

  movePlayer(diceValue:number):void{
    this.playerPosition += diceValue;

    if(this.playerPosition in this.snakes){
      this.playerPosition = this.snakes[this.playerPosition];
    }else if(this.playerPosition in  this.ladders){
      this.playerPosition = this.ladders[this.playerPosition]
    }
    if(this.playerPosition > this.boardSize){
      this.playerPosition = this.boardSize;
    }
  }

  resetGame():void{
this.playerPosition = 1;
  }
}
