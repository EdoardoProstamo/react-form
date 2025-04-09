import { useState } from "react";
import liquors from "./data/liquors";

function App() {

  const [alcolType, setAlcolType] = useState(liquors[0].title);

  return (
    <>
      <ul>
        {liquors.map(liquore => <li key={liquore.id}>{liquore.title}</li>)}
      </ul>

      <input type="text" placeholder="Inserisci il nuovo alcolico" />
      <button>INVIO</button>
    </>
  )
};

export default App;
