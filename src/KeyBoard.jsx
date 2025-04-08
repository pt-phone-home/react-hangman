export default function KeyBoard(props) {

    const keyEls = props.alphabet.split('').map((letter) => {
        const isGuessed = props.guessedLetters.includes(letter) ? true : false;
        const isIncluded = props.currentWord.includes(letter) ? true : false;

        let backgroundColor;
        if (isIncluded && isGuessed) {
            backgroundColor = 'green';
        } else if (!isIncluded && isGuessed) {
            backgroundColor = 'red';
        }

        const styles = {
            backgroundColor: backgroundColor
        }

        return <button 
        disabled={props.isGameOver}
        onClick={isGuessed ? null : () => {props.updateGuessedLetters(letter)}}
        key={letter}
        className="key"
        style={styles}
        >
            {letter.toUpperCase()}
        </button>
    })

    return(
        <>
            <div className="keyboard-container">
                {keyEls}
            </div>
        </>
    )
}