import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import inventoryc from '../img/inventorya.jpg';
import AnimatedButton from './AnimatedButton';
import { Bounce, Roll } from 'react-reveal';
import RubberBand from 'react-reveal/RubberBand';

function ChartSection() {
    return (
        <ChartStyled >
            <InnerLayout>
                <div className="chart-con">
                    <div className="chart-left">
                        <div className="stats">
                            <img src={inventoryc} alt="" />
                        </div>
                    </div>
                    <div className="chart-right">
                        <h2 className="secondary-heading">
                        Dear manufacturer, keep immutable inventories on the blockchain
                        </h2>
                        <Roll right>
                        <p>
                            Keep a publicly accessible inventory of your manufactured products on the blockchain. Being public, your customers can access this, at any place and time to ensure they are not being sold a counterfeit. Eliminate all issues that may arise from counterfeit products!
                        </p>
                        </Roll>
                        <Bounce right>
                            <AnimatedButton name={'Get Started'} />
                        </Bounce>
                    </div>
                </div>
            </InnerLayout>
        </ChartStyled >
        
    )
}

const ChartStyled = styled.section`
    .chart-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
        .chart-left{
            width: 80%;
            @media screen and (max-width: 1347px){
                width: 100%;
            }
            .stats{
                img{
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 62px;
                    width: 100%;
                }
                .stats-money{
                    display: flex;
                    padding-bottom: 1.3rem;
                    justify-content: space-between;
                }
            }
        }

        .chart-right{
            padding-left: 1rem;
            p{
                padding: 1.3rem 0;
            }

            @media(max-width: 960px){
                .secondary-heading{
                    font-size: 35px;
                }
            }
        }
    }
`;

export default ChartSection
