import linkedinicon from "./linkedinicon.png"
import githubicon from "./githubicon.png"
import "./Footer.css"

export const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-cont">
            <p>Powered by Juan Melgarejo</p>
            </div>
            <div className="icon-cont">
                <p>Contact:</p>
           <a target="_blank" href="https://www.linkedin.com/in/juan-ignacio-melgarejo-brabo-250390241/"><img src={linkedinicon} alt="" /></a> 
           <a target="_blank" href="https://github.com/juanIgnacioMB"><img src={githubicon} alt="" /></a> 
            </div>
            
        </div>
    )
}