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
  console.log(mitarbeiter);
  return (
    <Row>
      {
        mitarbeiter.map((mitarbeiter) => (
          <Col  sm={4} md={3} lg={3} className='my-2'>
            <Card key = {mitarbeiter.mitarbeiterId} style={{ width: '10rem' }}>
              <Card.Img variant="top" src="resources\mitarbeiter.jpg" alt="Psss!" />
              <Card.Body>
                <Card.Title style={{fontSize: '15px', textAlign: 'center', fontWeight: 'bold'}}> {mitarbeiter.mitarbeiterVorname} </Card.Title>
                { <Card.Text style={{fontSize: '10px', whiteSpace: 'pre-line', textAlign: 'center'}}>
                  {mitarbeiter.mitarbeiterVorname} {'\n'}
                  {mitarbeiter.mitarbeiterNachname} {'\n'}
                  {mitarbeiter.mitarbeiterRolle} {'\n'}
                  {mitarbeiter.mitarbeiterEmail} {'\n'}
                  {mitarbeiter.mitarbeiterGeburtsdatum} {'\n'}
                  {mitarbeiter.mitarbeiterTelefonnummer} {'\n'}
                  {mitarbeiter.mitarbeiterStrasseHausnr} {'\n'}
                  {mitarbeiter.mitarbeiterPlz} {'\n'}    
                  {mitarbeiter.mitarbeiterStandort} {'\n'}
                  {mitarbeiter.mitarbeiterGruppe} {'\n'}
                  
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
