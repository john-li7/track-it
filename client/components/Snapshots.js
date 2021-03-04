import React, { Component } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { DefaultTooltipContent } from 'recharts/lib/component/DefaultTooltipContent';

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

    // add time property on each object
    snapshots.forEach((doc) => {
      const time = new Date(doc.date).getTime();
      doc.time = time;
      doc.formattedDate = new Date(doc.date).toLocaleDateString();
    });

    // sort objects by time
    snapshots.sort((a, b) => {
      if (a.time < b.time) return -1;
      if (a.time > b.time) return 1;
      return 0;
    });
    console.log(snapshots);

    //custom tooltip
    const CustomToolTipContent = (props) => {
      // console.log(props);
      if (props.payload[0] != null) {
        const newPayload = [
          { name: 'Date', value: props.payload[0].payload.formattedDate },
          { name: 'Total Assets', value: props.payload[0].payload.totalAssets },
          {
            name: 'Total Liabilities',
            value: props.payload[0].payload.totalLiabilities,
          },
          {
            name: 'Net Worth',
            value: props.payload[0].payload.netWorth,
            color: '#8884d8',
          },
          // ...props.payload,
        ];
        return (
          <DefaultTooltipContent {...props} payload={newPayload} label="" />
        );
      }
      return <DefaultTooltipContent {...props} />;
    };

    const renderLineChart = (
      <LineChart width={800} height={400} data={snapshots}>
        <Line type="monotone" dataKey="netWorth" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <Tooltip content={<CustomToolTipContent />} />
        <XAxis
          dataKey="time"
          type="number"
          domain={['auto', 'auto']}
          tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()}
        />
        <YAxis />
      </LineChart>
    );
    return (
      <div>
        <p>Your journey to date, keep up the great work!</p>
        <div className="snapshotContainer">{renderLineChart}</div>
      </div>
    );
  }
}

export default Snapshots;
