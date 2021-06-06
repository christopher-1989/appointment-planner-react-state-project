import React from "react";

export const ContactPicker = ({name, contacts, onChange}) => {
  

  
  return (
    <select
      name={name}
      onChange={onChange}
      defaultValue={""}
    >
      <option value={""} key="-1" disabled>
        No contact selected  
      </option>     
      {contacts.map((contact, index) => {
        return (
          <option value={contact.name} key={index} >
            {contact.name}
          </option>
        )
      })}
    </select>
  );
};
