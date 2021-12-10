// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 2%;
    max-width: 100%;
    p {
        color: ${props => props.theme.gray};
    }
`

export default function Character(props){
    return(
        <StyledCharacter className='character'>
            <p>{props.info.name}</p>
        </StyledCharacter>
    )
}