import styled from "styled-components"

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 18.8rem; 
    right: 0;
    height: 56px;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    color: rgba(33, 33, 33, 1);
    background-color: transparent;
    border: 1px solid #241C38;
    backdrop-filter: blur(6px);
    //colocando a sombra 
    box-shadow: 1px 11px 20px 20px #2b1f423e
`

export default function Header() {
    return (
        <HeaderContainer>
            <h1>Bem vindos</h1>
            <h1>Grande Rota</h1>
        </HeaderContainer>
        
    )
}