import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const rooms = [
  {
    id: 'deluxe-double-bath',
    name: 'Deluxe Double Room with Bath',
    type: 'Double Room',
    price: 45 * 130, // Converted to Ksh
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Bath'],
    size: '16 m²',
  },
  // ... other rooms ...
];

const PaymentPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomId = queryParams.get('roomId');
  const totalAmount = queryParams.get('totalAmount');
  const selectedRoom = rooms.find(room => room.id === roomId);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState(totalAmount || (selectedRoom ? selectedRoom.price : ''));
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(phoneNumber,amount);

      const response = await axios.post('http://localhost:5000/api/stkpush', {
        phone: phoneNumber,
        amount: "1",
      });

      
      setSuccess(true);
    } catch (error) {
      alert('Payment failed. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Pay with M-Pesa</h1>
        {selectedRoom && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">{selectedRoom.name}</h2>
            <p className="text-gray-600">Type: {selectedRoom.type}</p>
            <p className="text-gray-600">Price per night: Ksh {selectedRoom.price}</p>
            <p className="text-gray-600">Total Amount: Ksh {amount}</p>
            <p className="text-gray-600">Capacity: {selectedRoom.capacity} people</p>
            <p className="text-gray-600">Size: {selectedRoom.size}</p>
          </div>
        )}
        {success ? (
          <div className="text-center text-green-600 font-semibold">Payment Successful!</div>
        ) : (
          <form onSubmit={handlePayment} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="amount">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                readOnly
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Pay Now'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;