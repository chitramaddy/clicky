import React, { Component } from "react";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import GameCards from "../components/GameCards";

import { Grid } from "semantic-ui-react";

import friendData from "../data/friendData.json";

class Game extends Component {
	state = {
		friendData: friendData,
		score: 0,
		topScore: 0
	}

	componentDidMount() {
		this.setState({
			friendData: this.shuffleFriends(this.state.friendData)
		})
	}

	//shuffle friend list and return new array
	shuffleFriends = friendData => {
		const shuffledFriendsList = friendData.sort(() => (0.5 - Math.random()));
		return shuffledFriendsList;
	}

	handleCardClick = id => {
		let guessedCorrectly = false;
		const newFriendList = this.state.friendData.map(friend => {
			if (friend.id === id) {
				if (!friend.clicked) {
					friend.clicked = true;
					guessedCorrectly = true;
				}
			}

			return friend;
		});

		(guessedCorrectly)
			?
			this.handleCorrectGuess(newFriendList)
			:
			this.handleIncorrectGuess(newFriendList)
	}

	handleCorrectGuess = newFriendList => {

		const { score, topScore } = this.state;

		const newScore = score + 1;

		const newTopScore = (newScore > topScore) ? newScore : topScore;

		this.setState({
			friendData: this.shuffleFriends(newFriendList),
			score: newScore,
			topScore: newTopScore
		})

	}

	handleCorrectGuess = newFriendList => {
		const resetFriendsList = newFriendList.map(friend => {
			friend.clicked = false
			return friend;
		})

		this.setState({
			friendData: this.shuffleFriends(resetFriendsList),
			score: 0
		});

	}

	render() {
		return (
			<Grid centered padded>
				<TopBar score={this.state.score} topScore={this.state.topScore} />
				<Hero />
				<GameCards score={this.state.score} friendData={this.state.friendData}
					handleCardClick={this.handleCardClick} />
			</Grid>
		)
	}

}

export default Game;