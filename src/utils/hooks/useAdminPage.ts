import React, { useState, useEffect } from "react";
import { Category } from "../../interfaces/Category";
import { addCategoryReq, getCategoryReq } from "../../services/category";
import { addBestSellerReq, addNewSellerReq, addProductsReq, deleteProductReq, getProductsReq, updateInventoryReq, getProductQuantityReq } from "../../services/product";
import { Product } from "../../interfaces/Product";
import { User } from "../../interfaces/User";
import { deleteFromUsersCartReq, getUsersCartReq, getUsersReq, updateUsersCartReq } from "../../services/login";
import { Cart } from "../../interfaces/Cart";
import { Color } from "../../interfaces/Color";

import axios from "axios";

export const useAdminPage = ()=>{
    const menuItems = ["Products", "Add Products", "Edit Product", "Delete Product", "Users", "Orders", "Memberships", "Salons"];
    let [selectedMenuItem, setSelectedMenuItem] = useState<string>('') 
    let [category, setCategory] = useState<Category>({category_id:1, category_name:""})
    let [name, setName] = useState<string>('')
    let [description, setDescription] = useState<string>('')
    let [productType, setProductType] = useState<string>('')
    let [categoryName, setCategoryName] = useState<string>('')  
    let [price, setPrice] = useState<number>(1)
    let [discountedPrice, setDiscountedPrice] = useState<number>(1)
    let [discountedBusinessPrice, setDiscountedBusinessPrice] = useState<number>(1)

    let [categories, setCategories] = useState<Category[]>([]);
    let [files, setFiles] = useState<File[]>([])
    let [addProductsError, setAddProductsError]  = useState<string>('')
    let [products, setproducts] = useState<Product[]>([])
    let [users, setUsers] = useState<User[]>([])
    const [colors, setColors] = useState<Color[]>([]);
    
    let [showOverlay, setShowOverlay] = useState<boolean>(false)
    let [newProdFlag, setNewProdFlag] = useState<boolean>(false)
    // let {openOverlay, closeOverlay} = useOverlay()

    useEffect(() => {
        getCategories();
        getProducts();
        getUsers();
    }, [])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            setFiles(prevFiles => [...prevFiles, ...Array.from(selectedFiles)]);
        }
    }

    const handleSelectedMenuItemChange = (item : string)=>{
        setSelectedMenuItem(item)
    }

    const handleAddColor = (colorObj: Color) => {
        setColors((prevColors) => [...prevColors, colorObj]);
      };

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

    const handleDiscountedBusinessPriceChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setDiscountedBusinessPrice(Number(e.target.value))
    }

    const handleCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setCategoryName(e.target.value)
    } 

    const addCategoryHandler = async() => {
        await addCategoryReq(categoryName)
        .then(res => {
            console.log("Category updated")
        }).catch(err => {
            console.log(err)
        })
    } 

    const addProductHandler = async () => {
        console.log("Adding product: ", name, description, price, discountedPrice, category, productType, colors);
        const newColors = category.category_name !== "Nail Polish" 
            ? [{ color_name: "NA", shade_name: "NA", code: "NA", color_id: 0 }] 
            : colors;
    
        try {
            const res = await addProductsReq({
                name: name,
                images: files!,
                type: productType,
                description: description,
                cost: price,
                discounted_price: discountedPrice,
                categoryId: [category.category_id],
                colors: newColors,
                discounted_business_price: discountedBusinessPrice
            });
    
            console.log("Added product: ", res);
            await localStorage.setItem('exist_product_id', res.data.product_id)
            setAddProductsError('false');
            setNewProdFlag(true);
            setShowOverlay(true);
    
        } catch (err: any) { 
            if (axios.isAxiosError(err)) {
                if (err.response) {
                    if (err.response.status === 409) {
                        setShowOverlay(true)
                        await localStorage.setItem('exist_product_id', err.response.data.product_id)
                        setAddProductsError('Product already exists');
                        console.log(err.response.data)
                    } else {
                        setAddProductsError(`Error: ${err.response.data.message || 'Unknown error'}`);
                    }
                    console.log("Error in adding product: ", err.response.data);
                } else {
                    setAddProductsError('Server did not respond.');
                    console.log("Server error: ", err);
                }
            } else {
                setAddProductsError(String(err));
                console.log("Unexpected error: ", err);
            }
        }
    };

    const getCategories = async() => {
        await getCategoryReq()
        .then( res => {
            setCategories(res.data)
        }
        ).catch (err => {
            console.log(err)
        })
    } 

    const getProducts = async() => {
        await getProductsReq()
        .then( res => {
            setproducts(res.data)
            console.log(res.data)
        }).catch (err => {
            console.log(err)
        })
    }

    const addBestSellerhandler = async(product_id : number) => {
        await addBestSellerReq(product_id)
        .then(res => {
            console.log("added best seller succesfully")

        }).catch(err => {
            console.log(err)
        }) 
    }

    const addNewSellerhandler = async(product_id : number) => {
        await addNewSellerReq(product_id)
        .then(res => {
            console.log("added new seller succesfully")
        }).catch(err => {
            console.log(err)
        }) 
    } 

    const getUsers = async() => {
        await getUsersReq()
        .then(res => {
            console.log(res.data)
            res.data.map((user: User) => (console.log("country id", user.country_code)))
            const formattedUsers = res.data.map((user: User) => ({
                email: user.email || '', 
                account_type: user.account_type || '',
                first_name: user.first_name || '',
                last_name: user.last_name || '',
                country_code: user.country_code || '',
                phone: user.phone || ''
            }));
            setUsers(formattedUsers);
        }).catch(err => {
            console.log(err)
        }) 
    }

    let [quantity, setQuantity] = useState<number>()

    const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value))
    }

    const updateInventory = async () => {
        console.log("Updating inventory: ", quantity);
        if (quantity) {
            let product_id = localStorage.getItem('exist_product_id')
            try{
                await updateInventoryReq(product_id||'', quantity)

                console.log("Inventory updated")
                await localStorage.removeItem('exist_product_id')
                await setShowOverlay(false)
                window.alert("Inventory updated")
            } catch(err: any){
                if(err.response){
                    window.alert(err.response.data.message)
                }
                console.log(err)
            }
            // let product_id = localStorage.getItem('exist_product_id')
            // await updateInventoryReq(product_id||'', quantity)
            // .then(res => {
            //     console.log("Inventory updated")
            //     localStorage.removeItem('exist_product_id')
            //     setShowOverlay(false)
            // }).catch(err => {
            //     console.log(err)
            // })
        }
    }
    
    return {menuItems, products, users,
        selectedMenuItem, handleSelectedMenuItemChange, handleFileChange, addProductsError, handleDiscountedBusinessPriceChange,
        category, handleCategoryChange, addCategoryHandler, categoryName, handleCategoryNameChange, discountedBusinessPrice,
        name, handleNameChange, description, handleDescriptionChange, productType, handleProductTypeChange, colors, handleAddColor,
        price, handlePriceChange, discountedPrice, handleDiscountedPriceChange, addProductHandler, categories, addBestSellerhandler, addNewSellerhandler,
        showOverlay, setShowOverlay,
        quantity, handleQuantity, updateInventory,
        newProdFlag
    }

}

