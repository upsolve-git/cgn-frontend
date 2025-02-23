import React from 'react';

interface ProductInfoCardProps {
    productName: string,
    infoLink: string
}

const ProductInfoCard: React.FC<ProductInfoCardProps> = (
    {productName, infoLink}
) => {
  return (
    <div
    className='bg-white text-sm max-h-fit shadow-md p-3 text-center tablet:p-5 tablet:text-md desktop:text-lg'>
        <p
        className='font-semibold'>
            {productName}
        </p>
        {/* <p
        className='text-xs'>product information :</p> */}
        <a href={infoLink}
        className='text-primary underline'>info.pdf</a>
    </div>
  );
};

export default ProductInfoCard;
