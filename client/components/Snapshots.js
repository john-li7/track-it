import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

class Snapshots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snapshots: [],
    };
  }

  componentDidMount() {
    fetch('/snapshots')
      .then((res) => res.json())
      .then((snapshots) => {
        if (!Array.isArray(snapshots)) snapshots = [];
        return this.setState({
          snapshots,
        });
      })
      .catch((err) =>
        console.log('Snapshots.componentDidMount: get snapshots: ERROR: ', err)
      );
  }

  render() {
    const list = [];
    const { snapshots } = this.state;
    console.log('snapshots ', snapshots);
    snapshots.forEach((doc) => {
      const newDate = new Date(doc.date).toDateString();
      doc.date = newDate;
    });
    console.log('snapshots ', snapshots);
    const renderLineChart = (
      <LineChart width={800} height={400} data={snapshots}>
        <Line type="monotone" dataKey="netWorth" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
      </LineChart>
    );
    return (
      <div>
        <p>See below your snapshots to date, keep up the great work!</p>
        <div className="snapshotContainer">{renderLineChart}</div>
      </div>
    );
  }
}

export default Snapshots;
