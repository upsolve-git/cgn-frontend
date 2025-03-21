import axios from '../helpers/axios'

import { ADD_BEST_SELLER_ENDPOINT, ADD_NEW_SELLER_ENDPOINT, 
  ADD_PRODUCT_ENDPOINT, GET_PRODUCT_ENDPOINT, 
  EDIT_PRODUCT_ENDPOINT, UPDATE_INVENTORY_ENDPOINT,
  DELETE_PRODUCT_ENDPOINT } from '../constants/routes';

import { Color } from '../interfaces/Color';

interface AddProdParams{
    name: string,
    images: File[],
    type: string,
    description: string,
    cost: number,
    discounted_price: number,
    categoryId: number[]
    colors : Color[]
    discounted_business_price: number,
}

export interface EditProductParams {
    prodId: string;
    name: string;
    description: string;
    cost: number;
    discBusinessCost: number;
    files?: File[];
  }

export const addProductsReq = async (
    {name, images, type, description, cost, discounted_price, categoryId, colors, discounted_business_price}: AddProdParams
)=>{
    
    if(name && images.length && type && description && cost && discounted_price && categoryId && discounted_business_price){
        let formData = new FormData()
        formData.append('name', name)
        formData.append('product_type', type)
        formData.append('description', description)
        formData.append('price', cost.toString())
        formData.append('discounted_price', discounted_price.toString())
        formData.append('discounted_business_price', discounted_business_price.toString())
        formData.append('category_ids', categoryId.toString())
        images.forEach((file) => {
            formData.append(`images`, file);  // You can adjust the key as needed
          });
        formData.append('colors', JSON.stringify(colors))
        
        return axios.post(ADD_PRODUCT_ENDPOINT, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }else{
      throw new Error('All fields are required');
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

export const editProduct = async ({
    prodId,
    name,
    description,
    cost,
    discBusinessCost,
    files,
  }: EditProductParams) => {
    console.log('Editing product:', prodId, name, description, cost, discBusinessCost);
  
    let formData = new FormData();
    formData.append('product_id', prodId);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', cost.toString());
    formData.append('discounted_business_price', discBusinessCost.toString());
  
    if (files && files.length > 0) {
      files.forEach((file) => {
        formData.append('images', file);
      });
    }
  
    try {
      const response = await axios.post(EDIT_PRODUCT_ENDPOINT, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error('Error editing product:', error);
      throw error;
    }
  };

export const updateInventoryReq = async (product_id : string, quantity : number)=>{
  if(product_id && quantity){
    return axios.post(UPDATE_INVENTORY_ENDPOINT, {
        "product_id": product_id,
        "quantity": quantity
    });
  }else{
    throw new Error('incorrect existing product id or quantity');
  }
}

export const deleteProductReq = async (product_id : string)=>{
  if(product_id){
    return axios.post(DELETE_PRODUCT_ENDPOINT, {
        "product_id": product_id
    });
  }else{
    throw new Error('Enter a product id');
  }
}