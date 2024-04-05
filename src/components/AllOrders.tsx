import React from 'react';
import { orders } from '../interfaces/Orders';
import Topbar from './Topbar';

import './AllOrders.css';

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'success':
      return '#53A450';
    case 'failure':
      return '#FF5630';
    case 'pending':
      return '#E2D900';
    case 'sent':
      return '#E28800';
    case 'refund initiated':
      return '#5053A4';
    case 'refund completed':
      return '#9D50A4';
    default:
      return 'gray';
  }
};

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
    return `${day}/${month}/${year}`;
  };

  // Function to format time in hh:mm format
  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const tableRef = React.useRef<HTMLTableElement>(null);
  return (
    <>
      <Topbar tableRef={tableRef} fileName="Orders" />

      <div className="all-orders-container">
        <table className="orders-table" ref={tableRef}>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>DATE </th>
              <th>ORDER ID</th>
              <th>MACHINE NAME</th>
              <th>CUSTOMER NAME</th>
              <th>CONTACT NUMBER</th>
              <th>TOTAL AMOUNT</th>
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
                <td>₹{order.totalAmount}</td>
                <td>
                  <button
                    style={{
                      borderRadius: '20px',
                      borderColor: getStatusColor(order.status),
                      color: getStatusColor(order.status),
                      padding: '5px 10px',
                      background: 'transparent',
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      boxShadow: 'none',
                    }}
                  >
                    {order.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllOrders;
