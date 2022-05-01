import React, { useState, useContext, useEffect } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import bg from '../img/bg.svg';
import Navigation from "../Components/Navigation"
import PrimaryButton from '../Components/PrimaryButton';
import { ContextProvider } from "../AppContext";
import { Fade } from "react-reveal";

function AddManufacturer() {
    const [ owner, setOwner ] = useState()
    const { address, contract } = useContext(ContextProvider)
    const [ manufacturerAddress, setManufacturerAddress ] = useState()
    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ industry, setIndustry ] = useState()
    const [ website, setWebsite ] = useState()

    const submitForm = (event) => {
        
        owner === address ? addManufacturer() : alert("This function can only be carried out by an authorized admin!")
        event.preventDefault()

    }

    const addManufacturer = async() => {
        try{
            await contract.methods.registerManufacturer(manufacturerAddress, name, email, industry, website).send({
                from: address
            })

            alert("Manufacturer added successfully")
        }
        catch(err){
            alert(err.message)
        }
    }

    // load address of owner from contract
    useEffect(() => {

        const loadMethod = async() => {
            const owner = await contract.methods.owner().call()
            setOwner(owner)
        }

        contract && loadMethod()

    }, [contract])

    return (
        <Container>
            <Navigation />
            <form onSubmit={submitForm}>
                <Fade left>
                    <h1>Add Manufacturer To Database</h1>
                </Fade>

                <Fade right>
                    <FormInput>
                        <label for="address">Manufacturer's Address</label>
                        <input type="text" id="address" placeholder="Enter Manufacturer's Name" onChange={e => setManufacturerAddress(e.target.value)} />
                    </FormInput>

                    <FormInput>
                        <label for="name">Manufacturer's Name</label>
                        <input type="text" id="name" placeholder="Enter Manufacturer's Name" onChange={e => setName(e.target.value)} />
                    </FormInput>

                    <FormInput>
                        <label for="email">Manufacturer's Email</label>
                        <input type="email" id="email" placeholder="Enter Manufacturer's Email" onChange={e => setEmail(e.target.value)} />
                    </FormInput>

                    <FormInput>
                        <label for="category">Manufacturer's Industry</label>
                        <input type="text" id="category" placeholder="Enter Manufacturer's Industry" onChange={e => setIndustry(e.target.value)} />
                    </FormInput>

                    <FormInput>
                        <label for="website">Manufacturer's Website</label>
                        <input type="text" id="website" placeholder="Enter Manufacturer's Website" onChange={e => setWebsite(e.target.value)} />
                    </FormInput>
                </Fade>

                <PrimaryButton name={"Add Manufacturer"} />
            </form>
        </Container>
    )
}

export default AddManufacturer

const Container = styled.div`
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 100%;
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 18px;

    @media(max-width: 960px){
        padding-top: 70px;
    }

    form{
        display: block;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 50px;
        padding-bottom: 100px;

        h1{
            padding-bottom: 3rem;
        }
    }
`

const FormInput = styled.div `

    #website{
        margin-bottom: 40px;
    }

    label{
        display: block;
        padding-bottom: 10px;
        padding-top: 20px;
        font-weight: bold;
    }
    input{
        width: 100%;
        border: none;
        outline: none;
        background: none;
        border-bottom: 2px solid black;
        color: white;
        font-size: 1rem;
        padding: 1.5rem;
    }
`