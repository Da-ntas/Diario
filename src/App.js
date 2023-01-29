import React, { Suspense, lazy, useState }  from "react";
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import GlobalStyle from "./styles/global";
const Login = lazy(() => import("./pages/Login"));
const RecuperarSenha = lazy(() => import("./pages/RecuperarSenha"));
const CriarConta = lazy(() => import("./pages/CriarConta"));

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
      <Router>
        <Routes>
          <Route path='/' element={<></>} />
          <Route exact path='/login' element={<Login handleThemeChange={handleThemeChange} />} />
          <Route exact path='/senha/recuperar' element={<RecuperarSenha handleThemeChange={handleThemeChange}/>} />
          <Route exact path='/conta/criar' element={<CriarConta handleThemeChange={handleThemeChange}/>} />
          <Route path='*' element={<></>} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
