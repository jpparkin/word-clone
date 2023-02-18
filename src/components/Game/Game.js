import React from 'react';

import { sample, range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import WordInput from './WordInput';
import GuessResults from './GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [answerCorrect, setAnswerCorrect] = React.useState(false)
  const [numGuesses, setNumGuesses] = React.useState(0)
  const [words, setWords] = React.useState(range(NUM_OF_GUESSES_ALLOWED))

  function handleAddWord(word) {
    const checkedGuess = checkGuess(word, answer)
    setAnswerCorrect(checkedGuess.reduce((acc, curr) => {
      console.log(acc, curr.status)
      return acc && curr.status === "correct"
    }, true))
    const nextWords = [...words]
    nextWords[numGuesses] = { id: Math.random(), guess: checkedGuess }
    setNumGuesses(numGuesses+1)

    setWords(nextWords)
  } 

  console.log(answerCorrect)

  return (<>
    {answerCorrect && <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{numGuesses} guesses</strong>.
      </p>
    </div>}
    {numGuesses === 6 && <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>}
    <GuessResults guesses={words} />
    
    {numGuesses !== 6 && <WordInput handleAddWord={handleAddWord} />}
  </>)
}

export default Game;
