import React from "react";

class Sum extends React.Component {
  state = {
    number1: 0,
    number2: 0,
    sum: null
  };

  sumNums = () => {
    this.setState({ sum: +this.state.number1 + +this.state.number2 });
  };

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          type="text"
          className="inputLine"
          onChange={(event) => this.setState({ number1: event.target.value })}
        />
        <input
          type="text"
          className="inputLine"
          onChange={(event) => this.setState({ number2: event.target.value })}
        />
        <button className="confirmationButton" onClick={this.sumNums}>
          Add
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
