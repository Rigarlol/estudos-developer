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

export default function TransitionCSS() {
    return (
        <ContainerPrincipal>
            <ContainerPublicacoes>
                <h1>Transition</h1>
            </ContainerPublicacoes>
            <ContainerPublicacoes>
                <h2>Sintaxe Básica</h2>
                <CodeStyle language="css">
                    {` element  {
            transition: propriedade tempo easing delay;
        }
`}
                </CodeStyle>
                <p><span>propriedade:</span> A propriedade CSS que será animada, como width, background-color, transform, etc.</p>

                <p><span>tempo</span> Duração da transição (em segundos ou milissegundos). Exemplo: 2s ou 500ms.</p>

                <p><span>easing</span>(opcional): Define a aceleração da transição. Exemplo: ease, linear, ease-in, ease-out, etc.</p>

                <p><span>delay</span>(opcional): Atraso antes de a transição começar. Exemplo: 1s.</p>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Exemplo 1: Alterando Cor de Fundo</h2>
                <CodeStyle language="css">
                    {` button  {
            background-color: blue;
            transition: background-color 0.3s ease;
        }   

button:hover {
            background-color: green;
        }
`}
                </CodeStyle>
                <p>Nesse exemplo, ao passar o mouse sobre o botão, sua cor de fundo muda de azul para verde em 0.3 segundos, de forma suave.</p>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
            <h2>Exemplo 2: Alterando Largura e Altura</h2>
                <CodeStyle language="css">
                    {` div  {
              width: 100px;
              height: 100px;
              background-color: red;
              transition: width 1s ease-in-out, height 1s ease-in-out;
        }   

div:hover {
              width: 200px;
              height: 200px;
        }
`}
                </CodeStyle>
                <p>Aqui, a largura e altura do <span>div</span> dobram quando o usuário passa o mouse sobre ele, com uma transição suave de 1 segundo.</p>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Propriedades que aceitam <span>transition</span></h2>
                <p><span>Cor</span> background-color, color, border-color.</p>
                <p><span>Tamanho:</span> width, height, padding, margin.</p>
                <p><span>Posicionamento:</span> left, top, right, bottom.</p>
                <p><span>Outras:</span> opacity, transform (rotação, escala), box-shadow.</p>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
            <h2>Transição em Todas as Propriedades</h2>
            <p>Você pode aplicar transições em todas as propriedades de um elemento com o valor especial <span>all</span>:</p>
                <CodeStyle language="css">
                    {` element  {
              transition: all 0.5s ease;
`}
                </CodeStyle>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Efeitos de <span>easing</span></h2>
                <p>A função <span>easing</span> define o ritmo da transição. Algumas funções comuns:</p>
                <p><span>ease:</span> Começa devagar, acelera, e depois desacelera (padrão).</p>
                <p><span>linear:</span> Mantém uma velocidade constante do início ao fim.</p>
                <p><span>ease-in:</span> Começa devagar e acelera no final.</p>
                <p><span>ease-out:</span> Começa rápido e desacelera no final.</p>
                <p><span>ease-in-out</span> Combina <span>ease-in</span> e <span>ease-out</span>.</p>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Exemplo 3: Com delay</h2>
                <CodeStyle language="css">
                    {` button  {
              background-color: red;
              transition: background-color 2s ease 1s;
        }   

button:hover {
              background-color: yellow;
        }
`}
                </CodeStyle>
                <p>Neste exemplo, a mudança de cor só começa 1 segundo após o hover.</p>
            </ContainerPublicacoes>
        </ContainerPrincipal>
    )
}