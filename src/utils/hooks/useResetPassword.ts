import { useState } from 'react';
import { resetPassword } from '../../services/auth';
import { ResetPasswordParams } from '../../interfaces/Password';

export const useResetPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [emailErr, setEmailErr] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordErr, setPasswordErr] = useState<string>('');
  const [confPassword, setConfPassword] = useState<string>('');
  const [confPasswordErr, setConfPasswordErr] = useState<string>('');
  const [submitError, setSubmitError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailErr('Invalid email address');
    } else {
      setEmailErr('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6) {
      setPasswordErr('Password must be at least 6 characters');
    } else {
      setPasswordErr('');
    }
    if (confPassword && value !== confPassword) {
      setConfPasswordErr('Passwords do not match');
    } else {
      setConfPasswordErr('');
    }
  };

  const handleConfPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfPassword(value);
    if (password !== value) {
      setConfPasswordErr('Passwords do not match');
    } else {
      setConfPasswordErr('');
    }
  };

  // Returns true if any field is empty or has errors
  const checkValues = () => {
    return (
      !email ||
      !!emailErr ||
      !password ||
      !!passwordErr ||
      !confPassword ||
      !!confPasswordErr
    );
  };

  const handleResetPassword = async () => {
    if (checkValues()) {
      setSubmitError('Please fix the errors before submitting.');
      return;
    }
    setSubmitError('');
    try {
      const data = await resetPassword({ email, password } as ResetPasswordParams);
      setSuccess('Password reset successfully.');
    } catch (error: any) {
      setSubmitError(error.response?.data?.message || 'Failed to reset password.');
    }
  };

  return {
    email,
    emailErr,
    handleEmailChange,
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
  };
};