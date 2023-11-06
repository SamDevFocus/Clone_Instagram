import reactLogo from './assets/react.svg'
import LateralEsquerda from './Componentes/LateralEsquerda'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import ConteudoEsquerdo from './Componentes/ConteudoEsquerdo'
import ConteudoCentral from './Componentes/ConteudoCentral'
import ConteudoDireito from './Componentes/ConteudoDireito'


export default function App() {

  return (
    <main>
      <ConteudoEsquerdo />
      <div className='d-flex centro-direito'>
        <ConteudoCentral />
        <ConteudoDireito />
      </div>
    </main>
  )
}
