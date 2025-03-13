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
  console.log(document.querySelector('#my-form'))

  const daten = (e) => {
      const vorname = document.getElementById("kindVorname").value
      const nachname = document.getElementById("kindNachname").value
      const besonderheiten = document.getElementById("kindBesonderheiten").value
      const geburtsdatum = document.getElementById("kindGeburtsdatum").value

     const result =  axios.post('http://localhost:8080/addKind', {
        kindVorname: vorname,
        kindNachname: nachname,
        besonderheiten: besonderheiten,
        kindGeburtsdatum: geburtsdatum,
        
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      console.log(result);
      console.log(geburtsdatum)      
      }
  

  return (
    <Form id='my-form'>
      <fieldset>
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

        <Button onClick={daten} variant="primary m-auto" type="submit">
          Hinzufügen
        </Button>
      </fieldset>
    </Form>
  );
}

export default Formular;