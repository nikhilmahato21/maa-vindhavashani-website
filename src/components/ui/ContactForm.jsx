import React from 'react';

export const ContactForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded bg-blue-700 text-white placeholder-gray-300 focus:outline-none focus:bg-blue-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded bg-blue-700 text-white placeholder-gray-300 focus:outline-none focus:bg-blue-600"
        />
      </div>
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded bg-blue-700 text-white placeholder-gray-300 focus:outline-none focus:bg-blue-600"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded bg-blue-700 text-white placeholder-gray-300 focus:outline-none focus:bg-blue-600"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-yellow-400 text-blue-900 font-bold py-3 px-4 rounded hover:bg-yellow-300 transition"
      >
        Send Message
      </button>
    </form>
  );
};
