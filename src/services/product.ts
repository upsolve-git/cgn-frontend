import axios from '../helpers/axios'

import { ADD_BEST_SELLER_ENDPOINT, ADD_NEW_SELLER_ENDPOINT, ADD_PRODUCT_ENDPOINT, GET_PRODUCT_ENDPOINT } from '../constants/routes';

interface AddProdParams{
    name: string,
    image: File,
    type: string,
    description: string,
    cost: number,
    discountPercentage: number,
    availableSizes: string,
    categoryId: number
}

export const addProductsReq = async (
    {name, image, type, description, cost, discountPercentage, availableSizes, categoryId}: AddProdParams
)=>{
    
    if(name && image && type && description && cost && discountPercentage && availableSizes && categoryId){
        let formData = new FormData()
        formData.append('name', name)
        formData.append('product_type', type)
        formData.append('description', description)
        formData.append('price', cost.toString())
        formData.append('discounted_price_percentage', discountPercentage.toString())
        formData.append('available_sizes', availableSizes)
        formData.append('category_id', categoryId.toString())
        formData.append('image', image)
        
        return axios.post(ADD_PRODUCT_ENDPOINT, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
} 

export const getProductsReq = async ()=>{
    return axios.get(GET_PRODUCT_ENDPOINT);
}

export const addBestSellerReq = async (product_id : number)=>{
    
    if(product_id){
        return axios.post(ADD_BEST_SELLER_ENDPOINT, {
            "product_id": product_id
        });
    }
} 

export const addNewSellerReq = async (product_id : number)=>{
    
    if(product_id){
        return axios.post(ADD_NEW_SELLER_ENDPOINT, {
            "product_id": product_id
        });
    }
} 