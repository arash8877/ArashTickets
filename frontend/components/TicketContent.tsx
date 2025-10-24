'use client';

import { Ticket } from '@/types/types';
import Link from 'next/link';
import {
  MdOutlinePageview,
  MdOutlineEdit,
  MdOutlineDelete,
} from 'react-icons/md';
import moment from 'moment';

interface Props {
  ticketsData: Ticket[];
}

const TicketsContent = ({ ticketsData }: Props) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
      {/* Desktop / Tablet Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-linear-to-r from-sky-600 to-blue-600 text-white text-sm lg:text-base">
            <tr>
              <th className="text-center py-3 px-4">ID</th>
              <th className="text-center py-3 px-4">Passenger</th>
              <th className="text-center py-3 px-4">SSN</th>
              <th className="text-center py-3 px-4">From</th>
              <th className="text-center py-3 px-4">To</th>
              <th className="text-center py-3 px-4">Price</th>
              <th className="text-center py-3 px-4">Time</th>
              <th className="text-center py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ticketsData.map((ticket) => (
              <tr
                key={ticket.id}
                className="border-b hover:bg-sky-50 transition-all duration-200"
              >
                <td className="text-center py-2 px-4">{ticket.id}</td>
                <td className="text-center py-2 px-4 font-medium">
                  {ticket.passengerName}
                </td>
                <td className="text-center py-2 px-4">{ticket.passengerSSN}</td>
                <td className="text-center py-2 px-4">{ticket.from}</td>
                <td className="text-center py-2 px-4">{ticket.to}</td>
                <td className="text-center py-2 px-4 font-semibold text-sky-700">
                  {ticket.price.toLocaleString('da-DK', {
                    style: 'currency',
                    currency: 'DKK',
                  })}
                </td>
                <td className="text-center py-2 px-4">
                  {moment(ticket.time + 'Z').format('YYYY-MM-DD HH:mm')}
                </td>
                <td className="text-center py-2 px-4">
                  <div className="flex justify-center items-center gap-2">
                    <Link
                      href={`/tickets/${ticket.id}`}
                      className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md transition-transform transform hover:scale-105"
                    >
                      <MdOutlinePageview className="text-xl" />
                    </Link>
                    <Link
                      href={`/tickets/edit/${ticket.id}`}
                      className="bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded-md transition-transform transform hover:scale-105"
                    >
                      <MdOutlineEdit className="text-xl" />
                    </Link>
                    <Link
                      href={`/tickets/delete/${ticket.id}`}
                      className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md transition-transform transform hover:scale-105"
                    >
                      <MdOutlineDelete className="text-xl" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden p-2 space-y-4">
        {ticketsData.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-sky-50 border border-sky-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex justify-between items-center border-b border-sky-200 pb-2 mb-2">
              <span className="font-semibold text-sky-700">
                {ticket.passengerName}
              </span>
              <span className="text-xs text-gray-500">
                #{ticket.id}
              </span>
            </div>
            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-semibold">From:</span> {ticket.from}
              </p>
              <p>
                <span className="font-semibold">To:</span> {ticket.to}
              </p>
              <p>
                <span className="font-semibold">Price:</span>{' '}
                {ticket.price.toLocaleString('da-DK', {
                  style: 'currency',
                  currency: 'DKK',
                })}
              </p>
              <p>
                <span className="font-semibold">Time:</span>{' '}
                {moment(ticket.time + 'Z').format('YYYY-MM-DD HH:mm')}
              </p>
            </div>
            <div className="flex justify-end items-center gap-2 mt-3">
              <Link
                href={`/tickets/${ticket.id}`}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md"
              >
                <MdOutlinePageview />
              </Link>
              <Link
                href={`/tickets/edit/${ticket.id}`}
                className="bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded-md"
              >
                <MdOutlineEdit />
              </Link>
              <Link
                href={`/tickets/delete/${ticket.id}`}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md"
              >
                <MdOutlineDelete />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsContent;
