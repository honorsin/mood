import { SignUp } from "@clerk/nextjs";

export const SignUpPage = () => {
    return <SignUp afterSignUpUrl="/new-user" redirectUrl="/new-user" />
}

export default  SignUpPage;