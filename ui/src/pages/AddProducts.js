import React, { useState, useContext, useEffect } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import bg from '../img/bg.svg';
import logo from '../img/logo.png';
import { Fade } from "react-reveal"
import PrimaryButton from '../Components/PrimaryButton';
import { ContextProvider } from '../AppContext'

function AddProducts() {

    const { address, contract } = useContext(ContextProvider)
    const [ name, setName ] = useState()
    const [ color, setColor ] = useState()
    const [ desc, setDesc ] = useState()
    const [ date, setDate ] = useState()
    const [ quantity, setQuantity] = useState()

    // handle inputs from form
    const formHandler = (event) => {

        addProduct()

        event.preventDefault()
        
    }

    // add product to the database
    const addProduct = async() => {
        try{
            await contract.methods.addProduct(name, color, desc, date, quantity, false).send({
                from: address
            })

            alert("Your product was added successfully!")
        }
        catch(err){
            alert(err.message)
        }
    }
    
    return (
        <Container>
            <Navigation>
                <Link to="/">
                    <div className="logo">
                        <img src={logo} width="150" alt="" />
                    </div>
                </Link>
            </Navigation>
            <form onSubmit={formHandler}>
                <Fade left>
                    <h1>Add Product To Database</h1>
                </Fade>

                <Fade right>
                    <FormInput>
                        <label for="name">Product Name</label>
                        <input type="text" id="name" placeholder="Enter Product's Name" onChange={e => setName(e.target.value)} />
                    </FormInput>

                    <FormInput>
                        <label for="color">Product Color</label>
                        <input type="text" id="color" placeholder="Enter Product's Color" onChange={e => setColor(e.target.value)} />
                    </FormInput>

                    <FormInput>
                        <label for="desc">Product Description</label>
                        <input type="text" id="desc" placeholder="Enter Product's Description" onChange={e => setDesc(e.target.value)} />
                    </FormInput>

                    <FormInput>
                        <label for="qty">Quantity To Be Generated</label>
                        <input type="number" id="qty" placeholder="Enter Product's Quantity" onChange={e => setQuantity(e.target.value)} />
                    </FormInput>

                    <FormInput>
                        <label for="date">Manufacturing Date (22-04-22)</label>
                        <input type="text" id="date" placeholder="Enter Manufacturing Date" onChange={e => setDate(e.target.value)} />
                    </FormInput>
                </Fade>

                <PrimaryButton name={"Add Products"} />
            </form>
        </Container>
    )
}

export default AddProducts

const Container = styled.div`
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 100%;

    .logo{
        margin-left: 30px;
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
const Navigation = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
`

const FormInput = styled.div `

    #date{
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