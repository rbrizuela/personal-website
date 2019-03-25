import React, { Component } from "react"
import Menu from "../components/menu";
import Header from "../components/header";
import Footer from "../components/footer";

class About extends Component{
  render(){
    return(
      <div>
        <Menu/>
        <Header/>
        <h1>About me</h1>
        <p>dev desde hace mucho tiempo</p>
        <Footer/>

      </div>
    )
  }
}
export default About
