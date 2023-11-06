import { Position } from "../model/Position";

export type DefaultPositions = Record<string, Position>;

export const DEFAULT_POSITIONS_WHITE: DefaultPositions = {
  L_ROOK: { x: 1, y: 8 },
  R_ROOK: { x: 8, y: 8 },
  L_KNIGHT: { x: 0, y: 0 },
  R_KNIGHT: { x: 0, y: 0 },
  L_BISHOP: { x: 0, y: 0 },
  R_BISHOP: { x: 0, y: 0 },
  QUEEN: { x: 0, y: 0 },
  KING: { x: 0, y: 0 },
  PAWN1: { x: 1, y: 7 },
  PAWN2: { x: 2, y: 7 },
  PAWN3: { x: 3, y: 7 },
  PAWN4: { x: 4, y: 7 },
  PAWN5: { x: 5, y: 7 },
  PAWN6: { x: 6, y: 7 },
  PAWN7: { x: 7, y: 7 },
  PAWN8: { x: 8, y: 7 },
};

export const DEFAULT_POSITIONS_BLACK: DefaultPositions = {};
