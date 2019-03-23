import React, { Component } from "react";
import Layout from "./components/Layout";
import Todo from "./components/Todo";
import Header from "./components/Header";

export class index extends Component {
  render() {
    return (
      <div>
        <Layout>
          <div>
            <Header />
            <p className="lead" style={paragraph}>
              Add your chores, tick if its completed and delete if you are
              finished
            </p>
            <div className="mb-4">
              <Todo />
            </div>
          </div>
        </Layout>
      </div>
    );
    const paragraph = {
      fontSize: "14px",
      padding: "5px"
    };
  }
}

export default index;
