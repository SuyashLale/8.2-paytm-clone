import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function SignIn() {
    return <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="flex flex-col justify -center">
            <div className="bg-white rounded-lg w-80 text-center p-2 px-4 h-max">
                <Heading label={"Sign In"} />
                <SubHeading description={"Enter your credentials to access your account"} />
                <InputBox label={"Email"} type={"email"} placeholder={"johndoe@example.com"} />
                <InputBox label={"Password"} type={"password"} placeholder={"123456"} />
                <Button label={"Sign In"} onClick={() => { }} />
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to="/signup" />
            </div>
        </div>
    </div>
}