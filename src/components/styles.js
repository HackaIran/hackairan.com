import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'Bahnschrift', 'Segoe UI';
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
`;

export const CenterBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 10;
`;

export const BlackGradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

export const Title = styled.h1`
    font-size: 40px;
    font-weight: normal;
`;

export const Primary = styled.span`
    color: #fec10b;
`;