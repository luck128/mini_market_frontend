import { useEffect, useState } from "react"
import { toast } from 'react-toastify';
import axios from 'axios';

import { 
    Container,
    MarketComponent,
    MarketCartList,
    MarketActions,
    MarketActionButton,
    MarketEmptyCartText,
    MarketCartProductItem,
    MarketCartItemInfoComponent,
    MarketCartItemName,
    MarketCartItemPrice,
    MarketActionsProductItem,
    MarketActionsButtonProductItem
} from "./styles/style"

import { 
    TbMoodSadSquint,
    TbTrash
} from "react-icons/tb";

import { 
    FiPlus,
    FiMinus
} from "react-icons/fi";

import { 
    NumberInput,
    NumberInputField
} from "@chakra-ui/react";

import { 
    FaShoppingBasket 
} from "react-icons/fa";

/**
 * 
 * @description Modal para buscar produtos sem bipagem e Modal de pagamento dos produtos
 */
import ProductsModal from "../Modal/Products";
import PaymentModal from "../Modal/Payment";

export default function Market() {
    const [cart, setCart] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [paymentModal, setPaymentModal] = useState(false);

    const handleModal = () => setModalIsOpen(true);
    const handleCloseModal = () => setModalIsOpen(false);

    const handleOpenPaymentModal = () => setPaymentModal(true);
    const handleClosePaymentModal = () => setPaymentModal(false);

    /**
     * 
     * @param {*} productId ID do produto
     * @description Abaixo segue as funções para remoção/redução/adição da quantidade do produto
     */
    const handleDeleteItemFromCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    
        toast.success('Produto removido do carrinho.');
    };

    const handleAddItemFromCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map(item => 
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const handleReduceItemFromCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map(item => 
                item.id === productId 
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } 
                    : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    /**
     * @param {*} productsId IDs dos produtos para processamento do 'pagamento'
     * @description Abaixo segue a função para o 'processamento' do pagamento dos produtos no carrinho
     * @access Public
     */
    const handlePaymentProducts = async () => {
        try {
            cart.forEach(async (item) => {
                const qty_stock_updated = await axios({
                    method: 'GET',
                    url: `http://localhost:3030/api/v1/products/${item.id}`
                });

                /* Buscar a quantidade atualizada do Estoque */
                const qty_stock_number = qty_stock_updated.data[0].quantity;

                const response = await axios({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'PUT',      
                    url: 'http://localhost:3030/api/v1/products',
                    data: JSON.stringify({
                        id: item.id,
                        price: item.price,
                        quantity: qty_stock_number - item.quantity,
                    })
                }).then(response => {
                    toast.success('Pagamento realizado com sucesso.');
                    handleClosePaymentModal();
                    localStorage.setItem('cart', JSON.stringify([]));
                }).catch(error => {
                    toast.error('Algo deu errado ao processar o pagamento.');
                    handleClosePaymentModal();
                })
            })
        } catch (error) {
            toast.error('Algo deu errado ao finalizar a compra.');
            handleClosePaymentModal()
        }
    }

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')));
    },[localStorage.getItem('cart')])

    return (
        <MarketComponent>
            <MarketCartList>
                {cart.length === 0 ?
                    <Container>
                        <FaShoppingBasket style={{ marginBottom: 10 }} size={48} />
                        <MarketEmptyCartText>CARRINHO VAZIO</MarketEmptyCartText>
                        <span style={{ fontFamily: 'Inter', maxWidth: '90%', textAlign: 'center' }}>Pelo visto você não adicionou nada por aqui...</span>
                    </Container>
                    :
                    cart.map((item, index) => {
                        const price = item.price;
                        const formattedPrice = `R$ ${price.replace(".",",")}`

                        return (
                            <MarketCartProductItem>
                                <MarketCartItemInfoComponent>
                                    <MarketCartItemName>{item.name}</MarketCartItemName>
                                    <MarketCartItemPrice>{formattedPrice}</MarketCartItemPrice>
                                </MarketCartItemInfoComponent>
                                <MarketActionsProductItem>
                                    <MarketActionsButtonProductItem 
                                        style={{ border: '1px solid #FFA500', color: '#FFA500' }}
                                        onClick={() => handleReduceItemFromCart(item.id)}
                                    >
                                        <FiMinus />
                                    </MarketActionsButtonProductItem>
                                    <NumberInput>
                                        <NumberInputField 
                                            style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0, width: 40, textAlign: 'center', padding: 0 }} 
                                            placeholder={item.quantity}
                                            disabled={true}
                                        />
                                    </NumberInput>
                                    <MarketActionsButtonProductItem 
                                        style={{ border: '1px solid #07A776', color: '#07A776' }}
                                        onClick={() => handleAddItemFromCart(item.id)}
                                    >
                                        <FiPlus />
                                    </MarketActionsButtonProductItem>
                                    <MarketActionsButtonProductItem 
                                        style={{ border: '1px solid red', color: 'red' }}
                                        onClick={() => handleDeleteItemFromCart(item.id)}
                                    >
                                        <TbTrash />
                                    </MarketActionsButtonProductItem>
                                </MarketActionsProductItem>
                            </MarketCartProductItem>
                        )
                    })
                }
            </MarketCartList>
            <MarketActions>
                <MarketActionButton 
                    style={{ backgroundColor: 'transparent', border: '1px solid #008aff', color: '#008aff' }}
                    onClick={handleModal}
                >
                        PROCURAR PRODUTO
                    </MarketActionButton>
                <MarketActionButton 
                    style={{ backgroundColor: '#008aff', color: '#FFF' }}
                    disabled={cart === null}
                    onClick={() => {
                        handleOpenPaymentModal();
                        handlePaymentProducts();
                    }}
                >
                    FINALIZAR COMPRA
                </MarketActionButton>
            </MarketActions>
            <ProductsModal isOpen={modalIsOpen} onClose={handleCloseModal} />
            <PaymentModal isOpen={paymentModal} onClose={handleClosePaymentModal} />
        </MarketComponent>
    )
}