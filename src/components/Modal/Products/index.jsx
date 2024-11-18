import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import Keyboard from "react-simple-keyboard";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input
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
    const [input, setInput] = useState("");

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

    const handleChange = (input) => {
        setInput(input);
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
                    {productsList.filter((product) => {
                        if (!input.trim()) {
                            return true;
                        }
                        return product.name.toLowerCase().includes(input.toLowerCase());
                    })
                    .map((item, index) => {
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
  
            <ModalFooter style={{ display: 'flex', flexDirection: 'column' }}>
                <Input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Buscar produto..."
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "14px",
                        marginBottom: "20px",
                        fontFamily: 'Inter'
                    }}
                />
                <Keyboard
                    onChange={handleChange}
                    layout={{
                        default: [
                            "Q W E R T Y U I O P",
                            "A S D F G H J K L",
                            "{shift} Z X C V B N M {backspace}",
                        ],
                        shift: [
                            "Q W E R T Y U I O P",
                            "A S D F G H J K L",
                            "{shift} Z X C V B N M {backspace}",
                        ],
                        numbers: ["1 2 3 4 5 6 7 8 9 0", "{backspace}", "{default}"],
                    }}
                    display={{
                        "{space}": "Espaço",
                        "{backspace}": "←",
                        "{enter}": "Enter",
                        "{shift}": "Shift",
                        "{numbers}": "123",
                        "{default}": "ABC",
                    }}
                />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}