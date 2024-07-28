import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PnrCheck from './components/Dashboard/Pnr-Check';
import TicketReservationForm from './components/Dashboard/Book-Ticket';
import PreviousBookings from './components/Dashboard/previous-ticket';
import Home from './components/Dashboard/Home';
import Login from './components/Dashboard/Login/login';
import Register from './components/Dashboard/Login/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="booktickets" element={<TicketReservationForm />} />
          <Route path="pnr" element={<PnrCheck />} />
          <Route path="prevbooking" element={<PreviousBookings />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
