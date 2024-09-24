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

export default function UnidadesDeMedida() {
    return (
        <ContainerPrincipal>
            <ContainerPublicacoes>
                <h1>UNIDADES DE MEDIDA</h1>
            </ContainerPublicacoes>
            <ContainerPublicacoes>
                <h2>px (pixel)</h2>
                <CodeStyle language="css">font-size: 16px;</CodeStyle>
                <p>Unidade fixa de medida, que representa um ponto na tela.</p>
                <p>Muito utilizado para tamanhos precisos, mas pode não ser ideal para layouts responsivos.</p>
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