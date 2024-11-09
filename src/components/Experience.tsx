import {useContext} from "react";
import VerticalTimelineElement from "../lib/vertical-timeline/VerticalTimelineElement"
import VerticalTimeline from "../lib/vertical-timeline/VerticalTimeline.tsx";
import {Container,Fade} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import {ThemeContext} from "styled-components";
import Header from "./Header.tsx";
import FallbackSpinner from "./FallbackSpinner.tsx";
import "../styles/experience.css"
import "../lib/vertical-timeline/VerticalTimeline.css"
import "../lib/vertical-timeline/VerticalTimelineElement.css"

const styles = {
    ulStyle: {
        listStylePosition: 'outside' as const,
        paddingLeft: 20,
    },
    subtitleContainerStyle: {
        marginTop: 10,
        marginBottom: 10,
    },
    subtitleStyle: {
        display: 'inline-block',
    },
    inlineChild: {
        display: 'inline-block',
    },
    itemStyle: {
        marginBottom: 10,
    },
};

const data = {
    experiences: [
        {
            title: "Application Developer - Android Applications",
            subtitle: "Ather Energy Ltd",
            workType: "Full-time",
            workDescription: [
                "Develop HMI layer of Vehicle",
                "Develop Testing and Diagnostics Software"
            ],
            dateText: "02/2024 – Present"
        },
        {
            title: "Member of Technical Staff",
            subtitle: "42Gears Mobility Systems Pvt Ltd",
            workType: "Full-time",
            workDescription: [
                "Develop & manage MDM solution",
                "Develop android apps for Phone, POS, wear OS & VR"
            ],
            dateText: "07/2021 – 01/2024"
        },
        {
            title: "Application Developer",
            subtitle: "Vrook",
            workType: "Internship",
            workDescription: [
                "Develop User Interface and framework for chatbot using React & React Native"
            ],
            dateText: "07/2020 – 12/2022"
        },
        {
            title: "Android Developer",
            subtitle: "Dwaiampayana Technologies",
            workType: "Internship",
            workDescription: [
                "Developed multiple customer-centric android applications.",
            ],
            dateText: "03/2020 – 06/2020"
        },
        {
            title: "Java Developer",
            subtitle: "Eckovation",
            workType: "Internship",
            workDescription: [
                "Develop an aggregated applicable for cab hailing, food ordering and location services",
            ],
            dateText: "06/2019"
        }
    ]
}

type ExperienceProps = {
    header: string
}

const Experience = (props: ExperienceProps) => {
    const theme = useContext(ThemeContext);
    const {header} = props;

    return (
        <>
        <Header title={header} />
            {data ?
                (
                    <div className="section-content-container">
                        <Container>
                            <VerticalTimeline lineColor={theme?.timelineLineColor} >
                                {data.experiences.map((item) => (
                                    <Fade in={true}>
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            key={item.title + item.dateText}
                                            date={item.dateText}
                                            style={styles.itemStyle}
                                            contentStyle={{color: theme?.color}}>
                                            <h2 className="item-title">
                                                {item.title}
                                            </h2>
                                            <div style={styles.subtitleContainerStyle}>
                                                <h4 style={{...styles.subtitleStyle, color: theme?.accentColor}}>
                                                    {item.subtitle}
                                                </h4>
                                                {item.workType && (
                                                    <h5 style={{...styles.inlineChild, color: theme?.background}}>
                                                        &nbsp;·
                                                        {" "}
                                                        {item.workType}
                                                    </h5>
                                                )}
                                            </div>
                                            <ul style={styles.ulStyle}>
                                                {item.workDescription.map((point) => (
                                                    <div key={point}>
                                                        <li style={{color: theme?.background}}>
                                                            <ReactMarkdown
                                                                children={point}
                                                                components={{
                                                                    p: "span"
                                                                }}
                                                                />
                                                        </li>
                                                        <br />
                                                    </div>
                                                ))}
                                            </ul>
                                        </VerticalTimelineElement>
                                    </Fade>
                                ))}
                            </VerticalTimeline>
                        </Container>
                    </div>
                ) : <FallbackSpinner />}
        </>
    )
}

export default Experience;