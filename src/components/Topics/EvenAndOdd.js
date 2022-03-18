import React from "react";

class EvenAndOdds extends React.Component {
  state = { evenArray: [], oddArray: [], userInput: `` };

  seperateNumbers = () => {
    const numbers = this.state.userInput.split(`,`);
    this.setState({ evenArray: numbers.filter((ele) => ele % 2 === 0) });
    this.setState({ oddArray: numbers.filter((ele) => ele % 2 !== 0) });
  };

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          type="text"
          onChange={(event) => this.setState({ userInput: event.target.value })}
        />
        <button onClick={this.seperateNumbers} className="confirmationButton">
          Submit
        </button>
        <span className="resultsBox">
          Evens: {this.state.evenArray.join(` `)}
        </span>
        <span className="resultsBox">
          Odds: {this.state.oddArray.join(` `)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdds;
