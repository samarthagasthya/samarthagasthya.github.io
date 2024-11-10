import {Typewriter} from "../lib/typewriter/components/Typewriter.tsx";
import {Fade} from "react-bootstrap";
import Social from "./Social.tsx";
import FallbackSpinner from "./FallbackSpinner.tsx";
import {Footer} from "./Footer.tsx";

const styles = {
    nameStyle: {
        fontSize: '5em'
    },
    inlineChild: {
        display: "inline-block"
    },
    mainContainer: {
        height: "100%",
        display: "flex" as const,
        flexDirection: "column" as const,
        justifyContent: "center" as const,
        alignItems: "center" as const
    }
};

const data = {
    name: "Samarth AMS",
    subheader: "TechGeek & Aviation Enthusiast",
    roles: ["Android Developer", "Web Developer" , "Cross-platform Application Developer", "IoT developer"]
};

const Home = () => {
    return (
        <>
            {data ? (
                <Fade in={true}>
                    <div style={styles.mainContainer}>
                        <h1 style={styles.nameStyle}>{data?.name}</h1>
                        <h3>{data?.subheader}</h3>
                        <div style={{flexDirection: "row"}}>
                            <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
                            <Typewriter words={data?.roles}
                                        loop={true}
                                        cursorColor="white"
                                        cursor />
                        </div>
                        <Social/>
                    </div>
                </Fade>
            ): <FallbackSpinner />}
            <Footer />
        </>
    );
}

export default Home;
