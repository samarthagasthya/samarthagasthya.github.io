import {SocialIcon} from "react-social-icons"

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
        },
        {
            network: "sharethis",
            href: "https://www.cloudskillsboost.google/public_profiles/f8de03bb-f0e0-44b2-9e46-755e3d644f0e"
        }
    ]
};

const Social = () => {
    return (
        <div className="social">
            {data ? data.social.map((s) => (
                <SocialIcon
                    key={s.network}
                    style={{marginLeft: 10, marginRight: 10, marginBottom: 10}}
                    url={s.href}
                    network={s.network}
                    target="_blank"
                    rel="noopener noreferrer"
                    />
            )): null}
        </div>
    );
}

export default Social;