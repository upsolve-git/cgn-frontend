import { useState } from "react";

import { isEmailValid } from "../../validations/emailValidation";
import { isPasswordValid } from "../../validations/passwordValidation";

export const useSignUpPage = ()=>{
    let [email, setEmail] = useState<string>('')
    let [emailErr, setEmailErr] = useState<string>('')
    let [phone, setPhone] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [passwordErr, setPasswordErr] = useState<string[]>([])
    let [confPassword, setConfPassword] = useState<string>('')
    let [confPasswordErr, setConfPasswordErr] = useState<string[]>([])
    let [accType, setAccType] = useState<string>('')

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
        if(!isEmailValid(email).res){
            setEmailErr(isEmailValid(email).err)
        }else{
            setEmailErr('')
        }
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPhone(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
        if(isPasswordValid(password)){
            setPasswordErr(isPasswordValid(password))
        }else{
            setPasswordErr([])
        }
    }

    const handleConfPassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setConfPassword(e.target.value)
        if(confPassword===password){
            setConfPasswordErr(['Must match with password'])
        }else{
            setConfPasswordErr([])
        }
    }

    const handleAccTypeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setAccType(e.target.value)
    }

    const signupHandler = ()=>{
        console.log(phone?phone:null);
        console.log(accType);
        console.log('signed up');
    }

    return {email, emailErr, handleEmailChange, phone, handlePhoneChange, password, passwordErr, handlePasswordChange, confPassword, confPasswordErr, handleConfPassword, accType, handleAccTypeChange, signupHandler}
}