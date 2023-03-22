import { Navbar,Nav , Container } from "react-bootstrap";
import React , {useEffect, useState, useContext} from "react";
import { NavLink } from "react-router-dom";
import styled, {ThemeContext} from "styled-components";
import routes from "../utils/routes";
import { useNavigate } from "react-router";
import ThemeToggle from "./ThemeToggle";

const styles = {
    logoStyle: {
        width: 50,
        height: 40
    }
};

 const ExternalLink = styled.a`
 color: ${(props)=>props.theme.navbarTheme.linkColor};
 &:hover {
    color: ${(props)=>props.theme.navbarTheme.linkHoverColor};
 }
 &::after {
    background-color: ${(props)=>props.theme.accentColor};
 }
 `;

 const InternalLink = styled(NavLink)`
 color: ${(props)=>props.theme.navbarTheme.linkColor};
 &:hover {
    color: ${(props)=>props.theme.navbarTheme.linkHoverColor};
 }
 &::after {
    background-color: ${(props)=>props.theme.accentColor};
 }
 &.navbar__link--active {
    color: ${(props)=>props.theme.navbarTheme.linkActiveColor};
 }
 `;

 const d = {
    logo : {
        source: "images/logo.png",
        height : 45,
        width : 50
    },
    sections: [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Skills",
            href: "/skills"
        },
        {
            title: "Experience",
            href: "/experience"
        },
        {
            title: "Projects",
            href: "/projects"
        },
    ]

}
 const NavBar = () => {
    const theme = useContext(ThemeContext);
    const [data,setData] = useState(d);
    const [expanded,setExpanded] = useState(false);

    return (
        <Navbar fixed="top" expand="md"
        bg="dark" variant="dark" className="navbar-custom"
        expanded={expanded}>
            <Container>
                {data?.logo && (
                    <Navbar.Brand href="/">
                        <img src={data?.logo?.source}
                         className="d-inline=block align-top"
                         alt="main logo"
                         style= {
                            data?.logo?.height && data?.logo?.width ? {height: data?.logo?.height, width: data?.logo?.width}
                            :styles.logoStyle
                         } />
                    </Navbar.Brand>
                )}
                <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={()=>setExpanded(!expanded)}
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        {data && data.sections?.map((s,i)=> (s?.type==="link"? (
                            <ExternalLink
                            key={s.title} href={s.href}
                            target="_blank" rel="noopener noreferrer"
                            onClick={()=>setExpanded(false)}
                            className="navbar__link"
                            theme={theme}>
                                {s.title}
                            </ExternalLink>
                        ):(
                            <InternalLink
                            key={s.title} onClick={()=>setExpanded(false)}
                            exact={i===0}
                            activeClassName="navbar__link--active" className="navbar__link"
                            to={s.href} theme={theme} >
                                {s.title}
                            </InternalLink>
                        )))}
                    </Nav>
                    <ThemeToggle onClick={()=>setExpanded(false)} />
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
 }

export const withRouter = (Component) => {
	const Wrapper = (props) => {
		const history = useNavigate();
		return <Component history={history} {...props} />;
	};
	return Wrapper;
};


 const NavBarWithRouter = withRouter(NavBar);
 export default NavBarWithRouter;