'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { TicketCreateDto } from '@/types/types';
import Spinner from './Spinner';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreateTicketForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TicketCreateDto>();

  const onSubmitFunction = async (data: TicketCreateDto) => {
    try {
      setLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/create`, data);
      toast.success('Ticket created successfully!');
      router.push('/tickets');
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error('Error creating new ticket.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <form
        onSubmit={handleSubmit(onSubmitFunction)}
        className={`bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg mx-auto mt-6 transition-all duration-300 ${
          loading ? 'blur-sm pointer-events-none' : ''
        }`}
        noValidate
      >
        <h2 className="text-2xl font-semibold text-sky-800 mb-6 text-center">🎟️ Create New Ticket</h2>

        {/* Ticket Time */}
        <div className="mb-4">
          <label className="block text-slate-600 mb-1">Ticket Time</label>
          <input
            type="datetime-local"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
            {...register('time', {
              required: 'Ticket time is required',
              valueAsDate: true,
            })}
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>

        {/* Passenger Name */}
        <div className="mb-4">
          <label className="block text-slate-600 mb-1">Passenger Name</label>
          <input
            type="text"
            autoComplete="off"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
            {...register('passengerName', { required: 'Passenger name is required' })}
          />
          {errors.passengerName && (
            <p className="text-red-500 text-sm mt-1">{errors.passengerName.message}</p>
          )}
        </div>

        {/* Passenger SSN */}
        <div className="mb-4">
          <label className="block text-slate-600 mb-1">Passenger SSN</label>
          <input
            type="number"
            autoComplete="off"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
            {...register('passengerSSN', {
              required: 'Passenger SSN is required',
              valueAsNumber: true,
            })}
          />
          {errors.passengerSSN && (
            <p className="text-red-500 text-sm mt-1">{errors.passengerSSN.message}</p>
          )}
        </div>

        {/* From */}
        <div className="mb-4">
          <label className="block text-slate-600 mb-1">From</label>
          <input
            type="text"
            autoComplete="off"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
            {...register('from', { required: 'Departure location is required' })}
          />
          {errors.from && (
            <p className="text-red-500 text-sm mt-1">{errors.from.message}</p>
          )}
        </div>

        {/* To */}
        <div className="mb-4">
          <label className="block text-slate-600 mb-1">To</label>
          <input
            type="text"
            autoComplete="off"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
            {...register('to', { required: 'Destination is required' })}
          />
          {errors.to && (
            <p className="text-red-500 text-sm mt-1">{errors.to.message}</p>
          )}
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="block text-slate-600 mb-1">Price (DKK)</label>
          <input
            type="number"
            autoComplete="off"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
            {...register('price', {
              required: 'Price is required',
              valueAsNumber: true,
            })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-linear-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="bg-linear-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTicketForm;
