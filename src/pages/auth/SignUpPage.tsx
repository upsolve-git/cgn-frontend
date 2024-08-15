import React from "react";

import FormCard from "../../ui/organisms/FormCard/FormCard";
import AccountType from "../../ui/molecules/AccountType/AccountType";
import EmailInput from "../../ui/atoms/formElements/EmailInput/EmailInput";
import PasswordInput from "../../ui/atoms/formElements/PasswordInput/PasswordInput";
import AuthSubmitButton from "../../ui/atoms/buttons/AuthSubmitButton/AuthSubmitButton";
import GoogleAuthButton from "../../ui/atoms/buttons/GoogleAuthButton/GoogleAuthButton";
import PhoneInput from "../../ui/atoms/formElements/phoneInput/phoneInput";

import { signinHandler } from "../../utils/handlers/signinHandler";

interface SignUpPageProps{}

const SignUpPage: React.FC<SignUpPageProps> = ()=>{
    return (
        <div
        className="h-screen flex flex-col items-center justify-center">
            <FormCard>
                <div id="form-title-wrapper"
                className="flex flex-col items-center justify-center my-4">
                    <h1
                    className="text-xl">Create an account</h1>
                    <p
                    className="text-xs">Already have an account? 
                    <a 
                    className="underline ml-1">Log In</a></p>
                </div>
                <AccountType />
                <div id="input-container"
                className="my-3 w-full">
                    <EmailInput />
                    <PhoneInput />
                    <PasswordInput 
                    label="Password"/>
                    <PasswordInput
                    label="Confirm Password" />
                </div>
                <AuthSubmitButton 
                content="Create an account"
                callbackFunc={signinHandler}/>
                <p
                className="text-darkgray block text-xs">or continue with </p>
                <GoogleAuthButton />
            </FormCard>
        </div>
    )
}

export default SignUpPage