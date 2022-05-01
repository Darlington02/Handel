import React from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";
import PrimaryButton from "./PrimaryButton";
import { Link } from "react-router-dom";

function AddProduct() {
  return (
    <ProductCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <ProductText>Add Product</ProductText>
        <Link to="/add-products">
          <PrimaryButton name={"Add"} />
        </Link>
      </CardContent>
    </ProductCard>
  );
}

const ProductCard = styled.div`
  height: 100%;
  width: 100%;
  background-color: #d24672;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  display: flex;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const ProductText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

export default AddProduct;
