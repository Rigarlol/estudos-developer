import ImagemHTML from './assets/html.png'
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

export default function AnimationScrollJs() {
    return (
        <ContainerPrincipal>
            <ContainerPublicacoes>
                <h1>CRIANDO ANIMAÇÃO AO SCROLL COM JAVASCRIPT</h1>
            </ContainerPublicacoes>
            <ContainerPublicacoes>
                <h2>HTML Básico</h2>
                <p>Primeiro, você precisa de uma estrutura básica de HTML com elementos que deseja animar ao serem visualizados. Vamos adicionar a classe <span>hidden</span> aos elementos que começarão ocultos.</p>
                <img src={ImagemHTML} alt="" />
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Estilos CSS </h2>
                <p>No CSS, definimos os estilos de animação. Vamos usar a classe <span>hidden</span> para ocultar os elementos inicialmente, e a classe <span>show</span> será adicionada dinamicamente via JavaScript quando os elementos entrarem na área visível da tela.</p>
                <CodeStyle language="css">
                    {` * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  transition: opacity 0.6s ease, transform 0.6s ease;
  opacity: 0; /* Elemento começa invisível */
  transform: translateY(50px); /* Inicia deslocado para baixo */
}

.show {
  opacity: 1; /* Quando visível, torna-se opaco */
  transform: translateY(0); /* Retorna para a posição original */
}
`}
                </CodeStyle>
                <h2>Explicação CSS</h2>

                <p><span>opacity: 0:</span> Os elementos são inicialmente invisíveis.</p>

                <p><span>transform: translateY(50px):</span> Eles começam deslocados 50 pixels para baixo.</p>

                <p><span>transition: opacity 0.6s ease, transform 0.6s ease:</span> Quando a classe <span>show</span> for adicionada, haverá uma transição suave para torná-los visíveis e retornar à posição original em 0.6 segundos.</p>

                <p><span>.show:</span> Essa classe será aplicada via JavaScript quando o elemento entrar na viewport, tornando-o visível com <span>opacity: 1</span> e removendo o deslocamento.</p>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Lógica JavaScript</h2>

                <p>Agora, precisamos de um script para observar esses elementos. Usaremos a API <span>IntersectionObserver</span>, que vai detectar quando um elemento com a classe <span>hidden</span> entra ou sai da viewport, e adicionar ou remover a classe <span>show</span> para disparar a animação.</p>

                <CodeStyle language="javascript">
                    {` // Seleciona todos os elementos com a classe 'hidden'
const elements = document.querySelectorAll('.hidden');

// Cria um observador para monitorar a visibilidade dos elementos
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Se o elemento estiver visível na viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Adiciona a classe 'show' para iniciar a animação
        } else {
            entry.target.classList.remove('show'); // Remove a classe 'show' quando o elemento sair da tela
        }
    });
});

// Observa cada elemento com a classe 'hidden'
elements.forEach((element) => myObserver.observe(element));

`}
                </CodeStyle>
                
                <h2>Explicação JavaScript</h2>

                <p><span>document.querySelectorAll('.hidden'):</span> Seleciona todos os elementos que têm a classe hidden.</p>

                <p><span>IntersectionObserver:</span> Cria um observador que monitora a visibilidade de cada elemento.</p>

                <p>entries.forEach(entry) Para cada elemento que o observador monitora:</p>

                <p><span>entry.isIntersecting:</span> Verifica se o elemento está visível na tela</p>

                <p><span>entry.target.classList.add('show'):</span> Adiciona a classe show ao elemento quando ele entra na área visível, ativando a animação.</p>

                <p><span>entry.target.classList.remove('show'):</span> Remove a classe show quando o elemento sai da tela.</p>

                <p><span>myObserver.observe(element):</span> Inicia a observação para cada elemento que contém a classe hidden.</p>
            </ContainerPublicacoes>

            <ContainerPublicacoes>
                <h2>Como funciona</h2>
                
                <p>Quando o usuário rola a página, o <span>IntersectionObserver</span> verifica se algum dos elementos com a classe hidden entrou na viewport (área visível da tela).</p>

                <p>Se o elemento estiver visível, a classe <span>show</span> é adicionada, e a transição suave definida no CSS faz com que o elemento fique visível e retorne à sua posição original.</p>

                <p>Quando o elemento sai da viewport, a classe <span>show</span> é removida, e o elemento volta a ficar oculto e deslocado.</p>
            </ContainerPublicacoes>

        </ContainerPrincipal>
    )
}