
import "./Header.css"

function Header() {


    return(
        <div className="headerContainer">
            <header className="header">
                <h1 className="title1">Wizard Zane</h1>
                <h2 className="subTitle1">for Events and Adventures</h2>
            </header>
            <div className="navbar">
                <ul className="navmenu">
                    <li className="navItem">About Me</li>
                    <li className="navItem">Wizard Skills</li>
                    <li className="navItem">Bookings</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;