import Pai from './components/Atividade01/01Pai';
import { PlacaDeVideo, PlacaMae, Memoria } from './components/Atividade01/02MeuPC';
import { Hero, Enemy, Arena, World } from './components/Atividade01/03Batalha.jsx';

import ThorImage from './imgs/thor.jpeg'; 
import ThanosImage from './imgs/thanos.jpeg'; 
import VascoImage from './imgs/vasco.png';
import FlaImage from './imgs/flamengo.png';


const PC = {
  PlacaMae,
  Memoria,
  PlacaDeVideo,
};

function App() {
  return (
    <div>
        <h1> Questão 1 </h1>
        <Pai />

        <h1> Questão 2 </h1>
        <PC.PlacaMae nome="ASUS ROG Strix Z690-A Gaming WiFi" preco={2500} />
        <PC.Memoria  nome="Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4 3200MHz" preco={1200} />
        <PC.PlacaDeVideo nome="ASUS GeForce RTX 3050 Ti" preco={2500} />

        <h1> Questão 3 </h1>
        <World >
          <Arena arena="Universo Marvel">
            <Hero name="Thor" image={ThorImage} /> {/* Corrige o uso de Thor como string */}
            <Enemy name="Thanos" image={ThanosImage} /> {/* Corrige o uso de Thanos como string */}
          </Arena>

          <Arena arena="Maracanã">
            <Hero name="Vasco" image={VascoImage} /> {/* Corrige o uso de Thor como string */}
            <Enemy name="Flamengo" image={FlaImage} /> {/* Corrige o uso de Thanos como string */}
          </Arena>
        </World>
    </div>
  );
}

export default App;
