import React from 'react';
import ProductInfoCard from '../ui/organisms/ProductInfoCard/ProductInfoCard';

import { productsInfoList } from '../constants/productInfoLinks';

interface ProductInfoPageProps {}

const ProductInfoPage: React.FC<ProductInfoPageProps> = () => {
  return (
    <div
    className='mt-3 grid grid-cols-2 max-w-[80%] gap-4 mx-auto tablet:grid-cols-3 tablet:gap-6 desktop:grid-cols-4 tablet:mt-6 desktop:mt-9'>
      {
        productsInfoList.map(product=>
          <ProductInfoCard 
          productName={product.productName}
          infoLink={product.infoLink}
          />
        )
      }
        
    </div>
  );
};

export default ProductInfoPage;
