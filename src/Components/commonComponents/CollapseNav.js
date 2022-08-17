import {ReactComponent as ArmyIcon} from "../assets/images/Logo_of_the_United_States_Army.svg";
import {Link} from "react-router-dom";

export default function CollapseNav(){
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            {/*<!-- Brand -->*/}
            <ArmyIcon className='ArmyIcon'/>

            {/*<!-- Links -->*/}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
            </ul>
        </nav>

    )
}