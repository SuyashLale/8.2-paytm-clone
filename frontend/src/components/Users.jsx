/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFileter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => setUsers(response.data.user));
  }, [filter]);

  return (
    <div className="mx-4">
      <div className="font-bold mt-6 text-lg">Users</div>
      <div>
        <input
          type="text"
          placeholder="Search users..."
          className="mt-2 border border-slate-200 w-full px-2 py-1 rounded"
          onChange={(e) => setFileter(e.target.value)}
        />
      </div>
      <div>
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="flex justify-center items-center rounded-full bg-slate-200 h-12 w-12 mr-2 ml-2">
          <div className=" text-xl">{user.firstName[0]}</div>
        </div>
        <div className="flex justify-center items-center font-semibold text-lg h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="h-full w-max flex items-center">
        <Button
          label={"Send Money"}
          onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
        />
      </div>
    </div>
  );
}