export const useDeleteProduct = () => {
    let [productId, setProductId] = useState<string>('')
    let [success, setSuccess] = useState<boolean>(false)
    let [message, setMessage] = useState<string>('')

    const handleProductIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductId(e.target.value)
    }

    const handleDeleteProduct = async () => {
        console.log("Deleting product: ", productId);

        // await deleteProductReq(productId)
        // .then(res => {
        //     console.log("Product deleted");
        //     setSuccess(true);
        //     setMessage('Product deleted successfully');
        // }
        // ).catch(err => {
        //     console.log(err.response)
        //     setSuccess(false);
        //     setMessage(err.response.data.message);
        // })

        try{
            const res = await deleteProductReq(productId);

            console.log("Product deleted");
            setSuccess(true);
            setMessage('Product deleted successfully');
        }catch(err: any){
            await setSuccess(false);
            if (axios.isAxiosError(err)) {
                if (err.response) {
                    if (err.response.status === 404) {
                        setMessage('Product with ID not found');
                    } else {
                        setMessage(`Error: ${err.response.data.message || 'Unknown error'}`);
                    }
                    // console.log("Error in adding product: ", err.response.data);
                } else {
                    setMessage('Server did not respond.');
                    console.log("Server error: ", err);
                }
            } else {
                setMessage(String(err));
                console.log("Unexpected error: ", err);
            }
        }
    }


    return {
        productId, handleProductIdChange, handleDeleteProduct,
        success, message
    }
}

export const useColorInventoryOverlay = ()=>{
    const [colorCounts, setColorCounts] = useState<any[]>([]);
    const [showColorCountsOverlay, setShowColorCountsOverlay] = useState<boolean>(false);

    const handleRowClick = async (params: any) => {
        const productId = params.data.product_id;
        try {
          const data = await getProductQuantityReq(productId.toString());
          setColorCounts(data);
          setShowColorCountsOverlay(true);
        } catch (error) {
          console.error('Error fetching color counts:', error);
        }
      };

    return {
        colorCounts, 
        showColorCountsOverlay, setShowColorCountsOverlay, 
        handleRowClick
    }
}