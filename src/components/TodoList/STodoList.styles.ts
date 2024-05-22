import styled from 'styled-components';

export const STodoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    max-height: 400px;
    overflow-y: auto;
    padding: 0 10px 10px 10px;
    border: 5px solid #ccc;
    border-radius: 5px;
    margin-top: 30px;

    &::-webkit-scrollbar {
        display: none;
    }

    h3 {
        position: sticky;
        top: 0px;
        background: #1a1a40;
        padding: 8px;
    }
`;
