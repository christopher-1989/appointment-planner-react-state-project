import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
      className="formName" 
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      placeholder="Contact name"
      />
      <input 
      className="formPhone" 
      type="text"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required
      pattern="[0-9]{10}"
      placeholder="Contact Phone (0412345678)"
      />
      <input 
      className="formEmail" 
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      placeholder="Contact email"
      pattern=".+@gmail.com"
      />
      <input type="submit" value="Add contact"></input>

    </form>
  );
};
