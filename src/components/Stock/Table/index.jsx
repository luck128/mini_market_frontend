import { useState, useEffect } from "react"

import { 
    StockTableComponent,
    ThStockTable,
    TbodyStockTable,
    TrStockTable,
    TdStockTable
} from "./styles/style";

/**
 * @description Retornar os dados atuais do Estoque
 * @access Public
 */
import { getAllStock } from "../../../services/Stock/stock.services";

export default function StockTable() {
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        async function getStockData() {
            const response = await getAllStock();
            setStockData(response);
        }

        getStockData();
    }, [])

    return (
        <>
            <StockTableComponent>
                <thead style={{ display: 'table-row-group' }}>
                    <TrStockTable>
                        <ThStockTable>Produto</ThStockTable>
                        <ThStockTable>Quantidade</ThStockTable>
                    </TrStockTable>
                </thead>
                <TbodyStockTable>
                    {stockData.map((item, index) => (
                        <TrStockTable key={index}>
                            <TdStockTable>{item.name}</TdStockTable>
                            <TdStockTable>{item.quantity}</TdStockTable>
                        </TrStockTable>
                    ))}
                </TbodyStockTable>
            </StockTableComponent>
        </>
    )
}