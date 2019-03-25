import React, { Component } from "react"
import Menu from "../components/menu"
import Header from "../components/header";
import Footer from "../components/footer";

class Home extends Component {
  render(){
    return(
      <div>
        <Menu/>
        <Header/>

        <h1>Este es mi sitio personal </h1>
        <p>aca debo completar con mas info</p>
        <Footer/>
      </div>
    )
  }
}

export default Home