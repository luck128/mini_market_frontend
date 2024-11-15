import { useSearchParams } from "react-router-dom";

import { 
    CartComponent 
} from "./styles/style";

/* Lojas Definidas */
import Market from "../../components/Market";
import Refrigerator from "../../components/Refrigerator";

export default function Cart() {
    const [searchParams] = useSearchParams();

    return (
        <CartComponent>
            {Number(searchParams.get('id')) === 1 ?
                <Market />
                :
                <Refrigerator />
            }
        </CartComponent>
    )
}