import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.png';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { ContextProvider } from "../AppContext"
import Web3 from "web3"

function Navigation() {
    const { address, contract } = useContext(ContextProvider) 

    // connect to metamask
    const connect = async() => {
        try{
            await window.ethereum.request({method: "eth_requestAccounts"})
            window.location.reload()
        }
        catch(err){
            alert(err.message)
        }
    }

    return (
        <Fade top>
        <NavigationStyled>
            <Link to="/">
                <div className="logo">
                    <img src={logo} width="150" alt="" />
                </div>
            </Link>

            <ul>
                {address ?  
                    <Link to="/dashboard">
                        <PrimaryButton name={"Dashboard"} />
                    </Link>
                :
                    <button className="connectBtn" onClick={connect}>Connect</button>
                }
                
            </ul>
        </NavigationStyled>
        </Fade>
    )
}


const NavigationStyled = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;

        .connectBtn{
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
        }
    }

    @media(max-width: 960px){
        margin-top: -100px;

       ul{
           display: block;
           margin-left: 15px;
        }
    }
`;

export default Navigation