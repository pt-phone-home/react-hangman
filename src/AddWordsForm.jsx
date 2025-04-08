export default function AddWordsForm(props) {
    return (
      <>
       <div className="container card text-bg-dark p-4 mb-4">
            <form action={props.addWords}>
                
                    <div className="container d-flex flex-wrap gap-2 justify-content-between">
                    <div className="mb-2">
                        <label class="form-label mx-2">Word 1</label>
                        <input type="text" class="form-control-sm" name={1} minLength={4}/>
                    </div>
                    <div className="mb-2">
                        <label class="form-label mx-2">Word 2</label>
                        <input type="text" class="form-control-sm" name={2} minLength={4}/>
                    </div>
                    <div className="mb-2">
                        <label class="form-label mx-2">Word 3</label>
                        <input type="text" class="form-control-sm" name={3} minLength={4}/>
                    </div>
                    <div className="mb-2">
                        <label class="form-label mx-2">Word 4</label>
                        <input type="text" class="form-control-sm" name={4} minLength={4}/>
                    </div>
                    <div className="mb-2">
                        <label class="form-label mx-2">Word 5</label>
                        <input type="text" class="form-control-sm" name={5} minLength={4}/>
                    </div>
                    <div className="mb-2">
                        <label class="form-label mx-2">Word 6</label>
                        <input type="text" class="form-control-sm" name={6} minLength={4}/>
                    </div>
                    <div className="mb-2">
                        <label class="form-label mx-2">Word 7</label>
                        <input type="text" class="form-control-sm" name={7} minLength={4}/>
                    </div>
                    <div className="mb-2">
                        <label class="form-label mx-2">Word 8</label>
                        <input type="text" class="form-control-sm" name={8} minLength={4}/>
                    </div>
                    <div className="mb-2">
                        <label class="form-label mx-2">Word 9</label>
                        <input type="text" class="form-control-sm" name={9} minLength={4}/>
                    </div>
                    <div className="mb-2">
                        <label class="form-label mx-2">Word 10</label>
                        <input type="text" class="form-control-sm" name={10} minLength={4}/>
                    </div>
                    </div>
                
                
                    <div className="container d-flex justify-content-center">
                    <button className="btn btn-dark">Add words to game</button>
                    </div>
                
            </form>
        </div>
      </>
    )
}