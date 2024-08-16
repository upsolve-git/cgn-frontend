import { useState } from "react";

import { loginReq } from "../../services/auth/login";

export const useSignInPage = ()=>{
    let [email, setEmail] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [accType, setAccType] = useState<string>('')

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }

    const handleAccTypeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setAccType(e.target.value)
    }

    const loginHandler = ()=>{
        console.log(accType);
        
        loginReq(email, password)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return {email, handleEmailChange, password, handlePasswordChange, accType, handleAccTypeChange, loginHandler}
}