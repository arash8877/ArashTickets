"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TicketCreateDto } from "@/types/types";
import Spinner from "./Spinner";
import toast from "react-hot-toast";
import useCreateTicket from "@/hooks/useCreateTicket";

//------------------------- Create Ticket Form Component -------------------------

const CreateTicketForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TicketCreateDto>();
  const { mutate, isPending, isError, isSuccess, error } = useCreateTicket();

  const onSubmitFunction = async (data: TicketCreateDto) => {
    mutate(data, {
      onSuccess: () => {
        reset(); // clear form after successful creation
        toast.success("Ticket created successfully!");
        router.push("/tickets");
      },
    });
  };

  //------------------------- JSX -------------------------
  return (
    <>
      {isPending && <Spinner />}
      <form
        onSubmit={handleSubmit(onSubmitFunction)}
        className={`bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg mx-auto mt-6 transition-all duration-300 ${
          isPending ? "blur-sm pointer-events-none" : ""
        }`}
        noValidate
      >
        <h2 className="text-2xl font-semibold text-sky-800 mb-6 text-center">
          🎟️ Create New Ticket
        </h2>

        {/* Ticket Time */}
        <div className="mb-4">
          <label className="block text-slate-600 mb-1">Departure</label>
          <input
            type="datetime-local"
            className={`w-full border ${
              errors.time ? "border-red-400" : "border-gray-300"
            } rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none`}
            {...register("time", {
              required: "Ticket time is required",
              valueAsDate: true,
              validate: (value) =>
                (value && new Date(value) > new Date()) || "Time must be in the future",
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
              maxLength: {
                value: 50,
                message: "Name must be under 50 characters",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only letters and spaces allowed",
              },
            })}
          />
          {errors.passengersName && (
            <p className="text-red-500 text-sm mt-1">{errors.passengersName.message}</p>
          )}
        </div>

        {/* Passenger SSN */}
        <div className="mb-4">
          <label className="block text-slate-600 mb-1">Passenger SSN</label>
          <input
            type="number"
            autoComplete="off"
            className={`w-full border ${
              errors.passengerSSN ? "border-red-400" : "border-gray-300"
            } rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none`}
            {...register("passengerSSN", {
              required: "Passenger SSN is required",
              valueAsNumber: true,
              min: { value: 1000000000, message: "Invalid SSN" },
              max: { value: 9999999999, message: "Invalid SSN" },
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
            className={`w-full border ${
              errors.from ? "border-red-400" : "border-gray-300"
            } rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none`}
            {...register("from", {
              required: "Departure location is required",
              minLength: { value: 2, message: "Too short" },
            })}
          />
          {errors.from && <p className="text-red-500 text-sm mt-1">{errors.from.message}</p>}
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
            {...register("to", {
              required: "Destination is required",
              minLength: { value: 2, message: "Too short" },
              validate: (value, formValues) =>
                value.toLowerCase() !== formValues.from?.toLowerCase() ||
                "Destination cannot be the same as departure",
            })}
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
              max: { value: 100000, message: "Price too high" },
            })}
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => reset()}
            className="bg-linear-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-linear-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTicketForm;
