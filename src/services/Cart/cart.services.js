import axios from 'axios';
import { toast } from 'react-toastify';

exports.getProductsListService = async () => {
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

exports.addToCartService = async (productId) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `http://localhost:3030/api/v1/products/${productId}`
        });
        const newProduct = response.data;

        if(newProduct[0].quantity !== 0) {
            setCart((prevCart) => {
                const existingProduct = prevCart.find(item => item.id === newProduct[0].id);
    
                if (existingProduct) {
                    return prevCart.map(item =>
                        item.id === newProduct[0].id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                } else {
                    return [...prevCart, { ...newProduct[0], quantity: 1, qty_stock: newProduct[0].quantity }];
                }
            });
    
            localStorage.setItem('cart', JSON.stringify(cart));
            return 'Produto adicionado ao carrinho!';
        } else {
            return 'O estoque do produto acabou, tente procurar outro semelhante.';
        }
    } catch (error) {
        return error;
    }
}