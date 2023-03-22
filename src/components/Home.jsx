import React,{useState,useEffect} from "react";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import Social from "./Social";
import FallbackSpinner from "./FallbackSpinner";

const styles = {
    nameStyle: {
        fontSize: '5em'
    },
    inlineChild: {
        display: "inline-block"
    },
    mainContainer: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
};

const d = {
    name: "Samarth MS",
    subheader: "TechGeek & Aviation Enthusiast",
    roles: ["Android Developer", "Web Developer" , "Cross-platform Application Developer", "IoT developer"]
}

const Home = () => {
    const [data,setData] = useState(d);


    return data ? (
        <Fade>
            <div style={styles.mainContainer}>
                <h1 style={styles.nameStyle}>{data?.name}</h1>
                <h3>{data?.subheader}</h3>
                <div style={{flexDirection: "row"}}>
                    <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
                    <Typewriter
                    options={{
                        loop: true,
                        autoStart: true,
                        strings: data?.roles
                    }} />
                </div>
                <Social />
            </div>
        </Fade>
    ): <FallbackSpinner />;

}

export default Home;