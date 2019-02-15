import React from "react";
import logo from "./images/b99_logo.png";
import "./App.css";

// moved it outside state
const names = ["JAKE", "AMY", "GINA", "ROSA", "CHARLES", "TERRY", "HOLT"];

class App extends React.Component {
  state = {
    targetName: "",
    targetNameDashes: "",
    guessRemain: 10,
    lettersGuessed: []
  };

  // utility extracted from componentDidMount
  // so that it can be re-used later
  resetGame = () => {
    let targetName = names[Math.floor(Math.random() * names.length)];
    console.log(targetName);
    this.setState({
      guessRemain: 10,
      lettersGuessed: [],
      targetName: targetName,
      targetNameDashes: new Array(targetName.length).fill("-").join("") // fill an array with hyphens
    });
  };

  componentDidMount() {
    // call the utility
    this.resetGame();
  }

  onKeyUp = event => {
    event.preventDefault();
    let letter = event.key.toUpperCase();

    // TODO: provide more logic to avoid bad key strokes
    // for example backspace should not count

    if (letter) {
      this.setState(
        prevState => {
          let modifiedNameDashes = String(prevState.targetNameDashes);

          // for each character of targetName
          for (var i = 0; i < prevState.targetName.length; i++) {
            // check if this character at index i matched the key
            if (prevState.targetName[i] === letter) {
              // if it does
              // remove a hyphen from modifiedNameDashes at that exact index
              modifiedNameDashes =
                modifiedNameDashes.substr(0, i) +
                letter +
                modifiedNameDashes.substr(i + 1);
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

            <div>
            You will be seen by:
            <br />
            {this.state.targetNameDashes}
            </div>

            <br />

            <div>
            Letters guessed:
            <br />
            <input onKeyUp={this.onKeyUp} />
            <br />
            Letters guessed in this round:
            <br />[ {this.state.lettersGuessed} ]
            </div>

            <br />

            <div>
            Guesses remaining:
            <br />
            {this.state.guessRemain}
            </div>

            {/* <code>{JSON.stringify(this.state)}</code> */}

        </div>

      </div>
    );
  }
}

export default App;
