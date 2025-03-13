import React from 'react'
import { Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Col } from 'react-bootstrap';


export default function MitarbeiterListe() {
  const [mitarbeiter, setMitarbeiter] = useState([]);
  useEffect(() => {
    loadMitarbeiter();
  }, [])
  const loadMitarbeiter = async() => {
    const result = await axios.get("http://localhost:8080/mitarbeiter/getAllMitarbeiter");
    setMitarbeiter(result.data);
    console.log(result.data);
  }

  return (
    <Row>
      {
        mitarbeiter.map((mitarbeiter, index) => (
          <Col key={index} sm={4} md={3} lg={3} className='my-2'>
            <Card key = {mitarbeiter.mitarbeiterId} style={{ width: '10rem' }}>
              <Card.Img variant="top" src="resources\mitarbeiter.jpg" alt="Psss!" />
              <Card.Body>
                <Card.Title style={{fontSize: '15px', textAlign: 'center', fontWeight: 'bold'}}> {mitarbeiter.mitarbeiterVorname} <br /> {mitarbeiter.mitarbeiterNachname} </Card.Title>
                { <Card.Text style={{fontSize: '10px', whiteSpace: 'pre-line', textAlign: 'center'}}>
                  
                  {mitarbeiter.mitarbeiterRolle} {'\n'}
                  {mitarbeiter.mitarbeiterEmail} {'\n'}
                  {mitarbeiter.mitarbeiterGeburtsdatum} {'\n'}
                  {mitarbeiter.mitarbeiterTelefonnummer} {'\n'}
                  {mitarbeiter.mitarbeiterStrasseHausnr} {'\n'}

                  {Object.entries(mitarbeiter.mitarbeiterPlz).map(([key, value], index) => 
                  JSON.stringify(value).replace(/"/g,'')) }  {'\n'}
                  {Object.entries(mitarbeiter.mitarbeiterStandort).map(([key, value], index) => 
                  JSON.stringify(value).replace(/"/g,'')) }  {'\n'} 
                  {Object.entries(mitarbeiter.mitarbeiterGruppe).map(([key, value], index) => 
                  JSON.stringify(value).replace(/"/g,'')) }  {'\n'} 
                 
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
