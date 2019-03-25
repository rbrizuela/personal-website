import React, { Component } from "react"
import Menu from "../components/menu";
import Header from "../components/header";
import Footer from "../components/footer";

class Contact extends Component{
  render(){
    return(
      <div>
        <Menu/>
        <Header/>

        <h1>formulario de contacto</h1>
        <h2>construir un form y enviar mail</h2>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
        <Footer/>

      </div>
    )
  }
}
export default Contact