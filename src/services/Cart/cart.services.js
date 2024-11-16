import axios from 'axios';
import { toast } from 'react-toastify';

export const getProductsListService = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:3030/api/v1/products/',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const addToCartService = async (productId) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `http://localhost:3030/api/v1/products/${productId}`
        });
        
        return response.data;
    } catch (error) {
        return error;
    }
}