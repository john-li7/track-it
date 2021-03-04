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
      newSnapshot: false,
      latestSnapshot: {},
    };
    this.saveSnapshot = this.saveSnapshot.bind(this);
  }

  saveSnapshot(submitData) {
    console.log('saveSnapshot fired ', submitData);
    this.setState((prevState) => {
      return { newSnapshot: true };
    });
  }

  // componentDidMount() {
  //   console.log('componentDidMount fired');
  //   console.log('this.state.newSnapshot ', this.state.newSnapshot);
  //   if (this.state.newSnapshot) {
  //     fetch('/snapshots')
  //       .then((res) => res.json())
  //       .then((snapshots) => {
  //         if (!Array.isArray(snapshots)) snapshots = [];
  //         return this.setState({
  //           snapshots,
  //         });
  //       })
  //       .catch((err) =>
  //         console.log(
  //           'Snapshots.componentDidMount: get snapshots: ERROR: ',
  //           err
  //         )
  //       );
  //   }
  // }

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
              <Snapshots />
            </Route>
            <Route path="/">
              <Home
                displaySnapshot={this.displaySnapshot}
                newSnapshot={this.newSnapshot}
              />
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
