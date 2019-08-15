import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Nav from 'components/Nav'
import Issue from 'components/Issue';


class Product extends Component {

  static getInitialProps = async ({ req }) => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render() {
    return (
      <div className="product-container">
        <Head>
          <title>Product</title>
        </Head>
        <Nav />
        <h1 className="error">Product Page</h1>
        <h3 className="error">Number of stars: {this.props.stars} </h3>
        {/* issue still can not fetch, will findout way */}
        <Issue />
      </div>
    )
  }
}

export default Product
