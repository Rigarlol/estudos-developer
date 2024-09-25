import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism, tomorrow, solarizedlight, okaidia, dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";



const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
  background-color: #2d2d2d !important; 
  padding: 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Courier New', Courier, monospace;
  overflow-x: auto; 
  color: #f8f8f2;
  max-width: 600px;

  code {
    color: #f8f8f2;  
  }

  
  span.token.function {
    color: #66d9ef; 
  }
  span.token.string {
    color: #a6e22e; 
  }
`;

export default function CodeStyle({ language, children }) {
  return (
    <CustomSyntaxHighlighter language={language} style={dark}>
      {children}
    </CustomSyntaxHighlighter>
  );
}