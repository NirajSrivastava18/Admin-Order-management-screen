import React from 'react';
import { orders } from '../interfaces/Orders';

import './AllOrders.css';

const AllOrders: React.FC = () => {
  const formatDateTime = (dateTimeString: Date) => {
    const dateTime = new Date(dateTimeString);
    const formattedDate = formatDate(dateTime);
    const formattedTime = formatTime(dateTime);
    return `${formattedDate} ${formattedTime}`;
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Function to format time in hh:mm format
  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  return (
    <div className="all-orders-container">
      <h1 className="all-orders-title">All Orders</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>DATE :</th>
            <th>ORDER :</th>
            <th>MACHINE</th>
            <th>CUSTOMER</th>
            <th>CONTACT NUMBER</th>
            <th>TOTALAMOUNT</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.Sno}>
              <td>{order.Sno}</td>
              <td>{formatDateTime(order.date)}</td>
              <td>{order.orderNo}</td>
              <td>{order.machine}</td>
              <td>{order.customerName}</td>
              <td>{order.contactNumber}</td>
              <td>{order.totalAmount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
