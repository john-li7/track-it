import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Snapshots from './Snapshots';

import styles from '../scss/application.scss';

function App() {
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
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
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
