import styled from "styled-components";

export const ListOfProductsComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 82vh;
    max-height: 82vh;
    overflow-y: auto;
`;

export const ProductItemComponent = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100px',
    padding: '0 20px',
    position: 'relative',
    borderRadius: 10,
    flexShrink: 0
});

export const ProductItemInfoComponent = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 260,
    height: '100%',
});

export const ProductItemName = styled.span({
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 600,
    maxWidth: '95%'
});

export const ProductItemPrice = styled.span({
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 500,
    color: '#68baff'
});

export const ProductButton = styled.button({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    border: '1px solid #68baff',
    color: '#68baff',
    borderRadius: 999,
    width: 40,
    height: 40,
    fontFamily: 'Inter',
    fontSize: 10,
    position: 'absolute',
    right: 30,
    cursor: 'pointer'
})