import { PieceComponent } from "./components/piece.component";
import { getTeams } from "./creatorTeams";
import Piece from "./model/piece/Piece";

const boardtable = document.getElementById("boardtable");
const boardTableWrapper = boardtable?.getElementsByClassName("wrapper");

const matrix: Array<[]> = new Array(8);

matrixInit(matrix);

//setDefaultPieces(matrix);

console.log("MAtrix", matrix);

const teams = getTeams();

console.log("Teams", teams);

function matrixInit(matrix: Array<{}>) {
  for (let i = 0; i < 8; i++) {
    const pieces_x: HTMLElement|null[] = [];

    for (let j = 0; j < 8; j++) {
      pieces_x.push(null);
    }

    matrix[i] = pieces_x;
  }
}

const whitePieces = teams.white.getAllPieces();

if (boardTableWrapper) {
  const tiles = boardTableWrapper[0].children;

  for (const whitePiece of whitePieces) {
    const _piece: Piece = whitePiece;

    const piecePosition = _piece.getPosition();

    const calculatePosition = (piecePosition.y - 1) * 8 + (piecePosition.x - 1);

    tiles[calculatePosition].appendChild(PieceComponent(_piece));
  }
}

function allowDrop(ev: any) {
  ev.preventDefault();
}

function drop(ev: any) {
  console.log("DROP", ev);

  ev.preventDefault();
  const data = ev.dataTransfer?.getData("text");

  ev.target?.appendChild(document.getElementById(data));
}

function addingHandlerEvents() {
  const tiles = document.getElementsByClassName("square");
  for (const tile of tiles) {
    console.log("tile", tile);

    tile.addEventListener("ondragover", allowDrop);
    tile.addEventListener("ondrop", drop);
  }
}

addingHandlerEvents();
