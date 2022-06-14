import { useState } from 'react';
import { HashLink as LinkType } from 'react-router-hash-link';
import styled from 'styled-components';

const NavBar = styled.div`
    padding: 0.75em 6.25em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: white;
`;
const NavLink = styled(LinkType) <{ isactive: string }>`
    width: 25%;
    text-align: center;
    &:not(:first-child),
    &:not(:last-child){
        margin: 0 20px;
    }
    border-bottom: ${({ isactive }) => isactive === 'true' ? '2px solid white' : 'none'};
`;
type LinkType = 'HOME' | 'ABOUT' | 'EXPERIENCE' | 'PROJECTS';
export default () => {
    const [activeLink, setActiveLink] = useState<LinkType>('HOME');
    const handleLinkClick = (value: LinkType) => setActiveLink(value);
    return (
        <NavBar>
            <NavLink to="#home" isactive={`${activeLink === 'HOME'}`} className="underlined" onClick={() => handleLinkClick('HOME')}>HOME</NavLink>
            <NavLink to="#about" isactive={`${activeLink === 'ABOUT'}`} className="underlined" onClick={() => handleLinkClick('ABOUT')}>ABOUT</NavLink>
            <NavLink to="#experience" isactive={`${activeLink === 'EXPERIENCE'}`} className="underlined" onClick={() => handleLinkClick('EXPERIENCE')}>EXPERIENCE</NavLink>
            <NavLink to="#projects" isactive={`${activeLink === 'PROJECTS'}`} className="underlined" onClick={() => handleLinkClick('PROJECTS')}>PROJECTS</NavLink>
        </NavBar>
    )
}