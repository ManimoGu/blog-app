import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addUser } from "../data/features/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addUser(user))
  }

  
  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/">Login</Link>
    </>
  );
};

export default SignUp;
