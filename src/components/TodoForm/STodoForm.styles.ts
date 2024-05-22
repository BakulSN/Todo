import styled from 'styled-components';

export const STodoForm = styled.form`
    display: flex;
    flex-direction: row;
    padding: 15px;

    input {
        outline: none;
        background: none;
        border: 1px solid #8758ff;
        padding: 10px 20px;
        width: 100%;
        color: #fff;
    }
    button {
        background: #8758ff;
        padding: 8px;

        &:hover {
            box-shadow: rgb(255, 255, 255, 0.5) 0px 0px 6px 5px;
        }
    }
`;
