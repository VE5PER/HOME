import React, { useState, useCallback, useRef } from 'react';
import './GameOfLife.css';

const numRows = 30;
const numCols = 50;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

const GameOfLife: React.FC = () => {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid(g => {
      return g.map((row, i) =>
        row.map((cell, k) => {
          let neighbors = 0;
          operations.forEach(([x, y]) => {
            const newI = i + x;
            const newK = k + y;
            if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
              neighbors += g[newI][newK];
            }
          });

          if (neighbors < 2 || neighbors > 3) {
            return 0;
          }
          if (g[i][k] === 0 && neighbors === 3) {
            return 1;
          }
          return g[i][k];
        })
      );
    });

    setTimeout(runSimulation, 100);
  }, []);

  return (
    <div className="game-container">
        <h1>Conway's Game of Life</h1>
        <div className='controls'>
            <button
                onClick={() => {
                setRunning(!running);
                if (!running) {
                    runningRef.current = true;
                    runSimulation();
                }
                }}
            >
                {running ? 'Stop' : 'Start'}
            </button>
            <button
                onClick={() => {
                const rows = [];
                for (let i = 0; i < numRows; i++) {
                    rows.push(
                    Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
                    );
                }
                setGrid(rows);
                }}
            >
                Random
            </button>
            <button
                onClick={() => {
                setGrid(generateEmptyGrid());
                setRunning(false);
                }}
            >
                Clear
            </button>
        </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                if (running) return;
                const newGrid = JSON.parse(JSON.stringify(grid));
                newGrid[i][k] = grid[i][k] ? 0 : 1;
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? 'turquoise' : undefined,
                border: 'solid 1px black',
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GameOfLife;

