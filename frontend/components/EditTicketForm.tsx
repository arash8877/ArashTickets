"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Ticket, TicketCreateDto } from "@/types/types";
import Spinner from "./Spinner";
import axios from "axios";
import toast from "react-hot-toast";

interface EditTicketFormProps {
  ticket: Ticket;
}

//--------------------------- Component ---------------------------//
const EditTicketForm = ({ ticket }: EditTicketFormProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketCreateDto>({
    defaultValues: {
      passengerName: ticket.passengerName,
      passengerSSN: ticket.passengerSSN,
      from: ticket.from,
      to: ticket.to,
      price: ticket.price,
      time: ticket.time
        ? new Date(ticket.time).toISOString().slice(0, 16) // ensure datetime-local works
        : "",
    },
  });

  const onSubmit = async (data: TicketCreateDto) => {
    try {
      setLoading(true);

      // Update the ticket (PUT)
      await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/tickets/${ticket.id}`,
        data
      );

      toast.success("🎫 Ticket updated successfully!");
      router.push("/tickets");
      router.refresh();
    } catch (error) {
      console.error("Failed to update ticket:", error);
      toast.error("❌ Failed to update ticket");
    } finally {
      setLoading(false);
    }
  };


  //--------------------------- JSX ---------------------------//
  return (
    <>
      {loading && <Spinner />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={`bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg mx-auto mt-6 transition-all duration-300 ${
          loading ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <h2 className="text-2xl font-semibold text-sky-800 mb-6 text-center">
          ✏️ Edit Ticket
        </h2>

        {/* Departure Time */}
        <div className="mb-4">
          <label className="block text-slate-600 mb-1">Departure Time</label>
          <input
            type="datetime-local"
            className={`w-full border ${
              errors.time ? "border-red-400" : "border-gray-300"
            } rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none`}
            {...register("time", {
              required: "Departure time is required",
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
            className={`w-full border ${
              errors.passengerName ? "border-red-400" : "border-gray-300"
            } rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none`}
            {...register("passengerName", {
              required: "Passenger name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          {errors.passengerName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.passengerName.message}
            </p>
          )}
        </div>

        {/* Passenger SSN */}
        <div className="mb-4">
          <label className="block text-slate-600 mb-1">Passenger SSN</label>
          <input
            type="text"
            autoComplete="off"
            className={`w-full border ${
              errors.passengerSSN ? "border-red-400" : "border-gray-300"
            } rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none`}
            {...register("passengerSSN", {
              required: "Passenger SSN is required",
            })}
          />
          {errors.passengerSSN && (
            <p className="text-red-500 text-sm mt-1">
              {errors.passengerSSN.message}
            </p>
          )}
        </div>

        {/* From */}
        <div className="mb-4">
          <label className="block text-slate-600 mb-1">From</label>
          <input
            type="text"
            autoComplete="off"
            className={`w-full border ${
              errors.from ? "border-red-400" : "border-gray-300"
            } rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none`}
            {...register("from", { required: "Departure location is required" })}
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
            className={`w-full border ${
              errors.to ? "border-red-400" : "border-gray-300"
            } rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none`}
            {...register("to", { required: "Destination is required" })}
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
            className={`w-full border ${
              errors.price ? "border-red-400" : "border-gray-300"
            } rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none`}
            {...register("price", {
              required: "Price is required",
              valueAsNumber: true,
              min: { value: 1, message: "Price must be greater than 0" },
            })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-linear-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform cursor-pointer hover:-translate-y-1"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-linear-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform cursor-pointer hover:-translate-y-1"
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default EditTicketForm;
