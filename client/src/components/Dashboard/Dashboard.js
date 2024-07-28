import React, { memo } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import TicketReservationForm from './Book-Ticket';
import PnrCheck from './Pnr-Check';
import trainimage from '../../images/bg-train.jpg';
import PreviousBookings from './previous-ticket';

const Dashboard = memo(() => {
  
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="relative w-full bg-black h-full">
          <img src={trainimage} alt="background" className="absolute inset-0 object-cover w-full h-full" />
          <div className="relative z-10">
          <PreviousBookings />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Dashboard;
