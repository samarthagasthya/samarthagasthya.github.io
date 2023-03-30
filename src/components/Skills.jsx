import ReactMarkdown from "react-markdown";
import * as PropTypes from "prop-types";
import {Fade} from "react-awesome-reveal";
import { Container } from "react-bootstrap";
import Header from "./Header";
import FallbackSpinner from "./FallbackSpinner";
import  {SiReact,SiKotlin, SiC, SiCplusplus, SiPython, SiRuby, SiJavascript, SiPhp, SiAssemblyscript, SiCsharp, SiSwift, SiDart, SiTypescript, SiRust , SiCoffeescript, SiMysql, SiMongodb, SiPostgresql, SiAndroid, SiNodedotjs, SiIos, SiFlutter, SiElectron, SiNextdotjs, SiAndroidstudio, SiGit, SiDocker, SiGooglecloud, SiAmazonaws, SiJson, SiGraphql, SiHtml5, SiCss3, SiGo, SiBootstrap, SiNetlify, SiVuedotjs, SiAngular, SiRedux, SiVercel, SiMaterialdesign, SiGradle, SiApachemaven, SiUnity, SiFirebase, SiExpress} from "@icons-pack/react-simple-icons";

const styles = {
    iconStyle: {
        height: 75,
        width: 75,
        margin: 10,
        marginBottom: 0
    },
    introText : {
        whiteSpace: "pre-wrap",
    }
};

const data = {
    intro: "I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools and platforms I have worked with:",
    skills: [{
     
            title: "Languages",
            items : [
     
                {
                    icon: "java",
                    title: "Java"
                },
                {
                    icon: "kt",
                    title: "Kotlin"
                },
                {
                    icon: "c",
                    title: "C"
                },
                {
                    icon: "cpp",
                    title: "C++"
                },
                {
                    icon: "php",
                    title: "PHP"
                },
                {
                    icon: "js",
                    title: "JavaScript"
                },
                {
                    icon: "py",
                    title: "Python"
                },
                {
                    icon: "asm",
                    title: "Assembly"
                },
                {
                    icon: "cs",
                    title: "C#"
                },
                {
                    icon: "rb",
                    title: "Ruby"
                },
                {
                    icon: "rs",
                    title: "Rust"
                },
                {
                    icon: "swift",
                    title: "Swift"
                },
                {
                    icon: "dart",
                    title: "Dart"
                },
                {
                    icon: "ts",
                    title: "TypeScript"
                },
                {
                    icon: "html",
                    title: "HTML"
                },
                {
                    icon: "css",
                    title: "CSS"
                },
                {
                    icon: "go",
                    title: "GoLang"
                },
        ]},
        {
            title: "Databases",
            items: [
                {
                    icon: "mysql",
                    title: "MySQL"
                },
                {
                    icon: "mongo",
                    title: "MongoDB"
                },{
                    icon: "postgres",
                    title: "PostgreSQL"
                },
            ]
        },
        {
            title: "Frameworks & Technologies",
            items : [
                {
                    icon: "android",
                    title: "Android"
                },
                {
                    icon: "nodejs",
                    title: "Nodejs"
                },
                {
                    icon: "react",
                    title: "ReactJS"
                },
                {
                    icon: "rnative",
                    title: "React Native"
                },
                {
                    icon: "nextjs",
                    title: "NextJS"
                },
                {
                    icon: "electron",
                    title: "Electron"
                },
                {
                    icon: "bts",
                    title: "Bootstrap"
                },
                {
                    icon: "ng",
                    title: "Angular"
                },
                {
                    icon: "vue",
                    title: "Vue"
                },
                {
                    icon: "redux",
                    title: "redux"
                },
                {
                    icon: "ejs",
                    title: "Express.js"
                },
                {
                    icon: "mui",
                    title: "Material-ui"
                },
                {
                    icon: "ios",
                    title: "iOS"
                },
                {
                    icon: "flutter",
                    title: "Flutter"
                },
                {
                    icon: "json",
                    title: "JSON"
                }, 
                {
                    icon: "graphql",
                    title: "GraphQL"
                },
                {
                    icon: "netlify",
                    title: "Netlify"
                },
                {
                    icon: "vercel",
                    title: "Vercel"
                }
            ]
        },
        {
            title : "Tools & Platforms",
            items: [
                {
                    icon: "astudio",
                    title: "Android Studio"
                },
                {
                    icon: "git",
                    title: "Git"
                },
                {
                    icon: "docker",
                    title: "Docker"
                },
                {
                    icon: "gcp",
                    title: "GCP"
                },
                {
                    icon: "aws",
                    title: "AWS"
                },
                {
                    icon: "gradle",
                    title: "Gradle"
                }, 
                {
                    icon: "maven",
                    title: "Maven"
                },
                {
                    icon: "fb",
                    title: "Firebase"
                },
                {
                    icon: "unity",
                    title: "Unity"
                }
            ]
    }
]};

