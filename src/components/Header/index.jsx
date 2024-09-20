import { Link } from "react-router-dom"
import styled from "styled-components"


const HeaderEstilizado = styled.header`
    text-align: center;
`
const Container = styled.div`
    padding: 4% 0%;
`

export default function Header(){
    return (
        <HeaderEstilizado>
            <Container>
                <h1>Lugar onde eu registro meus estudos</h1>
                <h3>
                    <Link to="/">
                        Home
                    </Link>
                </h3>
            </Container>
        </HeaderEstilizado>
    )
}