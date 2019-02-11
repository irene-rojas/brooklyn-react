import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        names: ['JAKE', 'AMY', 'GINA', 'ROSA', 'CHARLES', 'TERRY', 'HOLT'],
        targetName: "",
        remainGuess: ""
    }

    componentDidMount() {
        let targetName = this.state.names[Math.floor(Math.random()*this.state.names.length)];
            this.setState({
                targetName: targetName,
            });
            console.log(targetName);
    }

  render() {
    return (
      <div className="App">


      </div>
    );
  }
}

export default App;
