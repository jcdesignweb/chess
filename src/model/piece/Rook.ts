import Piece from "./Piece";

export default class Rook extends Piece {
  private static icon: string = "rook";

  public getIcon(): string {
    return `${Rook.icon}-${this.color}.png`;
  }
}
