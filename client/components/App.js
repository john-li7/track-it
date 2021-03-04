import React, { Component } from 'react';
import Form from './Form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import styles from '../scss/application.scss';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/snapshots">Snapshots</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/snapshots">
            <Snapshots />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <p>Welcome back, John!</p>
      <Form />
    </div>
  );
}

function Snapshots() {
  return (
    <div>
      <p>See below your snapshots to date, keep up the great work!</p>
    </div>
  );
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
