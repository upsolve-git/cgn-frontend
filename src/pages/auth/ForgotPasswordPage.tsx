import React from 'react';

import FormCard from "../../ui/molecules/FormCard/FormCard";
import EmailInput from "../../ui/atoms/formElements/auth/EmailInput/EmailInput";
import PasswordInput from "../../ui/atoms/formElements/auth/PasswordInput/PasswordInput";
import AuthSubmitButton from "../../ui/atoms/buttons/ActionButton/AuthSubmitButton";

import { useForgotPassword } from '../../utils/hooks/useForgotPassword';

interface ForgotPasswordPageProps {}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = () => {
  const {
    email,
    emailErr,
    handleEmailChange,
    checkValues,
    handleForgotPassword,
    submitError,
    success,
  } = useForgotPassword();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <FormCard>
        <div id="form-title-wrapper" className="flex flex-col items-center justify-center my-4">
          <h1 className="text-lg font-medium tablet:text-xl desktop:text-2xl">Forgot Password</h1>
        </div>
        <div id="input-container" className="my-3 w-full">
          <EmailInput 
            value={email}
            error={emailErr}
            onChange={handleEmailChange}
          />
          {/* <PasswordInput
            label="Password"
            value={password}
            errors={passwordErr ? [passwordErr] : []}
            onChange={handlePasswordChange}
          />
          <PasswordInput
            label="Confirm Password"
            value={confPassword}
            errors={confPasswordErr ? [confPasswordErr] : []}
            onChange={handleConfPassword}
          /> */}
        </div>
        <AuthSubmitButton 
          disabled={checkValues()}
          error={submitError}
          label="Send Email"
          callbackFunc={handleForgotPassword}
        />
        {success && <p className="text-green font-medium">{success}</p>}
      </FormCard>
    </div>
  );
};

export default ForgotPasswordPage;