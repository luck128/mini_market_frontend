import { 
    Container,
    StockManagementComponent 
} from "./styles/style"

import StockTable from "../../components/Stock/Table"

export default function StockManagement() {
    return (
        <>
            <StockManagementComponent>
                <StockTable />
            </StockManagementComponent>
        </>
    )
}