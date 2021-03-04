import React from 'react';
import Form from './Form';

const Home = (props) => (
  <div>
    <p>Welcome back, John!</p>
    <Form saveSnapshot={props.saveSnapshot} newSnapshot={props.newSnapshot} />
  </div>
);

export default Home;
