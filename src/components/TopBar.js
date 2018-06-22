import React from "react";
import { Grid, Header } from "semantic-ui-react";

const styles = {
	fontSize: "22px",
	margin: "12px 0"
};

const TopBar = props => (
	<Grid.Row
		as="div"
		centered
		verticalAlign={"middle"}
		color={"purple"}
	>

		<Grid.Column width={5} textAlign={"center"}>
			<Header inverted as={"h2"} style={styles} textAlign={"center"}>
				Clicky Game
			</Header>
		</Grid.Column>

		<Grid.Column width={5} textAlign={"center"}>
			<Header inverted as={"h2"} style={styles} textAlign={"center"}>
				{props.score ? ("You Guessed Correctly") : ("Click Image To Start Game")}
			</Header>
		</Grid.Column>

		<Grid.Column width={5} textAlign={"center"}>
			<Header inverted as={"h2"} style={styles} textAlign={"center"}>
				Current Score: {props.score} Top Score: {props.topScore}
			</Header>
		</Grid.Column>
	</Grid.Row>

);

export default TopBar;