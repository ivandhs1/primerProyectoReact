import logo from './logo.svg';
import './index.css';
import { ButtonUI } from './components/UI/ButtonUI/ButtonUI';

function App() {
  return (
    <div className="appPadre">
      <h1 className="h1appPadre">Hola</h1>
      <h2 className="h2appPadre">Grupo</h2>
      <h3 className="h3appPadre">Bienvenidos</h3>
      <ButtonUI/>
    </div>
  );
}

export default App;
