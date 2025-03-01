import React from "react";
import { Product } from "../../../interfaces/Product";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

interface ProductPreviewCardProps {
  product: Product
  isBestSeller: boolean
  ishomepage: boolean
}

const ProductPreviewCard: React.FC<ProductPreviewCardProps> = ({
  product,
  isBestSeller,
  ishomepage
}) => {
  const navigate = useNavigate()

  return (
    <div className="font-poppins w-full max-w-[250px] h-[350px] tablet:h-[400px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
      <div className="relative h-[65%] overflow-hidden">
        <img
          // src={`${product.images[0]}?${new Date().getDate()}`}
          src={`${product.images[0]}`}
          alt={product?.name || "Product image"}
          className="absolute p-8 w-full h-full"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/image/mainsection/color1/nailpolish.png';
          }}
        />
      </div>
      <div className="flex-grow bg-secondarylight p-3 flex flex-col justify-between max-h-[35%]">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-sm line-clamp-1 flex-1 pr-2">
              {product?.name || "Lorem Ipsum"}
            </h3>
            {/* <span className="text-[10px] text-white bg-primary rounded-full py-1 px-2 whitespace-nowrap ml-2">
              {isBestSeller ? 'Best Seller' : 'New Product'}
            </span> */}
          </div>
          <p className="text-xs text-black line-clamp-1 mb-1">
            {product?.description || "Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
  {(product.categories[0] === "Nail Polish"|| product.name === "Electric Beauty Bed/Podiatry chair") && (
    <span className="text-md font-semibold truncate">
      ${product?.price}
    </span>
  )}

  <button
    className="p-2 rounded-full bg-white shadow-sm flex-shrink-0"
    onClick={() => {
      navigate(`/productDetail/${product?.product_id || 1}`);
      window.location.reload();
    }}
  >
    <FiShoppingCart className="text-sm text-primary" />
  </button>
</div>

      </div>
    </div>
  )
}

export default ProductPreviewCard
