import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { loginReq } from "../../services/login";

import { isEmailValid } from "../../validations/emailValidation";
import { HOME_PAGE } from "../../constants/routes";

export const useSignInPage = ()=>{
    let [email, setEmail] = useState<string>('')
    let [emailErr, setEmailErr] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [accType, setAccType] = useState<string>('')
    let [loginErr, setLoginErr] = useState<string>('')

    const navigate = useNavigate();

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

    const checkValues = () => {
        return email == "" || password == "" || accType == ""
    }

    const loginHandler = async()=>{
        console.log(accType);
        
            console.log('log in');
            
            await loginReq(email, password)
            .then(res=>{
                console.log("inside signin success", res)
                setLoginErr('')
                navigate(HOME_PAGE)
            })
            .catch(err=>{
                console.log(err)
                setLoginErr("Error occured, Please try again")
            })

        // }
    }

    return {email, emailErr, handleEmailChange, password, handlePasswordChange, accType, handleAccTypeChange, loginHandler, loginErr, checkValues}
}