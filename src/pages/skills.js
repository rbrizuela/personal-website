import React, { Component } from "react"
import Layout from "../components/layout";
import './skills.css'

class Skills extends Component{
  render(){
    return(
      <Layout>
        <div className="skills">
          <div className="skills-title">Skills</div>
          <div className="skills-container">
            <div className="skills-group">
              <h5>Front-end</h5>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>React Native</li>
                <li>Redux</li>
                <li>NextJS</li>
              </ul>
            </div>
            <div className="skills-group">
              <h5>Back-end</h5>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Sql Server</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="skills-group">
              <h5>Desktop</h5>
              <ul>
                <li>.NET</li>
                <li>Crystal Reports</li>
              </ul>
            </div>
            <div className="skills-group">
              <h5>Other</h5>
              <ul>
                <li>Git / GitHub</li>
                <li>Webpack</li>
                <li>JSON</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Skills