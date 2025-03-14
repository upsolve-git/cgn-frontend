import React from "react";
import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";
import { useContactUs } from "../../../utils/hooks/useContactUs";

interface ContactUsSectionProps{}

const ContactUsSection: React.FC<ContactUsSectionProps> = ()=>{
    
    let {
        name, handleNameChange,
        email, handleEmailChange,
        content, handleContentChange,
        success,
        message,
        handleSubmit
    } = useContactUs()

    return (
        <div
        className="w-full h-fit py-3 mb-[10vh] relative font-montserrat text-xxs desktop:text-md">
            <img src="/image/wrapper/contactusbg.png" alt="#image"
            className="h-full w-full object-cover"/>
            <div
            className="w-[90%] max-w-[600px] bg-secondary top-[40%] left-1/2 -translate-y-[38%] -translate-x-[50%] absolute z-40 px-6 py-6 font-medium flex flex-col items-center tablet:my-9 tablet:py-6 tablet:-translate-y-[52%] mobile:w-[95%]">
                <h1
                className="text-lg text-primary tablet:text-xl desktop:text-2xl">
                    CONTACT US
                </h1> 
                {/* <h5
                className="text-s text-black tablet:text-xl desktop:text-2xl">
                We'd love to hear from you! Whether you have a question about our products, need help with an order, or just want to share your feedback, our team is here to assist you.
                </h5> */}
                <div
                className="grid grid-cols-3 grid-rows-3 gap-2 w-full mt-3 mobile:w-full">
                    <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange}
                    className="border border-primary rounded-md bg-secondarylight text-xxs col-span-3 px-2 py-1 tablet:col-span-1 tablet:text-xxs desktop:text-md"/>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange}
                    className="border border-primary rounded-md bg-secondarylight text-xxs col-span-3 px-2 py-1 tablet:col-span-2 tablet:text-xxs desktop:text-md"/>
                    <input type="text" name="query" placeholder="Query/Feedback" value={content} onChange={handleContentChange}
                    className="border border-primary rounded-md bg-secondarylight text-xxs col-span-3 px-2 py-1 tablet:row-span-2 tablet:text-xxs desktop:text-md"/>
                </div>
                <div
                className="w-fit h-fit my-2 tablet:my-5 ">
                    <ActionButton
                    label="Submit"
                    callbackFunc={handleSubmit}
                    />
                </div>
                {
                    message!==''&&
                    <div
                    className={`w-[60%] mx-auto py-2 text-center border-[0.1rem] border-${success?'green':'red'} text-${success?'green':'red'}`}>
                        {message}
                    </div>
                }
            </div>
        </div>
    )    
}

export default ContactUsSection