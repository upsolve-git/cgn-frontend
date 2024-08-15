import React from "react";

// component imports
import FormCard from "../../ui/organisms/FormCard/FormCard";
import EmailInput from "../../ui/atoms/formElements/EmailInput/EmailInput";
import PasswordInput from "../../ui/atoms/formElements/PasswordInput/PasswordInput";
import AuthSubmitButton from "../../ui/atoms/buttons/AuthSubmitButton/AuthSubmitButton";
import AccountType from "../../ui/molecules/AccountType/AccountType";
import GoogleAuthButton from "../../ui/atoms/buttons/GoogleAuthButton/GoogleAuthButton";

// util imports
import { loginHandler } from "../../utils/handlers/loginHandler";

interface SignInPageProps{}

const SignInPage: React.FC<SignInPageProps> = ()=>{
    return (
        <div
        className="h-screen flex flex-col items-center justify-center">
            <FormCard>
                <div id="form-title-wrapper"
                className="flex flex-col items-center justify-center my-4">
                    <h1
                    className="text-xl">Log In</h1>
                    <p
                    className="text-xs">Dont have an account? 
                    <a 
                    className="underline ml-1">Sign Up</a></p>
                </div>
                <AccountType />
                <div id="input-container"
                className="my-3 w-full">
                    <EmailInput />
                    <PasswordInput 
                    label="Password"/>
                </div>
                <AuthSubmitButton 
                content="Login Now!"
                callbackFunc={loginHandler}/>
                <p
                className="text-darkgray block text-xs">or continue with </p>
                <GoogleAuthButton />
            </FormCard>
        </div>
    )
}

export default SignInPage