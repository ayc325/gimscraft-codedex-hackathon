import React from "react";
import './Footer.css';
import github from "../assets/icons8-github.gif";
import notion from "../assets/icons8-notion.gif";
import instagram from "../assets/icons8-instagram.gif";

const Footer = () => {
    return (
      <div className = "logos">
            <div className = "actualLogos">
                <a id = "github" target="_blank" href="https://github.com/ayc325/gimscraft-codedex-hackathon"><img id = 'gallery2' src={github}/></a>
                <a id = "notion" target="_blank" href="https://codedex.notion.site/Track-2-Brooklyn-Stoop-Sale-01895caec65548f4bdf21d6dd7144ef2"><img id = 'gallery2' src={notion}/></a>
                <a id = "insta" target="_blank" href="https://www.instagram.com/p/C9LOM5NuACA/"><img id = 'gallery2' src={instagram}/></a>
            </div>
            <div className = "credits">
                <a id = "links" target="_blank" href="https://icons8.com/icon/v551nqGeHhGn/github">GitHub icon by Icons8 | </a>
                <a id = "links" target="_blank" href="https://icons8.com/icon/FUwceJUAs8kb/notion">Notion icon by Icons8 | </a>
                <a id = "links" target="_blank" href="https://icons8.com/icon/wrwXlOVAFfeY/instagram">Instagram icon by Icons8</a>
            </div>
            <p id = "caption">WebPage created by Angela Cui via Codedex Summer Hackathon</p>
        </div>
    )
  }
  
  export default Footer;




