import { useState } from "react";
import axios from "axios";

import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function SignUp() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnClik = async () => {
    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
      firstName,
      lastName,
      username,
      password
    });
    const token = response.data.userId;
    localStorage.setItem("token", token);
  }

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex items-center">
        <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign Up"} />
          <SubHeading description={"Enter your information to create an account"} />
          <InputBox label={"First Name"} placeholder={"John"} type={"text"} onChange={(e) => { setFirstName(e.target.value) }} />
          <InputBox label={"Last Name"} placeholder={"Doe"} type={"text"} onChange={e => setLastName(e.target.value)} />
          <InputBox label={"Email"} placeholder={"johndoe@example.com"} type={"email"} onChange={e => setUsername(e.target.value)} />
          <InputBox label={"Password"} placeholder={"123456"} type={"password"} onChange={e => setPassword(e.target.value)} />
          <Button label={"Sign Up"} onClick={handleOnClik} />
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
      </div>
    </div>
  );
}
