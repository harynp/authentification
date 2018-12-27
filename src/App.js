import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Dashboard from "../src/screens/dashboard";
require("dotenv").config();

const config = {
  apiKey: `${process.env.DATA_apiKey}`,
  authDomain: `${process.env.DATA_authDomain}`,
  databaseURL: `${process.env.DATA_databaseURL}`,
  projectId: `${process.env.DATA_projectId}`,
  storageBucket: `${process.env.DATA_storageBucket}`,
  messagingSenderId: `${process.env.DATA_messagingSenderId}`
};

firebase.initializeApp(config);

class App extends Component {
  state = {
    isSigned: false
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(userInfo => {
      this.setState({
        isSigned: !!userInfo
      });
    });
  }

  render() {
    const Logout = (
      <div>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
    return (
      <div className="App">
        {this.state.isSigned ? (
          <Dashboard />
        ) : (
          <div>
            <h1 style={{ textAlign: "center" }}>SIGN IN WITH</h1>
            {Logout}
          </div>
        )}
      </div>
    );
  }
}

export default App;
