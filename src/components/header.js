import React, { Component } from "react"
import { Link } from "gatsby"

class Header extends Component {
	render() {
		return (
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
		)
	}
}
export default Header

