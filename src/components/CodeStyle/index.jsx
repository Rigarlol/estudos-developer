import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism, tomorrow, solarizedlight, okaidia, dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";



const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
  background-color: #2d2d2d !important;  /* Fundo escuro personalizado */
  padding: 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Courier New', Courier, monospace;
  overflow-x: auto; /* Caso o código seja muito longo */
  color: #f8f8f2;
  max-width: 600px;

  code {
    color: #f8f8f2;  /* Personalizando cor do texto */
  }

  /* Opcionalmente, você pode alterar cores específicas aqui */
  span.token.function {
    color: #66d9ef; /* Cor da função */
  }
  span.token.string {
    color: #a6e22e; /* Cor de strings */
  }
`;

export default function CodeStyle({ language, children }) {
  return (
    <CustomSyntaxHighlighter language={language} style={dark}>
      {children}
    </CustomSyntaxHighlighter>
  );
}