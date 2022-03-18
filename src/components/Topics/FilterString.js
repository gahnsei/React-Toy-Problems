import React from "react";

class FilterString extends React.Component {
  state = {
    unFilteredArray: [
      "James",
      "Jessica",
      "Melody",
      "Tyler",
      "Blake",
      "Jennifer",
      "Mark",
      "Maddy"
    ],
    userInput: ``,
    filterdArray: []
  };

  solveProblem = () => {
    this.setState({
      filterdArray: this.state.unFilteredArray.filter((ele) => {
        return ele === this.state.userInput;
      })
    });
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          {this.state.unFilteredArray.join(`, `)}
        </span>
        <input
          type="text"
          className="inputLine"
          onChange={(event) => this.setState({ userInput: event.target.value })}
        />
        <button className="confirmationButton" onClick={this.solveProblem}>
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {this.state.filterdArray}
        </span>
      </div>
    );
  }
}

export default FilterString;
