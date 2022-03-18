import React from "react";

class Palindrome extends React.Component {
  state = {
    userInput: ``,
    palindrome: ``
  };

  solvePalindrome = () => {
    const bool =
      this.state.userInput ===
      this.state.userInput.split(``).reverse().join(``);
    this.setState({ palindrome: String(bool) });
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          type="text"
          className="inputLine"
          onChange={(event) => this.setState({ userInput: event.target.value })}
        />
        <button className="confirmationButton" onClick={this.solvePalindrome}>
          Check
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
