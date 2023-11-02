import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addUser } from "../data/features/userSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:5000/login", user);
      console.log(result);

      if (result.data.token) {
        document.cookie = result.data.token
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button>Submit</button>
      </form>
      <Link to="/register">Create an account</Link>
    </>
  );
};

export default SignIn;
