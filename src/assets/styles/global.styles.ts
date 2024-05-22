import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    height: 100vh;
    background: #8758ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  button{
    color: #fff;
    cursor: pointer;

    &:disabled {
      background:#000;
      color: #999;   
      cursor: not-allowed; 
    }
  }
`;
