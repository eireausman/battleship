import "./style.css";
import domSetup from "./domEvents";
import { gameBoard } from "./gameBoard";

const playerBoard = gameBoard();
const pShips = playerBoard.placePlayerBoardShips(playerBoard);
playerBoard.saveBoardShips(pShips);

const computerBoard = gameBoard();
const cShips = computerBoard.placeComputerBoardShips(computerBoard);
computerBoard.saveBoardShips(cShips);

domSetup(playerBoard, computerBoard);
