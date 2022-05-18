
import { Home } from './components/pages/Home/Home';
import { NotFound } from './components/pages/NotFound/NotFound';
import { About } from './components/pages/About/About';
import { Contact } from './components/pages/Contact/Contact';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HeaderHome } from './components/Layouts/HeaderHome/HeaderHome';
import { Footer } from './components/Layouts/Footer/Footer';



function App() {
  return (
    <div>
        <HeaderHome></HeaderHome>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
