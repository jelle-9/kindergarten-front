import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample() {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="resources\images.jpg" alt="Upps!" />
      <Card.Body>
        <Card.Title style={{fontSize: '15px', textAlign: 'center', fontWeight: 'bold'}}> Evgeny Kvest </Card.Title>
        <Card.Text style={{fontSize: '10px', whiteSpace: 'pre-line', textAlign: 'center'}}>
            08.07.1994 {'\n'}
            Männlich {'\n'}
            Sesamstrasse 1{'\n'}
            12345 Berlin {'\n'}
            0176 12345678	
        </Card.Text>
        <Button style={{width: '10rem', height: '2rem', textAlign: 'center', margin: 'auto'}} >Bearbeiten</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;