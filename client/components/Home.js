import React, { Component } from 'react';
import Link from 'react-router-dom';
import Form from './Form';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    // console.log('home snapshot', this.props);
    return (
      <div>
        <p>Welcome back, John!</p>
        <Form
          saveSnapshot={this.props.saveSnapshot}
          newSnapshot={this.props.newSnapshot}
        />
        <SnapshotCard
          newSnapshot={this.props.newSnapshot}
          latestSnapshot={this.props.latestSnapshot}
        />
      </div>
    );
  }
}

export default Home;

class SnapshotCard extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    console.log('newSnapshot: ', this.props.newSnapshot);
    console.log('latestSnap', this.props.latestSnapshot);

    if (!this.props.newSnapshot) {
      return <div></div>;
    } else {
      let date = this.props.latestSnapshot.data.date;
      date = new Date(date).toLocaleDateString();
      return (
        <div className="card">
          <h5>Latest Snapshot added!</h5>
          {/* <p>Date: {date}</p> */}
          <p>Total Assets: {this.props.latestSnapshot.data.totalAssets}</p>
          <p>
            Total Liabilities: {this.props.latestSnapshot.data.totalLiabilities}
          </p>
          <div className="nw">
            Net Worth: {this.props.latestSnapshot.data.netWorth}
          </div>
        </div>
      );
    }
  }
}
