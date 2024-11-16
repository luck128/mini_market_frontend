import styled from "styled-components";

export const MarketComponent = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    position: 'relative',
    boxSizing: 'content-box'
});

export const MarketCartList = styled.div({
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
    maxHeight: '90%',
    overflowY: 'auto',
    padding: '15px 25px',
    gap: 10,
    flexShrink: 0
});

export const MarketActions = styled.div({
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 25px',
    gap: 10
});

export const MarketActionButton = styled.button({
    width: 180,
    height: 50,
    outline: 'none',
    border: 'none',
    borderRadius: 6,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer'
});

export const DescriptionTotalValue = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #A3A3A3;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const TotalValueSpan = styled.span({
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 600
});

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
});

export const MarketEmptyCartText = styled.span({
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
    maxWidth: '90%'
});

export const MarketCartProductItem = styled.div({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    border: '1.8px solid #68baff',
    borderRadius: 10,
    padding: '10px 25px'
});

export const MarketCartItemInfoComponent = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
    height: '100%',
});

export const MarketCartItemName = styled.span({
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 600,
});

export const MarketCartItemPrice = styled.span({
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: 800,
    color: '#68baff'
});

export const MarketActionsProductItem = styled.div({
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    height: '100%',
    justifyContent: 'end',
    alignItems: 'center',
    gap: 10
});

export const MarketActionsButtonProductItem = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 999px;
    transition: ease-in all .1s;
`;