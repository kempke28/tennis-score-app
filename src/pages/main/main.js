import React from 'react';
import { Button } from '../../components';
import { Link } from 'react-router-dom';
import './styles/style.css';

import * as ROUTES from '../../routes/routes.js';

export default function Main() {
  return (
    <div className="buttonContainer">
      <div className="matchButton">
        <Link to={ROUTES.Score}><Button>Continue Match</Button></Link>
      </div>
      <div className="matchButton">
        <Button to={ROUTES.Score}>New Match</Button>

      </div>
      <div className="matchButton">
        <Button to={ROUTES.History}>Match History</Button>
      </div>
    </div>
  );
}
