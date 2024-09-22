import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from '../../assets/logoOne.svg';
import ListaDeAssuntos from "../ListaAssuntos";

// Estilo para a div que contém o logo
const DivLogo = styled.div`
    margin-bottom: 1.5rem;
`;

// Estilo para o container geral
const Container = styled.div`
    padding: 4% 0%;
`;

// Estilo para a barra lateral
const ContainerSideBar = styled.div`
    width: 20%;
    background-color: #121212;
    color: white;
    height: 100vh;
    padding: 20px;
    overflow-y: scroll;
`;

// Estilo para o container de cada tópico
const ContainerTopico = styled.div`
    padding-left: 0.5rem;
    margin-top: 0.75rem;
    position: relative;
`;

// Estilo para o título do tópico
const TopicoStyled = styled.h3`
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
`;

// Estilo para a linha vertical
const LinhaVertical = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 8px;  /* Equivalente a left-2 (8px) */
    width: 1px; /* Define a largura da linha */
    background-color: rgba(95, 93, 101, 0.961); /* bg-gray-900/10 no modo claro */
`;

// Estilo para o componente de navegação
const NavEstilizado = styled.nav`
    margin-top: 2.5rem;
`;

// Estilo para cada item de lista
const LiEstilizado = styled.li`
    margin-top: 24px;
    position: relative;
`;

export default function SideBar() {
    return (
        <ContainerSideBar>
            <DivLogo>
                <img src={Logo} alt="Logo" />
            </DivLogo>
            <Container>
                <NavEstilizado>
                    <ul>
                        <LiEstilizado>
                            <TopicoStyled>GIT</TopicoStyled>
                            <ContainerTopico>
                                <LinhaVertical />
                                <ul>
                                    <ListaDeAssuntos
                                        assunto="Como publicar no GitHub"
                                        referencia="/PublicarNoGitHub"
                                    />
                                    <ListaDeAssuntos
                                        assunto="Comandos do GIT"
                                        referencia="/PublicarNoGitHub"
                                    />
                                </ul>
                            </ContainerTopico>
                        </LiEstilizado>
                        <LiEstilizado>
                            <TopicoStyled>HTML</TopicoStyled>
                        </LiEstilizado>
                    </ul>
                </NavEstilizado>
            </Container>
        </ContainerSideBar>
    );
}
