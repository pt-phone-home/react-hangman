import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react"
import Confetti from 'react-confetti';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Navigation from './Navigation';
import Header from "./Header"
import Status from "./Status"
import LanguageChips from './LanguageChips'
import CurrentWord from "./CurrentWord"
import KeyBoard from "./KeyBoard"
import Settings from './Settings';
import HowToPlay from './HowToPlay';

import { languages } from './assets/languages';
import { getFarewellText } from './assets/utils';


function App() {

  // State values
  const [wordsList, setWordsList] = useState(() => {return [
    "elephants", "solutions", "backpacks", "reduction", "framework", 'reactapp'
  ]});

  const [currentWord, setCurrentWord] = useState(() => {
    return getRandomWord();
  })


  useEffect(() => {
    setCurrentWord(getRandomWord())
  }, [wordsList])

  function getRandomWord() {
    return wordsList[Math.floor(Math.random() * wordsList.length)];
  }

  const [guessedLetters, setGuessedLetters] = useState([]);

  const [chips, setChips] = useState([
    { id: 1, name: "Spiderman", backgroundColor: "#E2680F", color: "#F9F4DA" },
    { id: 2, name: "Wonder Woman", backgroundColor: "#2E59A8", color: "#FFFFFF" },
    { id: 3, name: "Batman", backgroundColor: "#F7DF1E", color: "#000000" },
    { id: 4, name: "Superman", backgroundColor: "#3776AB", color: "#FFD343" },
    { id: 5, name: "Iron Man", backgroundColor: "#F89820", color: "#FFFFFF" },
    { id: 6, name: "Black Panther", backgroundColor: "#D91404", color: "#FFFFFF" },
    { id: 7, name: "Captain Marvel", backgroundColor: "#F05138", color: "#FFFFFF" },
    { id: 8, name: "The Flash", backgroundColor: "#00ADD8", color: "#FFFFFF" },
    { id: 9, name: "Hulk", backgroundColor: "#F18E33", color: "#FFFFFF" },
    { id: 10, name: "Captain America", backgroundColor: "#6E4C13", color: "#FFFFFF" },
  ])

  // Derived Values
 
  const wrongGuessesArray = guessedLetters.filter((letter) => {
    return !currentWord.includes(letter);
  })

  const wrongGuessCount = wrongGuessesArray.length;

  const isGameWon = currentWord.split('').every((letter) => {
    return guessedLetters.includes(letter);
  })

  const isGameLost = wrongGuessCount >= chips.length;
 
  const isGameOver = isGameWon || isGameLost;

  const [wrongLetterGuessed, setWrongLetterGuessed] = useState(() => {return false});
  const [chipMessage, setChipMessage] = useState(() => {return null});
  

  // Static Values
  const alphabet = 'aábcdeéfghiíjklmnoópqrstuúvwxyz';
  

  function updateGuessedLetters(letter) {
    setGuessedLetters((prev) => {
      const newGuessedLetters = prev.includes(letter) ? prev : [...prev, letter]
      return newGuessedLetters;
    })

    checkGuessedLetter(letter);
  }

  function checkGuessedLetter(letter) {
   let result = currentWord.includes(letter) ? true : false;
   if (!result) {
     setWrongLetterGuessed((prev) => {
      return true;
     })
     console.log(wrongLetterGuessed);
    let chip = chips[wrongGuessCount].name;
    setChipMessage((prev) => {
      return getFarewellText(chip);
    })
   } else if (result) { 
    setWrongLetterGuessed((prev) => {
      return false;
    })
   }
   return result; 
  }

  function resetGame() {
    isGameOver = false;
    isGameLost = false;
    isGameWon = false;
    setChipMessage(null)
    setCurrentWord((prev) => {
      return getRandomWord();
    })

    setGuessedLetters((prev) => {
      return [];
    })
    

   
  }

  function addWords(formData) {
    const entries = Object.fromEntries(formData);
    const words = Object.values(entries).filter((word) => {
      return word != '';
    }).map((word) => {
      return word.slice(0, 1).toLowerCase() + word.slice(1);
    });

    if (words.length === 0) {
      return;
    }

    setWordsList((prev) => {
      return words;
    })

    
    
  }

  function addChips(formData) {
    const entries = Object.fromEntries(formData);
    const chips = Object.values(entries).filter((chip) => {
      return chip != '';
    }).map((chip) => {
      return chip.slice(0,1).toLowerCase() + chip.slice(1);
    })

    
    setChips((prev) => {
      let newChipsArray = prev.slice(0, chips.length);
      return newChipsArray.map((c, index) => {
        return {
          ...c,
          name: chips[index],
        }
      })
    })
    
  }

  

  return (
   <div className="container">
    {isGameOver && isGameWon && <Confetti
      numberOfPieces={1000}
      />}
      <Router>
      <Navigation />
      <Routes>
        <Route path="/how-to-play" element={
          <HowToPlay />
        }
        />
        <Route path='/' element={
          <>
          <Header />
          <Status 
          wrongLetterGuessed={wrongLetterGuessed}
          chipMessage={chipMessage}
          isGameOver={isGameOver}
          isGameWon={isGameWon}
          isGameLost={isGameLost}
          />
          <LanguageChips 
          chips={chips}
          // languages={languages}
          wrongGuessCount={wrongGuessCount}
          />
          <CurrentWord 
          isGameLost={isGameLost}
          guessedLetters={guessedLetters}
          word={currentWord}
          />
          <KeyBoard 
          updateGuessedLetters={updateGuessedLetters}
          alphabet={alphabet}
          currentWord={currentWord}
          guessedLetters={guessedLetters}
          isGameOver={isGameOver}
          />
          {isGameOver && <div className="button-wrapper">
            <button
              onClick={resetGame} className="btn btn-primary">New Game</button>
          </div>}
        </>
        }/>
        <Route path="/settings" element={
          <Settings
          addWords={addWords} 
          addChips={addChips}
          currentWord={currentWord}
          />}
        />
      </Routes>
   </Router>
   </div>
  )
}

export default App
