export default function CurrentWord(props) {
    const letters = props.word.split('');

    const letterEls = letters.map((letter, index) => {
        let isGuessed = props.guessedLetters.includes(letter);
        let output = isGuessed ? letter : ' '; 

        return props.isGameLost ? 
            <span key={index} className={isGuessed ? 'd-flex align-items-center px-1 py-2 mx-2 display-6 letter' : ' d-flex align-items-center px-1 py-2 mx-2 display-6 letter missed'}>
                {letter.toUpperCase()}
            </span> : 
            <span key={index} className="d-flex align-items-center px-1 py-2 mx-1 letter display-6">
                {output.toUpperCase()}
            </span>
    })
    return (
        <>
            <div className="container letters-element my-4">
                <div className="row my-2 justify-content-center letter-element">
                    {letterEls}
                </div>
            </div>
        </>
    )
}