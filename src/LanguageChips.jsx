
export default function LanguageChips(props) {
const chipsElements = props.chips.map((chip, index) => {
    const isLanguageLost = index < props.wrongGuessCount;
    const style = {
        padding: '3px 6px',
        marginBottom: '3px',
        marginRight: '4px',
        backgroundColor: chip.backgroundColor,
        color: chip.color
    }
    return <div 
            key={chip.id} 
            className={isLanguageLost ? 'w-auto relative rounded chip lost' : 'w-auto relative rounded chip'}
            style={style}
            >
                {chip.name}
            </div>
})

    return (
        <>
            <div className="container">
                <div className="row justify-content-center mx-auto w-50">
                    {chipsElements}
                </div>
            </div>
        </>
    )
}