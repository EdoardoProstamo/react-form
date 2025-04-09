import { useState } from "react";
import liquors from "./data/liquors";

function App() {

  const [alcolType, setAlcolType] = useState(liquors[0]);
  const [newAlcolType, setNewAlcolType] = useState('');


  const updatePost = e => setNewAlcolType(e.target.value);

  const showSubmitt = e => {

    e.preventDefault();

    //  const alcol = [...alcolType]; => spread operator
    const alcol = [];
    alcolType.forEach(alcolType => alcol.push(alcolType));
    setAlcolType(alcol);


  };

  return (
    <>
      <ul>
        {liquors.map(liquore => <li key={liquore.id}>{liquore.title}</li>)}
      </ul>

      <form onSubmit={showSubmitt}>
        <input type="text" placeholder="Inserisci il nuovo alcolico" onChange={updatePost} />
        <button>INVIO</button>
      </form>
    </>
  )
};

export default App;
