import React, { Component } from "react";
import { Button, Divider, Segment } from "semantic-ui-react";

export default class MainPage extends Component {
  render() {
    return (
      <Segment padded>
        <Button primary fluid>
          Login
        </Button>
        <Divider horizontal>Or</Divider>
        <Button secondary fluid>
          Sign Up Now
        </Button>
      </Segment>
    );
  }
}
