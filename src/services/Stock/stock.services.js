import axios from 'axios';

export const getAllStock = async () => {
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