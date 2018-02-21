import React, { Component } from 'react';
import routes from '../routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
        </div>
        <div>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
