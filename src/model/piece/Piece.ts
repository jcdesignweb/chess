import { Position } from "../Position";
import { TeamColor } from "../team/Team";

export default abstract class Piece {
  protected position: Position;

  protected isDead: boolean = false;

  protected color: TeamColor;

  protected icon: string;

  abstract getIcon(): string;

  constructor(position: Position, color: TeamColor) {
    this.position = position;

    this.color = color;

    this.icon = "icon";
  }

  public getPosition() {
    return this.position;
  }
}
