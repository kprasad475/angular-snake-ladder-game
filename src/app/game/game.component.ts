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

  constructor(private service: GameService) {}

  ngOnInit(): void {
    this.updatePlayerPosition();
  }

  rollDice(): void {
    this.diceValue = this.service.rollDice();
    this.service.movePlayer(this.diceValue);
    this.updatePlayerPosition();
  }

  updatePlayerPosition(): void {
    this.playerPosition = this.service.playerPosition;
  }

  resetGame(): void {
    this.service.resetGame();
    this.updatePlayerPosition();
  }

  getClassForCell(cell: number): string {
    if (cell === this.playerPosition) {
      return 'player';
    } else if (this.service.snakes.some(s => s.start === cell || s.end === cell)) {
      return 'snake';
    } else if (this.service.ladders.some(l => l.start === cell || l.end === cell)) {
      return 'ladder';
    } else {
      return '';
    }
  }


}
