import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/404/index.jsx';
import Home from './pages/Home';

const App = () => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
