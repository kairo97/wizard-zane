import "./AboutMe.css"
import WizImage from "./images/wizardzane.jpg"
function AboutMe(){
    return(
        <div className="aboutMeContainer">
            <img className="wizImage" src={WizImage}/>
            <div className="wizText">
            <h3 className="aboutMe">About Me</h3>
            <p className="aboutmeP"> I am a pacific northwest local wizard known as <span className="Names">
                Zanefred the great, Zanefield the powerful, Zanerai the mystic, and Zanenold the old
                </span>
                 (you can just call me Zane though). You can find me out and about whether with my staff or pipe, I am always shrowded in an eire of mysticism. I am a rather young wizard being only 26 eons old. But what I lack in beard I make up for in magick. My services are available for hire, pricings vary based on your needs, but I am open to discussion and am sure we can find what works for you</p>
            </div>
        </div>
    )
}
export default AboutMe;