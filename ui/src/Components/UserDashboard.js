import React, { useState, useEffect, useContext} from "react";
import styled from "styled-components";
import Products from "./Products";

function UserDashboard() {

  return (
    <Container>
        
      <SectionOne>
        <SearchBox>
          <form>
              <input type="text" placeholder="Enter Handel Number.." />
          </form>
        </SearchBox>
      </SectionOne>
    
      <SectionTwo>
        <h3>Purchased Products</h3>
        <Products />
      </SectionTwo>

    </Container>
  );
}

const Container = styled.div`

`;

const SectionOne = styled.div`

`;

const SearchBox = styled.div`
    margin-top: 20px;
    margin-bottom: 50px;

    @media(max-width: 960px){
        margin-top: 50px;
    }

    input{
        display: block;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        height: 60px;
        border-radius: 20px;
        padding: 20px;
        outline: none;
        font-size: 20px;

        @media(max-width: 960px){
            width: 90%;
            height: 50px;
        }
    }
    
`;

const SectionTwo = styled.div`
    @media(max-width: 960px){

      h3{
        color: #d24672;
      }
    }
`;

export default UserDashboard;
