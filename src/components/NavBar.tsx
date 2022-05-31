import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import '../styles/variables.css';
import { linkTypes } from '../types';

const NavBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NavLink = styled(Link) <{ isactive: string }>`
    padding: 0.5em 0;
    width: 25%;
    text-align: center;
    &:not(:first-child),
    &:not(:last-child){
        margin: 0 20px;
    }
    border-bottom: ${({ isactive }) => isactive === 'true' ? '2px solid black' : 'none'};
`;

export default () => {
    const [activeLink, setActiveLink] = useState<string>(linkTypes.HOME);
    const handleLinkClick = (linkType: string) => setActiveLink(linkType);
    return (
        <NavBar>
            <NavLink to="#home" isactive={`${activeLink === linkTypes.HOME}`} onClick={() => handleLinkClick(linkTypes.HOME)}>HOME</NavLink>
            <NavLink to="#about" isactive={`${activeLink === linkTypes.ABOUT}`} onClick={() => handleLinkClick(linkTypes.ABOUT)}>ABOUT</NavLink>
            <NavLink to="#experience" isactive={`${activeLink === linkTypes.EXPERIENCE}`} onClick={() => handleLinkClick(linkTypes.EXPERIENCE)}>EXPERIENCE</NavLink>
            <NavLink to="#projects" isactive={`${activeLink === linkTypes.PROJECTS}`} onClick={() => handleLinkClick(linkTypes.PROJECTS)}>PROJECTS</NavLink>
        </NavBar>
    )
}