import React from 'react';
import { Background, Button } from '../components';
import { Link } from 'react-router-dom';

import * as ROUTES from '../routes/routes.js';

export default function Main() {
  return (
    <Background>
      <div>
        <Button>Continue Match</Button>
        <Link to={ROUTES.Score}></Link>
      </div>
      <div>
        <Button>New Match</Button>
        <Link to={ROUTES.Score}></Link>
      </div>
      <div>
        <Button>Match History</Button>
        <Link to={ROUTES.History}></Link>
      </div>
    </Background>
  );
}
