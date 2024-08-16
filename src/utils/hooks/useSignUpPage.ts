import { useState } from "react";

export const useSignUpPage = ()=>{
    let [email, setEmail] = useState<string>('')
    let [phone, setPhone] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [confPassword, setConfPassword] = useState<string>('')
    let [accType, setAccType] = useState<string>('')

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPhone(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }

    const handleConfPassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setConfPassword(e.target.value)
    }

    const handleAccTypeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setAccType(e.target.value)
    }

    const signupHandler = ()=>{
        console.log(phone?phone:null);
        console.log(accType);
        console.log('signed up');
    }

    return {email, handleEmailChange, phone, handlePhoneChange, password, handlePasswordChange, confPassword, handleConfPassword, accType, handleAccTypeChange, signupHandler}
}