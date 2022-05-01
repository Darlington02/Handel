import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import verify from '../img/verify.png';

function CardSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container" id="features">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                            Dear user, verify the authenticity of products in a click
                        </h2>
                        <p>
                            With Handel, verify the authenticity of goods you intend purchasing in a click. Make the best buying decisions when you use Handel.
                        </p>
                    </div>
                    <div className="card-right">
                        <img src={verify} class="verify" width="100%" alt="" />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`
    .card-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @media screen and (max-width: 845px){
            grid-template-columns: repeat(1, 1fr);
        }
        .card-right{
            display: flex;
            justify-content: flex-end;
            img{filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));}
        }

        .card-left{
            p{
                padding: 1rem 0;
            }

            @media(max-width: 960px){
                .secondary-heading{
                    font-size: 35px;
                }
            }
        }
    }
`;

export default CardSection
