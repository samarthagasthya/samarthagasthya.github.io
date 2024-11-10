import ReactMarkdown from "react-markdown";
import {Container,Col,Row} from "react-bootstrap";
import {Fade} from "react-bootstrap";
import Header from "./Header.tsx";
import FallbackSpinner from "./FallbackSpinner.tsx";

const styles = {
    introTextContainer: {
        margin: 10,
        flexDirection: "column" as const,
        whiteSpace: "pre-wrap" as const,
        textAlign: "left" as const,
        fontSize: "1.2em",
        fontWeight: 500
    },
    introImageContainer: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }
};

const data = {
    about: "Currently working as Software Engineer @ Ather. \n\n Graduate in Electronics & Communications Engineering from DSCE, VTU. \n\n Fullstack, Mobile and embedded systems Development hobbyist \n\n",
    imageSource: "images/about/profile.jpg"
}

type HeaderProps = {
    header: string
};

const About = (props: HeaderProps)=> {
    const {header} = props;

    const parseIntro = (text: string) => (
        <ReactMarkdown children={text} />
    )

    return  (
        <>
        <Header title={header} />
            <div className="section-content-container">
                <Container>
                    {data
                    ? (
                        <Fade in={true}>
                            <Row>
                                <Col style={styles.introTextContainer}>
                                    {parseIntro(data.about)}
                                </Col>
                                <Col style={styles.introImageContainer}>
                                    <img src={data?.imageSource} alt="profile" style={{ width: 400, height: 300}} />
                                </Col>
                            </Row>
                        </Fade>
                        ): <FallbackSpinner />}
                </Container>
            </div>
        </>
    );

}

export default About;