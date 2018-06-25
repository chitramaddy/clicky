import React from "react";
import { Grid, Header } from "semantic-ui-react";

const styles = {
  background: "url('./assets/images/spring.png') repeat",
  backgroundBlendMode: "multiply"
}

const Hero = () => (
  <Grid.Row color={"pink"} style={styles} verticalAlign={"middle"} centered>
    <Grid.Column width={12} textAlign={"center"} style={{ margin: "50px 0" }}>
      <Header inverted as={"h1"} style={{ fontSize: "50px" }}>Clicky Game!</Header>

      <Header sub inverted style={{ fontSize: "24px" }}>Click on an image to earn points, but don't click on any more than once!</Header>


    </Grid.Column>
  </Grid.Row>
);

export default Hero;