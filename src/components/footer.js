import React, { Component } from "react"
import './footer.css'
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
	render() {
		return (
			<div>
				<div className='footer'>
					<div className='list-icons'>
						<div className='icon'>
							<SocialIcon url="mailto:robertojosebrizuela@gmail.com"/>
						</div>
						<div className='icon'>
							<SocialIcon url="http://twitter.com/brizucipo" style={{ height: 35, width: 35 }}/>
						</div>

						<SocialIcon url="https://github.com/rbrizuela" style={{ height: 35, width: 35 }}/>
						<SocialIcon url="https://linkedin.com/in/roberto-jose-brizuela" style={{ height: 35, width: 35 }}/>
					</div>
				</div>
				<div className="">
					<p className="">© 2019 Roberto Brizuela</p>
				</div>
			</div>
		)
	}
}



export default Footer