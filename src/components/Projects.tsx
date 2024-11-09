 import {useState,useContext} from "react";
import {Container,Row,Button,Fade} from "react-bootstrap";
import {ThemeContext} from "styled-components";
import Header from "./Header.tsx";
import ProjectCard from "./ProjectCard.tsx";
import FallbackSpinner from "./FallbackSpinner.tsx";

const styles = {
    containerStyle: {
        marginBottom: 25
    },
    showMoreStyle: {
        margin: 25
    }
};

 const data = {
     projects : [
         {
             image : "https://github.com/JohnX4321/covid_tracker/blob/main/app6.png?raw=true",
             title: "Covid Tracker",
             bodyText: "A complete ecosystem consisting of backend to process data , a React website for a specific county/state and React native app to aggregate the data",
             links: [
                 {
                     text: "GitHub",
                     href: "https://github.com/JohnX4321/covid_tracker"
                 },
             ],
             tags : [
                 "JavaScript",
                 "React",
                 "React Native",
                 "NodeJS",
                 "MongoDB"
             ]
         },
         {
             image : "",
             title: "Redux Chat",
             bodyText: "A localhost chat app built using sockets and React.",
             links: [
                 {
                     text: "GitHub",
                     href: "https://github.com/JohnX4321/ReduxChat/"
                 },
             ],
             tags : [
                 "React",
                 "Sockets.io"
             ]
         },
         {
             image : "",
             title: "TZMusicPlayer",
             bodyText: "An Android App to play music",
             links: [
                 {
                     text: "GitHub",
                     href: "https://github.com/JohnX4321/TZMusicPlayer"
                 }
             ],
             tags : [
                 "Java",
                 "Kotlin",
                 "Gradle",
                 "Androidx",
             ]
         },
         {
             title: "Compose Flashlight",
             bodyText: "- An Android App to operate device Flashlight",
             links: [
                 {
                     text: "GitHub",
                     href: "https://github.com/JohnX4321/Compose_Flashlight"
                 },
                 {
                     text: "Play Store",
                     href: "https://play.google.com/store/apps/details?id=com.thingsenz.flashlight"
                 }
             ],
             tags : [
                 "Java",
                 "Android",
                 "Jetpack Compose"
             ]
         },
         {
             title: "Calculator",
             bodyText: "An Android Calculator",
             links: [
                 {
                     text: "GitHub",
                     href: "https://github.com/JohnX4321/Calculator"
                 },
                 {
                     text: "Play Store",
                     href: "https://play.google.com/store/apps/details?id=com.thingsenz.calculator&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pli=1"
                 }
             ],
             tags : [
                 "Kotlin",
                 "Android",
                 "MVVM",
                 "Room"
             ]
         },
         {
             title: "Verilog Quizzer",
             bodyText: "A python application to evaluate predesigned verilog codes and test it to provide feedback on whether the program has passed the criteria or not. In use @ DSCE",
             links: [
                 {
                     text: "GitHub",
                     href: "https://github.com/JohnX4321/Verilog_Quizzer"
                 }
             ],
             tags : [
                 "Python",
                 "Verilog",
                 "CMD~Interface"
             ]
         },
     ]
 };

 type ProjectsProps = {
     header: string
 }

 const Projects = (props: ProjectsProps) => {
     const theme = useContext(ThemeContext);
     const {header} = props;
     const [showMore,setShowMore] = useState(false);

     const itemsCount = showMore && data ? data.projects.length : 6;

     return (
         <>
         <Header title={header} />
             {data ?
                 (
                     <div className="section-content-container">
                         <Container style={styles.containerStyle}>
                             <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                                 {
                                     data.projects?.slice(0,itemsCount).map((project) => (
                                         <Fade key={project.title} in={true}>
                                             <ProjectCard project={project} />
                                         </Fade>
                                     ))
                                 }
                             </Row>
                             {
                                 !showMore && (
                                     <Button style={styles.showMoreStyle}
                                             variant={theme?.bsSecondaryVariant}
                                             onClick={() => setShowMore(true)}>
                                         Show more
                                     </Button>
                                 )
                             }
                         </Container>
                     </div>
                 ): <FallbackSpinner/> }
         </>
     );
 };

 export default Projects;