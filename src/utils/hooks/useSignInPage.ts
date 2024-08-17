import { useState } from "react";

import { loginReq } from "../../services/login";

import { isEmailValid } from "../../validations/emailValidation";

export const useSignInPage = ()=>{
    let [email, setEmail] = useState<string>('')
    let [emailErr, setEmailErr] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [passwordErr, setPasswordErr] = useState<string[]>([])
    let [accType, setAccType] = useState<string>('')

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
        if(!isEmailValid(e.target.value).res){
            setEmailErr(isEmailValid(e.target.value).err)
        }else{
            setEmailErr('')
        }
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }

    const handleAccTypeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setAccType(e.target.value)
    }

    const loginHandler = ()=>{
        console.log(accType);
        
        // if(!emailErr && !(passwordErr.length>0)){
            console.log('log in');
            
            loginReq(email, password)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        // }
    }

    return {email, emailErr, handleEmailChange, password, passwordErr, handlePasswordChange, accType, handleAccTypeChange, loginHandler}
}