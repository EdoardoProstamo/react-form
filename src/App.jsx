import { useState } from "react";
import liquors from "./data/liquors";

function App() {

  const [alcolType, setAlcolType] = useState(liquors);
  const [newAlcolType, setNewAlcolType] = useState('');


  const updatePost = e => setNewAlcolType(e.target.value);


  const showSubmitt = e => {

    e.preventDefault();

    const newId = alcolType.length > 0 ? alcolType.at(-1).id + 1 : 1;

    const newArrayAlcol = {
      id: newId,
      title: newAlcolType,
      description: '',
      img: ''
    }

    setAlcolType([...alcolType, newArrayAlcol]);
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
        {alcolType.map((alcol, index) => <li key={alcol.id}>
          <article>{alcol.title}</article>
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