import React, { Component } from "react"
import Layout from "../components/layout";

class Contact extends Component{
  render(){
    return(
      <Layout>
        <h1>formulario de contacto</h1>
        <h2>construir un form y enviar mail</h2>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
      </Layout>
    )
  }
}

export default Contact