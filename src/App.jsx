import Navbarlayout from './layouts/Navbarlayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Tabsnavigator from './layouts/Tabsnavigator';
import './styles/styles.css'


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

      <div id='mainContainer'> 
        <Tabsnavigator className="tabs"/>
        <div className='home'>
            <h1>Welcom to KiDi-Soft GmbH</h1>
        </div>
      </div>

      

     {/* <ul>
        {

        gruppen.map((gruppe) => (
          <li>{gruppe.gruppeName}</li>
        ))

        }
      </ul>*/}
    
    </>
  )
}

export default App
