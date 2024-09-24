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
                <h2>em </h2>
                <CodeStyle language="css">font-size: 1em;</CodeStyle>
                <p>Baseado no tamanho da fonte do elemento pai.</p>
                <p>Exemplo: Se o tamanho da fonte do elemento pai é 16px, 1em equivale a 16px.</p>
                <p>Usado para definir espaçamentos (margem, padding) ou tamanhos de fontes de forma flexível, adaptando-se ao contexto.
                </p>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>rem</h2>
                <CodeStyle language="css">font-size: 1rem;</CodeStyle>
                <p>Baseado no tamanho da fonte da raiz ({"<html>"}).</p>
                <p>Exemplo: Se o tamanho da fonte do {"<html>"}é 16px, 1rem equivale a 16px.</p>
                <p>Usado de forma semelhante ao em, mas garante consistência, já que sempre faz referência à raiz do documento.</p>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>vw (viewport width)</h2>
                <CodeStyle language="css">width: 100vw;</CodeStyle>
                <p>1 vw equivale a 1% da largura da janela de visualização (viewport).</p>
                <p>Exemplo: 100vw é 100% da largura da tela.</p>
                <p>Usado para ajustar dimensões com base no tamanho da tela do usuário.</p>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>vh (viewport height)</h2>
                <CodeStyle language="css">height: 100vh;</CodeStyle>
                <p>1 vh equivale a 1% da altura da janela de visualização.</p>
                <p>Exemplo: 100vh é 100% da altura da tela.</p>
                <p>Útil para layouts que precisam ocupar a altura completa da tela.</p>
            </ContainerPublicacoes>

        </ContainerPrincipal>
    )
}