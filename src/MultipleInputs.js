import React, { useState } from "react";

const MultipleInputs = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [newUsers, setNewUsers] = useState([]);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecords = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    setNewUsers([...newUsers, newRecords]);
    setUserRegistration({ username: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <div className="main_div">
        <form action="" onSubmit={handleSubmit} className="form">
          <div className="login__form">
            <label htmlFor="username"> FullName </label>
            <input
              className="input"
              type="text"
              autoComplete="off"
              value={userRegistration.username}
              onChange={handleInput}
              name="username"
              id="username"
            ></input>
          </div>

          <div className="login__form">
            <label htmlFor="email"> Email </label>
            <input
              className="input"
              type="email"
              autoComplete="off"
              value={userRegistration.email}
              onChange={handleInput}
              name="email"
              id="email"
            ></input>
          </div>

          <div className="login__form">
            <label htmlFor="phone"> Phone </label>
            <input
              className="input"
              type="text"
              autoComplete="off"
              value={userRegistration.phone}
              onChange={handleInput}
              name="phone"
              id="phone"
            ></input>
          </div>

          <div className="login__form">
            <label htmlFor="password"> Password </label>
            <input
              className="input"
              type="password"
              autoComplete="off"
              value={userRegistration.password}
              onChange={handleInput}
              name="password"
              id="password"
            ></input>
          </div>

          <button  type="submit" className="btn_submit">
            Registration
          </button>
        </form>

        <div>
          {newUsers.map((currElem) => {
            const {id, username, email, phone, password} = currElem;
            return (
              <div className="display__style" key={id}>
                <p> {username} </p>
                <p> {email} </p>
                <p> {phone} </p>
                <p> {password} </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MultipleInputs;
