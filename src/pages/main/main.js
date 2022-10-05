import React from 'react';
import { Button } from '../../components';
import { Link } from 'react-router-dom';
import './styles/style.css';

import * as ROUTES from '../../routes/routes.js';

export default function Main() {
  return (
    <div className="buttonContainer">
      <div className="mainButtons">
        <Link to={ROUTES.Score}>
          <Button>Continue Match</Button>
        </Link>
      </div>
      <div className="mainButtons">
        <Link to={ROUTES.SelectGame}>
          <Button>New Match</Button>
        </Link>
      </div>
      <div className="mainButtons">
        <Link to={ROUTES.History}>
          <Button>Match History</Button>
        </Link>
      </div>
    </div>
  );
}
