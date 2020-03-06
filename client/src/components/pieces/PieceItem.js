import React from 'react'
import './pieces.css'
const PieceItem = (props) => {
  return (
    <div onClick={() => props.handlePiece(props.oneImg.title)} className="pieceitem" >
    {props.piece === props.oneImg.title && <i class="fas  fa-check-circle fa-2x"></i>}
   <img className="forme"
        src={props.oneImg.img}
      /> 
      
      <p>{props.oneImg.title}</p>
    </div>
  )
}

export default PieceItem
