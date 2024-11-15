import { 
    StartMainComponent 
} from "./styles/style"

/**
 * 
 * @desc Componentes utilizados para a página de inicio
 */
import Header from "../../components/Header"

export default function Start(props) {
    return (
        <StartMainComponent>
            <Header />
            {props.children}
        </StartMainComponent>
    )
}