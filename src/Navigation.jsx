import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <> 
           <div className="container p-4">
                <div className="row">
                   <Link className="btn btn-primary col mx-2" to="/how-to-play" >How To Play</Link>
                    <Link className="btn btn-success col mx-2" to="/">Play Game</Link>
                    <Link className="btn btn-primary col mx-2" to="settings">Settings</Link>
                </div>
           </div>          
        </>
    )
}