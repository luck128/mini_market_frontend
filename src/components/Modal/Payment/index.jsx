import { useEffect, useState } from 'react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    CircularProgress
} from '@chakra-ui/react'

import { 
    HiOutlineShoppingCart 
} from "react-icons/hi2";

import { 
    PiContactlessPaymentLight 
} from "react-icons/pi";

import { 
    TitlePaymentText,
    DescriptionPaymentText
} from './styles/style';

export default function PaymentModal({ isOpen, onClose }) {
    const [isPayment, setIsPayment] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsPayment(true);
        }, 3000)
    }, [isOpen])

    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size='full'>
          <ModalOverlay />
          <ModalContent>
            <ModalBody 
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, backgroundColor: '#000' }}
            >
                <HiOutlineShoppingCart color='#FFF' size={64} />
                <TitlePaymentText>Pagamento</TitlePaymentText>
                <DescriptionPaymentText>Estamos processando sua compra, aguarde...</DescriptionPaymentText>
                {!isPayment ?
                    <CircularProgress isIndeterminate />
                    :
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 15 }}>
                        <PiContactlessPaymentLight color='#FFF' size={48} />
                        <span style={{ color: '#FFF', fontFamily: 'Inter' }}>Aproxime para pagar</span>
                    </div>
                }
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}