import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  boardSize: number = 100;
  playerPosition: number = 1;
  
  // Define snakes and ladders on the board
  snakes: { start: number, end: number }[] = [
    { start: 16, end: 6 },
    { start: 47, end: 26 },
    { start: 49, end: 11 },
    { start: 56, end: 53 },
    { start: 62, end: 19 },
    { start: 64, end: 60 },
    { start: 87, end: 24 },
    { start: 93, end: 73 },
    { start: 95, end: 75 },
    { start: 98, end: 78 },
  ];
  
  ladders: { start: number, end: number }[] = [
    { start: 1, end: 38 },
    { start: 4, end: 14 },
    { start: 9, end: 31 },
    { start: 21, end: 42 },
    { start: 28, end: 84 },
    { start: 36, end: 44 },
    { start: 51, end: 67 },
    { start: 71, end: 91 },
    { start: 80, end: 100 },
  ];

  rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  movePlayer(diceValue: number): void {
    this.playerPosition += diceValue;

    // Check for snakes and ladders
    const snake = this.snakes.find(s => s.start === this.playerPosition);
    if (snake) {
      this.playerPosition = snake.end;
    }

    const ladder = this.ladders.find(l => l.start === this.playerPosition);
    if (ladder) {
      this.playerPosition = ladder.end;
    }

    // Ensure the player doesn't move beyond the board
    if (this.playerPosition > this.boardSize) {
      this.playerPosition = this.boardSize;
    }
  }

  resetGame(): void {
    this.playerPosition = 1;
  }
}
