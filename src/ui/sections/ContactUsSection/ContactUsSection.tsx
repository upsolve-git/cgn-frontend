import React from "react";

interface ContactUsSectionProps{}

const ContactUsSection: React.FC<ContactUsSectionProps> = ()=>{
    const submitHandler = ()=>{
        console.log('submitted');
        
    }
    return (
        <div
        className="bg-contactusBg bg-cover w-full h-fit py-3">
            <div
            className="bg-secondarylight max-w-fit mx-auto font-medium flex flex-col items-center px-4 py-2 tablet:my-9">
                <h1
                className="text-md text-primary tablet:text-xl ">
                    CONTACT US
                </h1>
                <div
                className="w-[60vw] grid grid-cols-3 grid-rows-3 gap-2 tablet:w-[30vw] tablet:mt-3">
                    <input type="text" name="name" placeholder="Name"
                    className="border border-primary rounded-md text-3xs col-span-3 px-1 py-1 tablet:col-span-1 tablet:text-xxs"/>
                    <input type="email" name="email" placeholder="Email"
                    className="border border-primary rounded-md text-3xs col-span-3 px-1 py-1 tablet:col-span-2 tablet:text-xxs"/>
                    <input type="text" name="query" placeholder="Query"
                    className="border border-primary rounded-md text-3xs col-span-3 px-1 py-1 tablet:row-span-2 tablet:text-xxs"/>
                </div>
                <button
                onClick={submitHandler}
                className="bg-primary text-white rounded-sm text-3xs px-2 py-1 my-2 tablet:text-xxs">
                    Submit Now
                </button>
            </div>
        </div>
    )
}

export default ContactUsSection