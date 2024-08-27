import { useState, useEffect } from "react";
import { Category } from "../../interfaces/Category";
import { addCategoryReq, getCategoryReq } from "../../services/category";
import { addProdReq } from "../../services/addProduct";


export const useAdminPage = ()=>{
    const menuItems = ["Add Category", "Add Products", "Add Best Selling products", "Add New Products"];
    let [selectedMenuItem, setSelectedMenuItem] = useState<string>('') 
    let [category, setCategory] = useState<Category>({category_id:1, category_name:""})
    let [name, setName] = useState<string>('')
    let [description, setDescription] = useState<string>('')
    let [productType, setProductType] = useState<string>('')
    let [categoryId, setCategoryId] = useState<number>(1)
    let [categoryName, setCategoryName] = useState<string>('')
    let [price, setPrice] = useState<number>(1)
    let [discountedPrice, setDiscountedPrice] = useState<number>(1)
    let [categories, setCategories] = useState<Category[]>([]);
    let [file, setFile] = useState<File | null>()
    let [addProductsError, setAddProductsError]  = useState<string>('')

    useEffect(() => {
        getCategories();
    }, [])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFile(file)
    }

    const handleSelectedMenuItemChange = (item : string)=>{
        setSelectedMenuItem(item)
    }

    const handleCategoryChange = ((category: Category )=>{
        setCategory(category)
    }) 

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setDescription(e.target.value)
    }

    const handleProductTypeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setProductType(e.target.value)
    } 

    const handleCategoryIdChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setCategoryId(Number(e.target.value))
    }

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPrice(Number(e.target.value))
    }

    const handleDiscountedPriceChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setDiscountedPrice(Number(e.target.value))
    }

    const handleCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setCategoryName(e.target.value)
    } 

    const addCategoryHandler = async() => {
        await addCategoryReq(categoryName)
        .then(res => {
            console.log("Category updated")
        }). catch(err => {
            console.log(err)
        })
    } 

    const addProductHandler = async () => {
            console.log(name)
            console.log(file)
            console.log(productType)
            console.log(price)
            console.log(description)
            console.log(discountedPrice)
            console.log(category)
            await addProdReq({
                name: name,
                image: file!,
                type: productType,
                description: description,
                cost: price,
                discountPercentage: discountedPrice,
                availableSizes: '15',
                categoryId: category.category_id,
            })
            .then(res => {
                console.log("added product")
                setAddProductsError('false')
            }).catch (err => {
                setAddProductsError('Error occured')
                console.log("error in adding product : ", err)
            })
    };

    const getCategories = async() => {
        await getCategoryReq()
        .then( res => {
            setCategories(res.data)
        }
        ) .catch (err => {
            console.log(err)
        })
    }
    
    return {menuItems, 
        selectedMenuItem, handleSelectedMenuItemChange, handleFileChange, addProductsError,
        category, handleCategoryChange, addCategoryHandler, categoryName, handleCategoryNameChange,
        name, handleNameChange, description, handleDescriptionChange, productType, handleProductTypeChange, categoryId, handleCategoryIdChange, price, handlePriceChange,
        discountedPrice, handleDiscountedPriceChange, addProductHandler, categories
    }

}