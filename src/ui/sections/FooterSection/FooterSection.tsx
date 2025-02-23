import React from "react";
import Logo from "../../atoms/Logo/Logo";

interface FooterSectionProps{}

const FooterSection: React.FC<FooterSectionProps> = ()=>{
    return (
        <footer>

            <div
            className=" bg-primary text-white text-xxs px-4 py-4 tablet:px-[10%] tablet:py-[3%] tablet:text-xs desktop:px-[10%] desktop:text-sm">
                <div
                className="flex justify-between mb-1 tablet:mb-5">
                    <Logo 
                    styles="w-16 h-16 tablet:w-28 tablet:h-28"
                    fill="#FFFFFF"/>
                    <div
                    className="grid grid-cols-2 max-w-40% tablet:grid-rows-1 tablet:grid-cols-2 tablet:min-w-[80%] tablet:gap-3">
                        <div
                        className="">
                            <p
                            className="text-sm font-medium tablet:text-md desktop:text-xl">Menu</p>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Products</li>
                            </ul>
                        </div>
                        <div>
                            <p
                            className="text-sm font-medium tablet:text-md desktop:text-xl">Contact</p>
                            <ul>
                                <li>
                                    <a href="mailto:info@canadiangelnails.com">
                                        info@canadiangelnails.com
                                    </a>
                                </li>
                                <li>+1 (437)-757-8889</li>
                            </ul>
                        </div>
                        <div>
                            <p
                            className="text-sm font-medium tablet:text-md desktop:text-xl">
                                Address
                            </p>
                            <p>
                                PO Box 2900 Station A,<br/>
                                Sudbury, ON<br/>
                                P3A 5J3
                            </p>

                        </div>
                        <div
                        className="col-span-2 tablet:col-span-1 desktop:max-w-[300px]">
                            <p
                            className="text-sm font-medium tablet:text-md desktop:text-xl">Social</p>
                            <ul
                            className="flex justify-between items-center max-w-[60%] tablet:min-w-[80%] ">
                                <li
                                className="bg-secondarylight rounded-full w-fit max-h-fit px-3 py-[0.55rem]">
                                    <a target="_blank" href="">
                                        {/* facebook svg */}
                                        <svg width="14" height="20" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.66667 5.33333H0V8H2.66667V16H6.66667V8H9.09333L9.33333 5.33333H6.66667V4.22267C6.66667 3.58533 6.79467 3.33333 7.41067 3.33333H9.33333V0H6.128C3.73067 0 2.66667 1.056 2.66667 3.07733V5.33333Z" fill="#D8B192"/>
                                        </svg>
                                        {/* facebook svg */}
                                    </a>
                                </li>
                                <li
                                className="bg-secondarylight rounded-full w-fit max-h-fit p-3">
                                    <a target="_blank" href="https://www.pinterest.com/canadiangelnails/">
                                        {/* pinterest svg */}
                                        <svg width="18" height="18" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.998 511.998" fill="#D8B192"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M405.017,52.467C369.774,18.634,321.001,0,267.684,0C186.24,0,136.148,33.385,108.468,61.39 c-34.114,34.513-53.675,80.34-53.675,125.732c0,56.993,23.839,100.737,63.76,117.011c2.68,1.098,5.377,1.651,8.021,1.651 c8.422,0,15.095-5.511,17.407-14.35c1.348-5.071,4.47-17.582,5.828-23.013c2.906-10.725,0.558-15.884-5.78-23.353 c-11.546-13.662-16.923-29.817-16.923-50.842c0-62.451,46.502-128.823,132.689-128.823c68.386,0,110.866,38.868,110.866,101.434 c0,39.482-8.504,76.046-23.951,102.961c-10.734,18.702-29.609,40.995-58.585,40.995c-12.53,0-23.786-5.147-30.888-14.121 c-6.709-8.483-8.921-19.441-6.222-30.862c3.048-12.904,7.205-26.364,11.228-39.376c7.337-23.766,14.273-46.213,14.273-64.122 c0-30.632-18.832-51.215-46.857-51.215c-35.616,0-63.519,36.174-63.519,82.354c0,22.648,6.019,39.588,8.744,46.092 c-4.487,19.01-31.153,132.03-36.211,153.342c-2.925,12.441-20.543,110.705,8.618,118.54c32.764,8.803,62.051-86.899,65.032-97.713 c2.416-8.795,10.869-42.052,16.049-62.495c15.817,15.235,41.284,25.535,66.064,25.535c46.715,0,88.727-21.022,118.298-59.189 c28.679-37.02,44.474-88.618,44.474-145.282C457.206,127.983,438.182,84.311,405.017,52.467z"></path> </g></svg>
                                        {/* pinterest svg */}
                                    </a>
                                </li>
                                <li
                                className="bg-secondarylight rounded-full w-fit max-h-fit p-3">
                                    <a target="_blank" href="">
                                        {/* instagram svg */}
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C5.82667 0 5.556 0.00933333 4.70133 0.0493333C1.79467 0.182667 0.181333 1.79467 0.048 4.70133C0.00933333 5.556 0 5.828 0 8C0 10.1733 0.00933333 10.4453 0.048 11.2987C0.181333 14.204 1.79467 15.8187 4.70133 15.952C5.556 15.9907 5.82667 16 8 16C10.1733 16 10.4453 15.9907 11.3 15.952C14.2013 15.8187 15.8213 14.2067 15.952 11.2987C15.9907 10.4453 16 10.1733 16 8C16 5.828 15.9907 5.556 15.952 4.70133C15.8213 1.79867 14.2067 0.181333 11.3 0.0493333C10.4453 0.00933333 10.1733 0 8 0ZM8.00007 1.44238C10.1361 1.44238 10.3894 1.45038 11.2334 1.48905C13.4027 1.58772 14.4134 2.61572 14.5134 4.76772C14.5507 5.61172 14.5587 5.86372 14.5587 7.99972C14.5587 10.1357 14.5507 10.389 14.5134 11.2317C14.4134 13.3824 13.4041 14.413 11.2334 14.5117C10.3894 14.549 10.1374 14.5584 8.00007 14.5584C5.86407 14.5584 5.61074 14.5504 4.76807 14.5117C2.59474 14.4117 1.58807 13.3797 1.48807 11.2317C1.45074 10.389 1.44141 10.1357 1.44141 7.99972C1.44141 5.86372 1.45074 5.61038 1.48807 4.76772C1.58674 2.61438 2.59741 1.58638 4.76807 1.48772C5.61074 1.44905 5.86407 1.44238 8.00007 1.44238ZM3.89209 7.9996C3.89209 5.73027 5.73209 3.8916 8.00009 3.8916C10.2681 3.8916 12.1081 5.7316 12.1081 7.9996C12.1081 10.2689 10.2681 12.1076 8.00009 12.1076C5.73209 12.1076 3.89209 10.2689 3.89209 7.9996ZM7.99992 10.6663C6.52659 10.6663 5.33325 9.47301 5.33325 7.99967C5.33325 6.52767 6.52659 5.33301 7.99992 5.33301C9.47192 5.33301 10.6679 6.52634 10.6679 7.99967C10.6679 9.47301 9.47192 10.6663 7.99992 10.6663ZM11.3093 3.73067C11.3093 3.2 11.74 2.77067 12.2693 2.77067C12.8013 2.77067 13.2307 3.2 13.2307 3.73067C13.2307 4.26133 12.8 4.69067 12.2693 4.69067C11.7387 4.69067 11.3093 4.26 11.3093 3.73067Z" fill="#D8B192"/>
                                        </svg>
                                        {/* instagram svg */}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div
                className="flex justify-between tablet:mt-4">
                    <span>
                        Copyright 2024
                    </span>
                    <span>
                        Terms of use
                    </span>
                    <span>
                        Privacy Policy
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection