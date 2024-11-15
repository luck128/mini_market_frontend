import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * 
 * @desc Listagem das páginas utilizadas na Aplicação
 */
import Start from "./pages/Start";
import Cart from "./pages/Cart";

/**
 * 
 * @desc Componentes de transição para tela de produtos e pagamento
 */
import StartPage from "./components/StartPage";

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/start" element={<Start><StartPage /></Start>} />
        <Route path="/start/store" element={<Start><Cart /></Start>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
