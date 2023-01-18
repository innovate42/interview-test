import PropTypes from "prop-types";
import React from "react";
import Square from "../Square";

/**
 * A board for the game of tic-tac-toe.  A 3x3 square.
 */
const Board = ({onClick, squares, winningSquares}) => {
    const renderSquare = (i) => (
        <Square
            value={squares[i]}
            //So then we pass the winning squares array to the board component, then inside the board component	we tell a square if it is winning or not

            winning={(winningSquares.includes(i))}
            onClick={() => onClick(i)}
        />

    );

    return (
        <div>
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
        </div>
    )
};

Board.propTypes = {
    /**
     *  The 1..9 array of squares to display
     */
    squares: PropTypes.array.isRequired,

    /**
     *  The handler for when a square is clicked
     */
    onClick: PropTypes.func,

    // this allows react to know what data type winning squares is
    winningSquares: PropTypes.array
};

export default Board;