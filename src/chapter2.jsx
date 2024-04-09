//main.jsx
import './index.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Chapter2 from './chapter2/Chapter2';
import Chat from './chapter2/Chat';

import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import ResetScrollWrapper from './common/ResetScrollWrapper';
import withCover from './common/withCover';

const Main = withCover(Chapter2, '/chapter2/ascii.jpg');

const App = () => {
  const location = useLocation();
  return (
          <Routes location={location} key={location.pathname}>
              <Route index element={<Main />} />
              <Route path="chat" element={<Chat />} />
          </Routes>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ResetScrollWrapper>
        <Routes>
          <Route path='/*' element={<App/>} />
        </Routes>
      </ResetScrollWrapper>
      </HashRouter>
  </React.StrictMode>,
)
