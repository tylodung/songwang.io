import 'theme/global.js'
import React from 'react'
import Link from 'gatsby-link'
import Nav from 'components/Nav'
import Footer from 'components/Footer.js'
import { Background } from './index.style.js'
import { BodyContainer } from 'theme/containers/BodyContainer.js'

import { connect } from "react-redux"

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)


const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)



class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <ConnectedCounter/ >
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
