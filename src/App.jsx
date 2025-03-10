import Navbarlayout from './layouts/Navbarlayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [gruppen, setGruppe] = useState([]);

  useEffect(() => {
    loadGruppen();
  }, [])

  const loadGruppen = async() =>{

      const result = await axios.get("http://localhost:8080/getAllGruppe");
      console.log(result.data)
    setGruppe(result.data);
  } 
  return (
    <>
      <Navbarlayout />

      <ul>
        {
          
        gruppen.map((gruppe) => (
          <li>{gruppe.gruppeName}</li>
        ))

        }
      </ul>
    
    </>
  )
}

export default App
