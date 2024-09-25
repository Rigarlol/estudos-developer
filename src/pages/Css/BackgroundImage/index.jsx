import styled from "styled-components"
import CodeStyle from "../../../components/CodeStyle"

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

export default function ImagemDeFundo() {
    return (
        <ContainerPrincipal>
            <ContainerPublicacoes>
                <h1>Background Image - Colocando Imagens de fundo</h1>
            </ContainerPublicacoes>
            <ContainerPublicacoes>
                <h2>Usando o CSS background-imagem</h2>
                <p>O CSS fornece a propriedade background-image para adicionar uma imagem de fundo em qualquer elemento HTML. O código básico é assim:</p>
                <CodeStyle language="css">
                    {` element  {
            background-image: url('caminho/para/a-imagem.jpg');
        }
`}
                </CodeStyle>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Ajustando o Tamanho e Posição da Imagem</h2>
                <p>Você pode usar outras propriedades para ajustar o comportamento da imagem de fundo:</p>
                <h2>Cobrir Toda a Área (background-size)</h2>
                <CodeStyle language="css">
                    {` element  {
            background-image: url('caminho/para/a-imagem.jpg');
            background-size: cover;
        }
`}
                </CodeStyle>
                <p><span>cover:</span> Faz com que a imagem cubra todo o elemento, ajustando suas proporções.</p>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Exibir a Imagem Completa (background-size)</h2>
                <p>Para mostrar a imagem inteira, mesmo que isso deixe espaços ao redor, use background-size: contain;</p>
                <CodeStyle language="css">
                    {` element  {
            background-image: url('caminho/para/a-imagem.jpg');
            background-size: contain;
        }
`}
                </CodeStyle>
                <p><span>contain:</span> Garante que a imagem inteira apareça, mas pode deixar espaços.</p>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Repetir ou Não Repetir a Imagem (background-repeat)</h2>
                <p>Você pode controlar a repetição da imagem com a propriedade background-repeat:</p>
                <p><span>repeat:</span> A imagem se repetirá tanto horizontalmente quanto verticalmente (padrão).</p>
                <p><span>no-repeat:</span> Não repete a imagem.</p>
                <p><span>repeat-x:</span> Repete a imagem apenas na horizontal.</p>
                <p><span>repeat-y:</span> Repete a imagem apenas na vertical.</p>
                <CodeStyle language="css">
                    {` element  {
            background-image: url('caminho/para/a-imagem.jpg');
            background-size: no-repeat;
        }
`}
                </CodeStyle>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Posicionamento da Imagem (background-position)</h2>
                <p>A posição da imagem pode ser ajustada com a propriedade background-position:</p>
                <CodeStyle language="css">
                    {` element  {
            background-image: url('caminho/para/a-imagem.jpg');
            background-position: center; 
        }
`}
                </CodeStyle>
                <p>Outras opções de posição: <span>top, bottom, left, right,</span> ou até valores percentuais como <span>50% 50%</span>.</p>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Fixar ou Rolagem da Imagem (background-attachment)</h2>
                <p>A propriedade <span>background-attachment</span> controla se a imagem de fundo rola com o conteúdo da página:</p>
                <p><span>scroll:</span> A imagem de fundo rola junto com o conteúdo (padrão).</p>
                <p><span>fixed:</span> A imagem de fundo fica fixa enquanto o conteúdo rola.</p>
                <CodeStyle language="css">
                    {` element  {
            background-image: url('caminho/para/a-imagem.jpg');
            background-attachment: fixed;
        }
`}
                </CodeStyle>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Exemplo completo:</h2>
                <CodeStyle language="css">
                    {` body  {
        background-image: url('background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
    }
`}
                </CodeStyle>
                <p>Nesse exemplo, a imagem de fundo:</p>
                <p>Cobre toda a página</p>
                <p>Não se repete</p>
                <p>Fica centralizada</p>
                <p>E permanece fixa ao rolar o conteúdo</p>
            </ContainerPublicacoes>

        </ContainerPrincipal>
    )
}