import React, { useState } from 'react';
import axios from 'axios';

const BookTicket = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(new Date());
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Format the date to YYYY-MM-DD
    const formattedDate = date.toISOString().split('T')[0];
    
    try {
      const result = await axios.get('http://localhost:4000/api/trains', {
        params: {
          fromStationCode: from,
          toStationCode: to,
          dateOfJourney: formattedDate
        }
      });
      setResponse(result.data);
      setError('');
    } catch (err) {
      setResponse(null);
      setError('Error fetching train information. Please try again.');
      console.error(err);
    }
  };

  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  return (
    <div className='flex justify-center items-center h-screen ml-[300px] mt-16'>
      <div className='w-full max-w-lg bg-white bg-opacity-50 p-6 shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Book Your Ticket</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='flex flex-col'>
            <label className='text-sm font-medium text-gray-700 mb-1'>From</label>
            <input
              type='text'
              placeholder='From'
              className='w-full max-w-[500px] h-[40px] rounded-lg text-black text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-3'
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-sm font-medium text-gray-700 mb-1'>To</label>
            <input
              type='text'
              placeholder='To'
              className='w-full max-w-[500px] h-[40px] rounded-lg text-black text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-3'
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-sm font-medium text-gray-700 mb-1'>Date of Journey</label>
            <input
              type='date'
              className='w-full max-w-[500px] h-[40px] rounded-lg text-black text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-3'
              value={date.toISOString().split('T')[0]}
              onChange={(e) => setDate(new Date(e.target.value))}
              min={today} // Restrict to future dates
              required
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600'
          >
            Book Ticket
          </button>
          {response && (
            <div className='mt-4'>
              <h3 className='text-lg font-semibold'>Train Information</h3>
              <pre className='bg-gray-100 p-4 rounded-lg'>{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}
          {error && <p className='text-red-500 mt-4'>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default BookTicket;
