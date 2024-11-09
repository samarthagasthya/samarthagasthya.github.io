import {useContext} from "react";
import {Button,Card,Badge,Col} from "react-bootstrap";
import {ThemeContext} from "styled-components";
import ReactMarkdown from "react-markdown";

const styles = {
    badgeStyle: {
        padding: 10,
        margin: 5
    },
    cardStyle: {
        borderRadius: 10
    },
    cardTitleStyle: {
        fontSize: 24,
        fontWeight: 700
    },
    cardTextStyle: {
        textAlign: "left" as const
    },
    linkStyle: {
        textDecoration: "none" as const,
        padding: 10
    },
    buttonStyle: {
        margin: 5
    }
};

type Link = {
    text: string,
    href: string
}

type Project = {
    title: string,
    bodyText: string,
    image?: string,
    links: Link[],
    tags: string[]
}

type ProjectCardProps = {
    project : Project
}

const ProjectCard = (props: ProjectCardProps) => {

    const theme = useContext(ThemeContext);
    const parseBodyText = (text: string) => <ReactMarkdown>{text}</ReactMarkdown>;
    const {project} = props;

    return (
        <Col>
            <Card style={{...styles.cardStyle,backgroundColor: theme?.cardBackground, borderColor: theme?.cardBorderColor}}
                  text={theme?.bsSecondaryVariant} >
                <Card.Img variant="top" src={project?.image} style={{maxWidth: 120,maxHeight: 200}} />
                <Card.Body>
                    <Card.Title style={styles.cardTitleStyle}>{project?.title}</Card.Title>
                    <Card.Text style={styles.cardTextStyle}>{parseBodyText(project.bodyText)}</Card.Text>
                </Card.Body>
                <Card.Body>
                    {project?.links?.map((link: Link) => (
                        <Button
                        key={link.href}
                        style={styles.buttonStyle}
                        variant={`outline-${theme?.bsSecondaryVariant}`}
                        onClick={()=>window.open(link.href,"_blank")}>
                            {link.text}
                        </Button>
                    ))}
                </Card.Body>
                {project.tags && (
                    <Card.Footer style={{backgroundColor: theme?.cardFooterBackground}}>
                        {project.tags.map((tag: string) => (
                            <Badge key={tag} pill bg={theme?.bsSecondaryVariant}
                            text={theme?.bsPrimaryVariant}
                            style={styles.badgeStyle}>
                                {tag}
                            </Badge>
                        ))}
                    </Card.Footer>
                )}
            </Card>

        </Col>
    )

};

export default ProjectCard;