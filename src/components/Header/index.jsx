import { useState, useEffect } from 'react';

import { 
    Link, 
    useSearchParams 
} from 'react-router-dom'

import { 
    HeaderComponent,
    HeaderBackButton
} from "./styles/style"

import { 
    IoMdCart,
    IoIosArrowBack
} from "react-icons/io";

import { 
    RiSunFoggyFill,
    RiSunFill,
    RiMoonClearFill,
    RiDatabase2Fill
} from "react-icons/ri";

export default function Header() {
    const [searchParams] = useSearchParams();
    const [greetings, setGreetings] = useState('Olá!');

    useEffect(() => {
        function greetingsMessage() {
            const now = new Date().getHours().toLocaleString('pt-BR');
            
            if(now >= 4 && now <= 12) {
                setGreetings(<RiSunFoggyFill size={24} color='#FFF' title='Bom dia' />);
            } else if (now >= 12 && now <= 17) {
                setGreetings(<RiSunFill size={24} color='#FFF' title='Boa tarde' />);
            } else if (now >= 18 && now <= 4) {
                setGreetings(<RiMoonClearFill size={24} color='#FFF' title='Boa noite' />);
            }
        }

        greetingsMessage();
    }, [])

    return (
        <HeaderComponent>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                {searchParams.size !== 0 &&
                    <Link to='/start' style={{ textDecoration: 'none' }}>
                        <HeaderBackButton>
                            <IoIosArrowBack size={18} />
                            VOLTAR
                        </HeaderBackButton>
                    </Link>
                }
                <IoMdCart size={24} color="#FFF" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                {greetings}
                <Link to='/start/stock?isManagement=true'>
                    <RiDatabase2Fill size={24} color='#FFF' title='Gestão de Estoque' style={{ cursor: 'pointer' }} />
                </Link>
            </div>
        </HeaderComponent>
    )
}