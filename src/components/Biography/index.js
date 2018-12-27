import React from "react";
import {
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";
import firebase from "firebase";

const HomePage = () => (
  <div>
    <Container text style={{ marginTop: "2em" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          src={firebase.auth().currentUser.photoURL}
          size="small"
          circular
        />
      </div>
      <Header
        as="h2"
        style={{ textAlign: "center", fontSize: 14, fontWeight: "bold" }}
      >
        Frontend Developer &nbsp;
        <p>HTML - CSS | React | React Native | Javascript</p>
      </Header>
      Hallo, my name is&nbsp;
      <span style={{ fontWeight: "bold" }}>
        {firebase.auth().currentUser.displayName},
      </span>
      <p style={{ textAlign: "justify" }}>
        Saya lahir di Jakarta, 30 Juni 1992. Pendidikan terakhir yaitu sarjana
        teknik informatika di universitas jakarta. Bekerja sebagai developer
        tidaklah mudah, saya membutuhkan waktu untuk belajar menjadi developer
        yang handal. Saya juga ikut komunitas beberapa programmer di indonesia.
        salah satunya, yaitu mengikuti bootscamp programming javascript didaerah
        pondok indah (Hacktiv8). Cukup sekian perkenalan dari saya, semoga
        membawa dampak positif yang lebih baik.
      </p>
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: "2em 0em 0em", padding: "2em 0em" }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="Contact Us" />
            <List>
              <List.Item>
                <List.Icon name="users" />
                <List.Content>Hary Nugraha Putra</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>Bekasi, BKS</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <a href="mailto:harynugrahaputra@gmail.com">
                    harynugrahaputra@gmail.com
                  </a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content>
                  <a href="https://github.com/harynp">harynp</a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={12}>
            <Header inverted as="h4" content="Footer Header" />
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default HomePage;
