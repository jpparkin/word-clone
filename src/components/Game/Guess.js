import React from 'react';

function Guess({ guess }) {
  let letters = guess.guess
  if (letters.length === 0) {
    for (let i = 0; i < 5; i++) {
      letters.push({ letter: "", status: "" })
    }
  }

  return (<p className="guess">
    {letters.map((letter, index) => <span key={index} className={`cell ${letter.status}`}>{letter.letter}</span>)}
  </p>)
}

export default Guess;