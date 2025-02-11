import React, { useState } from "react";

interface ProductImageViewerProps {
    productName: string,
    productImages: string[]
    handleImageLoad : () => void
}

const ProductImageViewer: React.FC<ProductImageViewerProps> = ({
    productName,
    productImages,
    handleImageLoad
})=>{
    const gridCols = productImages.length>4?4:productImages.length
    console.log(productImages[0]);
    let [displayImg, setDisplayImg] = useState<string>(productImages[0])

    return(
        <div className="w-full max-w-md max-h-[20rem]">
            <div className="w-full p-8 bg-secondarylight rounded-md overflow-auto">
                <img
                    // src={productImages[0] || "/image/wrapper/stockpolish.png"}
                    src={`${displayImg}?${new Date().getDate()}`}
                    alt={productName}
                    onLoad={handleImageLoad}
                    className="h-60 w-40 tablet:h-80 tablet:w-44 desktop:h-96 desktop:w-80 m-auto"
                />
                {
                    productImages.length>1&&
                    <div
                    className={`grid grid-cols-${gridCols} w-full gap-2 h-[10%] place-items-stretch`}>
                        {
                            productImages.map(img=>
                                <img 
                                src={img}
                                onClick={()=>setDisplayImg(img)}
                                alt={productName}
                                />
                            )
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductImageViewer