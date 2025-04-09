import { useState } from "react";
import liquors from "./data/liquors";

function App() {

  const [alcolType, setAlcolType] = useState(liquors[0].title);

  return (<ul>
    <li>{alcolType}</li>
  </ul>)
};

export default App;
