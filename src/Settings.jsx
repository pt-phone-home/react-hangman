import AddWordsForm from "./AddWordsForm"
import AddChipsForm from "./AddChipsForm"

export default function Settings(props) {
    return (
        <>
           <section className="container row">
                <h1 className="display-6 text-center">SETTINGS</h1>
                <h1>Add words to your game</h1>
                <p>Input up to 10 words of your choice. At the beginning andeEach time the 'new game' button is pressed, a word from this list will be selected at random and become the word for that round</p>
                <AddWordsForm 
                addWords={props.addWords}
                />
                <h2 className="display-5">Change 'lives'</h2>
                <p>Input up to 10 items of your choice that will become the 'lives' students have. Each time students guess incorretly, one life will be lost. See 'How to play' for more information.</p>
                <AddChipsForm 
                addChips={props.addChips}
                />
           </section>
        </>
    )
}