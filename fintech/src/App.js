import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import StateAndEvent from './components/StateAndEvent';
import ArrayMap from './components/ArrayMap';
import AppBar from './components/common/AppBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AxiosTest from './pages/AxiosTest';
import NewsApiPage from './pages/NewsApiPage';
import AuthPage from './pages/AuthPage';
import AuthResultPage from './pages/AuthResultPage';
import MainPage from './pages/MainPage';
import BalancePage from './pages/BalancePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/routeTest" element={<Welcome></Welcome>}></Route>
        <Route path="/axiostest" element={<AxiosTest></AxiosTest>}></Route>
        <Route path="/news" element={<NewsApiPage></NewsApiPage>}></Route>
        <Route path="/" element={<AuthPage></AuthPage>}></Route>
        <Route path="/AuthResult" element={<AuthResultPage></AuthResultPage>}></Route>
        <Route path="/main" element={<MainPage></MainPage>}></Route>
        <Route path="/balance" element={<BalancePage></BalancePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

