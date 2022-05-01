import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AddManufacturer from "./pages/AddManufacturer";
import Dashboard from "./pages/Dashboard";
import AddProducts from "./pages/AddProducts";
import Search from "./pages/Search";
import {ContextProvider} from "./AppContext";
import Contract from "./blockchain/Handel";
import Web3 from "web3"

function App() {

  const [web3, setWeb3] = useState()
    const [address, setAddress] = useState()
    const [contract, setContract] = useState()

    useEffect(() => {
        
        const loadProvider = async() => {
            if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
                try{
                    const web3 = new Web3(window.ethereum)
                    setWeb3(web3)

                    // set Address
                    const accounts = await web3.eth.getAccounts()
                    setAddress(accounts[0])

                    // handle account and chain changes
                    window.ethereum.on("accountsChanged", accounts => window.location.reload())
                    window.ethereum.on("chainChanged", accounts => window.location.reload())

                    // create local copy of contract
                    const contract = Contract(web3)
                    setContract(contract)
                }
                catch(err){
                    alert(err.message)
                }
            }
            else{
                alert("Please Install Metamask")
            }
        }

        loadProvider()

    }, [])

  return (
    <ContextProvider.Provider value={{address: address, contract: contract}} >
      <Router>
        <div className="App">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-manufacturer" element={<AddManufacturer />} />
            <Route path="/add-products" element={<AddProducts />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<Search />} />
          </Routes>

        </div>
      </Router>
    </ContextProvider.Provider>
  );
}


export default App;
