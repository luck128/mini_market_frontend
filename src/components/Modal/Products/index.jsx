import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Checkbox
} from '@chakra-ui/react'

import { 
    ListOfProductsComponent,
    ProductItemComponent,
    ProductItemInfoComponent,
    ProductItemName,
    ProductItemPrice,
    ProductButton
} from "./styles/style";

import { 
    FaCartPlus 
} from "react-icons/fa6";

export default function ProductsModal({ isOpen, onClose }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [productsList, setProductsList] = useState([]);

    const getProductsList = async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: 'http://localhost:3030/api/v1/products/',
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000'
                }
            });

            setProductsList(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addToCart = async (productId) => {
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
                toast.success('Produto adicionado ao carrinho!');
            } else {
                toast.error('O estoque do produto acabou, tente procurar outro semelhante.');
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProductsList();
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Lista de Produtos</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <ListOfProductsComponent>
                    {productsList.map((item, index) => {
                        const price = item.price;
                        const formattedPrice = `R$ ${price.replace(".",",")}`

                        return (
                            <ProductItemComponent key={index} style={{ backgroundColor: item.quantity !== 0 ? '#FFF' : '#FFF4F4', border: item.quantity !== 0 ? '1.8px solid #68baff' : '1.8px solid red'}}>
                                <ProductItemInfoComponent>
                                    <ProductItemName>{item.name}</ProductItemName>
                                    <ProductItemPrice>{formattedPrice}</ProductItemPrice>
                                </ProductItemInfoComponent>
                                <ProductButton onClick={() => addToCart(item.id)}>
                                    <FaCartPlus size={18} />
                                </ProductButton>
                            </ProductItemComponent>
                        )
                    })}
                </ListOfProductsComponent>
            </ModalBody>
  
            <ModalFooter>
              <Button size="sm" colorScheme='red' mr={3} onClick={onClose} style={{ fontFamily: 'Inter' }}>
                FECHAR
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}