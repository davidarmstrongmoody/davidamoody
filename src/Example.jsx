import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
class App extends Component {
  render() {
    const style = {
      '@media (max-width: 500px)': {display: 'none' }
    };
    return (
      <StyleRoot>
        <div className="App">
          <h1 style={style}>GeeksforGeeks</h1>
        </div>
      </StyleRoot>
    )
  }
}
 
export default Radium(App);