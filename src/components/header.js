import React, { Component } from "react"
import './header.css'

class Header extends Component {
	render() {
		return (
			<div className='header'>
        <div className='imagen-container'>
          <img 
            className='imagen'
            src={require('../assets/perfil-transparent.png')} 
            alt='Roberto Brizuela'
          />
        </div>
        <div className='text-container'>
          <h1 className='text-name'>ROBERTO BRIZUELA</h1>
          <p className='text-profesion'>Software Developer</p>
        </div>
			</div>
		)
	}
}

export default Header