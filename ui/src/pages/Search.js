import React from 'react'
import styled from "styled-components"
import Navigation from '../Components/Navigation'
import bg from '../img/bg.svg';

function Search() {
    return (
        <div>
            <Container>
                <Navigation />

                <SearchBox>
                    <h1>Search Our Database..</h1>
                    <form>
                        <input type="text" placeholder="Enter Handel Number.." />
                        <p>*Please ensure the Handel Number is Correct</p>
                    </form>
                </SearchBox>
            </Container>
        </div>
    )
}

export default Search

const Container = styled.div`
    background: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    padding-left: 50px;
    padding-right: 50px;
    min-height: 100vh;

    @media(max-width: 960px){
        margin-top: 70px;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

const SearchBox = styled.div`
    margin-top: 170px;

    @media(max-width: 960px){
        margin-top: 120px;

        h1{
            font-size: 25px;
        }
    }
    h1, p{
        text-align: center;
    }

    input{
        display: block;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        height: 60px;
        border-radius: 20px;
        padding: 20px;
        outline: none;
        border: 3px solid #d24672;
        font-size: 20px;

        @media(max-width: 960px){
            width: 90%;
            height: 50px;
        }
    }

    p{
        color: black;
        margin-top: 20px;
        font-weight: bold;

        @media(max-width: 960px){
            color: gainsboro;
            font-size: 18px;
        }
    }
    
`;