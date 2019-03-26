import React, { Component } from "react"
import './footer.css'
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
	render() {
		return (
			<div>
				<div className='list-icons'>
					<div className='icon'><SocialIcon url="mailto:robertojosebrizuela@gmail.com"/></div>
					<div className='icon'><SocialIcon url="http://twitter.com/brizucipo"/></div>
					<div className='icon'><SocialIcon url="https://github.com/rbrizuela"/></div>
					<div className='icon'><SocialIcon url="https://linkedin.com/in/roberto-jose-brizuela"/></div>
				</div>
				<div className="">
					<p className="">© 2019 Roberto Brizuela</p>
				</div>
			</div>
		)
	}
}



export default Footer