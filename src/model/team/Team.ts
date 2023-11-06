import Bishop from "../piece/Bishop";
import King from "../piece/King";
import Knigth from "../piece/Knight";
import Pawn from "../piece/Pawn";
import Piece from "../piece/Piece";
import Queen from "../piece/Queen";
import Rook from "../piece/Rook";

export enum TeamColor {
  black = "BLACK",
  white = "WHITE",
}

export default class Team {
  private rookLeft: Rook;
  private knightLeft: Knigth;
  private bishopLeft: Bishop;
  private queen: Queen;
  private king: King;
  private bishopRight: Bishop;
  private knightRight: Knigth;
  private rookRight: Rook;
  private pawn1: Pawn;
  private pawn2: Pawn;
  private pawn3: Pawn;
  private pawn4: Pawn;
  private pawn5: Pawn;
  private pawn6: Pawn;
  private pawn7: Pawn;
  private pawn8: Pawn;

  private color: TeamColor;

  constructor(
    rookLeft: Rook,
    knightLeft: Knigth,
    bishopLeft: Bishop,
    queen: Queen,
    king: King,
    bishopRight: Bishop,
    knightRight: Knigth,
    rookRight: Rook,
    pawn1: Pawn,
    pawn2: Pawn,
    pawn3: Pawn,
    pawn4: Pawn,
    pawn5: Pawn,
    pawn6: Pawn,
    pawn7: Pawn,
    pawn8: Pawn,
    color: TeamColor,
  ) {
    this.rookLeft = rookLeft;
    this.knightLeft = knightLeft;
    this.bishopLeft = bishopLeft;
    this.queen = queen;
    this.king = king;
    this.bishopRight = bishopRight;
    this.knightRight = knightRight;
    this.rookRight = rookRight;

    this.pawn1 = pawn1;
    this.pawn2 = pawn2;
    this.pawn3 = pawn3;
    this.pawn4 = pawn4;
    this.pawn5 = pawn5;
    this.pawn6 = pawn6;
    this.pawn7 = pawn7;
    this.pawn8 = pawn8;

    this.color = color;
  }

  public setRookLeft(rook: Rook) {
    this.rookLeft = rook;
  }

  public getRookLeft() {
    return this.rookLeft;
  }

  public setKnightLeft(knight: Knigth) {
    this.knightLeft = knight;
  }

  public getKnightLeft() {
    return this.knightLeft;
  }

  public setBishopLeft(bishop: Bishop) {
    this.bishopLeft = bishop;
  }

  public getBishopLeft() {
    return this.bishopLeft;
  }

  public setQueen(queen: Queen) {
    this.queen = queen;
  }

  public getQueen() {
    return this.queen;
  }

  public setKing(king: King) {
    this.king = king;
  }

  public getKing() {
    return this.king;
  }

  public setRookRight(rook: Rook) {
    this.rookRight = rook;
  }

  public getRookRight() {
    return this.rookRight;
  }

  public setKnightRight(knight: Knigth) {
    this.knightRight = knight;
  }

  public getKnightRight() {
    return this.knightRight;
  }

  public setBishopRight(bishop: Bishop) {
    this.bishopRight = bishop;
  }

  public getBishopRight() {
    return this.bishopRight;
  }

  public setPawn1(pawn: Pawn) {
    this.pawn1 = pawn;
  }

  public getPawn1() {
    return this.pawn1;
  }

  public setPawn2(pawn: Pawn) {
    this.pawn2 = pawn;
  }

  public getPawn2() {
    return this.pawn2;
  }
  public setPawn3(pawn: Pawn) {
    this.pawn3 = pawn;
  }

  public getPawn3() {
    return this.pawn3;
  }

  public setPawn4(pawn: Pawn) {
    this.pawn4 = pawn;
  }

  public getPawn4() {
    return this.pawn4;
  }

  public setPawn5(pawn: Pawn) {
    this.pawn5 = pawn;
  }

  public getPawn5() {
    return this.pawn5;
  }

  public setPawn6(pawn: Pawn) {
    this.pawn6 = pawn;
  }

  public getPawn6() {
    return this.pawn6;
  }

  public setPawn7(pawn: Pawn) {
    this.pawn7 = pawn;
  }

  public getPawn7() {
    return this.pawn7;
  }

  public setPawn8(pawn: Pawn) {
    this.pawn8 = pawn;
  }

  public getPawn8() {
    return this.pawn8;
  }

  public setColor(color: TeamColor) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public getAllPieces(): Array<Piece> {
    return [
      this.rookLeft,
      this.rookRight,
      this.pawn1,
      this.pawn2,
      this.pawn3,
      this.pawn4,
      this.pawn5,
      this.pawn6,
      this.pawn7,
      this.pawn8,
    ];
  }
}
