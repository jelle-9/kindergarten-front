import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';

export default function StandortListe() {
  const [standorte, setStandort] = useState([]);

  useEffect(() => {
    loadStandorte();
  }, [])

  const loadStandorte = async() => {
    const result = await axios.get("http://localhost:8080/standort");
    console.log(result.data);
    setStandort(result.data);
  }

  return (
    <Row>
        {
            standorte.map((standort, index) => (

                <Col key={index} sm={4} md={3} lg={3} className='my-2'>
                    <Card key = {standort.id} style={{ width: '10rem' }}>
                        <Card.Img variant="top" src="resources\images.jpg" alt="Upps!" />
                        <Card.Body>
                            <Card.Title style={{fontSize: '15px', textAlign: 'center', fontWeight: 'bold'}}> {standort.standortName} </Card.Title>
                            { <Card.Text style={{fontSize: '10px', whiteSpace: 'pre-line', textAlign: 'center'}}>
                              
                                {standort.standortTyp} {'\n'}
                                {standort.standortStrasseHausnr}
                            
                            </Card.Text> }
                            <Button style={{width: '7rem', height: '2rem', textAlign: 'center'}} >Bearbeiten</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))
        }

    </Row>
  )
}
