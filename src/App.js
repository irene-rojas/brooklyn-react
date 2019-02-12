import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        names: ['JAKE', 'AMY', 'GINA', 'ROSA', 'CHARLES', 'TERRY', 'HOLT'],
        targetName: "",
        guessRemain: 10,
        lettersGuessed: []
    }

    componentDidMount() {
        let targetName = this.state.names[Math.floor(Math.random()*this.state.names.length)];
            this.setState({
                targetName: targetName.replace(/[a-zA-Z]/gi , '-').toUpperCase(),
                // The flags 'g' and 'i' are for global search and case insensitive search
            });
            console.log(targetName);
    }

    onKeyUp = (event) => {
        event.preventDefault();
        let targetName = this.state.targetName;
        let letter = event.key;

        if (letter) {
            this.setState({
                guessRemain: this.state.guessRemain - 1,
            });
            // if letter is in targetName, replace dash with letter
            
        }
        if (this.state.guessRemain === 0) {
            console.log("too bad");
            this.setState({
                guessRemain: 10
            });
            this.componentDidMount();
        }
        console.log(letter);
    }


  render() {
    return (
      <div className="App">

        <div>
            You will be seen by:
            <br></br>
            {this.state.targetName}
        </div>

        <div>
            Letters guessed:
            <br></br>
            <input onKeyUp={this.onKeyUp} />
        </div>

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
