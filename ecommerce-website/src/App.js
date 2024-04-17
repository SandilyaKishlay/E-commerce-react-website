
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer'; 
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;