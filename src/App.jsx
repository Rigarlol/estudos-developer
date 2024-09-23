import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Home from "./pages/Home"
import PublicarNoGitHub from "./pages/Git/PublicarNoGitHub"
import SideBar from "./components/Sidebar"
import Header from "./components/Header"
import ComandosGit from "./pages/Git/ComandosGit"


const Layout = styled.div`
  display: flex;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  flex: 1;
  overflow-y: auto;
  padding-top: 4rem;
`;


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <SideBar />
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PublicarNoGitHub" element={<PublicarNoGitHub />} />
            <Route path="/ComandosGit" element={<ComandosGit />}/>
          </Routes>
        </Container>
      </Layout>
    </BrowserRouter>
  );
}

export default App;