import React from 'react';
import styled from 'styled-components';

function PrimaryButton({name}) {
    return (
        <ButtonStyled>
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    background-color: var(--accent-pink);
    padding: .3rem 1rem;
    height: 45px;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 10px;
    outline: none;
    border: none;
    cursor: pointer;
`;

export default PrimaryButton
