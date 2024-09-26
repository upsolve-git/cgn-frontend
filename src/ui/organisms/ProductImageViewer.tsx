import React from "react";

interface ProductImageViewerProps {
    productName: string,
    productImages: string[]
}

const ProductImageViewer: React.FC<ProductImageViewerProps> = ({
    productName,
    productImages
})=>{
    const gridCols = productImages.length>4?4:productImages.length
    console.log(productImages[0]);
    
    return(
        <div className="w-full max-w-md aspect-square">
            <div className="w-full p-8 bg-secondarylight rounded-md overflow-hidden">
                <img
                    // src={productImages[0] || "/image/wrapper/stockpolish.png"}
                    src={`${productImages[0]}?${new Date().getTime()}`}
                    alt={productName}
                    className="max-h-full max-w-full object-contain"
                />
                {
                    productImages.length>1&&
                    <div
                    className={`grid grid-cols-${gridCols} h-[10%]`}>
                        {
                            productImages.map(img=>
                                <img 
                                src={img}
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