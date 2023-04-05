import "./AboutMe.css"
import WizImage from "./images/wizardzane.jpg"
function AboutMe(){
    return(
        <div className="aboutMeContainer">
            <img className="wizImage" src={WizImage}/>
            <h3>About Me</h3>
            <p> I am a pacific northwest local wizard known as Zane, You can find me out and about whether with my staff or pipe, I am always shrowded in an eire of mysticism. I am a rather young wizard being only 26 eons old. But what I lack in beard I make up for in magick. My services are available for hire, pricings vary based on your needs, but I am open to discussion and am sure we can find what works for you</p>
        </div>
    )
}
export default AboutMe;