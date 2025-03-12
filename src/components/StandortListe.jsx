import { useEffect, useState } from 'react'
import axios from 'axios'

export default function StandortListe() {
  const [standorte, setStandort] = useState([]);

  useEffect(() => {
    loadStandorte();
  }, [])

  const loadStandorte = async() => {
    const result = await axios.get("http://localhost:8080/standort");
    console.log(result.data);
  }

  return (
    <div>StandortListe</div>
  )
}
