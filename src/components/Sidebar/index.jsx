import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from '../../assets/logoOne.svg';
import ListaDeAssuntos from "../ListaAssuntos";

const DivLogo = styled.div`
    margin-bottom: 1.5rem;
`;

const Container = styled.div`
    padding: 4% 0%;
`;

const ContainerSideBar = styled.div`
    width: 300px;
    min-width: 200px;
    background-color: #121212;
    color: white;
    height: 100vh;
    padding: 20px;
    overflow-y: auto;
    position: sticky;
    top: 0;

    //scrollbar-width: none; /* Remove o scroll padrão em Firefox */

    &::-webkit-scrollbar {
    width: 5px; 
    }

    &::-webkit-scrollbar-track {
    background: 'transparent'; 
    }

    &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px; 
    }

    &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.5); 
    }
`;


const ContainerTopico = styled.div`
    padding-left: 0.5rem;
    margin-top: 0.75rem;
    position: relative;
`;


const TopicoStyled = styled.h3`
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
`;


const LinhaVertical = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 8px;  
    width: 1px; 
    background-color: rgba(95, 93, 101, 0.961);  
`;


const NavEstilizado = styled.nav`
    margin-top: 2.5rem;
`;


const LiEstilizado = styled.li`
    margin-top: 24px;
    position: relative;
`;

export default function SideBar() {
    return (
        <ContainerSideBar>
            <DivLogo>
                <Link to="/"><img src={Logo} alt="Logo" /></Link>
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
                                        referencia="/ComandosGit"
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
