import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry , setAllEntry] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();
    const newEntry = {email:email , password:password };
    setAllEntry([...allEntry, newEntry]);
  }

  
  return (
    <>
    <div  className= "main_div">
      <form onSubmit={submitForm} className="form">
        <div className="login__form">
          <label htmlFor="email"> Email</label>
          <input
          className="input"
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value = {email}
            onChange={(event) =>  setEmail(event.target.value)}
          ></input>
        </div>

        <div className="login__form">
          <label htmlFor="password"> Password </label>
          <input
          className="input"
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value = {password}
            onChange ={(event) =>  setPassword(event.target.value)}
          ></input>
        </div>

        <button  className = "btn_submit" type="submit"> Login </button>
      </form>

      <div className="showData__style">
        {
          allEntry.map((currElem) => {
            return(
              <div className="showdata">
                <p className="show__email">  {currElem.email} </p>
                <p className="show__password"> {currElem.password} </p>
              </div>
            );
          })
        }
      </div>
      </div>

    </>
  );
};

export default App;
