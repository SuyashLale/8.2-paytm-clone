import { Heading } from "../components/Heading";

export function SignUp() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex items-center">
        <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign Up"} />
        </div>
      </div>
    </div>
  );
}
