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

  saveSnapshot() {
    console.log('saveSnapshot fired ');
    const date = document.getElementById('date').value;
    const checkings = document.getElementById('checkings').value;
    const savings = document.getElementById('savings').value;
    const brokerage = document.getElementById('brokerage').value;
    const ra401k = document.getElementById('ra401k').value;
    const rothIRA = document.getElementById('rothIRA').value;
    const ccDebt = document.getElementById('ccDebt').value;
    const homeMortgage = document.getElementById('homeMortgage').value;
    const carLoans = document.getElementById('carLoans').value;
    const studentLoans = document.getElementById('studentLoans').value;
    const body = {
      date: date,
      checkings: Number(checkings),
      savings: Number(savings),
      brokerage: Number(brokerage),
      ra401k: Number(ra401k),
      rothIRA: Number(rothIRA),
      ccDebt: Number(ccDebt),
      homeMortgage: Number(homeMortgage),
      carLoans: Number(carLoans),
      studentLoans: Number(studentLoans),
    };
    console.log(body);
    fetch('/snapshots', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data: ', data);
        this.setState({ latestSnapshot: { data }, newSnapshot: true });
      })
      .then(() => {
        console.log(this.state);
      })
      .catch((err) =>
        console.log('Create snapshot fetch /snapshots: ERROR: ', err)
      );

    // this.setState((prevState) => {
    //   newSnapshot=
    // });
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
                saveSnapshot={this.saveSnapshot}
                newSnapshot={this.state.newSnapshot}
                latestSnapshot={this.state.latestSnapshot}
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
