import logo from './logo.svg';
import './App.scss';
import {

  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Layout/>
      <Routes>
        {/* <Route path='/' element={<Layout/>}></Route> */}
        <Route index element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Routes>
    </>
  );
}

export default App;
