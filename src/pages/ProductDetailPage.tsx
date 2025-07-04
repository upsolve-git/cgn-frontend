import React, { useState, useEffect } from "react";

import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import { useAdminPage } from "../utils/hooks/useAdminPage";
import ProductPreviewList from "../ui/organisms/ProductPreviewList/ProductPreviewList";
import { FaCartPlus } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Product } from "../interfaces/Product";
import { useCartPage } from "../utils/hooks/useCartPage";
import CommonButton from "../ui/atoms/buttons/CommonButton/CommonButton";
import ProductImageViewer from "../ui/organisms/ProductImageViewer";
import ReviewsSection from "../ui/sections/ReviewsSection/ReviewsSection";
import { log } from "console";


interface ProductDetailPageProps { }

const ProductDetailPage: React.FC<ProductDetailPageProps> = () => {
    const { id } = useParams<{ id: string }>(); // This will capture the id from the URL
    const navigate = useNavigate()

    let { isMobile } = useMediaWidth()
    let { products } = useAdminPage()
    let { handleAddToCart } = useCartPage()
    // let colors = ["green", "red"]
    let product = products.find(product => product.product_id === Number(id)) || products[1]
    const [quantity, setQuantity] = useState<number>(1);
    // console.log(product?.images)

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
        const colorMap: { [color_name: string]: { color: string; shadesCodeMapping: { shade: string, code: string, id: number }[] } } = {};
        product.colors.forEach(color => {
            if (!colorMap[color.color_name]) {
                colorMap[color.color_name] = {
                    color: color.color_name,
                    shadesCodeMapping: []
                };
            }

            const exists = colorMap[color.color_name].shadesCodeMapping.some(
                (shadeCode) => shadeCode.shade === color.shade_name && shadeCode.code === color.code
            );

            if (!exists) {
                colorMap[color.color_name].shadesCodeMapping.push({
                    shade: color.shade_name,
                    code: color.code,
                    id: color.color_id
                });
            }
        });

        return colorMap;
    };

    let colorMap: { [color_name: string]: { color: string; shadesCodeMapping: { shade: string, code: string, id: number }[] } } = {};
    if (products.length !== 0) {
        colorMap = filterColors(product)
    }
    // console.log(colorMap)

    const [selectedColor, setSelectedColor] = useState<string>('');
    const [selectedShades, setSelectedShades] = useState<{ shade: string; code: string; id: number }[]>([]);
    const [selectedShadeDetails, setSelectedShadeDetails] = useState<{ shade: string; code: string; id: number }>({ shade: "NA", code: "NA", id: 1 });
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        if (product && product.images && product.images.length > 0) {
            setCurrentImageIndex(0);
        }
    }, [product]);

    useEffect(() => {
        if (selectedShades.length > 0) {
            // Automatically select the first shade (0th index)
            handleShadeSelect(selectedShades[0]);
        }
    }, [selectedShades]);
    

    const handleShadeSelect = (shade: { shade: string; code: string; id: number }) => {
        setSelectedShadeDetails(shade);
    };
    const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // console.log('handle color change func');
        
        const colorKey = event.target.value;
        // console.log('colorKey:',  colorKey)
        setSelectedColor(colorKey);
        if (colorKey === "") {
            setSelectedShades([]);
            setCurrentImageIndex(0);
            return;
        }
        setSelectedShades(colorMap[colorKey]?.shadesCodeMapping || []);
        const imageIndex = Number(colorKey);
        // console.log('imageIndex:',  imageIndex);
        // console.log('length: ',product.images.length)
        let colorMapArray = Object.values(colorMap);
        let minColor = Number(colorMapArray[0].color);
        // console.log('minColor:', minColor)
        let maxColor = Number(colorMapArray[colorMapArray.length - 1].color);
        const selectedColor = Number(colorKey);
        // console.log('selectedColor:', selectedColor)
        if (
            imageIndex >= minColor &&
            imageIndex <= maxColor
        ) {
            const polishImageIndex = selectedColor - minColor + 1;
            // console.log('Polish image index:', polishImageIndex);
            setCurrentImageIndex(polishImageIndex);
        } else {
            setCurrentImageIndex(0);
        }
        // console.log('if failed')
        // console.log('img idx: ',imageIndex)
    };
    const [isImageLoaded, setImageLoaded] = useState(false);

    const handleImageIndexChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = parseInt(event.target.value);
        setCurrentImageIndex(selectedIndex);
    };

    const handleImageChange = (newIndex: number) => {
        setCurrentImageIndex(newIndex);

        if (newIndex === 0) {
            setSelectedColor("");
            setSelectedShades([]);
            return;
        }
        
        // When image changes via arrows, also update the selected color in dropdown
        const colorIndex = newIndex - 1;
        if (colorIndex >= 0 && colorIndex < Object.keys(colorMap).length) {
            const colorKey = Object.keys(colorMap)[colorIndex];
            setSelectedColor(colorKey);
            const shades = colorMap[colorKey]?.shadesCodeMapping || [];
            setSelectedShades(shades);
        }
        // console.log('selewcted color:',selectedColor)
    }

    const handleImageLoad = () => {
        setImageLoaded(true);
      };
    
    
    return (
        <div
            className="bg-secondary my-3 tablet:my-16">
                {/* {!isImageLoaded && <p>Loading...</p>} */}
            {products.length && (
                <div className="pb-10">
                    <div className="w-[80%] m-auto tablet:grid tablet:grid-cols-2">
                        <div
                        className="w-full">
                            {
                                product &&
                                <ProductImageViewer 
                                handleImageLoad={handleImageLoad}
                                productName={product.name}
                                productImages={product.images}
                                externalIndex={currentImageIndex}
                                onImageChange={handleImageChange}
                                />
                            }
                        </div>
                        <div
                        className='tablet:ml-10 desktop:ml-0'>
                            <div className="tablet:text-left">
                                <h1 className="font-medium text-lg desktop:text-2xl my-2 mb-4">{product.name}</h1>
                                {
                                    product.name === "Electric Beauty Bed/Podiatry chair" &&
                                    <p className="mb-6">
                                        <span
                                            className="text-lg text-primary font-semibold desktop:text-xl pr-4">
                                              ${localStorage.getItem('isMember')==='true'?product?.discounted_business_price:product?.price}
                                        </span>
                                        {/* <span
                                            className="text-darkgray text-sm desktop:text-md">
                                            <s>${product.price}</s>
                                        </span> */}
                                    </p>
                                }
                                {
                                    // product.categories[0] === "Nail Polish" &&
                                    (product.categories[0]!=='Machine' && product.name!=='Electric Beauty Bed/Podiatry chair') &&
                                    <p className="mb-6">
                                        <span
                                            className="text-lg text-primary font-semibold desktop:text-xl pr-4">
                                             ${localStorage.getItem('isMember')==='true'?product?.discounted_business_price:product?.price}
                                        </span>
                                        {/* <span
                                            className="text-darkgray text-sm desktop:text-md">
                                            <s>${product.price}</s>
                                        </span> */}
                                    </p>
                                }
                                <h2 className="text-xs mb-3 desktop:text-md">{product.description}
                                    <br/>
                                    {/* <a
                                    className="text-primary underline" 
                                    href="/productsinfo">Product Information</a> */}
                                    <br/>
                                    {localStorage.getItem('isMember')==='true' ? 'Return the bottle to get $11 refund':''}
                                </h2>
                                {
                                    // product.categories[0] === "Nail Polish" &&
                                    product.categories[0]!=='Machine' &&
                                    <div
                                        className="text-xs desktop:text-lg my-3">
                                        <label>Choose color</label>
                                        <select 
                                        value={selectedColor} 
                                        onChange={handleColorChange} 
                                        className="w-full border rounded-md px-3 py-2 bg-secondarylight">
                                            <option value="">Choose a color</option>
                                            {Object.keys(colorMap).map((colorKey) => (
                                                <option key={colorKey} value={colorKey} style={{ backgroundColor: colorMap[colorKey].shadesCodeMapping[0].code }}>
                                                    {colorKey}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                }
                                {/* <div
                                className="my-3">
                                    {
                                        selectedShades.length > 0 && (
                                            <div className="space-y-2 text-xs">
                                                <label className="">Select a shade</label>
                                                <div className="flex overflow-x-auto space-x-2">
                                                    {selectedShades.map((shade) => (
                                                        <div key={shade.code} className="columns-[70px] flex flex-col items-center">
                                                            <div
                                                                className={`w-8 h-8 mb-2 rounded-full ${selectedShadeDetails.code === shade.code ? 'ring-2 ring-primary' : ''}`}
                                                                style={{ backgroundColor: shade.code }}
                                                                onClick={() => handleShadeSelect(shade)}
                                                            ></div>
                                                            <span>{shade.shade}</span>
                                                        </div>
                                                    ))}
                                                        </div>
                                            </div>
                                        )
                                    }
                                    {
                                        selectedShadeDetails.id != 1 && (
                                            <div>
                                            <label className="font-bold text-sm">Selected shade : </label>
                                            <label className="font-bold text-sm">{selectedShadeDetails.shade}</label>
                                            </div>
                                    )}
                                </div> */}
                                {
                                    product.categories[0] !== "Machine" &&
                                    <div
                                    className="font-thin my-6">
                                        <label className="text-xs desktop:text-md">Quantity</label>
                                        <div className="flex items-center mt-2 mb-4 tablet:justify-start">
                                            <button
                                                className="w-8 h-8 bg-secondarylight rounded flex items-center justify-center hover:bg-gray-300 disabled:bg-gray-100"
                                                onClick={decreaseQuantity}
                                                disabled={quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span className="mx-3">{quantity}</span>
                                            <button
                                                className="w-8 h-8 bg-secondarylight rounded flex items-center justify-center hover:bg-gray-300 disabled:bg-gray-100"
                                                onClick={increaseQuantity}
                                                disabled={quantity >= 10}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                }
                                {
                                    // product.categories[0] === "Nail Polish" &&
                                    product.categories[0]!=='Machine' &&
                                    <div className="grid grid-cols-2 gap-x-3 h-10 desktop:h-16 items-stretch">
                                    
                                        <CommonButton
                                            primaryColor="white"
                                            secondaryColor="primary"
                                            label="Add to cart"
                                            preIcon={<FaCartPlus style={{ color: " rgb(194 111 45)" }} className="mr-2" />}
                                            callBack={() => selectedShadeDetails && handleAddToCart(product, quantity, selectedShadeDetails.id)}
                                        />
                                        
                                        <CommonButton
                                            primaryColor="primary"
                                            secondaryColor="white"
                                            label="Checkout"
                                            callBack={() => navigate('/cart')}
                                        />
                                    </div>
                                }
                                {
                                    // product.categories[0] !== "Nail Polish" &&
                                    product.categories[0] ==='Machine' &&
                                    <div>
                                        <label className="font-bold text-sm">Contact for more details : </label>
                                        <label className="font-bold text-sm">canadiangelnailsinc@gmail.com</label>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <p className="text-primary font-bold text-center my-20">Related products</p>
                    {
                        products.length &&
                        <ProductPreviewList
                            ishomepage={false}
                            products={products}
                            isBestSeller={false} />
                    }
                </div>)}
            {/* <ReviewsSection /> */}
        </div>
    )
}

export default ProductDetailPage