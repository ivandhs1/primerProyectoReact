
import { Home } from './components/pages/Home/Home';
import { NotFound } from './components/pages/NotFound/NotFound';
import { Ejercicios } from './components/pages/Ejercicios/Ejercicios';
import { Contact } from './components/pages/Contact/Contact';
import './index.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { HeaderHome } from './components/Layouts/HeaderHome/HeaderHome';
import { Footer } from './components/Layouts/Footer/Footer';
import { Contador } from './components/pages/Contador/Contador';
import { Carrito } from './components/pages/Carrito/Carrito';



function App() {
  return (
    <div>
        <HeaderHome></HeaderHome>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ejercicios' element={<Ejercicios/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/contador' element={<Contador/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
