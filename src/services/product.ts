import axios from '../helpers/axios'

import { ADD_BEST_SELLER_ENDPOINT, ADD_NEW_SELLER_ENDPOINT, ADD_PRODUCT_ENDPOINT, GET_PRODUCT_ENDPOINT } from '../constants/routes';

interface AddProdParams{
    name: string,
    images: File[],
    type: string,
    description: string,
    cost: number,
    discountPercentage: number,
    availableSizes: string,
    categoryId: number,
    color: string, 
    shade : string, 
    HEXCode : string,
}

export const addProductsReq = async (
    {name, images, type, description, cost, discountPercentage, availableSizes, categoryId, color, shade, HEXCode}: AddProdParams
)=>{
    
    if(name && images.length && type && description && cost && discountPercentage && availableSizes && categoryId && color && shade && HEXCode){
        let formData = new FormData()
        formData.append('name', name)
        formData.append('product_type', type)
        formData.append('description', description)
        formData.append('price', cost.toString())
        formData.append('discounted_price_percentage', discountPercentage.toString())
        formData.append('available_sizes', availableSizes)
        formData.append('category_id', categoryId.toString())
        images.forEach((file) => {
            formData.append(`images`, file);  // You can adjust the key as needed
          });
        
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