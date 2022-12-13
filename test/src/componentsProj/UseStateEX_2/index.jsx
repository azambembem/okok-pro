import { useState } from "react";

const App = () => {
  const [count, setCount] = useState({
    // USESTATE MAVZUSI//
    name: "",
    surname: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setCount({
      ...count,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <input name="name" onChange={onChangeHandler} placeholder="Name" />
      <br />
      <br />
      <input name="surname" onChange={onChangeHandler} placeholder="Surname" />
      <br />
      <br />
      <input
        name="password"
        onChange={onChangeHandler}
        placeholder="password"
      />
      {JSON.stringify(count)}
    </div>
  );
};
export default App;
