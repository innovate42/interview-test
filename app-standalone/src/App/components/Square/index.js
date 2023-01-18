import PropTypes from "prop-types";
import React from "react";

/**
 * A square in the game of tic tac toe.   Can be clicked or the square can contain a value.
 */
const Square = ({onClick, value, winning}) => {
    //Then inside the square if its a winning square we give it the winning square class which renders it green

  const classes = winning ? "square winningSquare" : "square"
 return (<button className={classes} onClick={onClick}>
    {value}
        
    </button>
 )
 };

Square.propTypes = {
    /**
     *  The handler for when a square is clicked
     */
    onClick: PropTypes.func,

    /**
     *  The value to put in the square
     */
    value: PropTypes.string,

    //this allows react to know what data type winning is 
    
    winning: PropTypes.bool
};

export default Square;