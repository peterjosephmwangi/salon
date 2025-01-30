"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingPage() {
  const router = useRouter();

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [message, setMessage] = useState("");

  // Services list
  const services = [
    "Hair Styling",
    "Facials & Skincare",
    "Manicure & Pedicure",
    "Hair Coloring",
    "Makeup Services",
    "Massage Therapy",
  ];

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time) {
      setMessage("Please fill in all required fields.");
      return;
    }

    // Simulate API request (replace with real API call)
    setTimeout(() => {
      setMessage("Your appointment has been booked successfully!");
      setTimeout(() => router.push("/"), 2000); // Redirect after 2 seconds
    }, 1000);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Book Your Appointment
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Select your preferred service and schedule a time with us.
        </p>

        {/* Booking Form */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          {message && <p className="text-center text-green-600 mb-4">{message}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-300"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-300"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Select Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-300"
              >
                <option value="">Choose a service...</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-300"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-300"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Additional Notes (Optional)</label>
              <textarea
                name="notes"
                placeholder="Any special requests?"
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow-lg transition"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
