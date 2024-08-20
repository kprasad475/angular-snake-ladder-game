import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit  {
  diceValue: number = 1;
  playerPosition: number = 1;
  board: number[] = Array.from({ length: 100 }, (_, i) => i + 1);

  constructor(private service:GameService){}
  ngOnInit(): void {
      
  }

  rollDice():void{
this.diceValue = this.service.rollDice();
this.service.movePlayer(this.diceValue);
this.updatePlayerPosition();
  }

  updatePlayerPosition(){
    this.playerPosition = this.service.playerPosition;
  }

  resetGame(){
    this.service.resetGame();
    this.updatePlayerPosition
  }

  getClassForCell(cell: number): string {
    if (cell === this.playerPosition) {
      return 'player';
    } else if (cell in this.service.snakes) {
      return 'snake';
    } else if (cell in this.service.ladders) {
      return 'ladder';
    } else {
      return '';
    }
  }


}
