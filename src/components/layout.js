import React from "react"
import Menu from "../components/menu"
import Header from "../components/header";
import Footer from "../components/footer";

function Layout (props) {
  return (
    <div>
      <Menu/>
      <Header/>
        {props.children}
      <Footer/>
    </div>
  )
}

export default Layout