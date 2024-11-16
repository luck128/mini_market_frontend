import styled from "styled-components";

export const StockTableComponent = styled.table({
    borderCollapse: 'collapse',
    display: 'table',
    width: '100%',
    height: '100%'
})

export const ThStockTable = styled.th({
    backgroundColor: '#F1F1F1',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'start'
});

export const TbodyStockTable = styled.tbody({
    display: 'block',
    overflowY: 'auto',
    maxHeight: '88vh'
});

export const TrStockTable = styled.tr({
    display: 'table',
    width: '100%',
    tableLayout: 'fixed',
    border: '1px solid #EEE'
})

export const TdStockTable = styled.td({
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 500,
    height: 30
});