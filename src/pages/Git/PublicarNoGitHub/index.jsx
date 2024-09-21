import styled from 'styled-components';
import Git1 from '../assets/git1.png'
import CodeStyle from './../../../components/CodeStyle/index';

const ContainerPrincipal = styled.section`
    padding: 2% 4%;
`

const ContainerPublicacoes = styled.div`
    margin: 30px 0px;

    h2 {
        font-size: 2rem;
    }

    p {
        font-size: 18px;
        margin: 5px 0px;
    }

`

export default function PublicarNoGitHub() {
    return (
        <ContainerPrincipal>
            <ContainerPublicacoes>
                <h1>PUBLICANDO NO GITHUB</h1>
            </ContainerPublicacoes>
            <ContainerPublicacoes>
                <h2>Passo 1: Criar um repositório</h2>
                <p>Vá até o <span>Github</span> e crie um novo repositório</p>
                <p>Copie o link HTTPS ou SSH do repositório (aparece após a criação).</p>
                <img src={Git1} alt="" />
            </ContainerPublicacoes>
            <ContainerPublicacoes>
                <h2>Passo 2: Abrir o VSCode e seu projeto</h2>
                <p>Abrir o Vscode e a pasta do projeto</p>
            </ContainerPublicacoes>
            <ContainerPublicacoes>
                <h2>Passo 3: Inicializar o Git</h2>
                <p>No terminal do VSCode digite:</p>
                <CodeStyle language="bash">
                    {`                        git init
                        git add .
                        git commit -m "Commit inicial"
                        git remote add origin git@github.com:Rigarlol/d.git
                        git push -u origin main
`}
                </CodeStyle>
            </ContainerPublicacoes>
        </ContainerPrincipal>
    )
}