import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        names: ['JAKE', 'AMY', 'GINA', 'ROSA', 'CHARLES', 'TERRY', 'HOLT'],
        targetName: "",
        guessRemain: 10,
        lettersGuessed: ""
    }

    componentDidMount() {
        let targetName = this.state.names[Math.floor(Math.random()*this.state.names.length)];
            this.setState({
                targetName: targetName.replace(/[a-zA-Z]/gi , '-').toUpperCase(),
                // The flags 'g' and 'i' are for global search and case insensitive search
            });
            console.log(targetName);
    }

    // onKeyUp

  render() {
    return (
      <div className="App">

        <div>
            You will be seen by:
            <br></br>
            {this.state.targetName}
        </div>

      </div>
    );
  }
}

export default App;
