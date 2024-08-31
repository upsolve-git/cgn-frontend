import React from "react";

interface StarProps{
    fillType: string
}

const Star: React.FC<StarProps> = ({
    fillType
})=>{
    if(fillType==='full'){
        return(
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.36416 1.83368C9.59958 1.26767 10.4014 1.26768 10.6368 1.83369L12.5732 6.48918C12.6724 6.7278 12.8968 6.89083 13.1544 6.91149L18.1804 7.31441C18.7915 7.36341 19.0392 8.12597 18.5737 8.52475L14.7444 11.805C14.5482 11.9731 14.4624 12.2369 14.5224 12.4882L15.6923 17.3927C15.8346 17.9891 15.1858 18.4603 14.6627 18.1408L10.3597 15.5126C10.1392 15.3779 9.86183 15.3779 9.64133 15.5126L5.33833 18.1408C4.81519 18.4603 4.1665 17.9891 4.30874 17.3927L5.47865 12.4882C5.53861 12.2369 5.4529 11.9731 5.25663 11.805L1.42735 8.52475C0.961789 8.12597 1.20956 7.36341 1.82062 7.31441L6.84662 6.91149C7.10422 6.89083 7.32862 6.7278 7.42787 6.48918L9.36416 1.83368Z" fill="url(#paint0_linear_101_339)"/>
            <defs>
                <linearGradient id="paint0_linear_101_339" x1="1.18555" y1="1.40918" x2="18.8155" y2="1.40918" gradientUnits="userSpaceOnUse">
                    <stop offset="0.4999" stop-color="#F3C63F"/>
                    <stop offset="0.5" stop-color="#F3C63F"/>
                </linearGradient>
            </defs>
        </svg>
        )
    }
    if(fillType==='empty'){
        return(
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.36416 0.833682C8.59958 0.267673 9.40141 0.267682 9.63683 0.83369L11.5732 5.48918C11.6724 5.7278 11.8968 5.89083 12.1544 5.91149L17.1804 6.31441C17.7915 6.36341 18.0392 7.12597 17.5737 7.52475L13.7444 10.805C13.5482 10.9731 13.4624 11.2369 13.5224 11.4882L14.6923 16.3927C14.8346 16.9891 14.1858 17.4603 13.6627 17.1408L9.35975 14.5126C9.13925 14.3779 8.86183 14.3779 8.64133 14.5126L4.33833 17.1408C3.81519 17.4603 3.1665 16.9891 3.30874 16.3927L4.47865 11.4882C4.53861 11.2369 4.4529 10.9731 4.25663 10.805L0.427347 7.52475C-0.0382113 7.12597 0.209564 6.36341 0.820622 6.31441L5.84662 5.91149C6.10422 5.89083 6.32862 5.7278 6.42787 5.48918L8.36416 0.833682Z" fill="url(#paint0_linear_101_368)"/>
            <defs>
                <linearGradient id="paint0_linear_101_368" x1="0.185547" y1="0.40918" x2="17.8155" y2="0.40918" gradientUnits="userSpaceOnUse">
                    <stop offset="0.4999" stop-color="#DEE1E6"/>
                    <stop offset="0.5" stop-color="#DEE1E6"/>
                </linearGradient>
            </defs>
        </svg> 
        )
    }
    if(fillType==='half'){
        return(
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.36416 1.83368C9.59958 1.26767 10.4014 1.26768 10.6368 1.83369L12.5732 6.48918C12.6724 6.7278 12.8968 6.89083 13.1544 6.91149L18.1804 7.31441C18.7915 7.36341 19.0392 8.12597 18.5737 8.52475L14.7444 11.805C14.5482 11.9731 14.4624 12.2369 14.5224 12.4882L15.6923 17.3927C15.8346 17.9891 15.1858 18.4603 14.6627 18.1408L10.3597 15.5126C10.1392 15.3779 9.86183 15.3779 9.64133 15.5126L5.33833 18.1408C4.81519 18.4603 4.1665 17.9891 4.30874 17.3927L5.47865 12.4882C5.53861 12.2369 5.4529 11.9731 5.25663 11.805L1.42735 8.52475C0.961789 8.12597 1.20956 7.36341 1.82062 7.31441L6.84662 6.91149C7.10422 6.89083 7.32862 6.7278 7.42787 6.48918L9.36416 1.83368Z" fill="url(#paint0_linear_101_377)"/>
                <defs>
                    <linearGradient id="paint0_linear_101_377" x1="1.18555" y1="1.40918" x2="18.8155" y2="1.40918" gradientUnits="userSpaceOnUse">
                        <stop offset="0.4999" stop-color="#F3C63F"/>
                        <stop offset="0.5" stop-color="#DEE1E6"/>
                    </linearGradient>
                </defs>
            </svg>
        )
    }
    return(
        <>
        </>
    )
}

export default Star