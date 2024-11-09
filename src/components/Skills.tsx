import ReactMarkdown from "react-markdown";
import { Container, Fade} from "react-bootstrap";
import Header from "./Header.tsx";
import FallbackSpinner from "./FallbackSpinner.tsx";
import {
    SiReact,
    SiKotlin,
    SiC,
    SiCplusplus,
    SiPython,
    SiRuby,
    SiJavascript,
    SiPhp,
    SiAssemblyscript,
    SiSharp,
    SiSwift,
    SiDart,
    SiTypescript,
    SiRust,
    SiCoffeescript,
    SiMysql,
    SiMongodb,
    SiPostgresql,
    SiAndroid,
    SiNodedotjs,
    SiIos,
    SiFlutter,
    SiElectron,
    SiNextdotjs,
    SiAndroidstudio,
    SiGit,
    SiDocker,
    SiGooglecloud,
    SiAmazonwebservices,
    SiJson,
    SiGraphql,
    SiHtml5,
    SiCss3,
    SiGo,
    SiBootstrap,
    SiNetlify,
    SiVuedotjs,
    SiAngular,
    SiRedux,
    SiVercel,
    SiMaterialdesign,
    SiGradle,
    SiApachemaven,
    SiUnity,
    SiFirebase,
    SiExpress,
    SiUnrealengine,
    SiGodotengine,
    SiWebstorm,
    SiIntellijidea,
    SiXcode,
    SiGithub,
    SiGitlab,
    SiBitbucket,
    SiVite, SiSupabase, SiGhost,
} from "@icons-pack/react-simple-icons";


const styles = {
    iconStyle: {
        height: 75,
        width: 75,
        margin: 10,
        marginBottom: 0
    },
    introText: {
        whiteSpace: 'pre-wrap',
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
                },
                {
                    icon: "azure",
                    title: "Azure"
                }
            ]
        }

    ]
};

type SkillsProps = {
    header: string
};

const Skills = (props: SkillsProps) => {

    const {header} = props;

    const renderSkillsIntro = (intro: string) => (
        <h4 style={styles.introText}>
            <ReactMarkdown children={intro} />
        </h4>
    );

    const renderIcon = (icon: string) => {
         switch (icon) {
            case "kt":
                return <SiKotlin />;
             case "c":
                 return <SiC />;
             case "cpp":
                 return <SiCplusplus />;
             case "py":
                 return <SiPython />;
             case "rb":
                 return <SiRuby />;
             case "js":
                 return <SiJavascript />;
             case "ts":
                 return <SiTypescript />;
             case "php":
                 return <SiPhp />;
             case "asm":
                 return <SiAssemblyscript />;
             case "cs":
                 return <SiSharp />;
             case "swift":
                 return <SiSwift />;
             case "dart":
                 return <SiDart />;
             case "rs":
                 return <SiRust />;
             case "java":
                 return <SiCoffeescript/>;
             case "mysql":
                 return <SiMysql />;
             case "mongo":
                 return <SiMongodb />;
             case "postgres":
                 return <SiPostgresql />;
             case "android":
                 return <SiAndroid />;
             case "nodejs":
                 return <SiNodedotjs />;
             case "react":
             case "rnative":
                 return <SiReact />;
             case "ios":
                 return <SiIos />;
             case "flutter":
                 return <SiFlutter />;
             case "electron":
                 return <SiElectron />;
             case "nextjs":
                 return <SiNextdotjs />;
             case "astudio":
                 return <SiAndroidstudio />;
             case "git":
                 return <SiGit />;
             case "docker":
                 return <SiDocker />;
             case "gcp":
                 return <SiGooglecloud />;
             case "aws":
                 return <SiAmazonwebservices />;
             case "json":
                 return <SiJson />;
             case "graphql":
                 return <SiGraphql />;
             case "html":
                 return <SiHtml5 />;
             case "css":
                 return <SiCss3 />;
             case "go":
                 return <SiGo />;
             case "bts":
                 return <SiBootstrap />;
             case "netlify":
                 return <SiNetlify />;
             case "vue":
                 return <SiVuedotjs />;
             case "ng":
                 return <SiAngular />;
             case "vercel":
                 return <SiVercel />;
             case "redux":
                 return <SiRedux />;
             case "mui":
                 return <SiMaterialdesign />;
             case "gradle":
                 return <SiGradle />;
             case "maven":
                 return <SiApachemaven />;
             case "unity":
                 return <SiUnity />;
             case "fb":
                 return <SiFirebase />;
             case "ejs":
                 return <SiExpress />;
             case "unreal":
                 return <SiUnrealengine />;
             case "godot":
                 return <SiGodotengine />;
             case "ws":
                 return <SiWebstorm />;
             case "jb":
                 return <SiIntellijidea />;
             case "xcode":
                 return <SiXcode />;
             case "github":
                 return <SiGithub />;
             case "gitlab":
                 return <SiGitlab />;
             case "bitbucket":
                 return <SiBitbucket />;
             case "vite":
                 return <SiVite />;
             case "sb":
                 return <SiSupabase />;
             default:
                 return <SiGhost />;
        }
    }

    return (
        <>
            <Header title={header} />
            {data? (
                <Fade in={true}>
                    <div className="section-content-container">
                        <Container>
                            {renderSkillsIntro(data.intro)}
                            {data.skills?.map((rows) => (
                                <div key={rows.title}>
                                    <br />
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
    );

};

export default Skills;