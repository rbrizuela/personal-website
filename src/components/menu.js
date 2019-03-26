import React, { Component } from "react"
import { Link } from "gatsby"
import "./menu.css"

class Menu extends Component {
	render() {
		return (
			<div className="menu">
				<div className="item-menu" ><Link to="/">Home</Link></div>
				<div className="item-menu" ><Link to="/about">About</Link></div>
				<div className="item-menu" ><Link to="/skills">Skills</Link></div>
				<div className="item-menu" ><Link to="/life">Life</Link></div>
				<div className="item-menu" ><Link to="/proyects">Proyects</Link></div>
				<div className="item-menu" ><Link to="/contact">Contact</Link></div>
			</div>
		)
	}
}
export default Menu

