import styled from 'styled-components';
import Git1 from '../assets/git1.png'
import CodeStyle from './../../../components/CodeStyle/index';

const ContainerPrincipal = styled.section`
    padding: 2% 4%;
`

const ContainerPublicacoes = styled.div`
    margin: 30px 0px;

    h2 {
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.75rem;
    }

    p {
        font-size: 16px;
        margin: 5px 0px;
        color: #C4C4CC;
    }

`

export default function ComandosGit() {
    return (
        <ContainerPrincipal>
            <ContainerPublicacoes>
                <h1>Comandos importantes do GIT</h1>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Git init</h2>
                <CodeStyle language="bash">
                    {`git init`}
                </CodeStyle>
                <p>Inicia um novo repositório Git no diretório atual.</p>     
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>git clone</h2>
                <CodeStyle language="bash">
                    {`git clone <url>`}
                </CodeStyle>
                <p>Clona um repositório existente a partir de uma URL.</p>     
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>git status</h2>
                <CodeStyle language="bash">
                    {`git status`}
                </CodeStyle>
                <p>Exibe o estado do diretório de trabalho e da área de stage (arquivos modificados, prontos para commit, etc.).</p>     
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>git clone</h2>
                <CodeStyle language="bash">
                    {`git add <arquivo>`}
                </CodeStyle>
                <p>Adiciona um arquivo ou mudança ao stage, preparando para o commit.</p>     
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>git commit -m "mensagem"</h2>
                <CodeStyle language="bash">
                    {`git commit -m "mensagem"`}
                </CodeStyle>
                <p>Salva as mudanças do stage no repositório com uma mensagem descritiva.</p>     
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>git push</h2>
                <CodeStyle language="bash">
                    {`git push`}
                </CodeStyle>
                <p>Envia os commits locais para o repositório remoto.</p>     
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>git pull</h2>
                <CodeStyle language="bash">
                    {`git pull`}
                </CodeStyle>
                <p>Atualiza o repositório local com as mudanças do repositório remoto.</p>     
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>git branch</h2>
                <CodeStyle language="bash">
                    {`git branch`}
                </CodeStyle>
                <p>Lista todas as branches no repositório.</p>     
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>git remote</h2>
                <CodeStyle language="bash">
                    {`git remote`}
                </CodeStyle>
                <p>Gera uma lista de repositórios remotos conectados.</p>     
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>git log</h2>
                <CodeStyle language="bash">
                    {`git log`}
                </CodeStyle>
                <p>Exibe o histórico de commits.</p>     
            </ContainerPublicacoes>
        </ContainerPrincipal>
    )
}