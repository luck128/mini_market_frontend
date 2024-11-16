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
    RiMoonClearFill
} from "react-icons/ri";

export default function Header() {
    const [searchParams] = useSearchParams();
    const [greetings, setGreetings] = useState('Olá!');

    useEffect(() => {
        function greetingsMessage() {
            const now = new Date().getHours().toLocaleString('pt-BR');
            
            if(now >= 4 && now <= 12) {
                setGreetings(<RiSunFoggyFill />);
            } else if (now >= 12 && now <= 17) {
                setGreetings(<RiSunFill />);
            } else if (now >= 18 && now <= 4) {
                setGreetings(<RiMoonClearFill />);
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
            <span style={{ fontFamily: 'Inter', fontSize: 32, fontWeight: 500, color: '#FFF' }}>
                {greetings}
            </span>
        </HeaderComponent>
    )
}