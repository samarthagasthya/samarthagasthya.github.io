import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { SiGithub } from "@icons-pack/react-simple-icons";
import "../App.css";


const Footer = () => (
    <footer>
    <div className="" style={{backgroundColor: "purple", width: "100%",position: "absolute",left: 0,bottom: -60}}>
        <p>Inspired from <a href="https://github.com/mayankagarwal09/dev-portfolio" target="_blank noreferrer"><SiGithub/></a></p>
        <p>Year: {new Date().getFullYear()}</p>
        <p>Built with &hearts; from ReactJS, Bootstrap, Styled Components , ThreeJS and hosted on Vercel </p>
        <p>View code at <a href="https://github.com/JohnX4321/samarthagasthya.github.io" target="_blank noreferrer"><SiGithub color="red"/></a></p>
    </div>
    </footer>

)

export default React.memo(Footer);