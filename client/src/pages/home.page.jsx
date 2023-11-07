import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../data/features/userSlice";
const Home = () => {
  const users = useSelector((state) => state.userList.users);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Use Effect called!');

    return () => {
      console.log('Component unmounted');
    }
    }, [])

  return (
    <div>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>
            {user.name} @ {user.email}
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          dispatch(addUser({ name: "name 4", email: "name4@test.com" }))
        }
      >
        add User
      </button>
    </div>
  );
};

export default Home;
