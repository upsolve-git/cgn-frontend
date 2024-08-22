import React from "react";
import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";

interface ContactUsSectionProps{}

const ContactUsSection: React.FC<ContactUsSectionProps> = ()=>{
    const submitHandler = ()=>{
        console.log('submitted');
        
    }
    return (
        <div
        className="w-full h-fit py-3 mb-[10vh] relative">
            <img src="/image/contactusbg.png" 
            className="h-[30vh] w-full tablet:h-[40vh]"/>
            <div
            className="bg-secondary top-[40%] left-1/2 -translate-y-[38%] -translate-x-[50%] absolute z-40 px-3 py-1 max-w-fit font-medium flex flex-col items-center tablet:my-9 tablet:py-6 tablet:-translate-y-[52%]">
                <h1
                className="text-lg text-primary tablet:text-xl desktop:text-2xl">
                    CONTACT US
                </h1>
                <div
                className="w-[60vw] grid grid-cols-3 grid-rows-3 gap-2 tablet:w-[60vw] tablet:mt-3">
                    <input type="text" name="name" placeholder="Name"
                    className="border border-primary rounded-md bg-secondarylight text-xxs col-span-3 px-1 py-1 tablet:col-span-1 tablet:text-xxs desktop:text-md"/>
                    <input type="email" name="email" placeholder="Email"
                    className="border border-primary rounded-md bg-secondarylight text-xxs col-span-3 px-1 py-1 tablet:col-span-2 tablet:text-xxs desktop:text-md"/>
                    <input type="text" name="query" placeholder="Query"
                    className="border border-primary rounded-md bg-secondarylight text-xxs col-span-3 px-1 py-1 tablet:row-span-2 tablet:text-xxs desktop:text-md"/>
                </div>
                {/* <button
                onClick={submitHandler}
                className="bg-primary text-white rounded-sm text-3xs px-2 py-1 my-2 tablet:text-xxs">
                    Submit Now
                </button> */}
                <div
                className="w-[30%] h-fit my-2 tablet:my-5">
                    <ActionButton
                    label="Submit"
                    callbackFunc={submitHandler}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactUsSection