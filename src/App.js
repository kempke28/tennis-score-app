import React from 'react';
import * as ROUTES from './routes/routes.js';
import { Routes, Route } from 'react-router-dom';
import { Background } from './components';

import Main from './pages/main/main';

export default function App() {
  return (
    <div>
      <Background />
      <Routes>
        <Route path={ROUTES.Home} element={<Main />} />
      </Routes>
    </div>
  );
}
