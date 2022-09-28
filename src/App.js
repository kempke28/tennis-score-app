import React from 'react';
import * as ROUTES from './routes/routes.js';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/main';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.Home} element={<Main />} />
      </Routes>
    </div>
  );
}
