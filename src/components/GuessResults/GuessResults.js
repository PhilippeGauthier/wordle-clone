import React from "react"
import Guess from "../Guess"
import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessResults({ guesses }) {
  console.log(guesses)
  return (
    <div className="guess-results">
      {/* {range(NUM_OF_GUESSES_ALLOWED).map((guesses, guess, index) => (
        <Guess index={index} guess={guess} guesses={guesses} />
      ))} */}
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} />
      ))}
    </div>
  )
}

export default GuessResults
