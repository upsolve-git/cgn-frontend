import React from 'react';

import FormCard from "../../ui/molecules/FormCard/FormCard";
import PasswordInput from "../../ui/atoms/formElements/auth/PasswordInput/PasswordInput";
import AuthSubmitButton from "../../ui/atoms/buttons/ActionButton/AuthSubmitButton";

import { useResetPassword } from '../../utils/hooks/useResetPassword';

interface ResetPasswordPageProps {}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = () => {
  const {
    password,
    passwordErr,
    handlePasswordChange,
    confPassword,
    confPasswordErr,
    handleConfPassword,
    checkValues,
    handleResetPassword,
    submitError,
    success,
  } = useResetPassword();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <FormCard>
        <div id="form-title-wrapper" className="flex flex-col items-center justify-center my-4">
          <h1 className="text-lg font-medium tablet:text-xl desktop:text-2xl">Reset Password</h1>
        </div>
        <div id="input-container" className="my-3 w-full">
          <PasswordInput
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
          />
        </div>
        <AuthSubmitButton 
          disabled={checkValues()}
          error={submitError}
          label="Reset Password"
          callbackFunc={handleResetPassword}
        />
        {success && <p className="text-green font-medium">{success}</p>}
      </FormCard>
    </div>
  );
};

export default ResetPasswordPage;