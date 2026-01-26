import React from 'react';
import { Link } from 'react-router';
import './breakpoints.scss';

function Breakpoints(): React.ReactElement {
  return (
    <div className="breakpoints">
      <p>Breakpoints Page</p>
      <Link to="/">Jump To Home Page</Link>
    </div>
  );
}

export default Breakpoints;
