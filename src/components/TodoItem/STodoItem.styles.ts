import styled from 'styled-components';

export const STodoItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    background: #8758ff;
    padding: 8px;
    border-radius: 7px;
    width: 100%;

    &: hover {
        box-shadow: rgb(135, 88, 255, 0.5) 0px 0px 10px 10px;
    }

    button {
        background: #1a1a40;
        padding: 8px;
        border-radius: 7px;

        &: hover {
            box-shadow: rgba(26, 26, 64, 0.3) 0px 0px 7px 7px;
        }
    }

    label {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        cursor: pointer;

        input[type='checkbox' i] {
            cursor: pointer;
        }

        span {
            cursor: pointer;
            max-width: 100%;
            word-break: break-all;
            white-space: normal;
        }
    }

    input[type='text' i] {
        width: 100%;
        background: #1a1a40;
        border-radius: 7px;
        padding: 10px 20px;
        color: #fff;
        outline: none;
    }

    > div {
        display: flex;
        flex-direction: row;
        gap: 4px;
    }
`;
