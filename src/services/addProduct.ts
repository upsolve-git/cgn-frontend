import axios from '../helpers/axios'

import { ADD_PRODUCT_ENDPOINT } from '../constants/routes';

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

export const addProdReq = async (
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