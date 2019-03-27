import React, { Component } from "react"
import './footer.css'
import { SocialIcon } from 'react-social-icons';

const size = { height: 35, width: 35 }

class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='list-icons'>
					<div className='icon'><SocialIcon url="mailto:robertojosebrizuela@gmail.com" style={size}/></div>
					<div className='icon'><SocialIcon url="http://twitter.com/brizucipo" style={size}/></div>
					<div className='icon'><SocialIcon url="https://github.com/rbrizuela" style={size}/></div>
					<div className='icon'><SocialIcon url="https://linkedin.com/in/roberto-jose-brizuela" style={size}/></div>
				</div>
				<div className="copyrigth">
					<p className="">© 2019 Roberto Brizuela</p>
				</div>
			</div>
		)
	}
}

export default Footer