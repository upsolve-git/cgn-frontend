import React from "react";

interface PreviewAddToCartButtonProps{}

const PreviewAddToCartButton: React.FC<PreviewAddToCartButtonProps>= ()=>{
    return(
        <button
        className="bg-white p-1 w-5 h-5 rounded-full tablet:w-8 tablet:h-8 desktop:w-11 desktop:h-11">
            {/* <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_101_616)">
                    <path d="M3.42857 10.7146C3.66526 10.7146 3.85714 10.5227 3.85714 10.286C3.85714 10.0493 3.66526 9.85742 3.42857 9.85742C3.19188 9.85742 3 10.0493 3 10.286C3 10.5227 3.19188 10.7146 3.42857 10.7146Z" fill="#323031"/>
                    <path d="M9.42857 10.7146C9.66526 10.7146 9.85714 10.5227 9.85714 10.286C9.85714 10.0493 9.66526 9.85742 9.42857 9.85742C9.19188 9.85742 9 10.0493 9 10.286C9 10.5227 9.19188 10.7146 9.42857 10.7146Z" fill="#323031"/>
                    <path d="M3.42857 10.7146C3.66526 10.7146 3.85714 10.5227 3.85714 10.286C3.85714 10.0493 3.66526 9.85742 3.42857 9.85742C3.19188 9.85742 3 10.0493 3 10.286C3 10.5227 3.19188 10.7146 3.42857 10.7146Z" stroke="#323031" stroke-width="1.71429" stroke-miterlimit="10" stroke-linecap="square"/>
                    <path d="M9.42857 10.7146C9.66526 10.7146 9.85714 10.5227 9.85714 10.286C9.85714 10.0493 9.66526 9.85742 9.42857 9.85742C9.19188 9.85742 9 10.0493 9 10.286C9 10.5227 9.19188 10.7146 9.42857 10.7146Z" stroke="#323031" stroke-width="1.71429" stroke-miterlimit="10" stroke-linecap="square"/>
                    <path d="M2.91428 3.85672L10.2857 3.85672L9.56656 7.4533C9.48642 7.85401 9.13456 8.14244 8.72613 8.14244L4.17899 8.14244C3.74956 8.14244 3.38613 7.82444 3.32956 7.39844L2.57142 1.71387L1.28571 1.71387" stroke="#323031" stroke-width="1.71429" stroke-miterlimit="10" stroke-linecap="square"/>
                </g>
                <defs>
                    <clipPath id="clip0_101_616">
                        <rect width="12" height="12" fill="white"/>
                    </clipPath>
                </defs>
            </svg> */}
            <img src="/image/shopcartbutton.png" alt="" />
        </button>
    )
}

export default PreviewAddToCartButton