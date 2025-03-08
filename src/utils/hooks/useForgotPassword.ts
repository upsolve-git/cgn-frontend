import { useState } from 'react';
import { forgotPassword } from '../../services/auth'; // adjust path as needed

export const useForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [emailErr, setEmailErr] = useState<string>('');
  const [submitError, setSubmitError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Simple email format validation
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailErr('Invalid email address');
    } else {
      setEmailErr('');
    }
  };

  const checkValues = () => {
    return !email || emailErr !== '';
  };

  const handleForgotPassword = async () => {
    if (checkValues()) {
      setSubmitError('Please provide a valid email.');
      return;
    }
    setSubmitError('');
    try {
      const data = await forgotPassword({ email });
      setSuccess('Please check your email for reset instructions.');
    } catch (error: any) {
      setSubmitError(error.response?.data?.message || 'Failed to send reset instructions.');
    }
  };

  return {
    email,
    emailErr,
    handleEmailChange,
    checkValues,
    handleForgotPassword,
    submitError,
    success,
  };
};
