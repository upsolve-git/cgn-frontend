import React, { useState } from "react";

import Navbar from "../ui/organisms/Navbar/Navbar";
import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import { useAdminPage } from "../utils/hooks/useAdminPage";
import ProductPreviewList from "../ui/organisms/ProductPreviewList/ProductPreviewList";
import ArrowButton from "../ui/atoms/buttons/ArrowButton/ArrowButton";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ReviewsSection from "../ui/sections/ReviewsSection/ReviewsSection";
import { Product } from "../interfaces/Product";
import { color } from "framer-motion";
import { useCartPage } from "../utils/hooks/useCartPage";


interface ProductDetailPageProps{}

const ProductDetailPage:React.FC<ProductDetailPageProps> = ()=>{
    const { id } = useParams<{ id: string }>(); // This will capture the id from the URL
    const navigate = useNavigate()

    let {isMobile} = useMediaWidth()
    let {products} = useAdminPage()
    let {handleAddToCart} = useCartPage()
    // let colors = ["green", "red"]
    let product = products.find(product => product.product_id === Number(id)) || products[1]
    const [quantity, setQuantity] = useState<number>(1);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity < 14) {
                return prevQuantity + 1;
            }
            return prevQuantity;
        });
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }; 

    const filterColors = (product: Product) => {
        const colorMap: { [color_name: string]: { color: string; shadesCodeMapping: { shade: string, code: string, id : number}[] } } = {};
        console.log(product)
        product.colors.forEach(color => {
          // If the color is not already in the map, initialize it
          if (!colorMap[color.color_name]) {
            colorMap[color.color_name] = {
              color: color.color_name,
              shadesCodeMapping: []
            };
          }
      
          // Check if this particular shade and code combination is unique
          const exists = colorMap[color.color_name].shadesCodeMapping.some(
            (shadeCode) => shadeCode.shade === color.shade_name && shadeCode.code === color.code
          );
      
          // If the combination is unique, add it
          if (!exists) {
            colorMap[color.color_name].shadesCodeMapping.push({
              shade: color.shade_name,
              code: color.code,
              id : color.color_id
            });
          }
        });
      
        return colorMap;
      };

    let  colorMap: { [color_name: string]: { color: string; shadesCodeMapping: { shade: string, code: string, id : number}[] } } = {};
    if(products.length !== 0) {
        colorMap = filterColors(product)
    } 
    console.log(colorMap)

    const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedShades, setSelectedShades] = useState<{ shade: string; code: string; id : number }[]>([]);
  const [selectedShadeDetails, setSelectedShadeDetails] = useState<{shade : string; code: string; id : number}>({shade:"NA", code:"NA", id : 3});

  // Function to handle the selection of a shade
  const handleShadeSelect = (shade : {shade : string; code: string; id : number}) => {
    setSelectedShadeDetails(shade);
  };
  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const colorKey = event.target.value;
    setSelectedColor(colorKey);
    setSelectedShades(colorMap[colorKey]?.shadesCodeMapping || []);
  };

    return(
        <div
        className="overflow-scroll bg-secondary">
            <Navbar />
            {products.length &&  (
            <div>
                <div className="grid grid-cols-1 place-items-center m-10 tablet:grid-cols-2 tablet:m-20">
                    <div className="w-full max-w-md aspect-square"> 
                        <div className="h-full w-full p-8 bg-secondarylight rounded-md flex items-center justify-center overflow-hidden">
                            <img 
                                src={product?.images[0] || "/image/wrapper/stockpolish.png"} 
                                alt={product.name} 
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    </div>
                    <div className="text-center w-[80%] tablet:text-left"> 
                        <h1 className="font-bold text-xl mb-4">{product.name}</h1>
                        <h2 className="mb-3">{product.description}</h2> 
                        <p className="mb-6">
                        <span
                        className="text-md text-primary font-semibold desktop:text-xl pr-4">
                            ${product.discounted_price}
                        </span>
                        <span
                        className="text-darkgray text-xs desktop:text-md m">
                            <s>${product.price}</s>
                        </span>
                        </p> 

                        {/* <p className="flex mb-4 justify-center tablet:justify-start">
                            <p className="font-bold mr-1">368</p> 
                            <p className="text-darkgray mr-24">reviews</p> 
                            <p className="font-bold mr-1">86</p>
                            <p className="text-darkgray mr-24">sold</p> 
                        </p>  */}

                        <p className="flex mb-4 justify-center tablet:justify-start">
                            <IoIosCheckmarkCircleOutline style={{color:"green", fontSize:"2em"}} className="mr-2"/> 
                            <p className="mt-1">Free shipping on orders over $49USD</p>
                        </p>

                        { product.categories[0] === "Nail Polish" && <label className="font-bold text-sm">Choose color</label> }
                        { product.categories[0] === "Nail Polish" &&  
                            
                            <select value={selectedColor} onChange={handleColorChange} className="w-full border rounded-md px-3 py-2 mb-4 bg-secondarylight">
                                <option value="">Choose a color</option>
                                {Object.keys(colorMap).map((colorKey) => (
                                <option key={colorKey} value={colorKey} style={{ backgroundColor: colorMap[colorKey].shadesCodeMapping[0].code }}>
                                    {colorKey}
                                </option>
                                ))}
                            </select>
        
                         } 
                         {selectedShades.length > 0 && (
                            <div className="space-y-2">
                            <label className="font-bold text-sm">Select a shade</label>
                            <div className="flex overflow-x-auto space-x-2">
                                {selectedShades.map((shade) => (
                                    <div key={shade.code} className="items-center justify-evenly">
                                    <div
                                        className="w-12 h-12 border border-black mb-2 "
                                        style={{ backgroundColor: shade.code }}
                                        onClick={() => handleShadeSelect(shade)}
                                    ></div>
                                    <span>{shade.shade}</span>
                                    </div>
                                ))}
                                </div>

                            </div>
                        )} 
                        {selectedShadeDetails.id!=3 && (
                            <div>
                                <label className="font-bold text-sm">Selected shade : </label>
                                <label className="font-bold text-sm">{selectedShadeDetails.shade}</label>
                            </div>
                        )}

                        { product.categories[0] !== "Nail Polish" && 
                            <p className="flex mb-4 justify-center tablet:justify-start">
                            <IoIosCheckmarkCircleOutline style={{color:"green", fontSize:"2em"}} className="mr-2"/> 
                            <p className="mt-1">Free + easy returns</p>
                        </p>
                        }

                        <label className="font-bold text-sm">Quantity</label>
                        <div className="flex items-center justify-center mb-4 tablet:justify-start"> 
                            <button
                                className="w-8 h-8 bg-secondarylight rounded flex items-center justify-center text-lg font-bold hover:bg-gray-300 disabled:bg-gray-100"
                                onClick={decreaseQuantity}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <span className="mx-3 text-lg font-bold">{quantity}</span>
                            <button
                                className="w-8 h-8 bg-secondarylight rounded flex items-center justify-center text-lg font-bold hover:bg-gray-300 disabled:bg-gray-100"
                                onClick={increaseQuantity}
                                disabled={quantity >= 10}
                            >
                                +
                            </button>
                        </div>

                        <div className="flex space-x-4">
                            <button
                            className="h-full w-[50%] bg-white flex items-center justify-center text-md text-primary"
                            onClick={()=> selectedShadeDetails && handleAddToCart(product, quantity, selectedShadeDetails.id)}>
                                <FaCartPlus style={{color:" rgb(194 111 45)"}} className="mr-2"/>
                                Add to Cart
                            </button>
                            <button
                            className="h-full w-[50%] bg-primary flex items-center justify-center text-md text-white"
                            onClick={()=> navigate('/cart')}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>  
                <p className="text-primary font-bold text-center my-20">Related products</p>
                {
                    products.length && 
                    <ProductPreviewList 
                    ishomepage = {false}
                    products={products}
                    isBestSeller={true}/>
                }
            </div>)}
            <ReviewsSection />
            <FooterSection />
        </div>
    )
}

export default ProductDetailPage