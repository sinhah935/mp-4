"use client";
import  Link  from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 100%;
`
const StyledUl = styled.ul`
        padding-left: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
    `

const StyledLi = styled.li`
        border: 2px solid black;
        display: block;
        width: 80%;
        text-align: center;
        background-color: bisque;
    `

const StyledLink = styled(Link)
    `
        text-decoration: none;
        font-size: calc(2px + 2vw);
        color: black;
`

export default function Nav() {

    return(
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink href={"/"}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink href={"/about"}>About</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    )

}