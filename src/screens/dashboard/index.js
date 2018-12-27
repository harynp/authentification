import React, { Component } from "react";
import Header from "../../components/Header";
import Biography from "../../components/Biography";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Biography />
      </div>
    );
  }
}

export default Dashboard;
