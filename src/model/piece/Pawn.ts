import Piece from "./Piece";

export interface Movement {
  move(): void;
}

export default class Pawn extends Piece {
  private static icon: string = "pawn";

  public getIcon(): string {
    return `${Pawn.icon}-${this.color.toLowerCase()}.png`;
  }

  move() {}
}
