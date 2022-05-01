import React, { useState, useEffect, useContext} from "react";
import styled from "styled-components";
import AddProduct from "./AddProduct";
import ViewNft from "./ViewNft";
import Products from "./Products";
import UserDashboard from "./UserDashboard"
import { Link, Redirect } from "react-router-dom"
import { ContextProvider } from "../AppContext"

function MainContent() {

  const { address, contract } = useContext(ContextProvider)
  const [ manufacturers, setManufacturers ] = useState()

  // load contract methods
    useEffect(() => {

        const loadMethods = async() => {
            try{
                const manufacturers = contract && await contract.methods.getAddressesLength().call()

                for(let i=0; i<manufacturers; i++){
                    const manufacturerAddresses = contract && await contract.methods.manufacturerAddresses(i).call()
                    if(address == manufacturerAddresses){
                        setManufacturers(true)
                    }
                }
            }
            catch(err){
                alert(err.message)
            }
        }

        loadMethods()

    }, [contract])


  return (
    <Container>
      <Link to="/">
        <h1>Handel</h1>
      </Link>
      <SubContainer>

        {manufacturers ?
          <>
            <SectionOne>
              <AddProduct />
              <ViewNft />
            </SectionOne>
          
            <SectionTwo>
              <h3>Recent Products</h3>
              <Products />
            </SectionTwo>
          </>
        :
          <UserDashboard />
        }

      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.25));
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 1rem;
  margin: 1rem 8rem 1rem 4rem;
  padding: 5rem;
  
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90% !important;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%;

    h1{
      font-size: 30px;
    }
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;

const SectionOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media(max-width: 960px){
    display: block;
    height: 300px;
    width: 100% !important;
    margin-top: 20px;
  }
`;

const SectionTwo = styled.div`
    @media(max-width: 960px){
      margin-top: 20rem;

      h3{
        color: #d24672;
      }
    }
`;

export default MainContent;
