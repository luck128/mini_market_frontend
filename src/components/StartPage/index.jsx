import { Link } from "react-router-dom";

import { 
    StartPageComponent,
    StartPageAlignComponent,
    StartPageButton,
    StartPageButtonText
} from "./styles/style"

import { 
    RiBreadFill,
    RiDrinks2Fill
} from "react-icons/ri";

export default function StartPage() {
    return (
        <StartPageComponent>
            <StartPageAlignComponent>
                <Link to='/start/store?id=1' style={{ textDecoration: 'none' }}>
                    <StartPageButton>
                        <RiBreadFill size={128} color="#FFF" />
                        <StartPageButtonText>
                            MERCADO
                        </StartPageButtonText>
                    </StartPageButton>
                </Link>
                <Link to='/start/store?id=2' style={{ textDecoration: 'none' }}>
                    <StartPageButton>
                        <RiDrinks2Fill size={128} color="#FFF" />
                        <StartPageButtonText>
                            GELADEIRA
                        </StartPageButtonText>
                    </StartPageButton>
                </Link>
            </StartPageAlignComponent>
        </StartPageComponent>
    )
}