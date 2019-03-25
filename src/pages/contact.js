import React, { Component } from "react"
import Header from "../components/header";

class Contact extends Component{
  render(){
    return(
      <div>
        <Header/>
        <h1>I'd love to talk! Email me at the address below</h1>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
      </div>
    )
  }
}
export default Contact