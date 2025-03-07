import { useState } from "react";
import { sendFeedback } from "../../services/contact";

export const useContactUs = ()=>{
    let [name, setName] = useState<string>('')
    let [email, setEmail] = useState<string>('')
    let [content, setContent] = useState<string>('')
    let [success, setSuccess] = useState<boolean>(false)
    let [message, setMessage] = useState<string>('')

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void=>{
        setName(event.target.value)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void=>{
        setEmail(event.target.value)
    }

    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>): void =>{
        setContent(event.target.value)
    }

    const handleSubmit = async () => {
        console.log('submit');
        try {
            const res = await sendFeedback({
                name: name,
                email: email,
                feedback: content
            });
            if (res.status === 200) {
                setSuccess(true);
                setMessage('Successfully submitted');
            } else {
                setSuccess(false);
                setMessage('Submit failed');
            }
        } catch (error: any) {
            console.error("Error submitting feedback:", error);
            if (error.response) {
                if (error.response.status === 404) {
                    setMessage("Feedback endpoint not found (404)");
                } else {
                    setMessage(`Submit failed: ${error.response.statusText}`);
                }
            } else {
                setMessage("Network error or unexpected error occurred");
            }
            setSuccess(false);
        }
    }

    return {
        name,
        handleNameChange,
        email,
        handleEmailChange,
        content,
        handleContentChange,
        success,
        message,
        handleSubmit
    }
}