import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Home from "./pages/Home"
import PublicarNoGitHub from "./pages/Git/PublicarNoGitHub"
import SideBar from "./components/Sidebar"
import Header from "./components/Header"
import ComandosGit from "./pages/Git/ComandosGit"
import UnidadesDeMedida from "./pages/Css/UnidadesDeMedida"
import ImagemDeFundo from "./pages/Css/BackgroundImage"
import TransitionCSS from "./pages/Css/Transition"    
import AnimationScrollJs from "./pages/JavaScript/AnimatonScrollJsCss"
import AnimationScrollReact from "./pages/ReactJS/AnimationScrollReactJS"



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
            <Route path="/unidades-de-medida" element={<UnidadesDeMedida />}/>
            <Route path="/background-image" element={<ImagemDeFundo />}/>
            <Route path="/transition" element={<TransitionCSS />}/>
            <Route path="/animationscrollJs"element={<AnimationScrollJs/>}/>
            <Route path="/animationscrollreact"element={<AnimationScrollReact />}/>
          </Routes>
        </Container>
      </Layout>
    </BrowserRouter>
  );
}

export default App;