const Skills = (props) => {
    const {header} = props;

    const renderSkillsIntro = (intro) => (
        <h4 styles={styles.introText}>
            <ReactMarkdown children={intro} />
        </h4>
    );

    const renderIcon = (icon) => {
        if (icon==="kt") {
            return <SiKotlin />
        } else if(icon==="c") {
            return <SiC />
        } else if(icon==="cpp") {
            return <SiCplusplus />
        } else if(icon==="py") {
            return <SiPython />
        } else if(icon==="rb") {
            return <SiRuby />
        } else if(icon==="js") {
            return <SiJavascript />
        } else if(icon==="php") {
            return <SiPhp/>
        } else if(icon==="asm") {
            return <SiAssemblyscript/>
        } else if(icon==="cs") {
            return <SiCsharp/>
        } else if(icon==="swift") {
            return <SiSwift/>
        } else if(icon==="dart") {
            return <SiDart/>
        } else if(icon==="ts") {
            return <SiTypescript />
        } else if(icon==="rs") {
            return <SiRust/>
        } else if(icon==="java") {
            return <SiCoffeescript/>
        } else if(icon==="mysql") {
            return <SiMysql/>
        } else if(icon==="mongo") {
            return <SiMongodb/>
        } else if(icon==="postgres") {
            return <SiPostgresql/>
        } else if(icon==="android") {
            return <SiAndroid/>
        } else if(icon==="nodejs") {
            return <SiNodedotjs/>
        } else if(icon==="react" || icon==="rnative") {
            return <SiReact />
        } else if(icon==="ios") {
            return <SiIos/>
        } else if(icon==="flutter") {
            return <SiFlutter/>
        } else if(icon==="electron") {
            return <SiElectron/>
        } else if(icon==="nextjs") {
            return <SiNextdotjs/>
        } else if(icon==="astudio") {
            return <SiAndroidstudio/>
        } else if(icon==="git") {
            return <SiGit/>
        } else if(icon==="docker") {
            return <SiDocker/>
        } else if(icon==="gcp") {
            return <SiGooglecloud/>
        } else if(icon==="aws") {
            return <SiAmazonaws/>
        } else if(icon==="json") {
            return <SiJson/>
        } else if(icon==="graphql") {
            return <SiGraphql/>
        } else if(icon==="html") {
            return <SiHtml5/>
        } else if(icon==="css") {
            return <SiCss3/>
        } else if(icon==="go") {
            return <SiGo/>
        } else if(icon==="bts") {
            return <SiBootstrap/>
        } else if(icon==="netlify") {
            return <SiNetlify/>
        } else if(icon==="vue") {
            return <SiVuedotjs/>
        } else if(icon==="ng") {
            return <SiAngular/>
        } else if(icon==="redux") {
            return <SiRedux/>
        } else if(icon==="vercel") {
            return <SiVercel/>
        } else if(icon==="mui") {
            return <SiMaterialdesign/>
        } else if(icon==="gradle") {
            return <SiGradle/>
        } else if(icon==="maven") {
            return <SiApachemaven/>
        } else if(icon==="unity") {
            return <SiUnity/>
        } else if(icon==="fb") {
            return <SiFirebase/>
        } else if(icon==="ejs") {
            return <SiExpress/>
        }
    }


    return (
        <>
        <Header title={header} />
            {data ? (
                <Fade>
                    <div className="section-content-container">
                        <Container> 
                            {renderSkillsIntro(data.intro)}
                            {data.skills?.map((rows)=>(
                                <div key={rows.title}>
                                    <br/>
                                    <h3>{rows.title}</h3>
                                    {rows.items.map((item)=>(
                                        <div key={item.title} style={{display: "inline-block"}}>
                                            <div style={styles.iconStyle}>
                                            {renderIcon(item.icon)}
                                            </div>
                                            <p>{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </Container>
                    </div>
                </Fade>
            ): <FallbackSpinner />}
        </>
    )
}

Skills.propTypes = {
    header: PropTypes.string.isRequired
}

export default Skills;