import Navbar from "../../ui/organisms/Navbar/Navbar";
import { useAdminPage } from "../../utils/hooks/useAdminPage";
import Menu from "../../ui/organisms/Admin/Menu";
import AddProducts from "../../ui/sections/AdminSection/AddProductsSection";
import AddCategory from "../../ui/sections/AdminSection/AddCategorySection";

interface AdminPageProps{}

const AdminPage: React.FC<AdminPageProps> = ()=>{

    let {
        menuItems,
        selectedMenuItem,
        handleSelectedMenuItemChange,
        category,
        handleCategoryChange,
        addCategoryHandler,
        name,
        productType,
        categoryId,
        price,
        description,
        discountedPrice,
        handleCategoryIdChange,
        handleDescriptionChange,
        handleDiscountedPriceChange,
        handleNameChange,
        handlePriceChange,
        handleProductTypeChange,
        addProductHandler,
        categories,
        categoryName,
        handleCategoryNameChange,
        handleFileChange,
        addProductsError
    } = useAdminPage()

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-grow">
                <Menu
                menuItems={menuItems}
                selectedMenuItem={selectedMenuItem}
                onClick={handleSelectedMenuItemChange}
                />

                <div className="flex-1 bg-secondarylight p-8">
                    <h2 className="text-lg text-center font-bold">{selectedMenuItem}</h2>
                    {selectedMenuItem == "Add Category" ? 
                    <AddCategory
                    category={categoryName}
                    setCategory={handleCategoryNameChange}
                    addCategory={addCategoryHandler}
                    success={false}
                    error={false}
                    />
                    : selectedMenuItem == "Add Products" ? 
                    <AddProducts
                    categories={categories}
                    prodName={name}
                    prodCategory={category}
                    prodDescription={description}
                    prodType={productType}
                    prodCost={price}
                    prodDiscountPercentage={discountedPrice}
                    setProdCategory={handleCategoryChange}
                    setProdCost={handlePriceChange}
                    setProdDescription={handleDescriptionChange}
                    setProdDiscountPercentage={handleDiscountedPriceChange}
                    setProdName={handleNameChange}
                    setProdType={handleProductTypeChange}
                    setFile={handleFileChange}
                    addProduct={addProductHandler}
                    error={addProductsError}
                    />
                    : selectedMenuItem == "Add Best Selling products" ? (
                        <p className="mt-4 text-gray-700">{selectedMenuItem}</p>
                    ) : <p className="mt-4 text-gray-700">{selectedMenuItem}</p>}
                </div>
            </div>
        </div>
    )
    
    
}

export default AdminPage