import React from "react";

class FilterObject extends React.Component {
  state = {
    unfilterdArray: [
      { name: "Jimmy Joe", title: "Hack0r", age: 12 },
      { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
      { name: "Carly Armstrong", title: "CEO" }
    ],
    userInput: ``,
    filteredArray: []
  };

  filterOutput = () => {
    this.setState({
      filteredArray: this.state.unfilterdArray.filter((ele) => {
        return ele.hasOwnProperty(this.state.userInput);
      })
    });
  };

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unfilterdArray)}
        </span>
        <input
          type="text"
          className="inputLine"
          onChange={(event) => this.setState({ userInput: event.target.value })}
        />
        <button className="confirmationButton" onClick={this.filterOutput}>
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
