import { Link } from "react-router-dom";
import styled from "styled-components";

const ListaAssuntoEstilizada = styled.li`
    margin: 10px;
    position: relative;
`

const LinkEstilizado = styled(Link)`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem; 
    padding: 0.25rem 0.75rem 0.25rem 1rem; 
    font-size: 0.875rem; 
    color: #6b7280;
    transition: color 0.2s ease-in-out;
    text-decoration: none;
  
  &:hover {
    color: #FFFF; 
  }
`

export default function ListaDeAssuntos({ assunto, referencia }) {
    return (
        <ListaAssuntoEstilizada>
            <LinkEstilizado to={referencia}>
                {assunto}
            </LinkEstilizado>
        </ListaAssuntoEstilizada>

    )
}