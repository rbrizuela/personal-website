import React, { Component } from "react"
import Layout from "../components/layout";
import './index.css'

class Home extends Component {
  render(){
    return(
      <Layout>
        <div className='about'>
          <h4>Hi, I'm Roberto Brizuela, software developer, father of 3 children and married to a great woman.</h4>
          <h4>I was born, I grew up and I currently live in my city: Cipolletti RN</h4>
          <h4>When I finished secondary school I did not know what to study if architecture or information technology,
             fortunately I decided for the second, although the 2 have much in common: plan and build</h4>
          <h4>Over time I discovered that every program, solution, application that I created gave me great satisfaction to see it
             working and that users can use my creations and that they are useful.</h4>
          <h4></h4>
          <h4></h4>
        </div>
      </Layout>
    )
  }
}

export default Home