import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function SignUp() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex items-center">
        <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign Up"} />
          <SubHeading description={"Enter your information to create an account"} />
          <InputBox label={"First Name"} placeholder={"John"} type={"text"} />
          <InputBox label={"Last Name"} placeholder={"Doe"} type={"text"} />
          <InputBox label={"Email"} placeholder={"johndoe@example.com"} type={"email"} />
          <InputBox label={"Password"} placeholder={"123456"} type={"password"} />
          <Button label={"Sign Up"} onClick={() => { }} />
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
      </div>
    </div>
  );
}
