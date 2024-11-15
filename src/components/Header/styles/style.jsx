import styled from "styled-components";

export const HeaderComponent = styled.header({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#68baff',
    padding: '0 25px',
    flexShrink: 0
});

export const HeaderBackButton = styled.button({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'transparent',
    color: '#FFF',
    outline: 'none',
    border: 'none',
    borderRadius: 6,
    fontFamily: 'Inter',
    fontWeight: 600,
    cursor: 'pointer'
})