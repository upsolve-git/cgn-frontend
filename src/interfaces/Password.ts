export interface ResetPasswordParams {
    token: string;
    password: string;
}

export interface ForgotPasswordParams {
    email: string;
}