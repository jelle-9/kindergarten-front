import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function KinderListe() {
    const [kinder, setKinder] = useState([]);
    useEffect(() => {
        loadKinder();
    }, [])
    const loadKinder = async() => {
        const result = await axios.get("http://localhost:8080/getAllKinder");
        setKinder(result.data);
        console.log(result.data);
    }


    console.log(kinder);
  return (
    <div>
        {
            kinder.map((kind) => (

                <div key={kind.id}>
                    <h1>{kind.kindVorname}</h1>
                    <h1>{kind.kindNachname}</h1>
                    <h1>{kind.kindGeburtsdatum}</h1>
                    <h1>{kind.besonderheiten}</h1>
                    <h1>{(kind.anwesenheiten).map(anwesend => (<h2>{anwesend.awDatum}</h2>))}</h1>
                    <h1>{kind.betreuer}</h1>
                </div>
            ))
        }
    </div>
    
  )
}
