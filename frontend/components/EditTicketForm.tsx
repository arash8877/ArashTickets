"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Ticket, TicketCreateDto } from "@/types/types";
import useUpdateTicket from "@/hooks/useUpdateTicket";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

interface EditTicketFormProps {
  ticket: Ticket;
}

//--------------------------- Component ---------------------------//
const EditTicketForm = ({ ticket }: EditTicketFormProps) => {
  const { mutate: updateTicket, isPending } = useUpdateTicket();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketCreateDto>({
    defaultValues: {
      passengersName: ticket.passengersName,
      passengerSSN: ticket.passengerSSN,
      from: ticket.from,
      to: ticket.to,
      price: ticket.price,
      time: ticket.time
        ? new Date(ticket.time).toISOString().slice(0, 16) 
        : "",
    },
  });

  const onSubmit = (data: TicketCreateDto) => {
    updateTicket(
      { id: ticket.id, data: data },
      {
        onSuccess: () => {
          toast.success("Ticket updated successfully!");
          router.push("/tickets");
        },
        onError: (error) => {
          toast.error(error instanceof Error ? error.message : "Something went wrong!");
        },
      }
    );
  };

  //--------------------------- JSX ---------------------------//
  return (
    <>
      {isPending && <Spinner />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={`bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg mx-auto mt-6 transition-all duration-300 ${
          isPending ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <h2 className="text-2xl font-semibold text-sky-800 mb-6 text-center">✏️ Edit Ticket</h2>

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
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
        </div>

        {/* Passenger Name */}
        <div className="mb-4">
          <label className="block text-slate-600 mb-1">Passenger Name</label>
          <input
            type="text"
            autoComplete="off"
            className={`w-full border ${
              errors.passengersName ? "border-red-400" : "border-gray-300"
            } rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none`}
            {...register("passengersName", {
              required: "Passenger name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          {errors.passengersName && (
            <p className="text-red-500 text-sm mt-1">{errors.passengersName.message}</p>
          )}
        </div>

        {/* CPR Number */}
        <div className="mb-4">
          <label className="block text-slate-600 mb-1">CPR Number</label>
          <input
            type="text"
            autoComplete="off"
            className={`w-full border ${
              errors.passengerSSN ? "border-red-400" : "border-gray-300"
            } rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none`}
            {...register("passengerSSN", {
              required: "CPR Number is required",
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
            disabled
            value={ticket.from}
            className={`w-full rounded-lg px-3 py-2 
             border border-gray-300 
             bg-gray-100 text-gray-500 
             cursor-not-allowed 
             shadow-inner 
             focus:ring-0 focus:outline-none`}
          />
          {errors.from && <p className="text-red-500 text-sm mt-1">{errors.from.message}</p>}
        </div>

        {/* To */}
        <div className="mb-4">
          <label className="block text-slate-600 mb-1">To</label>
          <input
            type="text"
            autoComplete="off"
            disabled
            value={ticket.to}
            className={`w-full rounded-lg px-3 py-2 
             border border-gray-300 
             bg-gray-100 text-gray-500 
             cursor-not-allowed 
             shadow-inner 
             focus:ring-0 focus:outline-none`}
          />
          {errors.to && <p className="text-red-500 text-sm mt-1">{errors.to.message}</p>}
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
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
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
