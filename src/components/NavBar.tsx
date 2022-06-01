import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { linkTypes } from '../types';

const NavBar = styled.div`
    padding: 0.75em 6.25em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: white;
`;
const NavLink = styled(Link) <{ isactive: string }>`
    width: 25%;
    text-align: center;
    &:not(:first-child),
    &:not(:last-child){
        margin: 0 20px;
    }
    border-bottom: ${({ isactive }) => isactive === 'true' ? '2px solid white' : 'none'};
`;

export default () => {
    const [activeLink, setActiveLink] = useState<string>(linkTypes.HOME);
    const handleLinkClick = (linkType: string) => setActiveLink(linkType);
    return (
        <NavBar>
            <NavLink to="#home" isactive={`${activeLink === linkTypes.HOME}`} className="underlined" onClick={() => handleLinkClick(linkTypes.HOME)}>HOME</NavLink>
            <NavLink to="#about" isactive={`${activeLink === linkTypes.ABOUT}`} className="underlined" onClick={() => handleLinkClick(linkTypes.ABOUT)}>ABOUT</NavLink>
            <NavLink to="#experience" isactive={`${activeLink === linkTypes.EXPERIENCE}`} className="underlined" onClick={() => handleLinkClick(linkTypes.EXPERIENCE)}>EXPERIENCE</NavLink>
            <NavLink to="#projects" isactive={`${activeLink === linkTypes.PROJECTS}`} className="underlined" onClick={() => handleLinkClick(linkTypes.PROJECTS)}>PROJECTS</NavLink>
        </NavBar>
    )
}