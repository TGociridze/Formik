import React from "react";

const ControlledForm = props => {
  const [value, setValue] = React.useState("");

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        placeholder="Username"
        id="username"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <br />
      {value}
    </form>
  );
};

export default ControlledForm;
