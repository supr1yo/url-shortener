import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import DynamicRoute from './Routing';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:uid" element={<DynamicRoute />} />
      </Routes>
    </Router>
  );
};