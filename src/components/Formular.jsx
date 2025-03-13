import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Formular() {
  return (
    <Form>
      <fieldset>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Vorname des Kindes</Form.Label>
            <Form.Control type="vorname" placeholder="Vorname *" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Nachname des Kindes</Form.Label>
            <Form.Control type="nachname" placeholder="Nachname *" />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Besonderheiten</Form.Label>
            <Form.Control rows={3} as="textarea" type="besonderheiten" placeholder="Besonderheiten" />
          </Form.Group>



        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <Form.Label>Addresse</Form.Label>
            <Form.Control placeholder="Straße Hausnummer" />
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
        </Form.Group>

        <Button variant="primary m-auto" type="submit">
          Hinzufügen
        </Button>
      </fieldset>
    </Form>
  );
}

export default Formular;