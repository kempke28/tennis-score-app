import React from 'react';
import * as ROUTES from './routes/routes.js';
import { Routes, Route } from 'react-router-dom';
import { Background } from './components';

import { SelectGame, Score, History, Home } from './pages/index';
import GlobalStyle from './globalstyle/globalStyle';

export default function App() {
  return (
    <GlobalStyle>
      <Background />
      <div style={{ display: 'flex' }}>
        <Routes>
          <Route path={ROUTES.Home} element={<Home />} />
          <Route path={ROUTES.Score} element={<Score />} />
          <Route path={ROUTES.SelectGame} element={<SelectGame />} />
          <Route path={ROUTES.History} element={<History />} />
        </Routes>
      </div>
    </GlobalStyle>
  );
}
