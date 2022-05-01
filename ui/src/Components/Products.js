import React from "react";
import styled from "styled-components";
import inventorya from '../img/inventorya.jpg';
import SecondaryButton from "./SecondaryButton";

function Products() {
  return (
    <YourProducts>
      <Product>
        <Avatar>
          <img src={inventorya} alt="" />
        </Avatar>
        <Detail>
          <Title>Logo design for Bakery</Title>
          <SubTitle>1 day remaining</SubTitle>
        </Detail>
      </Product>
      <Product>
        <Avatar>
          <img src={inventorya} alt="" />
        </Avatar>
        <Detail>
          <Title>Personal branding project</Title>
          <SubTitle>5 days remaining</SubTitle>
        </Detail>
      </Product>
      <AllProducts><SecondaryButton name={"All Products"} /></AllProducts>
    </YourProducts>
  );
}

const YourProducts = styled.div`
  min-height: 100%;
  background-color: #2c2659;
  margin: 15px 0px 0px 0px;
  padding: 1rem;
  border-radius: 1rem;
  transition: 0.4s ease-in-out;
 
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 100%;
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;

const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProducts = styled.h5`
  margin-top: 25px;
  cursor: pointer;
`;

export default Products;
