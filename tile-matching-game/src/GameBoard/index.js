import React from 'react'
import './styles.css'

const GameBoard = ({tiles, onTileClick, score, time}) => {
  return (
    <div className="container">
      <div className="game-container">
        <div>Score: {score}</div>
        <div>Time: {time} seconds</div>
        <div className="game-board">
          {tiles.map((tile, index) => (
            <div
              key={index}
              className={`tile ${tile.isMatched ? 'matched' : ''}`}
              onClick={() => onTileClick(index)}
            >
              {tile.isFlipped ? (
                <img src={tile.image} alt={`Tile ${index}`} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GameBoard
