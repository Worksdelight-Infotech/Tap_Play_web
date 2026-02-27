import { Routes, Route, Navigate } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/" element={<Navigate to="/privacy-policy" replace />} />
    </Routes>
  );
}

export default App;
