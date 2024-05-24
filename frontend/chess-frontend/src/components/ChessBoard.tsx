import { Color, PieceSymbol, Square } from "chess.js"


export const ChessBoard = ({ board }:{
  board:({
    square: Square,
    type: PieceSymbol,
    color: Color;
  } | null )[][]
}) => {

  return (
    <div className='bg-red-200 w-full'>
      {board.map((row, i) => (
        <div key={i} className="flex">
          {row.map((square, j) => (
            <div key={j} className={`w-8 h-8 square ${(i+j)%2===0 ?'bg-green500':'bg-green-300'}`}>
              {square? square.type :""}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
