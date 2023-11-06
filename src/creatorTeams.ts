import { Bishop, King, Knigth, Pawn, Queen, Rook } from "./model/piece/";

import Team, { TeamColor } from "./model/team/Team";

import { DEFAULT_POSITIONS_WHITE, DefaultPositions } from "./utils/default";

type Teams = {
  white: Team;
  black: Team | null;
};

function setTeam(color: TeamColor, positions: DefaultPositions) {
  const rookLeft: Rook = new Rook(positions.L_ROOK, color);
  const knightLeft: Knigth = new Knigth(positions.L_KNIGHT, color);
  const bishopLeft: Bishop = new Bishop(positions.L_BISHOP, color);
  const queen: Queen = new Queen(positions.QUEEN, color);
  const king: King = new King(positions.KING, color);
  const bishopRight: Bishop = new Bishop(positions.R_BISHOP, color);
  const knightRight: Knigth = new Knigth(positions.R_KNIGHT, color);
  const rookRight: Rook = new Rook(positions.R_ROOK, color);
  const pawn1: Pawn = new Pawn(positions.PAWN1, color);
  const pawn2: Pawn = new Pawn(positions.PAWN2, color);
  const pawn3: Pawn = new Pawn(positions.PAWN3, color);
  const pawn4: Pawn = new Pawn(positions.PAWN4, color);
  const pawn5: Pawn = new Pawn(positions.PAWN5, color);
  const pawn6: Pawn = new Pawn(positions.PAWN6, color);
  const pawn7: Pawn = new Pawn(positions.PAWN7, color);
  const pawn8: Pawn = new Pawn(positions.PAWN8, color);

  const team = new Team(
    rookLeft,
    knightLeft,
    bishopLeft,
    queen,
    king,
    bishopRight,
    knightRight,
    rookRight,
    pawn1,
    pawn2,
    pawn3,
    pawn4,
    pawn5,
    pawn6,
    pawn7,
    pawn8,
    color,
  );

  return team;
}

export function getTeams(): Teams {
  return {
    white: setTeam(TeamColor.white, DEFAULT_POSITIONS_WHITE),
    black: null,
  };
}
