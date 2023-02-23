import React, { Suspense, lazy, useState }  from "react";
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import GlobalStyle from "./styles/global";

const Login = lazy(() => import("./pages/Login"));
const RecuperarSenha = lazy(() => import("./pages/RecuperarSenha"));
const CriarConta = lazy(() => import("./pages/CriarConta"));
const Diario = lazy(() => import("./pages/Diario"));
const CriarDiario = lazy(() => import("./pages/CriarDiario"));
const EditarDiario = lazy(() => import("./pages/EditarDiario"));
const Perfil = lazy(() => import("./pages/Perfil"));

const Loading = () => {
  return(
    <Container className="w-100 h-100">
      <div className="dot-carousel"style={{marginTop: 100}}></div>
    </Container>
  )
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const handleThemeChange = () => {
      localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
      setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyle theme={theme}/>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Navigate to="/login" replace/>} />
          <Route exact path='/login' element={<Login handleThemeChange={handleThemeChange} />} />
          <Route exact path='/senha/recuperar' element={<RecuperarSenha handleThemeChange={handleThemeChange}/>} />
          <Route exact path='/conta/criar' element={<CriarConta handleThemeChange={handleThemeChange}/>} />
          <Route exact path='/diario' element={<Diario handleThemeChange={handleThemeChange}/>} />
          <Route exact path='/diario/criar' element={<CriarDiario handleThemeChange={handleThemeChange}/>} />
          <Route exact path='/diario/editar' element={<EditarDiario handleThemeChange={handleThemeChange}/>} />
          <Route exact path='/perfil' element={<Perfil handleThemeChange={handleThemeChange}/>} />
          <Route path='*' element={<></>} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
