import React, { Component } from 'react'
import Layout from "./components/Layout";

export class about extends Component {
  render() {
    return (
      <div>
         <Layout>
        <div>
          
          <h3>
              Welcome to my lovely todo app created using Next Js and react
          </h3>
          <h4>
            Quite Brief, i know right.
          </h4>
        </div>
      </Layout>
      </div>
    )
  }
}

export default about
