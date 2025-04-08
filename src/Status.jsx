export default function Status(props) {

    function renderGameStatus() {
        if (!props.isGameOver && props.chipMessage) {
            return (
                <>
                    <div className={'card col-6 text-light text-center farewell'}>
                        <h4></h4>
                        <p>{props.chipMessage}</p>
                    </div>
                </>
            )
        } 
        if (props.isGameWon) {
            return (
                <>
                    <div className={'card col-6 text-light text-center won'}>
                        <h4>You Win!</h4>
                        <p>Well done 🎉</p>
                    </div>
                </>
            )
        } else if (props.isGameLost){
            return (
                <>
                    <div className={'card col-6 text-light text-center loose'}>
                        <h4>You Lost</h4>
                        <p>Hard luck 😢</p>
                    </div>
                </>
            )
        } else {
            return (
                null
            )
        }

    }
    return (
        <>
        <div className="container status-height my-4">
            <div className="row justify-content-center ">
            {renderGameStatus()}
            </div>
            
        </div>
        </>
    ) 
    
}