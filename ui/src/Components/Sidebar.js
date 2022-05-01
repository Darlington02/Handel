import React, { useState, useEffect, useContext} from "react";
import styled from "styled-components";
import AvatarImage from "../img/user.png";
import PrimaryButton from "./PrimaryButton";
import { ContextProvider } from "../AppContext"

function Sidebar() {

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
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>{address ? (address.slice(0, 6)) : "Connect Wallet"}</Name>
        <PrimaryButton name={manufacturers ? "Samsung" : "User"} />
      </ProfileContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 95% !important;
  margin: 20px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.25));
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: #905ec6;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
