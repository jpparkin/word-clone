import React from 'react';

function WordInput({ handleAddWord }) {
  const [word, setWord] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()

    handleAddWord(word)
    setWord('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="word-input">
          Enter guess:
        </label>
      </div>
      
      <input
        id="word-input"
        value={word}
        minLength={5}
        maxLength={5}
        onChange={event => {
          setWord(event.target.value.toUpperCase())
        }}
        />
    </form>
  )
}

export default WordInput