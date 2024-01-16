import './styles/Styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Head from './components/Head'
import Home from "./pages/Home";
import Products from './pages/Products';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn'


function App() {
  return (
    <div>
      <Router>
        <Head></Head>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
        </Routes>
        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
