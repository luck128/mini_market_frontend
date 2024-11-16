import styled from "styled-components";

export const StartPageComponent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        max-height: 91.6%;
        overflow-y: auto;
    }
`;

export const StartPageAlignComponent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 85px;

    @media (max-width: 768px) {
        padding-top: 25px;
        flex-direction: column;
        gap: 20px;
    }
`;


export const StartPageButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #b1e1ec;
    outline: none;
    border: none;
    width: 340px;
    height: 340px;
    border-radius: 18px;
    gap: 15px;
    cursor: pointer;
    transition: ease-in-out all .1s;
    &:active {
        background-color: #dfe8ea;
        transition: ease-in-out all .1s
    }
`;

export const StartPageButtonText = styled.span({
    fontSize: 32,
    fontWeight: 600,
    color: '#FFF',
    fontFamily: 'Inter'
});