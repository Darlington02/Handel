import React, { useEffect } from 'react'
import CardSection from "../Components/CardSection";
import Header from "../Components/Header";
import {OuterLayout} from '../styles/Layouts';
import styled from 'styled-components';
import ChartSection from "../Components/ChartSection";
import NftSection from "../Components/NftSection";
import Footer from "../Components/Footer";
import { Fade } from "react-reveal";

function Home() {

    return (
        <div>
            <Header />
            <OuterLayout>
            <MainStyled>
                <Fade left>
                <CardSection />
                </Fade>
                <Fade right>
                <ChartSection />
                </Fade>
                <Fade left>
                <NftSection />
                </Fade>
            </MainStyled>
            </OuterLayout>

            <Fade bottom>
                <Footer />
            </Fade>
        </div>
    )
}


export default Home

const MainStyled = styled.main`


`;
