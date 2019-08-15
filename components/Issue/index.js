import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

class Issue extends Component {

  static getInitialProps = async ({ req }) => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { issues: json.open_issues_count }
  }

  render() {
    return (
      <div className="issue-container">
        <h1 className="error">Component Open issue</h1>
        <h3 className="error">Number of open issue: { this.props.issues } </h3>
      </div>
    )
  }
}

export default Issue
