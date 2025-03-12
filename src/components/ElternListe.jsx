import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';

export default function ElternListe() {
  const [eltern, setEltern] = useState([]);
  useEffect(() => {
    loadEltern();
  }, []);

  const loadEltern = async() => {
    const result = await axios.get("http://localhost:8080/eltern/getAllEltern");
    setEltern(result.data);
    console.log(eltern);
  };
return (
  <Row>
    {
        eltern.map((eltern) => (

          <Col  sm={4} md={3} lg={3} className='my-2'>
              <Card key = {eltern.elternId} style={{ width: '10rem' }}>
                  <Card.Img variant="top" src="resources\images.jpg" alt="Upps!" />
                  <Card.Body>
                      <Card.Title style={{fontSize: '15px', textAlign: 'center', fontWeight: 'bold'}}> {eltern.elternVorname} <br/> {eltern.elternNachname} </Card.Title>
                      
                      { <Card.Text style={{fontSize: '10px', whiteSpace: 'pre-line', textAlign: 'center'}}>
                        
                          {eltern.elternStrasseHausnr} {'\n'}
                          {eltern.elternPlz} {'\n'}
                          {eltern.elternTelefonnummer} {'\n'}
                          {eltern.elternEmail} {'\n'}
                      
                      </Card.Text> }

                      <Button style={{width: '7rem', height: '2rem', textAlign: 'center'}}> Bearbeiten </Button>

                  </Card.Body>
              </Card>
          </Col>
        ))
    }
  </Row> 
);
}