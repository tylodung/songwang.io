import "theme/global.js"
import React from "react"
import Link from "gatsby-link"
import Nav from "components/Nav.jsx"
import Footer from "components/Footer.jsx"
import { Background } from "./index.style.js"
import { BodyContainer } from "theme/containers/BodyContainer.js"

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <Background />
        <BodyContainer>
          <Nav location={this.props.location} />
          {this.props.children()}
          <Footer />
        </BodyContainer>
      </div>
    )
  }
}

export default Wrapper
