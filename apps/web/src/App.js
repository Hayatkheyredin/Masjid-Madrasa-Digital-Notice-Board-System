import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Announcements from './pages/Announcements';
import AnnouncementDetail from './pages/AnnouncementDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Announcements />} />
            <Route path="/announcement/:announcementId" element={<AnnouncementDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;