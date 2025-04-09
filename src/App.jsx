import { useState } from "react";
import liquors from "./data/liquors";

function App() {

  const [alcolType, setAlcolType] = useState(null);
  const updatePost = e => setAlcolType(e.target.value);
  const showSubmitt = e => { e.preventDefault() };
  return (
    <>
      <form onSubmit={showSubmitt}>
        <ul>
          {liquors.map(liquore => <li key={liquore.id}>{liquore.title}</li>)}
        </ul>
        <input type="text" placeholder="Inserisci il nuovo alcolico" onChange={updatePost} />
        <button>INVIO</button>
      </form>
    </>
  )
};

export default App;
