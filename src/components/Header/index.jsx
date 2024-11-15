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

export default function Header() {
    const [searchParams] = useSearchParams();

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
        </HeaderComponent>
    )
}