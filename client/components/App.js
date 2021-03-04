import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Snapshots from './Snapshots';

import styles from '../scss/application.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snapshots: [],
    };
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <span> </span>
            <Link to="/snapshots">Snapshots</Link>
          </nav>

          <Switch>
            <Route path="/snapshots">
              <Snapshots snapshots={this.state.snapshots} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <p>Welcome back, John!</p>
//         <Form />
//       </div>
//     );
//   }
// }

export default App;
