import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import Head from 'next/head'
import Nav from 'components/Nav'

import Dog from 'assets/images/dog.png'
import { increaseNumber } from 'actions'

class Home extends Component {
  render() {
    const { number } = this.props;
    return (
      <div className="homepage-container">
        <Head>
          <title>Home</title>
        </Head>

        <Nav />

        <div className='hero'>
          <h1 className='title'>Welcome to Next.js!</h1>
          <p className='description'>
            To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
          <div>
            <h3>test redux</h3>
            <div>
              Number {number}
              <button onClick={this.props.increaseNumber}>Click to increase number</button>
            </div>
          </div>
          <img src={Dog} alt="" />
          <div className="scss-image" style={{ width: 200, height: 200 }}></div>

          <div className='row'>
            <Link href='https://github.com/zeit/next.js#getting-started'>
              <a className='card'>
                <h3>Getting Started &rarr;</h3>
                <p>Learn more about Next.js on GitHub and in their examples</p>
              </a>
            </Link>
            <Link href='https://github.com/zeit/next.js/tree/master/examples'>
              <a className='card'>
                <h3>Examples &rarr;</h3>
                <p>Find other example boilerplates on the Next.js GitHub</p>
              </a>
            </Link>
            <Link href='https://github.com/zeit/next.js'>
              <a className='card'>
                <h3>Create Next App &rarr;</h3>
                <p>Was this tool helpful? Let us know how we can improve it!</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({
  Example: { number }
}) => ({
  number
})

const mapActionToProps = {
  increaseNumber
}

export default connect(mapStateToProps, mapActionToProps)(Home)
