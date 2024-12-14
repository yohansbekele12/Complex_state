import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevvalue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevvalue.lName,
          email: prevvalue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevvalue.fName,
          lName: value,
          email: prevvalue.email,
        };
      } else if (name === "email") {
        return {
          fName: prevvalue.fName,
          lName: prevvalue.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          value={contact.fName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          name="email"
          value={contact.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
