import styled from "styled-components"
import CodeStyle from "../../../components/CodeStyle"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
import Code from './assets/code.png'

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


export default function AnimationScrollReact() {
    return (
        <ContainerPrincipal>
            <ContainerPublicacoes>
                <h1>CRIANDO ANIMAÇÃO SCROLL COM REACT JS E A BIBLIOTECA GSAP</h1>
            </ContainerPublicacoes>
            <ContainerPublicacoes>
                <h2>Instalando o Gsap</h2>
                <CodeStyle language="bash">
                    {`npm install gsap`}
                </CodeStyle>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Criação de um Componente com Styled Components</h2>
                <p>Você vai criar seus componentes estilizados normalmente usando o <span>styled-components.</span></p>
                <CodeStyle language="bash">
                    {`npm install styled-components`}
                </CodeStyle>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Componente Button com styled components</h2>
                <img src={Code} alt="" />
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Utilização do GSAP em um Componente React</h2>

                <p>No componente React, você vai importar o GSAP e o Styled Component que você criou e utilizar o <span>useEffect</span> para aplicar a animação quando o componente for renderizado.</p>

                <CodeStyle language="javascript">
                    {`const AnimatedButton = () => {
  // Crie uma referência ao DOM
  const buttonRef = useRef(null);

  // useEffect para animar após o componente montar
  useEffect(() => {
    gsap.from(buttonRef.current, {
      duration: 1,
      opacity: 0,
      y: -50, // Move o botão para baixo vindo do topo
      ease: 'power3.out'
    });
  }, []);

  return <StyledButton ref={buttonRef}>Clique em mim</StyledButton>;
};

export default AnimatedButton;`}
                </CodeStyle>
                
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Explicação do Código</h2>
                <p><span>StyledButton:</span> Este é o botão estilizado que você criou usando styled-components.</p>

                <p><span>useRef:</span> O hook useRef cria uma referência ao botão no DOM. Isso permite que o GSAP acesse diretamente o elemento que você quer animar.</p>

                <p><span>useEffect:</span> Dentro do useEffect, o GSAP aplica a animação quando o componente é montado. No exemplo, o botão começa com opacity: 0 e uma posição Y negativa, e em 1 segundo ele se move para a posição original com uma transição suave.</p>

                <p><span>GSAP .from():</span> O método gsap.from() define a animação começando de um estado inicial. No exemplo, o botão começa invisível e deslocado para cima, e então se anima para a posição correta.</p>
            </ContainerPublicacoes>

        </ContainerPrincipal>
    )
}