import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        names: ['JAKE', 'AMY', 'GINA', 'ROSA', 'CHARLES', 'TERRY', 'HOLT'],
        targetName: "",
        targetNameDashes: "",
        guessRemain: 10,
        lettersGuessed: []
    }

    componentDidMount() {
        let targetName = this.state.names[Math.floor(Math.random()*this.state.names.length)];
            this.setState({
                targetName: targetName,
                targetNameDashes: targetName.replace(/[a-zA-Z]/gi , '-').toUpperCase(),
                // The flags 'g' and 'i' are for global search and case insensitive search
            });
            console.log(targetName);
    }

    onKeyUp = (event) => {
        event.preventDefault();
        let letter = event.key.toUpperCase();
        let targetName = this.state.targetName;
        let guessRemain = this.state.guessRemain;
        let lettersGuessed = this.state.lettersGuessed;

        if (letter) {
            this.setState({
                guessRemain: guessRemain - 1,
                lettersGuessed: lettersGuessed + letter
            });
            // if letter is in targetName, replace dash with letter
            if (targetName.includes(letter)) {
                console.log("yup");
                let targetNameDashes = this.state.targetNameDashes;
                // temporary variable that contains dashes and letters?
                this.setState({
                    targetNameDashes: targetNameDashes.replace(/-/gi, letter).toUpperCase(),
                });
            }
        }
        if (guessRemain === 0) {
            console.log("too bad");
            this.setState({
                guessRemain: 10,
                lettersGuessed: []
            });
            this.componentDidMount();
        }
        console.log(`${letter} end of onKeyUp`);
    }


  render() {
    return (
      <div className="App">

        <div>
            You will be seen by:
            <br></br>
            {this.state.targetNameDashes}

        </div>

        <br></br>

        <div>
            Letters guessed:
            <br></br>
            <input onKeyUp={this.onKeyUp} />
            <br></br>
            Letters guessed in this round:
            <br></br> 
            [ {this.state.lettersGuessed} ]
        </div>

        <br></br>

        <div>
            Guesses remaining:
            <br></br>
            {this.state.guessRemain}
        </div>

      </div>
    );
  }
}

export default App;
