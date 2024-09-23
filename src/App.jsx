import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Home from "./pages/Home"
import PublicarNoGitHub from "./pages/Git/PublicarNoGitHub"
import SideBar from "./components/Sidebar"
import Header from "./components/Header"


const Layout = styled.div`
  display: flex;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  flex: 1;
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
          </Routes>
        </Container>
      </Layout>
    </BrowserRouter>
  );
}

export default App;