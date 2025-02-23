import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageViewerProps {
  productName: string;
  productImages: string[];
  handleImageLoad: () => void;
}

const ProductImageViewer: React.FC<ProductImageViewerProps> = ({
  productName,
  productImages,
  handleImageLoad,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-md aspect-square relative">
      <div className="w-full p-8 bg-secondarylight rounded-md overflow-hidden relative">
        <img
          src={`${productImages[currentIndex]}?${new Date().getDate()}`}
          alt={productName}
          onLoad={handleImageLoad}
          className="max-h-full max-w-full object-contain mx-auto"
        />
        {productImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
      {/* Image indicators */}
      <div className="flex justify-center mt-2 space-x-2">
        {productImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageViewer;
