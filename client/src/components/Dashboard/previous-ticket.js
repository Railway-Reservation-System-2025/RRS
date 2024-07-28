import React from 'react';

const PreviousBookings = () => {
  // Example data; replace with actual data from your backend
  const bookings = [
    {
      trainName: 'Express 101',
      trainNo: 'EX101',
      pnrNo: '1234567890',
      seatNos: ['A1', 'A2'],
      passengerNames: ['John Doe', 'Jane Smith'],
    },
    {
      trainName: 'Superfast 202',
      trainNo: 'SF202',
      pnrNo: '0987654321',
      seatNos: ['B1'],
      passengerNames: ['Alice Brown'],
    },
    {
        trainName: 'Superfast 202',
        trainNo: 'SF202',
        pnrNo: '0987654321',
        seatNos: ['B1'],
        passengerNames: ['Alice Brown'],
      },
      {
        trainName: 'Superfast 202',
        trainNo: 'SF202',
        pnrNo: '0987654321',
        seatNos: ['B1'],
        passengerNames: ['Alice Brown'],
      },
      {
        trainName: 'Superfast 202',
        trainNo: 'SF202',
        pnrNo: '0987654321',
        seatNos: ['B1'],
        passengerNames: ['Alice Brown'],
      },
      {
        trainName: 'Superfast 202',
        trainNo: 'SF202',
        pnrNo: '0987654321',
        seatNos: ['B1'],
        passengerNames: ['Alice Brown'],
      },
      {
        trainName: 'Superfast 202',
        trainNo: 'SF202',
        pnrNo: '0987654321',
        seatNos: ['B1'],
        passengerNames: ['Alice Brown'],
      },
  ];

  return (
    <div className="p-6 w-[800px] h-[500px] ml-[550px] rounded-lg mt-36 bg-opacity-70 bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Previous Train Bookings</h1>
      <table className=" ">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left">Train Name</th>
            <th className="px-4 py-2 text-left">Train No.</th>
            <th className="px-4 py-2 text-left">PNR No.</th>
            <th className="px-4 py-2 text-left">Seat No.</th>
            <th className="px-4 py-2 text-left">Passenger Name</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{booking.trainName}</td>
              <td className="px-4 py-2">{booking.trainNo}</td>
              <td className="px-4 py-2">{booking.pnrNo}</td>
              <td className="px-4 py-2">
                {booking.seatNos.join(', ')}
              </td>
              <td className="px-4 py-2">
                {booking.passengerNames.join(', ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreviousBookings;
