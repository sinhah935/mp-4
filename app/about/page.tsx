"use client";
import styled from 'styled-components';

const StyledDiv = styled.div`
    text-align: center;
`

const StyledH1 = styled.h1`
    font: bold 14px 'Roboto';
    font-size: 36px;
    margin: 0;
    padding-left: 5px;
`

const StyledP = styled.p`
    font: 14px 'Roboto';
    margin: 0;
    padding-left: 5px;
`

export default function About() {

    return (
        <StyledDiv>
            <StyledH1>About</StyledH1>
            <StyledP> This page obtains game data from the GameBrain API. <br/>
            Due to the nature of the endpoints, I am only able to display one type of<br/>
            queried search at one given time for the sake of this assignment. <br/>
            I have decided to show Call of Duty from the API</StyledP>
        </StyledDiv>

    )
}