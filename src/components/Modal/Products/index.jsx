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
} from "react-icons/fa";

/**
 * @description Serviços para funcionalidade do carrinho
 */
import { getProductsListService, addToCartService } from '../../../services/Cart/cart.services';

export default function ProductsModal({ isOpen, onClose }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [productsList, setProductsList] = useState([]);

    const getProductsList = async () => {
        try {
            const response = await getProductsListService();
            setProductsList(response);
        } catch (error) {
            toast.error(error);
        }
    };

    const addToCart = async (productId) => {
        try {
            const newProduct = await addToCartService(productId);
    
            if (newProduct[0].quantity !== 0) {
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
    
                toast.success('Produto adicionado ao carrinho!');
            } else {
                toast.warn('O estoque do produto acabou, tente procurar outro semelhante.');
            }
        } catch (error) {
            toast.error('Erro ao adicionar produto ao carrinho');
        }
    };

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