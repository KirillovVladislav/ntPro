import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';
import { Archive, Trading } from '../pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Trading />} />
            <Route path="archive" element={<Archive />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
