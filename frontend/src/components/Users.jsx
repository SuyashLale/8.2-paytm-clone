/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../components/Button";

export function Users() {
  const [users, setUsers] = useState([
    {
      firstName: "Suyash",
      lastName: "Lale",
      _id: 1,
    },
    {
      firstName: "Shreya",
      lastName: "Gore",
      _id: 2,
    },
    {
      firstName: "Harkirat",
      lastName: "Singh",
      _id: 3,
    },
  ]);
  return (
    <div className="mx-4">
      <div className="font-bold mt-6 text-lg">Users</div>
      <div>
        <input
          type="text"
          placeholder="Search users..."
          className="mt-2 border border-slate-200 w-full px-2 py-1 rounded"
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
        <Button label={"Send Money"} onClick={() => {}} />
      </div>
    </div>
  );
}
