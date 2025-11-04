'use client';

import styled from 'styled-components';
import { Game } from '@/types/Game'

const StyledHeader = styled.h1
    `
    color: #1a1a1a;
`

const StyledP = styled.p
    `
        color: crimson;
    `

const StyledTable = styled.div
    `
    display: grid;
    grid-template-columns: repeat(3, 1fr); //Three columns 
    gap: 20px;
    padding: 20px;
`

const StyledCharSegment = styled.div
    `
    background: beige;
    border: 1px solid;
    border-radius: 12px;
    padding: 15px;
    text-align: center;
`

export default function GameList( {games } : { games: Game[] } ) {

    return (
        <StyledTable>
            {
                games.map((game: Game) =>
                    <StyledCharSegment key={game.id}>
                        <StyledHeader>{game.name}</StyledHeader>
                        <img src={game.image} alt={game.name} height={500} width={500} />
                        <StyledP>Year Made: {game.year}</StyledP>
                    </StyledCharSegment>


                )
            }
        </StyledTable>

    )
}