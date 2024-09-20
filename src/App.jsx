import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Header from "./components/Header"
import Home from "./pages/Home"
import PublicarNoGitHub from "./pages/Git/PublicarNoGitHub"


const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PublicarNoGitHub" element={<PublicarNoGitHub />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
