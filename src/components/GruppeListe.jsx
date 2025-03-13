import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap';



export default function GruppeListe() {
    const [gruppen, setGruppen] = useState([]);
    useEffect(() => {
        loadGruppen();
    }, [])
    const loadGruppen = async() => {
        const result = await axios.get("http://localhost:8080/getAllGruppe");
        setGruppen(result.data);
    }

  return (
    <Row>
        {
            gruppen.map((gruppe, index) => (
                <Col key={index} sm={4} md={3} lg={3} className='my-2'>
                    <Card key = {gruppe.gruppeId} style={{ width: '10rem' }}>
                        <Card.Img variant="top" src="resources\eule.jpg" alt="Pups!" />
                        <Card.Body>
                            <Card.Title style={{fontSize: '15px', textAlign: 'center', fontWeight: 'bold'}}> {gruppe.gruppeName} </Card.Title>
                            { <Card.Text style={{fontSize: '10px', whiteSpace: 'pre-line', textAlign: 'center'}}>
                                {gruppe.gruppeGroesse} {'\n'}
                                {gruppe.gruppeLeiter} {'\n'}
                            
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
