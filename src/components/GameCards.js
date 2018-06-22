import React from "react";
import { Grid, Image } from "semantic-ui-react";

import "./gameCard.css";

const GameCards = props => (
  <Grid.Row centered>
    <Grid.Column width={12}>
      <Grid centered padded>
        <Grid.Row>
          {props.friendData.map(friend => (
            <Grid.Column key={friend.id} width={4}>
              <Image
                className={`classOne classTwo ${(!props.score) ? "incorrect" : ""}`} onClick={() => props.handleCardClick(friend.id)}
                src={friend.image} bordered spaced rounded />
            </Grid.Column>
          ))
          }
        </Grid.Row>


      </Grid>
    </Grid.Column>
  </Grid.Row>
);

export default GameCards;