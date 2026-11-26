import { useState } from "react";

function PersonalForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
    console.log("typing…", e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    console.log("typing…", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("הטופס נשלח בהצלחה");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>שם מלא: </label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="הקלד שם"
        />
      </div>

      <div>
        <label>אימייל: </label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="הקלד אימייל"
        />
      </div>

      <button type="submit">שלח טופס</button>
    </form>
  );
}

export default PersonalForm;