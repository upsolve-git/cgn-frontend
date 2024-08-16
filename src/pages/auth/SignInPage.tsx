// package imports
import React from "react";

// component imports
import FormCard from "../../ui/organisms/FormCard/FormCard";
import EmailInput from "../../ui/atoms/formElements/EmailInput/EmailInput";
import PasswordInput from "../../ui/atoms/formElements/PasswordInput/PasswordInput";
import AuthSubmitButton from "../../ui/atoms/buttons/AuthSubmitButton/AuthSubmitButton";
import AccountType from "../../ui/molecules/AccountType/AccountType";
import GoogleAuthButton from "../../ui/atoms/buttons/GoogleAuthButton/GoogleAuthButton";

// hooks imports
import { useSignInPage } from "../../utils/hooks/useSignInPage";
import { AccTypeContext } from "../../utils/hooks/useAccTypeContext";

interface SignInPageProps{}

const SignInPage: React.FC<SignInPageProps> = ()=>{

    let {email, handleEmailChange, password, handlePasswordChange, accType, handleAccTypeChange, loginHandler} = useSignInPage()

    return (
        <div
        className="h-screen flex flex-col items-center justify-center">
            <FormCard>
                <div id="form-title-wrapper"
                className="flex flex-col items-center justify-center my-4">
                    <h1
                    className="text-lg font-medium tablet:text-xl desktop:text-2xl">
                        Log In
                    </h1>
                    <p
                    className="text-xxs tablet:text-xs desktop:text-sm">
                        Don't have an account?
                        <a 
                        className="underline ml-1">Sign Up</a>
                    </p>
                </div>
                <AccTypeContext.Provider value={{accType, handleAccTypeChange}}>
                    <AccountType />
                </AccTypeContext.Provider>
                <div id="input-container"
                className="my-3 w-full">
                    <EmailInput 
                    value={email}
                    onChange={handleEmailChange}/>
                    <PasswordInput 
                    label="Password"
                    value={password}
                    onChange={handlePasswordChange}/>
                </div>
                <AuthSubmitButton 
                label="Login Now!"
                callbackFunc={loginHandler}/>
                <p
                className="text-darkgray block text-xxs tablet:text-xs desktop:text-sm">
                    or continue with 
                </p>
                <GoogleAuthButton />
            </FormCard>
        </div>
    )
}

export default SignInPage