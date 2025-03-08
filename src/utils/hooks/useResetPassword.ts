import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { resetPassword } from '../../services/auth';
import { ResetPasswordParams } from '../../interfaces/Password';

export const useResetPassword = () => {
  // Get the token from the URL params
  const { token } = useParams<{ token: string }>();
  
  const [password, setPassword] = useState<string>('');
  const [passwordErr, setPasswordErr] = useState<string>('');
  const [confPassword, setConfPassword] = useState<string>('');
  const [confPasswordErr, setConfPasswordErr] = useState<string>('');
  const [submitError, setSubmitError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

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

  const checkValues = () => {
    return (
      !token ||
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
      await resetPassword({ token: token!, password });
      setSuccess('Password reset successfully.');
    } catch (error: any) {
      setSubmitError(error.response?.data?.message || 'Failed to reset password.');
    }
  };

  return {
    token,
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