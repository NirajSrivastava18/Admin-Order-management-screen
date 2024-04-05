import React, { useState, useEffect } from 'react';
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

  const [counts, setCounts] = useState({
    machines: 0,
    orders: 0,
    customers: 0,
    drinks: 0,
    totalAmount: 0,
    refundInitiated: 0,
  });

  useEffect(() => {
    const counts = orders.reduce(
      (acc, order) => {
        acc.machines += 1;
        acc.orders += 1;
        acc.customers += 1;
        //  acc.drinks += order.drinks.length;
        acc.totalAmount += order.totalAmount;
        if (order.status === 'refund Initiated') {
          acc.refundInitiated += 1;
        }
        return acc;
      },
      {
        machines: 0,
        orders: 0,
        customers: 0,
        drinks: 0,
        totalAmount: 0,
        refundInitiated: 0,
      }
    );
    setCounts(counts);
  }, [orders]);

  const tableRef = React.useRef<HTMLTableElement>(null);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [entriesPerPage, setEntriesPerPage] = React.useState(10);
  const totalEntries = orders.length;

  const startIndex = React.useMemo(
    () => (currentPage - 1) * entriesPerPage,
    [currentPage, entriesPerPage]
  );
  const endIndex = React.useMemo(
    () => Math.min(startIndex + entriesPerPage, totalEntries),
    [startIndex, totalEntries, entriesPerPage]
  );

  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleEntriesPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEntriesPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <Topbar tableRef={tableRef} fileName="Orders" />

      <div className="TotalAccount">
        <p>Machines: {counts.machines}</p>
        <p>Orders: {counts.orders}</p>
        <p>Customers: {counts.customers}</p>
        <p>Drinks : </p>
        <p>TotalAmount: ₹{counts.totalAmount}</p>
        <p>Refund initiated: {counts.refundInitiated}</p>
      </div>
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
            {orders.slice(startIndex, endIndex).map((order) => (
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
        <div className="pagination">
          <div className="pagination-info">
            Showing {startIndex + 1} to{' '}
            {endIndex > totalEntries ? totalEntries : endIndex} of{' '}
            {totalEntries} entries
          </div>
          <div className="entries-per-page">
            <label htmlFor="entries-per-page-select">Rows per page: </label>
            <select
              id="entries-per-page-select"
              value={entriesPerPage}
              onChange={handleEntriesPerPageChange}
            >
              <option value="5">5</option>
              <option value="10" selected>
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="pagination-buttons">
            {currentPage > 1 && (
              <button
                className="pagination-button"
                onClick={() => goToPage(currentPage - 1)}
              >
                &lt;
              </button>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`pagination-button ${
                  page === currentPage ? 'active' : ''
                }`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                className="pagination-button"
                onClick={() => goToPage(currentPage + 1)}
              >
                &gt;
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOrders;
