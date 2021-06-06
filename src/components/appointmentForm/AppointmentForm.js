import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Title of Appointment"
      />
      <ContactPicker 
        name="Contact"
        contacts={contacts}
        setContact={setContact}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Appointment with"
      />
      <input 
        className="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        placeholder="Date: YYYY-MM-DD"
        min={getTodayString()}
      />
      <input
        className="time"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        placeholder="Time: HH:MM"
        min="05:00"
        max="19:00"
      />
      <input 
        type="submit"
        value="Add new appointment"
      />
    </form>
  );
};
