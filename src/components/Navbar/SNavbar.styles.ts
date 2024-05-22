import styled from 'styled-components';

export const SNavbar = styled.nav`
    width: 100%;
    display: flex;
    gap: 3px;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;

    button {
        background: #8758ff;
        padding: 8px;
        border-radius: 7px;
        width: 100%;

        &: hover {
            box-shadow: rgb(135, 88, 255, 0.5) 0px 0px 10px 10px;
        }
    }
`;
