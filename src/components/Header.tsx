import "../App.css"

type HeaderProps = {
    title: string
};

const Header = (props: HeaderProps) => {
    const { title } = props;
    return (
        <div className="header">
            {title}
        </div>
    )
};

export default Header;