import { useState } from "react";
import liquors from "./data/liquors";

function App() {

  const [alcolType, setAlcolType] = useState(['vodka', 'gin', 'rum', 'triple sec', 'tequila']);
  const [newAlcolType, setNewAlcolType] = useState('');


  const updatePost = e => setNewAlcolType(e.target.value);


  const showSubmitt = e => {

    e.preventDefault();

    setAlcolType([...alcolType, newAlcolType]);
    setNewAlcolType('');
  };


  const deleteAlcolType = (indexToDelete) => {
    console.log(indexToDelete);

    const newArray = alcolType.filter((alcol, index) => indexToDelete !== index)
    setAlcolType(newArray);
  };
  return (
    <>
      <ul>
        {alcolType.map((alcol, index) => <li key={index}>
          <article>{alcol}</article>
          <button onClick={() => deleteAlcolType(index)}>Elimina l'elemento</button>
        </li>)}
      </ul>

      <form onSubmit={showSubmitt}>
        <input type="text" value={newAlcolType} placeholder="Inserisci il nuovo alcolico" onChange={updatePost} />
        <button>INVIO</button>
      </form>
    </>
  )
};

export default App;