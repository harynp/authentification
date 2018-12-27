import React, { Component } from "react";
import { Menu, Icon, Label } from "semantic-ui-react";
import firebase from "firebase";
import styled from "styled-components";

const PhotoUser = styled.img`
  border-radius: 100em;
  opacity: 0.5;
  border-top: 2px solid #cf2031;
  border-right: 2px solid #0f7dc8;
  border-bottom: 2px solid #2eb31a;
  border-left: 2px solid #eab823;
  width: 30px;
  height: 30px;
`;

const ContainerHeader = styled.div`
  background: #40e0d0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff0080,
    #ff8c00,
    #40e0d0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff0080,
    #ff8c00,
    #40e0d0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export default class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <ContainerHeader>
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right">
            <Menu.Menu style={{ margin: 5 }}>
              <Label size="large" style={{ backgroundColor: "transparent" }}>
                <Icon style={{ margin: 0 }} name="mail" /> 99
              </Label>
            </Menu.Menu>
            <Menu.Item
              name={`Welcome, ${firebase.auth().currentUser.displayName}`}
            />
            <PhotoUser
              style={{ marginTop: 5 }}
              src={firebase.auth().currentUser.photoURL}
            />
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={() => firebase.auth().signOut()}
            />
          </Menu.Menu>
        </Menu>
      </ContainerHeader>
    );
  }
}
