import {useContext} from "react";
import { SocialIcon } from "react-social-icons";
import { ThemeContext } from "styled-components";


const data = {
    social: [
        {
            network : "linkedin",
            href: "https://linkedin.com/in/samarth-agasthya-m-s"
        },
        {
            network : "github",
            href: "https://github.com/johnx4321"
        },
        {
            network : "instagram",
            href: "https://instagram.com/thingsenz"
        }
    ]
};

const Social = () => {
    const theme = useContext(ThemeContext);
    

    return (
        <div className="social">
            {data? data.social.map((s)=>(
                <SocialIcon
                key={s.network}
                style={{marginLeft: 10, marginRight: 10,marginBottom: 10}}
                url={s.href}
                network={s.network}
                bgColor={theme.socialIconBgColor}
                target="_blank"
                rel="noopener"
                />
            )): null}
        </div>
    );

}

export default Social;