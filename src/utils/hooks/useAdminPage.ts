import { useState, useEffect } from "react";
import { Category } from "../../interfaces/Category";
import { addCategoryReq, getCategoryReq } from "../../services/category";
import { addBestSellerReq, addNewSellerReq, addProductsReq, getProductsReq } from "../../services/product";
import { Product } from "../../interfaces/Product";
import { User } from "../../interfaces/User";
import { getUsersReq } from "../../services/login";
import { Cart } from "../../interfaces/Cart";
import { CartItem } from "../../interfaces/CartItem";


export const useAdminPage = ()=>{
    const menuItems = ["Add Category", "Add Products", "Add Best Selling products", "Add New Products", "Users"];
    let [selectedMenuItem, setSelectedMenuItem] = useState<string>('') 
    let [category, setCategory] = useState<Category>({category_id:1, category_name:""})
    let [name, setName] = useState<string>('')
    let [description, setDescription] = useState<string>('')
    let [productType, setProductType] = useState<string>('')
    let [categoryName, setCategoryName] = useState<string>('')
    let [price, setPrice] = useState<number>(1)
    let [discountedPrice, setDiscountedPrice] = useState<number>(1)
    let [categories, setCategories] = useState<Category[]>([]);
    let [file, setFile] = useState<File | null>()
    let [addProductsError, setAddProductsError]  = useState<string>('')
    let [products, setproducts] = useState<Product[]>([])
    let [users, setUsers] = useState<User[]>([])
    let [cart, setCart] = useState<Cart>({
        items : [],
        total : 0
    }); 

    const handleAddToCart = async(product:Product, quantity : number) => { 
        setCart(prevCart => {
            const newItem: CartItem = {
                image: product.product_imgs_id,
                name: product.name,
                price: product.discounted_price_percentage,
                quantity: quantity,
                total: product.discounted_price_percentage * quantity,
            };
            const updatedItems = [...prevCart.items, newItem];
            const updatedTotal = updatedItems.reduce((acc, curr) => acc + curr.total, 0);
            return {
                items: updatedItems,
                total: updatedTotal,
            };
        }); 
        console.log(cart)
    }
    console.log("cart in admin page : ", cart)

    useEffect(() => {
        console.log('Cart from useAdminPage in CartDisplayPage:', cart);
    }, [cart]);

    useEffect(() => {
        getCategories();
        getProducts();
        getUsers();
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
            await addProductsReq({
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

    const getProducts = async() => {
        await getProductsReq()
        .then( res => {
            setproducts(res.data)
        }) . catch (err => {
            console.log(err)
        })
    } 

    const addBestSellerhandler = async(product_id : number) => {
        await addBestSellerReq(product_id)
        .then(res => {
            console.log("added best seller succesfully")

        }) .catch(err => {
            console.log(err)
        }) 
    }

    const addNewSellerhandler = async(product_id : number) => {
        await addNewSellerReq(product_id)
        .then(res => {
            console.log("added new seller succesfully")
        }) .catch(err => {
            console.log(err)
        }) 
    } 

    const getUsers = async() => {
        await getUsersReq()
        .then(res => {
            setUsers(res.data)
        }) .catch(err => {
            console.log(err)
        }) 
    } 
    
    return {menuItems, products, users,cart, handleAddToCart,
        selectedMenuItem, handleSelectedMenuItemChange, handleFileChange, addProductsError,
        category, handleCategoryChange, addCategoryHandler, categoryName, handleCategoryNameChange,
        name, handleNameChange, description, handleDescriptionChange, productType, handleProductTypeChange, 
        price, handlePriceChange, discountedPrice, handleDiscountedPriceChange, addProductHandler, categories, addBestSellerhandler, addNewSellerhandler
    }

}