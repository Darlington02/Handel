import React from 'react';
import styled from 'styled-components';
import Secondarybutton from './SecondaryButton';
import database from '../img/database.png';
import ring1 from '../img/ring_orange.svg';
import message1 from '../img/message_pink.svg';
import message2 from '../img/message_blue.svg';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

function HeaderContent() {
    
    return (
        <HeaderContentStyled>
            <Fade left cascade>
            <div className="left-content">
                <div className="left-text-container">
                    <h1>The World's Largest Product Database</h1>
                    <p className="white">
                        Handel is a blockchain based verification service, that aims at solving the counterfeit product issues beguiling companies and users at large, using existing blockchain technologies.
                    </p>
                    <Link to="/search">
                        <Secondarybutton name={'Search..'}/>
                    </Link>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className="right-content">
                <img src={database} alt="" className="database" />
                <img src={ring1} alt="" className="ring1" />
            </div>
            </Fade>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 5rem;
        
        .white{
            color:white;
        }
        h1{
            font-size: 4rem;
            font-weight: 600;
            @media screen and (max-width: 700px){
                font-size: 2.2rem;
            }
        }

        .white{
            padding: 1.4rem 0;
            line-height: 1.8rem;
        }
    }

    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
        .database{
            width: 80%;
        }
        .ring1{
            position: absolute;
            bottom: 10%;
            right: 0;
            left: auto;
            animation: move2 20s infinite;
            transition: all .4s ease-in-out;
        }
        
    }

    //Header Animations
    .message1{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
    }
`;

export default HeaderContent;
