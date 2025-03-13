import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';


// const {data} = await axios.post('http://localhost:8080/addKind', document.querySelector('#my-form'), {
//     headers: {
//       'Content-Type': 'application/json'
//     }
    
//   })

function Formular() {
  const [gruppen, setGruppen] = useState([]);
  
  useEffect(() => {
      loadGruppen();
  }, [])
  
  const loadGruppen = async() => {
      const result = await axios.get("http://localhost:8080/getAllGruppe");
      setGruppen(result.data);
      console.log(result.data)
  }

  {/* ==============KINDER DATEN==================== */}
  
  const daten = (e) => {
      const vorname = document.getElementById("kindVorname").value
      const nachname = document.getElementById("kindNachname").value
      const besonderheiten = document.getElementById("kindBesonderheiten").value
      const geburtsdatum = document.getElementById("kindGeburtsdatum").value
      const gruppeId = document.getElementById("gruppeId").value

      console.log("Gruppe Id: " + gruppeId)

     const rsult = axios.post('http://localhost:8080/addKind', {
        kindVorname: vorname,
        kindNachname: nachname,
        besonderheiten: besonderheiten,
        kindGeburtsdatum: geburtsdatum,
        gruppe: {
          id: gruppeId
          
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      {/* ==============ELTERN REQUEST==================== */}

      const elternVorname = document.getElementById("elternVorname").value
      const elternNachname = document.getElementById("elternNachname").value
      const elternStrasseHausnr = document.getElementById("elternStrasseHausnr").value
      const elternPlz = document.getElementById("elternPlz").value
      const elternTelefonnummer= document.getElementById("elternTelefonnummer").value
      const elternEmail = document.getElementById("elternEmail").value

      const elternResult = axios.post('http://localhost:8080/eltern/addEltern', {
        elternVorname: elternVorname,
        elternNachname: elternNachname,
        elternStrasseHausnr: elternStrasseHausnr,
        elternPlz: {
            plz: elternPlz
        },
        elternTelefonnummer: elternTelefonnummer,
        elternEmail: elternEmail
          
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

     
      }

      
      
  

  return (
    <Form id='my-form'>
      <fieldset>
        <legend>Kinder Stammdaten</legend>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Vorname des Kindes</Form.Label>
            <Form.Control id="kindVorname" type="vorname" placeholder="Vorname *" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Nachname des Kindes</Form.Label>
            <Form.Control id="kindNachname" type="nachname" placeholder="Nachname *" />
          </Form.Group>
        </Row>

        <Form.Group as={Col}>
            <Form.Label>Besonderheiten</Form.Label>
            <Form.Control id="kindBesonderheiten" rows={3} as="textarea" type="besonderheiten" placeholder="Besonderheiten" />
        </Form.Group>

        <Form.Group as={Col}>
            <Form.Label>Geburtsdatum</Form.Label>
            <Form.Control id="kindGeburtsdatum" type="date" placeholder="Geburtsdatum" />
        </Form.Group>

        <Form.Select id="gruppeId" aria-label="Default select example">
            <option>Gruppen</option>
            {
              gruppen.map((gruppe, index) => (
                <option key={index} value={gruppe.id}>{gruppe.gruppeName}</option>
              ))
            }
        </Form.Select>

        {/* ================================== */}

        <legend>Eltern Stammdaten</legend>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Vorname * </Form.Label>
            <Form.Control id="elternVorname" type="elternVorname" placeholder="Elternteil / Vormund *" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Nachname *</Form.Label>
            <Form.Control id="elternNachname" type="elternNachname" placeholder="Elternteil / Vormund *" />
          </Form.Group>
        </Row>
        
        <Row className='mb-3'>
          <Form.Group as={Col}>
            <Form.Label> Addresse </Form.Label>
            <Form.Control  id = "elternStrasseHausnr" type="elternStrasseHausnr" placeholder="Musterstrasse 69" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label> Postleitzahl </Form.Label>
            <Form.Control  id = "elternPlz" type="elternPlz" placeholder="Beispiel: 12345" />
          </Form.Group>
        </Row>

        <Row className='mb-3'> 
          <Form.Group as={Col}>
            <Form.Label>Telefonnummer</Form.Label>
            <Form.Control id = "elternTelefonnummer" type="elternPlz" placeholder="+49 (030) 0815" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>E-Mail</Form.Label>
            <Form.Control id = "elternEmail" type="elternEmail" placeholder="example@gmail.com" />
          </Form.Group>
        </Row>


        {/* <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <Form.Label>Addresse</Form.Label>
            <Form.Control  placeholder="Straße Hausnummer" />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
            <Form.Label>Addresse 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>
        </Row> 
        
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ort</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Bundesland</Form.Label>
            <Form.Control placeholder="Berlin" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>PLZ</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button onClick={daten} variant="primary m-auto" type="submit" refresh="true">
          Hinzufügen
        </Button>
      </fieldset>
    </Form>
  );
}

export default Formular;