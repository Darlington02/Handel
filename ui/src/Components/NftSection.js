import React from 'react'
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import nike from '../img/nike.jpg';
import bgCircles from '../img/circleBg.svg';

function MessagingSection() {
    return (
        <MessageStyle>
            <InnerLayout>
                <div className="message-con">
                    <div className="left-items">
                        <h2 className="secondary-heading">
                            Create multi-dimensional products
                        </h2>
                        <p className="m-para">
                            Dear manufacturers, create and sell NFTs of your manufactured products alongside the physical version in few clicks. <br /><br />
                            Dear users, how cool would it be if you could use that your same iphone and sneakers in the metaverse? Handel makes it possible.

                        </p>
                        <img src={bgCircles} className="bgCircle" alt="" />
                    </div>
                    <div className="right-items">
                        <img src={nike} width="90%" className="nike" alt="" />
                        <img src={bgCircles} alt="" className="bgCircle" />
                    </div>
                </div>
            </InnerLayout>
        </MessageStyle>
    )
}

const MessageStyle = styled.section`
    .message-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
    }


    .left-items{
        position: relative;
        padding-right: 2rem;
        .m-para{
            padding: 1rem 0;
        }
        .images-con{
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5{
                margin-left: -22px;
            }
        }
        .bgCircle{
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
        }

        @media(max-width: 960px){
            .secondary-heading{
                font-size: 35px;
            }
        }
    }
    .right-items{
        position: relative;
        img{
            padding-left: 2rem;
        }
        .bgCircle{
            position: absolute;
            bottom: -7%;
            right: 0;
            z-index: -1;
        }
        .nike{
            border-radius: 50%;
        }
    }
`;

export default MessagingSection;
