// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    margin: 0 auto;
    display: flex;
    padding: 1%;
    justify-content: center;
    max-width: 100%;
    p {
        margin: 0 auto;
        width: 80%;
        padding: 2%;
        background-color: ${props => props.theme.black};
        color: ${props => props.theme.white};
    }
`

export default function Character(props){
    return(
        <StyledCharacter className='character'>
            <p>{props.info.name}</p>
        </StyledCharacter>
    )
}