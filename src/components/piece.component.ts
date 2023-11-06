import Piece from "../model/piece/Piece";

export const PieceComponent = (piece: Piece) => {
  const div = document.createElement("div");
  div.classList.add("piece");

  const img = document.createElement("img");
  img.src = `/img/pieces/${piece.getIcon().toLowerCase()}`;
  img.width = 70;

 
  div.draggable = true;

  div.appendChild(img);

  return div;
};
