import React from "react";
import logo from "./images/b99_logo.png";
import "./App.css";
import Reward from "./Reward/Reward";

// moved it outside state
// these do not change. do not need to be in state. state for things that change
const names = ["JAKE", "AMY", "GINA", "ROSA", "CHARLES", "TERRY", "HOLT"];

class App extends React.Component {
  state = {
    targetName: "",
    targetNameDashes: "",
    guessRemain: 10,
    lettersGuessed: []
  };

  // utility extracted from componentDidMount
  // so that it can be re-used later, rather than reloading entire component
  resetGame = () => {
    let targetName = names[Math.floor(Math.random() * names.length)];
    console.log(targetName);
    this.setState({
      guessRemain: 10,
      lettersGuessed: [],
      targetName: targetName,
      targetNameDashes: new Array(targetName.length).fill("-").join("") // create new array containing the letters in targetName. fill array with hyphens
    });
  };

  componentDidMount() {
    // call the utility
    this.resetGame();
  }

  onKeyUp = (event) => {
    event.preventDefault();
    let letter = event.key.toUpperCase();

    // TODO: provide more logic to avoid bad key strokes
    // for example backspace should not count

    if (letter) {
      this.setState(
        prevState => {
          let modifiedNameDashes = String(prevState.targetNameDashes);
            // String allows location of substrings within strings

          // for each character of targetName
          for (var i = 0; i < prevState.targetName.length; i++) {
            // check if this character at index i matched the key
            if (prevState.targetName[i] === letter) {
              // if it does
              // remove a hyphen from modifiedNameDashes at that exact index
              modifiedNameDashes = modifiedNameDashes.substr(0, i) + letter + modifiedNameDashes.substr(i + 1);
            }
          }
          return {
            targetNameDashes: modifiedNameDashes,
            guessRemain: prevState.guessRemain - 1,
            lettersGuessed: [...prevState.lettersGuessed, letter]
          };
        },
        // callback after the state update is done
        () => {
          // won
          if (this.state.targetNameDashes === this.state.targetName) {
            console.log("Nice!");
            // need a reward!
          }
          // lost
          if (this.state.guessRemain === 0) {
            this.resetGame();
          }
        }
      );
    }
  };


  render() {
    return (
      <div className="App">

        <div className="masterDiv"> 

            <div className="logoDiv">
                <img src={logo} alt="logo" id="logo"/>
            </div>

            <div className="introDiv">
                You walk into the 99th Precinct and ask for help.
            </div>

            <div className="nameDiv">
                Guess who's been assigned to your case:
                <br />
                {this.state.targetNameDashes}
            </div>

            <div className="guessedDiv">
                Letters guessed:
                <br />
                <input onKeyUp={this.onKeyUp} />
                <br />
                Letters guessed in this round:
                <br /> [ {this.state.lettersGuessed} ]
            </div>

            <div className="remainDiv">
                Guesses remaining:
                <br />
                {this.state.guessRemain}
            </div>

            <div className="resultDiv">
                <hr></hr>

                <Reward 
                    targetName={this.state.targetName}
                />
            </div>

            {/* <code>{JSON.stringify(this.state)}</code> */}

        </div>

      </div>
    );
  }
}

export default App;
