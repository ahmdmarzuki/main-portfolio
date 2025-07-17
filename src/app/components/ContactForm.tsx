import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission (API, email, etc)
    alert("Form submitted! (handler belum diimplementasi)");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-[90%] px-20 py-10 bg-accent text-primary rounded-2xl mr-6 shadow"
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-4 border rounded mt-1 text-accent bg-primary"
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-4 border rounded mt-1 text-accent bg-primary"
          required
        />
      </label>
      <label>
        Subject
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full p-4 border rounded mt-1 text-accent bg-primary"
          required
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-4 border rounded mt-1 text-accent bg-primary"
          rows={5}
          required
        />
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-primary py-4 px-4 rounded hover:bg-accent/90 transition"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
