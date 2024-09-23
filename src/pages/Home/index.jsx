import styled from "styled-components"

const Container = styled.main`
    max-width: 700px;
    margin-top: 8rem;
    margin-bottom: 4rem;
    padding-left: 4rem;
`
const ParagrafoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`


export default function Home() {
    return (
        <Container>
            <div>
                <h1>Biblioteca Grande Rota</h1>
            </div>
            <ParagrafoContainer>
                <p>Essa biblioteca tem diversos conteúdos gratuitos sobre HTML, CSS, JavaScript, SQL, React, Node.js, TypeScript, SQL, Git, GitHub e muito mais para você consumir de acordo com as suas necessidades e momento de carreira.</p>
                
                <p>Ela é de autoria minha e foi criada para registrar meus estudos acerca da programação. </p>
            </ParagrafoContainer>
        </Container>
    )
}