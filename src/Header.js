
import "./Header.css"

function Header(isOpenSkills, setOpenSkills) {
    const wizardSkill = () => {
        if (isOpenSkills === 0){
            setOpenSkills(1)
     } else {
            setOpenSkills(0)
        }
    }

    return(
        <div className="headerContainer">
            <header className="header">
                <h1 className="title1">Wizard Zane</h1>
                <h2 className="subTitle1">for Events and Adventures</h2>
            </header>
            <div className="navbar">
                <ul className="navmenu">
                    <li className="navItem">About Me</li>
                    <li className="navItem" onClick={wizardSkill()}>Wizard Skills</li>
                    <li className="navItem">Bookings</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;