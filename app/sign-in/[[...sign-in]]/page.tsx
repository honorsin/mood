import { SignIn } from "@clerk/nextjs";

export const SignInPage = () => {
    return <SignIn signUpUrl="/sign-up"/>
}

export default  SignInPage;