import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Sheared/Header/Header';
import Footer from './Pages/Sheared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ServiceDetails from './Pages/Servicedetail/ServiceDetails';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import ProceedTo from './Pages/Servicedetail/ProceedTo';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App bg-light">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetails/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/proceedto" element={
          <RequireAuth>
            <ProceedTo/>
          </RequireAuth>
        }></Route>

        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
